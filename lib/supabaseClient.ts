import { createClient } from '@supabase/supabase-js'

export const supabaseCandles = createClient(
  process.env.NEXT_PUBLIC_CANDLES_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_CANDLES_SUPABASE_ANON_KEY!
)