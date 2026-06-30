import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase admin client using the Service Role Key.
 * IMPORTANT: This must ONLY be used in server-side code (API routes, Server Components).
 * Never expose the service role key to the browser.
 */
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
