import { Hero } from '@/components/ui/Hero'
import { ProductsSection } from '@/components/ui/ProductsSection'
import { Socials } from '@/components/ui/Socials'

export default function Home() {
    return (
        <div className="flex flex-col gap-[54px]">
            <Hero />
            <ProductsSection />
            <Socials />
        </div>
    )
}
