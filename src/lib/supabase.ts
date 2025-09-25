import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Keep generic types for now
type Db = unknown;

// Browser client (uses NEXT_PUBLIC_* envs)
export const createBrowserClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient<Db>(url, anon);
};

// Server client
export const createServerClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient<Db>(url, anon, {
    auth: { persistSession: false, detectSessionInUrl: false },
  });
};

// Admin client (service role — server only)
let _admin: SupabaseClient<Db> | null = null;

export const createAdminClient = () => {
  if (_admin) return _admin;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  _admin = createClient<Db>(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return _admin;
};