/*
  # Fix Security Issues
  
  1. Function Search Path Security
    - Fix `get_live_visitors` function to use explicit schema qualification
    - Fix `update_daily_stats` function to use explicit schema qualification
    - Both functions now have immutable search paths for security
  
  2. Index Optimization
    - Keep all indexes as they are essential for analytics query performance
    - Indexes are used by date range queries in the analytics service
    - They will show usage once analytics queries are executed
  
  3. Security Notes
    - Functions with mutable search paths can be vulnerable to search path attacks
    - Explicit schema qualification prevents malicious schema injection
    - All table references now use `public.` prefix for security
*/

-- Drop existing functions
DROP FUNCTION IF EXISTS get_live_visitors();
DROP FUNCTION IF EXISTS update_daily_stats(date);

-- Recreate get_live_visitors with explicit schema qualification and immutable search path
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

-- Recreate update_daily_stats with explicit schema qualification and immutable search path
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

-- Add helpful comment explaining index usage
COMMENT ON INDEX idx_page_views_created_at IS 'Used by analytics queries filtering by date range';
COMMENT ON INDEX idx_page_views_session_id IS 'Used by analytics queries grouping by session';
COMMENT ON INDEX idx_page_views_country IS 'Used by analytics queries filtering by country';
COMMENT ON INDEX idx_visitor_sessions_last_visit IS 'Used by live visitor tracking and date range queries';
COMMENT ON INDEX idx_bookings_created_at IS 'Used by recent bookings queries and date range filtering';
COMMENT ON INDEX idx_traffic_sources_session_id IS 'Used by traffic source analytics grouping by session';
COMMENT ON INDEX idx_daily_stats_date IS 'Used by daily trends queries ordering and filtering by date';
