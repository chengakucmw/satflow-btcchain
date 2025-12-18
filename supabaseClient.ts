import { createClient } from '@supabase/supabase-js';

/**
 * BTCChain Supabase Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://app.supabase.com
 * 2. Settings (Gear Icon) > API
 * 3. Copy "Project URL" and "anon public" API Key
 */

// @ts-ignore - Handle environment variable injection
const env = typeof process !== 'undefined' ? process.env : (import.meta as any).env || {};

const supabaseUrl = env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// VALIDATION LOGIC
const isPlaceholder = supabaseUrl.includes('YOUR_SUPABASE_URL');
const isMissingProtocol = supabaseUrl !== '' && !supabaseUrl.startsWith('https://');
const isValidConfig = !isPlaceholder && !isMissingProtocol && supabaseUrl.length > 10;

if (!isValidConfig && typeof window !== 'undefined') {
  if (isMissingProtocol) {
    console.warn('⚠️ BTCChain Setup: VITE_SUPABASE_URL must start with "https://". You might have pasted the Project Name instead of the URL.');
  } else if (isPlaceholder) {
    console.info('ℹ️ BTCChain Setup: Please configure Supabase keys in Vercel Environment Variables to enable the Waitlist.');
  }
}

export const supabase = isValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ 
          error: { 
            message: isMissingProtocol 
              ? 'Invalid Supabase URL. It must start with https://' 
              : 'Supabase environment variables are missing.',
            code: 'MISSING_CONFIG'
          } 
        })
      })
    } as any;
