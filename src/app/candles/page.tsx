import { ProductsGrid } from '@/components/ui/ProductsGrid'
import { Services } from '@/components/ui/Services'

export default function Candles() {
    return (
        <div className="flex flex-col">
            <ProductsGrid />
            <Services />
        </div>
    )
}
