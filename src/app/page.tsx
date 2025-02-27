import { Header } from '@/components/Header'
import { Hero } from '@/components/ui/Hero'
import { ProductCard } from '@/components/ui/ProductCard'

export default function Home() {
    return (
        <>
            <Hero />
            <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center overflow--x-scroll grid-rows-1">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
        </>
    )
}
