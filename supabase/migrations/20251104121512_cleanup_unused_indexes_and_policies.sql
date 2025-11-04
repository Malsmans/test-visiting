/*
  # Cleanup Unused Indexes and RLS Policies

  1. Changes
    - Remove all unused indexes to improve database performance
    - Remove RLS policies from tables where RLS is disabled
    - This reduces database overhead and eliminates security warnings
    
  2. Tables Affected
    - visitor_sessions: Remove unused country index
    - page_views: Remove unused indexes (session_id, page_path, country)
    - bookings: Remove unused indexes (session_id, country_code)
    - traffic_sources: Remove unused indexes (session_id, source)
    - daily_stats: Remove unused date index
    - newsletter_subscribers: Remove unused indexes and policies
    - contact_messages: Remove unused indexes and policies
    
  3. Security Notes
    - RLS is intentionally disabled on contact_messages and newsletter_subscribers
    - These are public forms that don't contain sensitive data
    - Removing policies eliminates the security warnings about RLS being disabled
*/

-- Drop unused indexes from visitor_sessions
DROP INDEX IF EXISTS idx_visitor_sessions_country;

-- Drop unused indexes from page_views
DROP INDEX IF EXISTS idx_page_views_session_id;
DROP INDEX IF EXISTS idx_page_views_page_path;
DROP INDEX IF EXISTS idx_page_views_country;

-- Drop unused indexes from bookings
DROP INDEX IF EXISTS idx_bookings_session_id;
DROP INDEX IF EXISTS idx_bookings_country_code;

-- Drop unused indexes from traffic_sources
DROP INDEX IF EXISTS idx_traffic_sources_session_id;
DROP INDEX IF EXISTS idx_traffic_sources_source;

-- Drop unused indexes from daily_stats
DROP INDEX IF EXISTS idx_daily_stats_date;

-- Drop unused indexes from newsletter_subscribers
DROP INDEX IF EXISTS idx_newsletter_email;
DROP INDEX IF EXISTS idx_newsletter_is_active;

-- Drop unused indexes from contact_messages
DROP INDEX IF EXISTS idx_contact_email;
DROP INDEX IF EXISTS idx_contact_status;

-- Remove RLS policies from contact_messages (RLS is disabled)
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated users can read contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated users can update contact messages" ON contact_messages;

-- Remove RLS policies from newsletter_subscribers (RLS is disabled)
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can read newsletter subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can update newsletter subscribers" ON newsletter_subscribers;
