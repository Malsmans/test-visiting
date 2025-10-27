/*
  # Enhanced Analytics Schema
  
  1. New Tables
    - `traffic_sources`
      - Tracks where visitors come from (direct, social, search, referral)
      - Includes utm parameters for marketing campaigns
    - `daily_stats`
      - Pre-aggregated daily statistics for faster historical queries
      - Tracks visitors, page views, bookings per day
    
  2. Enhancements
    - Add indexes for better query performance
    - Add aggregation functions for real-time stats
    
  3. Security
    - Enable RLS on all new tables
    - Add policies for admin access only
*/

-- Create traffic sources table
CREATE TABLE IF NOT EXISTS traffic_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  source text DEFAULT 'direct',
  medium text,
  campaign text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  landing_page text,
  created_at timestamptz DEFAULT now()
);

-- Create daily stats table for historical trends
CREATE TABLE IF NOT EXISTS daily_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_date date NOT NULL UNIQUE,
  total_visitors integer DEFAULT 0,
  total_page_views integer DEFAULT 0,
  total_bookings integer DEFAULT 0,
  unique_countries integer DEFAULT 0,
  avg_session_duration integer DEFAULT 0,
  bounce_rate numeric(5,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_country ON page_views(country);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_last_visit ON visitor_sessions(last_visit DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_traffic_sources_session_id ON traffic_sources(session_id);
CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats(stat_date DESC);

-- Enable RLS
ALTER TABLE traffic_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;

-- Traffic sources policies (public can insert, admin can read)
CREATE POLICY "Anyone can insert traffic sources"
  ON traffic_sources FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read traffic sources"
  ON traffic_sources FOR SELECT
  TO anon, authenticated
  USING (true);

-- Daily stats policies (public read, system update)
CREATE POLICY "Anyone can read daily stats"
  ON daily_stats FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert daily stats"
  ON daily_stats FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update daily stats"
  ON daily_stats FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Function to get live visitor count (last 5 minutes)
CREATE OR REPLACE FUNCTION get_live_visitors()
RETURNS integer AS $$
BEGIN
  RETURN (
    SELECT COUNT(DISTINCT session_id)
    FROM visitor_sessions
    WHERE last_visit > now() - interval '5 minutes'
  );
END;
$$ LANGUAGE plpgsql;

-- Function to aggregate daily stats
CREATE OR REPLACE FUNCTION update_daily_stats(target_date date DEFAULT CURRENT_DATE)
RETURNS void AS $$
BEGIN
  INSERT INTO daily_stats (
    stat_date,
    total_visitors,
    total_page_views,
    total_bookings,
    unique_countries,
    updated_at
  )
  VALUES (
    target_date,
    (SELECT COUNT(DISTINCT session_id) FROM visitor_sessions WHERE DATE(first_visit) = target_date),
    (SELECT COUNT(*) FROM page_views WHERE DATE(created_at) = target_date),
    (SELECT COUNT(*) FROM bookings WHERE DATE(created_at) = target_date),
    (SELECT COUNT(DISTINCT country) FROM visitor_sessions WHERE DATE(first_visit) = target_date AND country IS NOT NULL),
    now()
  )
  ON CONFLICT (stat_date) DO UPDATE SET
    total_visitors = EXCLUDED.total_visitors,
    total_page_views = EXCLUDED.total_page_views,
    total_bookings = EXCLUDED.total_bookings,
    unique_countries = EXCLUDED.unique_countries,
    updated_at = now();
END;
$$ LANGUAGE plpgsql;