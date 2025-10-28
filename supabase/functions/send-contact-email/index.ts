import { createClient } from 'npm:@supabase/supabase-js@2.76.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { name, email, subject, message }: ContactRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({
        name,
        email,
        subject: subject || 'No subject',
        message,
        status: 'new'
      });

    if (dbError) {
      throw dbError;
    }

    const emailBody = `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject || 'No subject'}

Message:
${message}

---
This message was sent from the Discover Africa Travel website contact form.
    `.trim();

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY') || ''}`
        },
        body: JSON.stringify({
          from: 'Discover Africa <noreply@discoverafrica.com>',
          to: ['Himamaafrica@gmail.com'],
          reply_to: email,
          subject: `Contact Form: ${subject || 'New Message from ' + name}`,
          text: emailBody
        })
      });

      if (!response.ok) {
        console.error('Email sending failed:', await response.text());
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your message has been received. We will get back to you soon!'
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'An error occurred'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});