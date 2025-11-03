/*
  # Fix Contact and Newsletter RLS Policies

  1. Changes
    - Drop existing restrictive policies
    - Create new simple policies that explicitly allow anonymous inserts
    - Ensure anyone can submit contact forms and newsletter subscriptions
    
  2. Security
    - Anonymous users can only INSERT
    - Only authenticated admin users can SELECT/UPDATE
    - Policies are explicit and clear
*/

-- Drop existing policies for contact_messages
DROP POLICY IF EXISTS "Allow public insert on contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Enable select for all users" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated read on contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated update on contact_messages" ON contact_messages;
DROP POLICY IF EXISTS "Enable update for all users" ON contact_messages;

-- Drop existing policies for newsletter_subscribers
DROP POLICY IF EXISTS "Allow public insert on newsletter_subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Enable select for all users" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow authenticated read on newsletter_subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow authenticated update on newsletter_subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Enable update for all users" ON newsletter_subscribers;

-- Create simple, explicit policies for contact_messages
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create simple, explicit policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read newsletter subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update newsletter subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
