import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'
import { Footer } from '@/components/Footer'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Austris Candles',
    description: 'Handmade soy candles',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
