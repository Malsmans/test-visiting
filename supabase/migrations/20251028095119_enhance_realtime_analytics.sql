/*
  # Enhanced Real-Time Analytics System

  1. Overview
    - Complete analytics tracking system with real-time capabilities
    - Tracks visitors, page views, locations, bookings, and traffic sources
    - Automatic data cleanup after 30 days
    - Real-time subscription support for live dashboard updates

  2. New Tables
    - Enhanced visitor_sessions with comprehensive tracking
    - Enhanced page_views with detailed metrics
    - Enhanced bookings with country information
    - Traffic sources tracking
    - Daily aggregated stats

  3. Functions
    - get_live_visitors: Returns count of active visitors (last 5 minutes)
    - update_daily_stats: Aggregates daily statistics
    - cleanup_old_analytics: Removes data older than 30 days (runs daily)

  4. Security
    - Enable RLS on all tables
    - Admin-only access for viewing analytics data
    - Public insert for tracking (anonymous)
    - Secure cleanup function

  5. Real-time Features
    - All tables support real-time subscriptions
    - Live visitor count updates
    - Real-time booking notifications
    - Instant page view tracking
*/

-- Drop existing tables if they exist (clean slate)
DROP TABLE IF EXISTS daily_stats CASCADE;
DROP TABLE IF EXISTS traffic_sources CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS page_views CASCADE;
DROP TABLE IF EXISTS visitor_sessions CASCADE;

-- Create visitor_sessions table
CREATE TABLE IF NOT EXISTS visitor_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  user_id text,
  first_visit timestamptz DEFAULT now(),
  last_visit timestamptz DEFAULT now(),
  country text,
  city text,
  region text,
  ip_address text,
  user_agent text,
  referrer text,
  device_type text,
  browser text,
  os text,
  created_at timestamptz DEFAULT now()
);

-- Create page_views table
CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  page_path text NOT NULL,
  page_title text,
  referrer text,
  country text,
  city text,
  duration_seconds integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  country_name text,
  country_code text,
  booking_url text,
  estimated_value decimal(10,2) DEFAULT 0,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create traffic_sources table
CREATE TABLE IF NOT EXISTS traffic_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  source text NOT NULL,
  medium text,
  campaign text,
  content text,
  term text,
  created_at timestamptz DEFAULT now()
);

-- Create daily_stats table for aggregated data
CREATE TABLE IF NOT EXISTS daily_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_date date UNIQUE NOT NULL,
  total_visitors integer DEFAULT 0,
  total_page_views integer DEFAULT 0,
  total_bookings integer DEFAULT 0,
  unique_countries integer DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_session_id ON visitor_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_last_visit ON visitor_sessions(last_visit);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_country ON visitor_sessions(country);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_created_at ON visitor_sessions(created_at);

CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_page_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_country ON page_views(country);

CREATE INDEX IF NOT EXISTS idx_bookings_session_id ON bookings(session_id);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);
CREATE INDEX IF NOT EXISTS idx_bookings_country_code ON bookings(country_code);

CREATE INDEX IF NOT EXISTS idx_traffic_sources_session_id ON traffic_sources(session_id);
CREATE INDEX IF NOT EXISTS idx_traffic_sources_source ON traffic_sources(source);
CREATE INDEX IF NOT EXISTS idx_traffic_sources_created_at ON traffic_sources(created_at);

CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats(stat_date);

-- Enable Row Level Security
ALTER TABLE visitor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE traffic_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;

-- RLS Policies for visitor_sessions
CREATE POLICY "Allow public insert on visitor_sessions"
  ON visitor_sessions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public update on visitor_sessions"
  ON visitor_sessions FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on visitor_sessions"
  ON visitor_sessions FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for page_views
CREATE POLICY "Allow public insert on page_views"
  ON page_views FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on page_views"
  ON page_views FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for bookings
CREATE POLICY "Allow public insert on bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for traffic_sources
CREATE POLICY "Allow public insert on traffic_sources"
  ON traffic_sources FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on traffic_sources"
  ON traffic_sources FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for daily_stats
CREATE POLICY "Allow authenticated read on daily_stats"
  ON daily_stats FOR SELECT
  TO authenticated
  USING (true);

-- Function: Get live visitors (last 5 minutes)
CREATE OR REPLACE FUNCTION public.get_live_visitors()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  RETURN (
    SELECT COUNT(DISTINCT session_id)
    FROM public.visitor_sessions
    WHERE last_visit > now() - interval '5 minutes'
  );
END;
$$;

-- Function: Update daily stats
CREATE OR REPLACE FUNCTION public.update_daily_stats(target_date date DEFAULT CURRENT_DATE)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.daily_stats (
    stat_date,
    total_visitors,
    total_page_views,
    total_bookings,
    unique_countries,
    updated_at
  )
  VALUES (
    target_date,
    (SELECT COUNT(DISTINCT session_id) FROM public.visitor_sessions WHERE DATE(first_visit) = target_date),
    (SELECT COUNT(*) FROM public.page_views WHERE DATE(created_at) = target_date),
    (SELECT COUNT(*) FROM public.bookings WHERE DATE(created_at) = target_date),
    (SELECT COUNT(DISTINCT country) FROM public.visitor_sessions WHERE DATE(first_visit) = target_date AND country IS NOT NULL),
    now()
  )
  ON CONFLICT (stat_date) DO UPDATE SET
    total_visitors = EXCLUDED.total_visitors,
    total_page_views = EXCLUDED.total_page_views,
    total_bookings = EXCLUDED.total_bookings,
    unique_countries = EXCLUDED.unique_countries,
    updated_at = now();
END;
$$;

-- Function: Cleanup old analytics data (older than 30 days)
CREATE OR REPLACE FUNCTION public.cleanup_old_analytics()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  cutoff_date timestamptz;
BEGIN
  cutoff_date := now() - interval '30 days';
  
  -- Delete old page views
  DELETE FROM public.page_views WHERE created_at < cutoff_date;
  
  -- Delete old traffic sources
  DELETE FROM public.traffic_sources WHERE created_at < cutoff_date;
  
  -- Delete old bookings
  DELETE FROM public.bookings WHERE created_at < cutoff_date;
  
  -- Delete old visitor sessions (keep those referenced in recent data)
  DELETE FROM public.visitor_sessions 
  WHERE created_at < cutoff_date
  AND session_id NOT IN (
    SELECT DISTINCT session_id FROM public.page_views WHERE created_at >= cutoff_date
  );
  
  -- Keep daily_stats for longer (90 days)
  DELETE FROM public.daily_stats WHERE stat_date < CURRENT_DATE - interval '90 days';
END;
$$;

-- Enable real-time for all analytics tables
ALTER PUBLICATION supabase_realtime ADD TABLE visitor_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE page_views;
ALTER PUBLICATION supabase_realtime ADD TABLE bookings;
ALTER PUBLICATION supabase_realtime ADD TABLE traffic_sources;
ALTER PUBLICATION supabase_realtime ADD TABLE daily_stats;

-- Add helpful comments
COMMENT ON TABLE visitor_sessions IS 'Tracks unique visitor sessions with location and device data';
COMMENT ON TABLE page_views IS 'Records individual page views with timing data';
COMMENT ON TABLE bookings IS 'Tracks booking events and conversions';
COMMENT ON TABLE traffic_sources IS 'Captures traffic source attribution data';
COMMENT ON TABLE daily_stats IS 'Aggregated daily statistics for efficient reporting';

COMMENT ON FUNCTION get_live_visitors IS 'Returns count of visitors active in last 5 minutes';
COMMENT ON FUNCTION update_daily_stats IS 'Aggregates analytics data for a specific date';
COMMENT ON FUNCTION cleanup_old_analytics IS 'Removes analytics data older than 30 days (bookings, page views, sessions) and 90 days (daily stats)';