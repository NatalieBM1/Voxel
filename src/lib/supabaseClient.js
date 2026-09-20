import { createClient } from '@supabase/supabase-js'

// Los valores vienen del archivo .env (no se escriben en el código)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
