import { supabase } from '../lib/supabase';

// Generate or retrieve session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

// Get device type
const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return 'Mobile';
  if (/tablet|ipad/i.test(ua)) return 'Tablet';
  return 'Desktop';
};

// Track page view
export const trackPageView = async (pagePath: string, pageTitle: string) => {
  try {
    const sessionId = getSessionId();

    await supabase.from('page_views').insert({
      session_id: sessionId,
      page_path: pagePath,
      page_title: pageTitle,
      referrer: document.referrer || 'direct',
      user_agent: navigator.userAgent,
    });

    // Update or create visitor session
    const { data: existingSession } = await supabase
      .from('visitor_sessions')
      .select('*')
      .eq('session_id', sessionId)
      .single();

    if (existingSession) {
      await supabase
        .from('visitor_sessions')
        .update({
          last_visit: new Date().toISOString(),
          page_count: (existingSession.page_count || 0) + 1,
        })
        .eq('session_id', sessionId);
    } else {
      await supabase.from('visitor_sessions').insert({
        session_id: sessionId,
        device_type: getDeviceType(),
        page_count: 1,
      });
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Track country view
export const trackCountryView = async (countryName: string) => {
  try {
    const sessionId = getSessionId();
    const startTime = Date.now();

    // Store start time for duration calculation
    sessionStorage.setItem(`country_start_${countryName}`, startTime.toString());

    await supabase.from('country_views').insert({
      session_id: sessionId,
      country_name: countryName,
      duration: 0,
    });
  } catch (error) {
    console.error('Error tracking country view:', error);
  }
};

// Update country view duration when leaving
export const updateCountryDuration = async (countryName: string) => {
  try {
    const startTime = sessionStorage.getItem(`country_start_${countryName}`);
    if (!startTime) return;

    const duration = Math.floor((Date.now() - parseInt(startTime)) / 1000); // in seconds
    const sessionId = getSessionId();

    // Get the most recent country view for this session
    const { data: recentView } = await supabase
      .from('country_views')
      .select('id')
      .eq('session_id', sessionId)
      .eq('country_name', countryName)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (recentView) {
      await supabase
        .from('country_views')
        .update({ duration })
        .eq('id', recentView.id);
    }

    sessionStorage.removeItem(`country_start_${countryName}`);
  } catch (error) {
    console.error('Error updating country duration:', error);
  }
};

// Track booking click
export const trackBooking = async (
  countryName: string,
  transportType: string,
  bookingUrl: string
) => {
  try {
    const sessionId = getSessionId();

    await supabase.from('bookings').insert({
      session_id: sessionId,
      country_name: countryName,
      transport_type: transportType,
      booking_url: bookingUrl,
    });
  } catch (error) {
    console.error('Error tracking booking:', error);
  }
};

// Get analytics data for admin dashboard
export const getAnalyticsData = async (days: number = 30) => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get page views
    const { data: pageViews } = await supabase
      .from('page_views')
      .select('*')
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false });

    // Get country views
    const { data: countryViews } = await supabase
      .from('country_views')
      .select('*')
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false });

    // Get bookings
    const { data: bookings } = await supabase
      .from('bookings')
      .select('*')
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false });

    // Get visitor sessions
    const { data: sessions } = await supabase
      .from('visitor_sessions')
      .select('*')
      .gte('first_visit', startDate.toISOString())
      .order('first_visit', { ascending: false });

    return {
      pageViews: pageViews || [],
      countryViews: countryViews || [],
      bookings: bookings || [],
      sessions: sessions || [],
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return {
      pageViews: [],
      countryViews: [],
      bookings: [],
      sessions: [],
    };
  }
};

// Subscribe to real-time updates
export const subscribeToAnalytics = (callback: (payload: any) => void) => {
  const pageViewsChannel = supabase
    .channel('page_views_changes')
    .on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'page_views' },
      callback
    )
    .subscribe();

  const bookingsChannel = supabase
    .channel('bookings_changes')
    .on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'bookings' },
      callback
    )
    .subscribe();

  const sessionsChannel = supabase
    .channel('sessions_changes')
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'visitor_sessions' },
      callback
    )
    .subscribe();

  return () => {
    pageViewsChannel.unsubscribe();
    bookingsChannel.unsubscribe();
    sessionsChannel.unsubscribe();
  };
};
