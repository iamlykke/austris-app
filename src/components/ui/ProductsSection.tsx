import Link from 'next/link'
import { Button } from '../Button'
import { supabaseCandles } from '../../../lib/supabaseClient'
import { ProductCard } from './ProductCard'

export default async function ProductsSection() {
    const { data: candles, error } = await supabaseCandles.from('candles').select('id, name, image_url, price').limit(4)

    if (error) {
        console.error(error)
        return <section className="py-14 text-center text-red-500">Ошибка: {error.message}</section>
    }

    return (
        <section className="flex flex-col gap-[40px] items-center pb-[54px] pt-[54px]">
            <div className="flex flex-col items-center gap-[25px] w-full px-3">
                <p className="text-[12px] uppercase text-center">Comforting SCENTS for your home</p>
                <p className="text-[28px] uppercase text-center">Introducing even BIGGER & BETTER Feel Good Fragrance</p>
            </div>
            <div className="w-full container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[60px] justify-items-center overflow-x-auto scrollbar-hide">
                {candles?.map((candle) => (
                    <ProductCard
                        key={candle.id}
                        id={candle.id}
                        name={candle.name}
                        img={candle.image_url}
                        price={candle.price}
                    />
                ))}
            </div>
            <Link href="/candles">
                <Button>
                    <p className="text-[13px] uppercase text-center">Browse all candles</p>
                </Button>
            </Link>
        </section>
    )
}
