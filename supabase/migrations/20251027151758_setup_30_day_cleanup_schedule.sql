/*
  # Setup 30-Day Data Retention
  
  1. Functions
    - Create cleanup function that runs automatically
    - Deletes records older than 30 days
  
  2. Schedule
    - Runs daily at midnight
    - Ensures data retention compliance
*/

-- Enable pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule the cleanup function to run daily at midnight
SELECT cron.schedule(
  'cleanup-old-analytics',  -- job name
  '0 0 * * *',             -- cron schedule (daily at midnight)
  $$
    DELETE FROM page_views WHERE created_at < NOW() - INTERVAL '30 days';
    DELETE FROM country_views WHERE created_at < NOW() - INTERVAL '30 days';
    DELETE FROM bookings WHERE created_at < NOW() - INTERVAL '30 days';
    DELETE FROM visitor_sessions WHERE last_visit < NOW() - INTERVAL '30 days';
  $$
);
