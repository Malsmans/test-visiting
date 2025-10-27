/*
  # Fix Security Issues
  
  1. Changes
    - Remove unused indexes that are not being utilized
    - Fix search_path security issue in cleanup function
  
  2. Security
    - Dropping unused indexes improves performance and reduces maintenance overhead
    - Setting explicit search_path prevents potential security vulnerabilities
  
  3. Notes
    - Unused indexes were identified by database monitoring
    - Function search_path made immutable to prevent injection attacks
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_page_views_created_at;
DROP INDEX IF EXISTS idx_page_views_session_id;
DROP INDEX IF EXISTS idx_country_views_created_at;
DROP INDEX IF EXISTS idx_country_views_country_name;
DROP INDEX IF EXISTS idx_bookings_created_at;

-- Fix the cleanup function with proper search_path security
DROP FUNCTION IF EXISTS cleanup_old_analytics();

CREATE OR REPLACE FUNCTION cleanup_old_analytics()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  -- Delete records older than 30 days
  DELETE FROM page_views WHERE created_at < NOW() - INTERVAL '30 days';
  DELETE FROM country_views WHERE created_at < NOW() - INTERVAL '30 days';
  DELETE FROM bookings WHERE created_at < NOW() - INTERVAL '30 days';
  DELETE FROM visitor_sessions WHERE last_visit < NOW() - INTERVAL '30 days';
END;
$$;
