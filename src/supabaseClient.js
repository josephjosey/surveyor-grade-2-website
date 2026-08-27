import { createClient } from "@supabase/supabase-js";

// ============================================================================
// 🔑 SUPABASE CONFIGURATION
// Paste your Supabase Project URL and Public Anon Key below:
// ============================================================================

// 1. Paste your Supabase Project URL here (from Project Settings -> API)
const SUPABASE_URL = "https://tglxxaecymkudubkjzmv.supabase.co/rest/v1/";

// 2. Paste your Supabase Public (anon) API Key here
const SUPABASE_PUBLIC_KEY = "sb_publishable_2d--Kl9f8P9JVtuGjOioow_w3168eiL";

// Initialize and export the single Supabase client instance
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
