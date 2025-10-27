import { supabase } from '../lib/supabase';

export interface AnalyticsData {
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
  lat?: number;
  lng?: number;
}

export interface PageStats {
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
  pageViews: number;
  bookings: number;
}

export const analyticsService = {
  async getLiveVisitors(): Promise<number> {
    const { data, error } = await supabase.rpc('get_live_visitors');
    if (error) {
      console.error('Error fetching live visitors:', error);
      return 0;
    }
    return data || 0;
  },

  async getAnalyticsSummary(days: number = 30): Promise<AnalyticsData> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const [visitorsResult, pageViewsResult, bookingsResult] = await Promise.all([
      supabase
        .from('visitor_sessions')
        .select('session_id', { count: 'exact' })
        .gte('first_visit', startDate.toISOString()),
      supabase
        .from('page_views')
        .select('*', { count: 'exact' })
        .gte('created_at', startDate.toISOString()),
      supabase
        .from('bookings')
        .select('*', { count: 'exact' })
        .gte('created_at', startDate.toISOString()),
    ]);

    const totalVisitors = visitorsResult.count || 0;
    const totalPageViews = pageViewsResult.count || 0;
    const totalBookings = bookingsResult.count || 0;

    const bounceRate = totalVisitors > 0 ? ((totalVisitors - (totalPageViews - totalVisitors)) / totalVisitors) * 100 : 0;

    return {
      liveVisitors: await this.getLiveVisitors(),
      totalVisitors,
      totalPageViews,
      totalBookings,
      bounceRate: Math.max(0, Math.min(100, bounceRate)),
      avgSessionDuration: 0,
    };
  },

  async getVisitorLocations(days: number = 30): Promise<VisitorLocation[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const { data, error } = await supabase
      .from('visitor_sessions')
      .select('country, city')
      .gte('first_visit', startDate.toISOString());

    if (error || !data) {
      console.error('Error fetching visitor locations:', error);
      return [];
    }

    const locationMap = new Map<string, VisitorLocation>();

    data.forEach((item) => {
      const country = item.country || 'Unknown';
      const city = item.city || 'Unknown';
      const key = `${country}-${city}`;

      if (locationMap.has(key)) {
        locationMap.get(key)!.count++;
      } else {
        locationMap.set(key, { country, city, count: 1 });
      }
    });

    return Array.from(locationMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  },

  async getTopPages(days: number = 30): Promise<PageStats[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const { data, error } = await supabase
      .from('page_views')
      .select('page_path, page_title, session_id')
      .gte('created_at', startDate.toISOString());

    if (error || !data) {
      console.error('Error fetching top pages:', error);
      return [];
    }

    const pageMap = new Map<string, { title: string; sessions: Set<string>; views: number }>();

    data.forEach((item) => {
      const path = item.page_path;
      if (pageMap.has(path)) {
        const page = pageMap.get(path)!;
        page.views++;
        page.sessions.add(item.session_id);
      } else {
        pageMap.set(path, {
          title: item.page_title || path,
          views: 1,
          sessions: new Set([item.session_id])
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
  },

  async getTrafficSources(days: number = 30): Promise<TrafficSource[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const { data, error } = await supabase
      .from('traffic_sources')
      .select('source, session_id')
      .gte('created_at', startDate.toISOString());

    if (error || !data) {
      console.error('Error fetching traffic sources:', error);
      return [];
    }

    const sourceMap = new Map<string, Set<string>>();

    data.forEach((item) => {
      const source = item.source || 'direct';
      if (sourceMap.has(source)) {
        sourceMap.get(source)!.add(item.session_id);
      } else {
        sourceMap.set(source, new Set([item.session_id]));
      }
    });

    const total = Array.from(sourceMap.values()).reduce((sum, sessions) => sum + sessions.size, 0);

    return Array.from(sourceMap.entries())
      .map(([source, sessions]) => ({
        source,
        visitors: sessions.size,
        percentage: total > 0 ? (sessions.size / total) * 100 : 0
      }))
      .sort((a, b) => b.visitors - a.visitors);
  },

  async getDailyTrends(days: number = 30): Promise<DailyTrend[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const { data, error } = await supabase
      .from('daily_stats')
      .select('stat_date, total_visitors, total_page_views, total_bookings')
      .gte('stat_date', startDate.toISOString().split('T')[0])
      .order('stat_date', { ascending: true });

    if (error) {
      console.error('Error fetching daily trends:', error);
      return [];
    }

    return (data || []).map(item => ({
      date: item.stat_date,
      visitors: item.total_visitors,
      pageViews: item.total_page_views,
      bookings: item.total_bookings
    }));
  },

  async getRecentBookings(limit: number = 10) {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching recent bookings:', error);
      return [];
    }

    return data || [];
  },

  async getActivePages(): Promise<Array<{ page: string; visitors: number }>> {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();

    const { data, error } = await supabase
      .from('page_views')
      .select('page_path, session_id')
      .gte('created_at', fiveMinutesAgo);

    if (error || !data) {
      console.error('Error fetching active pages:', error);
      return [];
    }

    const pageMap = new Map<string, Set<string>>();

    data.forEach((item) => {
      const page = item.page_path;
      if (pageMap.has(page)) {
        pageMap.get(page)!.add(item.session_id);
      } else {
        pageMap.set(page, new Set([item.session_id]));
      }
    });

    return Array.from(pageMap.entries())
      .map(([page, sessions]) => ({
        page,
        visitors: sessions.size
      }))
      .sort((a, b) => b.visitors - a.visitors);
  }
};
