import Link from 'next/link'
import { Button } from '../Button'
import { ProductCard } from './ProductCard'

export const ProductsSection: React.FC = () => {
    return (
        <section className="flex flex-col gap-[40px] items-center pb-[54px] pt-[54px]">
            <div className="flex flex-col items-center gap-[25px] w-full">
                <p className="text-[12px] uppercase text-center">Comforting SCENTS for your home</p>
                <p className="text-[28px] uppercase text-center">Introducing even BIGGER & BETTER Feel Good Fragrance</p>
            </div>
            <div className="w-full container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[60px] justify-items-center overflow-x-auto scrollbar-hide">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <Link href="/candles">
                <Button>
                    <p className="text-[13px] uppercase text-center">Browse all candles</p>
                </Button>
            </Link>
        </section>
    )
}
