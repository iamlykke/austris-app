import { Header } from '@/components/Header'
import { Hero } from '@/components/ui/Hero'

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <section className="container mx-auto px-4 py-8 flex-grow">AUSTRIS</section>
        </div>
    )
}
