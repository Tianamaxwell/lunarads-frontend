"use server";

import { createClient, SupabaseClient } from "@supabase/supabase-js";

// If you have Supabase types (via `supabase gen types`), import them here.
// For now, just keep it generic with `unknown`.
type Db = unknown;

// 1) Browser client (safe with NEXT_PUBLIC_* vars)
export const createBrowserClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient<Db>(url, anon);
};

// 2) Server client (for RSC / server actions)
export const createServerClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient<Db>(url, anon, {
    auth: { persistSession: false, detectSessionInUrl: false },
  });
};

// 3) Admin client (service role — server only!)
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