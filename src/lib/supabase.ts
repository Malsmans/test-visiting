import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase Configuration:', {
  url: supabaseUrl || 'MISSING',
  urlLength: supabaseUrl?.length || 0,
  keyExists: !!supabaseAnonKey,
  keyLength: supabaseAnonKey?.length || 0,
  keyPreview: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'MISSING'
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ CRITICAL: Missing Supabase environment variables!');
  console.error('Expected: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  console.error('Current values:', {
    VITE_SUPABASE_URL: supabaseUrl || 'NOT SET',
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? 'SET' : 'NOT SET'
  });
}

if (supabaseUrl && supabaseAnonKey && supabaseAnonKey.length < 100) {
  console.warn('⚠️ WARNING: Supabase anon key seems too short. Expected length ~200+ characters.');
  console.warn('Key length:', supabaseAnonKey.length);
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  }
);
