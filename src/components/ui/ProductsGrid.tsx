import { ProductCard } from './ProductCard'

export type TCandle = {
    id: string
    name: string
    image_url: string
    price: number
}

export type TProducts = {
    products: TCandle[]
}

export const ProductsGrid: React.FC<TProducts> = ({ products }) => {
    return (
        <section className="flex flex-col gap-[40px] items-center pb-[54px] pt-[16px]">
            <div className="flex flex-col items-center gap-[25px] w-full">
                <p className="text-[24px] font-[400] uppercase text-center">Candles</p>
            </div>
            <div className="w-full container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[60px] justify-items-center overflow-x-auto scrollbar-hide">
                {products.map((candle) => {
                    return (
                        <ProductCard
                            key={candle.id}
                            id={candle.id}
                            name={candle.name}
                            img={candle.image_url}
                            price={candle.price}
                        />
                    )
                })}
            </div>
        </section>
    )
}
