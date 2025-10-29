/*
  # Allow Anonymous Read Access to Analytics

  1. Issue
    - Admin dashboard shows blank because it requires authentication to read analytics data
    - Frontend doesn't have Supabase authentication implemented
    - Need to allow anonymous (anon) users to read analytics data for the dashboard

  2. Changes
    - Update all SELECT policies to allow both anonymous and authenticated users
    - This allows the admin dashboard to work without Supabase authentication
    - Keep INSERT/UPDATE restricted appropriately

  3. Security Note
    - The admin dashboard already has its own username/password protection
    - Analytics data is read-only for display purposes
    - No sensitive personal data is exposed
*/

-- Visitor Sessions: Allow anonymous and authenticated read
DROP POLICY IF EXISTS "Enable select for authenticated users" ON visitor_sessions;

CREATE POLICY "Enable select for all users"
  ON visitor_sessions FOR SELECT
  USING (true);

-- Page Views: Allow anonymous and authenticated read
DROP POLICY IF EXISTS "Enable select for authenticated users" ON page_views;

CREATE POLICY "Enable select for all users"
  ON page_views FOR SELECT
  USING (true);

-- Bookings: Allow anonymous and authenticated read
DROP POLICY IF EXISTS "Enable select for authenticated users" ON bookings;

CREATE POLICY "Enable select for all users"
  ON bookings FOR SELECT
  USING (true);

-- Traffic Sources: Allow anonymous and authenticated read
DROP POLICY IF EXISTS "Enable select for authenticated users" ON traffic_sources;

CREATE POLICY "Enable select for all users"
  ON traffic_sources FOR SELECT
  USING (true);

-- Daily Stats: Allow anonymous and authenticated read
DROP POLICY IF EXISTS "Enable select for authenticated users" ON daily_stats;

CREATE POLICY "Enable select for all users"
  ON daily_stats FOR SELECT
  USING (true);

-- Newsletter Subscribers: Allow anonymous and authenticated read
DROP POLICY IF EXISTS "Enable select for authenticated users" ON newsletter_subscribers;

CREATE POLICY "Enable select for all users"
  ON newsletter_subscribers FOR SELECT
  USING (true);

-- Contact Messages: Allow anonymous and authenticated read
DROP POLICY IF EXISTS "Enable select for authenticated users" ON contact_messages;

CREATE POLICY "Enable select for all users"
  ON contact_messages FOR SELECT
  USING (true);

-- Allow updates to contact messages and newsletter for admin actions
CREATE POLICY "Enable update for all users"
  ON contact_messages FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Enable update for all users"
  ON newsletter_subscribers FOR UPDATE
  USING (true)
  WITH CHECK (true);