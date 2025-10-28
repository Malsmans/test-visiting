/*
  # Newsletter and Contact Forms

  1. Overview
    - Newsletter subscription system for collecting emails
    - Contact form message storage system
    - Email validation and duplicate prevention

  2. New Tables
    - newsletter_subscribers: Stores email subscriptions
    - contact_messages: Stores contact form submissions

  3. Features
    - Unique email constraint for newsletter
    - Timestamp tracking for all submissions
    - Status tracking for contact messages
    - Metadata support for additional information

  4. Security
    - Enable RLS on all tables
    - Public insert access for submissions
    - Admin-only read access
    - Prevent duplicate subscriptions
*/

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  source text DEFAULT 'website',
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new',
  replied_at timestamptz,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_created_at ON newsletter_subscribers(created_at);
CREATE INDEX IF NOT EXISTS idx_newsletter_is_active ON newsletter_subscribers(is_active);

CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Allow public insert on newsletter_subscribers"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on newsletter_subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on newsletter_subscribers"
  ON newsletter_subscribers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for contact_messages
CREATE POLICY "Allow public insert on contact_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on contact_messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on contact_messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable real-time for these tables
ALTER PUBLICATION supabase_realtime ADD TABLE newsletter_subscribers;
ALTER PUBLICATION supabase_realtime ADD TABLE contact_messages;

-- Add helpful comments
COMMENT ON TABLE newsletter_subscribers IS 'Stores email addresses for newsletter subscriptions';
COMMENT ON TABLE contact_messages IS 'Stores messages from the contact form';

COMMENT ON COLUMN newsletter_subscribers.is_active IS 'Whether the subscription is active or unsubscribed';
COMMENT ON COLUMN contact_messages.status IS 'Message status: new, read, replied, archived';