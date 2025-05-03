import { Hero } from '@/components/ui/Hero'
import ProductsSection from '@/components/ui/ProductsSection'
import { Services } from '@/components/ui/Services'
import { Socials } from '@/components/ui/Socials'

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <ProductsSection />
            <Socials />
            <Services />
        </div>
    )
}
