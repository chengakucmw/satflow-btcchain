import { createClient } from '@supabase/supabase-js';

/**
 * BTCChain Supabase Configuration
 * 
 * To make the waitlist work, you MUST provide these two values.
 * 1. Locally: You can replace the strings below with your keys.
 * 2. Production: Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your host (Vercel/Netlify).
 */

// @ts-ignore - Handle environment variable injection from various bundlers
const env = typeof process !== 'undefined' ? process.env : (import.meta as any).env || {};

const supabaseUrl = env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// A valid Supabase URL always starts with https://
const isValidConfig = supabaseUrl && supabaseUrl.startsWith('https://');

export const supabase = isValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      // Mock client to prevent crashes if environment variables aren't set yet
      from: () => ({
        insert: async () => ({ 
          error: { 
            message: 'Supabase environment variables are missing. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
            code: 'MISSING_CONFIG'
          } 
        })
      })
    } as any;
