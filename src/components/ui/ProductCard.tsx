import Image from 'next/image'

export const ProductCard: React.FC = () => {
    return (
        <div className="flex flex-col space-y-5 justify-center items-center h-auto max-w-[310px] sm:max-w-none w-full">
            <div className="w-full relative cursor-pointer aspect-[4/5]">
                <Image src="/products/candle.png" alt="candle card" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-4 text-xs text-gray-600 uppercase text-center">SCENTED SOY CANDLE - NO. 1 VANILLE DOUCE</p>
            <p className="text-xs mt-1 text-center">13.00€</p>
        </div>
    )
}
