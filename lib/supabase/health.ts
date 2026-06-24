import { createClient } from "@/lib/supabase/server";

export async function checkSupabaseConnection() {
  const supabase = await createClient();
  const { error } = await supabase.auth.getSession();

  return {
    connected: !error,
    error: error?.message ?? null,
  };
}
