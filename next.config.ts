import { NextConfig } from "next"

const supabaseUrl = process.env.NEXT_PUBLIC_CANDLES_SUPABASE_URL || ''
const supabaseHost = supabaseUrl ? new URL(supabaseUrl).hostname : ''

const nextConfig: NextConfig = {
  images: {
    // 1) Чтобы ловить signed URLs с токеном в query
    remotePatterns: [
      {
        protocol: 'https',
        hostname: supabaseHost,
        port: '',
        pathname: '/storage/v1/object/sign/**',
      },
    ],
    domains: [supabaseHost],
  },
}

module.exports = nextConfig
