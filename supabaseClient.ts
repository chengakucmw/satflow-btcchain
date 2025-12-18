import { createClient } from '@supabase/supabase-js';

// Attempt to get environment variables safely
const getEnv = (name: string): string => {
  try {
    // Check for process.env (Node/Webpack/CRA) or import.meta.env (Vite)
    // @ts-ignore
    const value = (typeof process !== 'undefined' ? process.env[name] : undefined);
    return value || '';
  } catch {
    return '';
  }
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

/**
 * We only initialize the real client if a valid URL is provided.
 * If not, we provide a "Mock" client that prevents the app from crashing
 * and returns a helpful error message when a user tries to submit the form.
 */
export const supabase = (supabaseUrl && supabaseUrl.startsWith('http'))
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ 
          error: { 
            message: 'Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.',
            code: 'MISSING_CONFIG'
          } 
        })
      })
    } as any;
