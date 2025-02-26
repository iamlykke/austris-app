import Image from 'next/image'
import Link from 'next/link'

export const Header: React.FC = () => {
    return (
        <div className="bg-white flex flex-col space-y-4 justify-center items-center w-full pt-4 pb-6">
            <Image src="/logotype.png" width={290} height={88} alt="Austris candles logo" />
            <nav className="flex flex-row space-x-3 items-center justify-between sm:space-x-8 ">
                <Link
                    href="/candles"
                    className="text-xs text-black uppercase transition duration-300 ease-in-out hover:text-black/70"
                >
                    Candles
                </Link>
                <Link
                    href="/about"
                    className="text-xs text-black uppercase transition duration-300 ease-in-out hover:text-black/70"
                >
                    About us
                </Link>
                <Link
                    href="/wholesale"
                    className="text-xs text-black uppercase transition duration-300 ease-in-out hover:text-black/70"
                >
                    Wholesale
                </Link>
                <Link
                    href="https://flowwow.com/en-en/shop/austris-handmade-candles/"
                    target="_blank"
                    className="text-xs text-black uppercase transition duration-300 ease-in-out hover:text-black/70"
                >
                    Flowwow
                </Link>
                <Link
                    href="/contacts"
                    className="text-xs text-black uppercase transition duration-300 ease-in-out hover:text-black/70"
                >
                    Contact us
                </Link>
                <Link
                    href="/cart"
                    className="text-xs text-black uppercase transition duration-300 ease-in-out hover:text-black/70"
                >
                    Cart
                </Link>
            </nav>
        </div>
    )
}
