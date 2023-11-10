import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jhqzaumyqadizjdvbbol.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpocXphdW15cWFkaXpqZHZiYm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzMjA1NzIsImV4cCI6MjAxNDg5NjU3Mn0.OxYhvMKO1ws-m2pwcBY9RPRefcNEg61WNRHWSa0LUZI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
