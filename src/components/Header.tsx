import Image from 'next/image'
import Link from 'next/link'

export const Header: React.FC = () => {
    return (
        <div className="bg-white flex flex-col gap-4 justify-center items-center w-full pt-4 pb-6">
            <Image src="/logotype.png" width={290} height={88} alt="Austris candles logo" />
            <nav className="flex flex-row gap-8 items-center justify-between">
                <Link href="/candles" className="text-xs uppercase">
                    Candles
                </Link>
                <Link href="/about" className="text-xs uppercase">
                    About us
                </Link>
                <Link href="/wholesale" className="text-xs uppercase">
                    Wholesale
                </Link>
                <Link
                    href="https://flowwow.com/en-en/shop/austris-handmade-candles/"
                    target="_blank"
                    className="text-xs uppercase"
                >
                    Flowwow
                </Link>
                <Link href="/contacts" className="text-xs uppercase">
                    Contact us
                </Link>
                <Link href="/cart" className="text-xs uppercase">
                    Cart
                </Link>
            </nav>
        </div>
    )
}
