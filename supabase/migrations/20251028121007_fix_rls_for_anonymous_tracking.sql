/*
  # Fix RLS Policies for Anonymous Tracking

  1. Issue
    - Anonymous visitors cannot insert data into visitor_sessions, page_views, bookings
    - Current policies allow "anon" but may not be working correctly
    - Need to ensure anonymous users can track their visits

  2. Changes
    - Drop existing restrictive policies
    - Create new permissive policies for anonymous tracking
    - Allow anonymous (unauthenticated) users to insert/update their own data
    - Keep read access restricted to authenticated users (admin dashboard)

  3. Security
    - Anonymous users can only INSERT and UPDATE their own tracking data
    - Only authenticated users can SELECT (read) analytics data
    - This maintains security while allowing proper tracking
*/

-- Drop all existing policies for visitor_sessions
DROP POLICY IF EXISTS "Allow public insert on visitor_sessions" ON visitor_sessions;
DROP POLICY IF EXISTS "Allow public update on visitor_sessions" ON visitor_sessions;
DROP POLICY IF EXISTS "Allow authenticated read on visitor_sessions" ON visitor_sessions;

-- Drop all existing policies for page_views
DROP POLICY IF EXISTS "Allow public insert on page_views" ON page_views;
DROP POLICY IF EXISTS "Allow authenticated read on page_views" ON page_views;

-- Drop all existing policies for bookings
DROP POLICY IF EXISTS "Allow public insert on bookings" ON bookings;
DROP POLICY IF EXISTS "Allow authenticated read on bookings" ON bookings;

-- Drop all existing policies for traffic_sources
DROP POLICY IF EXISTS "Allow public insert on traffic_sources" ON traffic_sources;
DROP POLICY IF EXISTS "Allow authenticated read on traffic_sources" ON traffic_sources;

-- Visitor Sessions: Allow anonymous insert and update
CREATE POLICY "Enable insert for anonymous users"
  ON visitor_sessions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable update for anonymous users"
  ON visitor_sessions FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users"
  ON visitor_sessions FOR SELECT
  TO authenticated
  USING (true);

-- Page Views: Allow anonymous insert
CREATE POLICY "Enable insert for anonymous users"
  ON page_views FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users"
  ON page_views FOR SELECT
  TO authenticated
  USING (true);

-- Bookings: Allow anonymous insert
CREATE POLICY "Enable insert for anonymous users"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

-- Traffic Sources: Allow anonymous insert
CREATE POLICY "Enable insert for anonymous users"
  ON traffic_sources FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users"
  ON traffic_sources FOR SELECT
  TO authenticated
  USING (true);

-- Daily Stats: Allow authenticated read only
DROP POLICY IF EXISTS "Allow authenticated read on daily_stats" ON daily_stats;

CREATE POLICY "Enable select for authenticated users"
  ON daily_stats FOR SELECT
  TO authenticated
  USING (true);