import { createClient } from "@supabase/supabase-js";

// ============================================================================
// 🔑 SUPABASE CONFIGURATION
// ============================================================================

// 1. Supabase Project URL (Base URL - without /rest/v1/)
const RAW_URL = "https://tglxxaecymkudubkjzmv.supabase.co";

// Clean URL: automatically remove any accidental /rest/v1/ or trailing slash
export const SUPABASE_URL = RAW_URL.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');

// 2. Supabase Public (anon) API Key
export const SUPABASE_PUBLIC_KEY = "sb_publishable_2d--Kl9f8P9JVtuGjOioow_w3168eiL";

// Initialize and export the single Supabase client instance
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
