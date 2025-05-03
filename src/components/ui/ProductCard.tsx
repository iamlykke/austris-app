'use client'

import Image from 'next/image'

interface IProductCard {
    id: string
    name: string
    img: string
    price: number
}

export const ProductCard: React.FC<IProductCard> = ({ id, name, img, price }) => {
    return (
        <div
            className="flex flex-col space-y-5 justify-center items-center h-auto max-w-[310px] sm:max-w-none w-full"
            onClick={() => console.log(id)}
        >
            <div className="w-full relative cursor-pointer aspect-[4/5]">
                <Image src={img} alt={name} layout="fill" objectFit="cover" />
            </div>
            <p className="mt-4 text-xs text-gray-600 uppercase text-center">{name}</p>
            <p className="text-xs mt-1 text-center">{price}€</p>
        </div>
    )
}
