'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PromoBanner } from './ui/PromoBanner'
import { useState } from 'react'

interface INavLink {
    linkTo: string
    title: string
    target?: string
}

export const Header: React.FC = () => {
    const [isPromoVisible, setIsPromoVisible] = useState(true)

    const handleClosePromo = () => {
        setIsPromoVisible(false)
    }

    const navLinks: INavLink[] = [
        { linkTo: '/', title: 'Candles' },
        { linkTo: '/about', title: 'About us' },
        { linkTo: '/wholesale', title: 'Wholesale' },
        { linkTo: 'https://flowwow.com/en-en/shop/austris-handmade-candles/', title: 'Flowwow', target: '_blank' },
        { linkTo: '/contacts', title: 'Contact us' },
        { linkTo: '/cart', title: 'Cart' },
    ]

    return (
        <div className="bg-white flex flex-col space-y-4 justify-center items-center w-full pb-6 sticky top-0 z-10">
            {isPromoVisible && <PromoBanner onClose={handleClosePromo} />}
            <Image src="/logotype.png" width={290} height={88} alt="Austris candles logo" />
            <nav className="flex flex-row space-x-3 items-center justify-between sm:space-x-8 ">
                {navLinks.map((item, index) => (
                    <Link
                        key={index}
                        href={item.linkTo}
                        target={item.target}
                        className="text-xs text-black uppercase transition duration-300 ease-in-out hover:text-black/70"
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
