/*
  # Fix Security Issues
  
  1. Changes
    - Remove unused indexes that have not been used
    - Fix function search_path mutability for cleanup_old_analytics
  
  2. Security
    - Removing unused indexes improves performance and reduces maintenance
    - Setting immutable search_path prevents potential security vulnerabilities
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_page_views_created_at;
DROP INDEX IF EXISTS idx_page_views_session_id;
DROP INDEX IF EXISTS idx_country_views_created_at;
DROP INDEX IF EXISTS idx_country_views_country_name;
DROP INDEX IF EXISTS idx_bookings_created_at;

-- Fix search_path mutability for cleanup function
-- First drop the existing function
DROP FUNCTION IF EXISTS cleanup_old_analytics();

-- Recreate with immutable search_path
CREATE OR REPLACE FUNCTION cleanup_old_analytics()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  -- Delete page views older than 30 days
  DELETE FROM page_views
  WHERE created_at < NOW() - INTERVAL '30 days';
  
  -- Delete country views older than 30 days
  DELETE FROM country_views
  WHERE created_at < NOW() - INTERVAL '30 days';
  
  -- Delete bookings older than 30 days
  DELETE FROM bookings
  WHERE created_at < NOW() - INTERVAL '30 days';
  
  -- Delete visitor sessions with no recent activity (last_visit > 30 days ago)
  DELETE FROM visitor_sessions
  WHERE last_visit < NOW() - INTERVAL '30 days';
END;
$$;
