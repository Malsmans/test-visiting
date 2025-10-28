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

class AnalyticsService {
  async getAnalytics(): Promise<AnalyticsData | null> {
    try {
      const { data: events, error } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) {
        console.error('Error fetching analytics:', error);
        return null;
      }

      const totalPageViews = events?.length || 0;
      const uniqueVisitors = new Set(events?.map(e => e.user_id || e.session_id)).size;

      const countryViews = events
        ?.filter(e => e.event_type === 'country_view' && e.metadata?.country)
        .reduce((acc: Record<string, number>, event) => {
          const country = event.metadata.country;
          acc[country] = (acc[country] || 0) + 1;
          return acc;
        }, {});

      const topCountries = Object.entries(countryViews || {})
        .map(([country, views]) => ({ country, views: views as number }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      const recentActivity = events?.slice(0, 10).map(e => ({
        event_type: e.event_type,
        country: e.metadata?.country,
        timestamp: e.created_at
      })) || [];

      return {
        totalPageViews,
        uniqueVisitors,
        topCountries,
        recentActivity
      };
    } catch (error) {
      console.error('Analytics service error:', error);
      return null;
    }
  }
}

export const analyticsService = new AnalyticsService();
