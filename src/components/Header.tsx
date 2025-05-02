'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PromoBanner } from './ui/PromoBanner'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

interface INavLink {
    linkTo: string
    title: string
    target?: string
}

export const Header: React.FC = () => {
    const pathname = usePathname()

    const [isPromoVisible, setIsPromoVisible] = useState(true)

    const handleClosePromo = () => {
        setIsPromoVisible(false)
    }

    const navLinks: INavLink[] = [
        { linkTo: '/candles', title: 'Candles' },
        // { linkTo: '/about', title: 'About us' },
        { linkTo: '/wholesale', title: 'Wholesale' },
        { linkTo: 'https://flowwow.com/en-en/shop/austris-handmade-candles/', title: 'Flowwow', target: '_blank' },
        { linkTo: '/contacts', title: 'Contact us' },
        // { linkTo: '/cart', title: 'Cart' },
    ]

    return (
        <div className="bg-white flex flex-col space-y-4 justify-center items-center w-full pb-[15px] sticky top-0 z-10">
            {isPromoVisible && <PromoBanner onClose={handleClosePromo} />}
            <Link href="/">
                <Image className="mt-[17px]" src="/logotype.png" width={290} height={88} alt="Austris candles logo" />
            </Link>

            <nav className="flex flex-row space-x-3 items-center justify-between sm:space-x-8 ">
                {navLinks.map((item, index) => {
                    const isActive = pathname === item.linkTo

                    return (
                        <Link
                            key={index}
                            href={item.linkTo}
                            target={item.target}
                            className={`text-xs uppercase transition duration-300 ease-in-out hover:text-black/60 ${
                                isActive ? 'font-bold' : 'text-black'
                            }`}
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
