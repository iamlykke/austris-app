import { Hero } from '@/components/ui/Hero'
import { ProductCard } from '@/components/ui/ProductCard'

export default function Home() {
    return (
        <>
            <Hero />
            <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[60px] justify-items-center overflow-x-auto scrollbar-hide">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
        </>
    )
}
