'use client'
import { useState } from 'react'
import { PromoBanner } from './ui/PromoBanner'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isPromoVisible, setIsPromoVisible] = useState(true)

    const handleClosePromo = () => {
        setIsPromoVisible(false)
    }

    return (
        <main className="flex flex-col min-h-screen">
            {isPromoVisible && <PromoBanner onClose={handleClosePromo} />}
            {children}
        </main>
    )
}
