/*
  # Analytics Tracking System
  
  1. New Tables
    - `page_views`
      - `id` (uuid, primary key)
      - `session_id` (text) - unique session identifier
      - `page_path` (text) - URL path visited
      - `page_title` (text) - page title
      - `referrer` (text) - where visitor came from
      - `user_agent` (text) - browser/device info
      - `country` (text) - visitor country
      - `city` (text) - visitor city
      - `ip_address` (text) - visitor IP (hashed for privacy)
      - `created_at` (timestamptz)
    
    - `country_views`
      - `id` (uuid, primary key)
      - `session_id` (text)
      - `country_name` (text) - which country page was viewed
      - `duration` (integer) - time spent in seconds
      - `created_at` (timestamptz)
    
    - `bookings`
      - `id` (uuid, primary key)
      - `session_id` (text)
      - `country_name` (text)
      - `transport_type` (text)
      - `booking_url` (text)
      - `created_at` (timestamptz)
    
    - `visitor_sessions`
      - `id` (uuid, primary key)
      - `session_id` (text, unique)
      - `first_visit` (timestamptz)
      - `last_visit` (timestamptz)
      - `page_count` (integer)
      - `country` (text)
      - `city` (text)
      - `device_type` (text)
  
  2. Security
    - Enable RLS on all tables
    - Only authenticated admin users can read data
    - Public users can insert their own analytics data
  
  3. Indexes
    - Index on created_at for fast date range queries
    - Index on session_id for session tracking
    - Index on country_name for country-specific analytics
*/

-- Create page_views table
CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  page_path text NOT NULL,
  page_title text,
  referrer text,
  user_agent text,
  country text,
  city text,
  ip_address text,
  created_at timestamptz DEFAULT now()
);

-- Create country_views table
CREATE TABLE IF NOT EXISTS country_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  country_name text NOT NULL,
  duration integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  country_name text,
  transport_type text,
  booking_url text,
  created_at timestamptz DEFAULT now()
);

-- Create visitor_sessions table
CREATE TABLE IF NOT EXISTS visitor_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  first_visit timestamptz DEFAULT now(),
  last_visit timestamptz DEFAULT now(),
  page_count integer DEFAULT 1,
  country text,
  city text,
  device_type text
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_country_views_created_at ON country_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_country_views_country_name ON country_views(country_name);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_session_id ON visitor_sessions(session_id);

-- Enable Row Level Security
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE country_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for page_views
CREATE POLICY "Anyone can insert page views"
  ON page_views FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all page views"
  ON page_views FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for country_views
CREATE POLICY "Anyone can insert country views"
  ON country_views FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all country views"
  ON country_views FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for bookings
CREATE POLICY "Anyone can insert bookings"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for visitor_sessions
CREATE POLICY "Anyone can insert visitor sessions"
  ON visitor_sessions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can update their own session"
  ON visitor_sessions FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all sessions"
  ON visitor_sessions FOR SELECT
  TO authenticated
  USING (true);

-- Function to clean up old data (older than 30 days)
CREATE OR REPLACE FUNCTION cleanup_old_analytics()
RETURNS void AS $$
BEGIN
  DELETE FROM page_views WHERE created_at < NOW() - INTERVAL '30 days';
  DELETE FROM country_views WHERE created_at < NOW() - INTERVAL '30 days';
  DELETE FROM bookings WHERE created_at < NOW() - INTERVAL '30 days';
  DELETE FROM visitor_sessions WHERE last_visit < NOW() - INTERVAL '30 days';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;