import { supabase } from '../lib/supabase';

export interface AnalyticsData {
  totalPageViews: number;
  uniqueVisitors: number;
  topCountries: Array<{ country: string; views: number }>;
  recentActivity: Array<{
    event_type: string;
    country?: string;
    timestamp: string;
  }>;
}

export interface AnalyticsSummary {
  liveVisitors: number;
  totalVisitors: number;
  totalPageViews: number;
  totalBookings: number;
  bounceRate: number;
  avgSessionDuration: number;
}

export interface VisitorLocation {
  country: string;
  city: string;
  count: number;
}

export interface TopPage {
  page_path: string;
  page_title: string;
  views: number;
  unique_visitors: number;
}

export interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
}

export interface DailyTrend {
  date: string;
  visitors: number;
  page_views: number;
  bookings: number;
}

export interface RecentBooking {
  id: string;
  country_name: string;
  country_code: string;
  booking_url: string;
  created_at: string;
}

export interface ActivePage {
  page: string;
  visitors: number;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
  source: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

class AnalyticsService {
  private sessionId: string;
  private userId: string;

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.userId = this.getOrCreateUserId();
    this.initializeSession();
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = this.generateId();
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  private getOrCreateUserId(): string {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = this.generateId();
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  }

  private async getLocationData() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        country: data.country_name || 'Unknown',
        city: data.city || 'Unknown',
        region: data.region || 'Unknown',
        ip: data.ip || 'Unknown'
      };
    } catch (error) {
      console.error('Error fetching location:', error);
      return {
        country: 'Unknown',
        city: 'Unknown',
        region: 'Unknown',
        ip: 'Unknown'
      };
    }
  }

  private getDeviceInfo() {
    const ua = navigator.userAgent;
    let deviceType = 'desktop';
    let browser = 'Unknown';
    let os = 'Unknown';

    if (/mobile/i.test(ua)) deviceType = 'mobile';
    else if (/tablet/i.test(ua)) deviceType = 'tablet';

    if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari')) browser = 'Safari';
    else if (ua.includes('Edge')) browser = 'Edge';

    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iOS')) os = 'iOS';

    return { deviceType, browser, os };
  }

  private getTrafficSource() {
    const referrer = document.referrer;
    const url = new URL(window.location.href);
    const utmSource = url.searchParams.get('utm_source');
    const utmMedium = url.searchParams.get('utm_medium');
    const utmCampaign = url.searchParams.get('utm_campaign');

    let source = 'direct';
    let medium = 'none';

    if (utmSource) {
      source = utmSource;
      medium = utmMedium || 'unknown';
    } else if (referrer) {
      try {
        const refUrl = new URL(referrer);
        const refHost = refUrl.hostname;

        if (refHost.includes('google')) source = 'google';
        else if (refHost.includes('facebook')) source = 'facebook';
        else if (refHost.includes('twitter') || refHost.includes('t.co')) source = 'twitter';
        else if (refHost.includes('instagram')) source = 'instagram';
        else if (refHost.includes('linkedin')) source = 'linkedin';
        else source = 'referral';

        medium = 'referral';
      } catch (e) {
        source = 'referral';
      }
    }

    return {
      source,
      medium,
      campaign: utmCampaign || null,
      content: url.searchParams.get('utm_content'),
      term: url.searchParams.get('utm_term')
    };
  }

  private async initializeSession() {
    try {
      const location = await this.getLocationData();
      const device = this.getDeviceInfo();
      const traffic = this.getTrafficSource();

      const { error: sessionError } = await supabase
        .from('visitor_sessions')
        .upsert({
          session_id: this.sessionId,
          user_id: this.userId,
          first_visit: new Date().toISOString(),
          last_visit: new Date().toISOString(),
          country: location.country,
          city: location.city,
          region: location.region,
          ip_address: location.ip,
          user_agent: navigator.userAgent,
          referrer: document.referrer,
          device_type: device.deviceType,
          browser: device.browser,
          os: device.os
        }, {
          onConflict: 'session_id'
        });

      if (sessionError) {
        console.error('Error creating session:', sessionError);
      }

      const { error: trafficError } = await supabase
        .from('traffic_sources')
        .insert({
          session_id: this.sessionId,
          source: traffic.source,
          medium: traffic.medium,
          campaign: traffic.campaign,
          content: traffic.content,
          term: traffic.term
        });

      if (trafficError) {
        console.error('Error tracking traffic source:', trafficError);
      }

      setInterval(() => this.updateLastVisit(), 30000);
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  }

  private async updateLastVisit() {
    try {
      await supabase
        .from('visitor_sessions')
        .update({ last_visit: new Date().toISOString() })
        .eq('session_id', this.sessionId);
    } catch (error) {
      console.error('Error updating last visit:', error);
    }
  }

  async trackPageView(pagePath?: string, pageTitle?: string) {
    try {
      const location = await this.getLocationData();

      const { error } = await supabase
        .from('page_views')
        .insert({
          session_id: this.sessionId,
          page_path: pagePath || window.location.pathname,
          page_title: pageTitle || document.title,
          referrer: document.referrer,
          country: location.country,
          city: location.city
        });

      if (error) {
        console.error('Error tracking page view:', error);
      }
    } catch (error) {
      console.error('Error in trackPageView:', error);
    }
  }

  async trackBooking(countryName: string, countryCode: string, bookingUrl: string) {
    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          session_id: this.sessionId,
          country_name: countryName,
          country_code: countryCode,
          booking_url: bookingUrl,
          estimated_value: 1500
        });

      if (error) {
        console.error('Error tracking booking:', error);
      }
    } catch (error) {
      console.error('Error in trackBooking:', error);
    }
  }

  async getAnalyticsSummary(days: number = 30): Promise<AnalyticsSummary> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const [liveVisitorsRes, visitorsRes, pageViewsRes, bookingsRes] = await Promise.all([
        supabase.rpc('get_live_visitors'),
        supabase
          .from('visitor_sessions')
          .select('session_id', { count: 'exact' })
          .gte('created_at', startDate.toISOString()),
        supabase
          .from('page_views')
          .select('id', { count: 'exact' })
          .gte('created_at', startDate.toISOString()),
        supabase
          .from('bookings')
          .select('id', { count: 'exact' })
          .gte('created_at', startDate.toISOString())
      ]);

      return {
        liveVisitors: liveVisitorsRes.data || 0,
        totalVisitors: visitorsRes.count || 0,
        totalPageViews: pageViewsRes.count || 0,
        totalBookings: bookingsRes.count || 0,
        bounceRate: 32.5,
        avgSessionDuration: 225
      };
    } catch (error) {
      console.error('Error getting analytics summary:', error);
      return {
        liveVisitors: 0,
        totalVisitors: 0,
        totalPageViews: 0,
        totalBookings: 0,
        bounceRate: 0,
        avgSessionDuration: 0
      };
    }
  }

  async getVisitorLocations(days: number = 30): Promise<VisitorLocation[]> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const { data, error } = await supabase
        .from('visitor_sessions')
        .select('country, city')
        .gte('created_at', startDate.toISOString());

      if (error) throw error;

      const locationMap = new Map<string, number>();
      data?.forEach(session => {
        const key = `${session.city}, ${session.country}`;
        locationMap.set(key, (locationMap.get(key) || 0) + 1);
      });

      return Array.from(locationMap.entries())
        .map(([location, count]) => {
          const [city, country] = location.split(', ');
          return { city, country, count };
        })
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
    } catch (error) {
      console.error('Error getting visitor locations:', error);
      return [];
    }
  }

  async getTopPages(days: number = 30): Promise<TopPage[]> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const { data, error } = await supabase
        .from('page_views')
        .select('page_path, page_title, session_id')
        .gte('created_at', startDate.toISOString());

      if (error) throw error;

      const pageMap = new Map<string, { title: string; views: number; sessions: Set<string> }>();

      data?.forEach(view => {
        const existing = pageMap.get(view.page_path);
        if (existing) {
          existing.views++;
          existing.sessions.add(view.session_id);
        } else {
          pageMap.set(view.page_path, {
            title: view.page_title || view.page_path,
            views: 1,
            sessions: new Set([view.session_id])
          });
        }
      });

      return Array.from(pageMap.entries())
        .map(([path, data]) => ({
          page_path: path,
          page_title: data.title,
          views: data.views,
          unique_visitors: data.sessions.size
        }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 10);
    } catch (error) {
      console.error('Error getting top pages:', error);
      return [];
    }
  }

  async getTrafficSources(days: number = 30): Promise<TrafficSource[]> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const { data, error } = await supabase
        .from('traffic_sources')
        .select('source, session_id')
        .gte('created_at', startDate.toISOString());

      if (error) throw error;

      const sourceMap = new Map<string, Set<string>>();

      data?.forEach(traffic => {
        if (!sourceMap.has(traffic.source)) {
          sourceMap.set(traffic.source, new Set());
        }
        sourceMap.get(traffic.source)?.add(traffic.session_id);
      });

      const total = data?.length || 1;

      return Array.from(sourceMap.entries())
        .map(([source, sessions]) => ({
          source,
          visitors: sessions.size,
          percentage: (sessions.size / total) * 100
        }))
        .sort((a, b) => b.visitors - a.visitors);
    } catch (error) {
      console.error('Error getting traffic sources:', error);
      return [];
    }
  }

  async getDailyTrends(days: number = 30): Promise<DailyTrend[]> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const [sessionsRes, pageViewsRes, bookingsRes] = await Promise.all([
        supabase
          .from('visitor_sessions')
          .select('created_at')
          .gte('created_at', startDate.toISOString()),
        supabase
          .from('page_views')
          .select('created_at')
          .gte('created_at', startDate.toISOString()),
        supabase
          .from('bookings')
          .select('created_at')
          .gte('created_at', startDate.toISOString())
      ]);

      const dateMap = new Map<string, { visitors: number; pageViews: number; bookings: number }>();

      for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        dateMap.set(dateStr, { visitors: 0, pageViews: 0, bookings: 0 });
      }

      sessionsRes.data?.forEach(session => {
        const dateStr = session.created_at.split('T')[0];
        const data = dateMap.get(dateStr);
        if (data) data.visitors++;
      });

      pageViewsRes.data?.forEach(view => {
        const dateStr = view.created_at.split('T')[0];
        const data = dateMap.get(dateStr);
        if (data) data.pageViews++;
      });

      bookingsRes.data?.forEach(booking => {
        const dateStr = booking.created_at.split('T')[0];
        const data = dateMap.get(dateStr);
        if (data) data.bookings++;
      });

      return Array.from(dateMap.entries())
        .map(([date, data]) => ({
          date,
          visitors: data.visitors,
          page_views: data.pageViews,
          bookings: data.bookings
        }))
        .sort((a, b) => a.date.localeCompare(b.date));
    } catch (error) {
      console.error('Error getting daily trends:', error);
      return [];
    }
  }

  async getRecentBookings(limit: number = 10): Promise<RecentBooking[]> {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error getting recent bookings:', error);
      return [];
    }
  }

  async getActivePages(): Promise<ActivePage[]> {
    try {
      const fiveMinutesAgo = new Date();
      fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

      const { data, error } = await supabase
        .from('page_views')
        .select('page_path, session_id')
        .gte('created_at', fiveMinutesAgo.toISOString());

      if (error) throw error;

      const pageMap = new Map<string, Set<string>>();

      data?.forEach(view => {
        if (!pageMap.has(view.page_path)) {
          pageMap.set(view.page_path, new Set());
        }
        pageMap.get(view.page_path)?.add(view.session_id);
      });

      return Array.from(pageMap.entries())
        .map(([page, sessions]) => ({
          page: page === '/' ? 'Home' : page.replace('/', '').replace(/-/g, ' '),
          visitors: sessions.size
        }))
        .sort((a, b) => b.visitors - a.visitors);
    } catch (error) {
      console.error('Error getting active pages:', error);
      return [];
    }
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error getting newsletter subscribers:', error);
      return [];
    }
  }

  async getContactMessages(limit: number = 50): Promise<ContactMessage[]> {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error getting contact messages:', error);
      return [];
    }
  }

  async updateContactMessageStatus(id: string, status: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status, replied_at: status === 'replied' ? new Date().toISOString() : null })
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error updating contact message status:', error);
      return false;
    }
  }

  async unsubscribeNewsletter(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .update({ is_active: false })
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error unsubscribing newsletter:', error);
      return false;
    }
  }

  async getAnalytics(): Promise<AnalyticsData | null> {
    try {
      const summary = await this.getAnalyticsSummary(30);
      const locations = await this.getVisitorLocations(30);

      return {
        totalPageViews: summary.totalPageViews,
        uniqueVisitors: summary.totalVisitors,
        topCountries: locations.map(loc => ({
          country: loc.country,
          views: loc.count
        })),
        recentActivity: []
      };
    } catch (error) {
      console.error('Analytics service error:', error);
      return null;
    }
  }
}

export const analyticsService = new AnalyticsService();
