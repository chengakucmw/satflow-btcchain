import { createClient } from '@supabase/supabase-js';

/**
 * BTCChain Supabase Configuration
 * 
 * TO REMOVE THE RED ERROR BOX:
 * 1. Go to your Vercel Project Settings -> Environment Variables.
 * 2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
 * 3. Redeploy your project.
 */

// @ts-ignore - Handle environment variable injection
const env = typeof process !== 'undefined' ? process.env : (import.meta as any).env || {};

// We use .trim() to ensure no accidental spaces break the connection
const rawUrl = env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const rawKey = env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

const supabaseUrl = rawUrl.trim();
const supabaseAnonKey = rawKey.trim();

// VALIDATION LOGIC
const isPlaceholder = supabaseUrl.includes('YOUR_SUPABASE_URL');
const isMissingProtocol = supabaseUrl !== '' && !supabaseUrl.startsWith('https://');
const isValidConfig = !isPlaceholder && !isMissingProtocol && supabaseUrl.length > 15;

if (!isValidConfig && typeof window !== 'undefined') {
  if (isMissingProtocol && !isPlaceholder) {
    console.error('❌ BTCChain Setup Error: Your VITE_SUPABASE_URL is invalid. It must start with "https://". Check your Vercel Environment Variables.');
  } else if (isPlaceholder) {
    console.info('ℹ️ BTCChain Status: Waiting for Supabase Environment Variables to be set in Vercel.');
  }
}

export const supabase = isValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ 
          error: { 
            message: isMissingProtocol 
              ? 'Invalid Supabase URL (must start with https://)' 
              : 'Developer: Set Supabase URL & Key in environment variables.',
            code: 'MISSING_CONFIG'
          } 
        })
      })
    } as any;
