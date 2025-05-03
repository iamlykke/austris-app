import { ProductsGrid } from '@/components/ui/ProductsGrid'
import { Services } from '@/components/ui/Services'
import { supabaseCandles } from '../../../lib/supabaseClient'

export default async function Candles() {
    const { data: candles, error } = await supabaseCandles.from('candles').select('id, name, image_url, price')

    if (error) return <p>Ошибка: {error.message}</p>

    return (
        <div className="flex flex-col">
            <ProductsGrid products={candles} />
            <Services />
        </div>
    )
}
