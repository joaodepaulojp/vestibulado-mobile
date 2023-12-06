import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://njkvkwmbykghkvfhocwp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qa3Zrd21ieWtnaGt2ZmhvY3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4MjMzNDEsImV4cCI6MjAxNzM5OTM0MX0.u1NJyUiFp9ReDD6tM-Qj9GXuOD9ZUTrZI_SRLsougrQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);