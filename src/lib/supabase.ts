// src/lib/supabase.ts
import { createClient, SupabaseClient } from "@supabase/supabase-js";
type Db = any; // permissive for now

export const createBrowserClient = () =>
  createClient<Db>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export const createServerClient = () =>
  createClient<Db>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { persistSession: false, detectSessionInUrl: false },
  });

let _admin: SupabaseClient<Db> | null = null;
export const createAdminClient = () => {
  if (_admin) return _admin;
  _admin = createClient<Db>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
  return _admin;
};