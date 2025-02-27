import Image from 'next/image'

export const ProductCard: React.FC = () => {
    return (
        <div className="flex flex-col space-y-5 justify-center items-center h-auto max-w-[410px]">
            <div className="w-full h-[340px] s:h-[310px] md:h-[320px] lg:h-[330px] relative cursor-pointer">
                <Image src="/products/candle.png" alt="candle card" layout="fill" objectFit="cover" />
            </div>
            <p className="mt-4 text-xs text-gray-600 uppercase text-center">SCENTED SOY CANDLE - NO. 1 VANILLE DOUCE</p>
            <p className="text-xs mt-1 text-center">13.00€</p>
        </div>
    )
}
