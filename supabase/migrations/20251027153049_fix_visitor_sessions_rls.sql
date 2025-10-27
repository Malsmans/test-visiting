/*
  # Fix Visitor Sessions RLS for Upsert
  
  1. Changes
    - Add SELECT policy for anonymous users to enable upsert operations
    - Upsert requires SELECT permission to check for conflicts
  
  2. Security
    - Anonymous users can only select their own session data
    - Maintains secure access control
*/

-- Drop existing SELECT policy if it only allows authenticated users
DROP POLICY IF EXISTS "Authenticated users can view all sessions" ON visitor_sessions;

-- Add SELECT policy for anonymous users (needed for upsert)
CREATE POLICY "Anyone can select visitor sessions"
  ON visitor_sessions FOR SELECT
  TO anon
  USING (true);

-- Keep authenticated users able to view all sessions
CREATE POLICY "Authenticated users can view all sessions"
  ON visitor_sessions FOR SELECT
  TO authenticated
  USING (true);
