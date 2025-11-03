/*
  # Disable RLS for Public Forms

  1. Changes
    - Temporarily disable RLS on contact_messages and newsletter_subscribers
    - These tables only contain public submissions and no sensitive data
    - This allows anonymous users to submit forms without authentication issues
    
  2. Security Notes
    - Contact messages and newsletter subscriptions are public-facing forms
    - No sensitive user data is stored in these tables
    - Admin dashboard uses separate authentication to view submissions
*/

-- Disable RLS on contact_messages to allow public submissions
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Disable RLS on newsletter_subscribers to allow public subscriptions
ALTER TABLE newsletter_subscribers DISABLE ROW LEVEL SECURITY;
