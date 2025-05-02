import Link from 'next/link'
import { SocialsLinks } from './ui/SocialsLinks'

interface IFooterRow {
    id: string
    title: string
    isTitle: boolean
    href?: string
}

type IFooterData = IFooterRow[][]

const footerData: IFooterData = [
    [
        { id: 'first_1', title: 'Want to find out more about austris candles?', isTitle: true },
        { id: 'first_2', title: 'About us', href: '#', isTitle: false },
        { id: 'first_3', title: 'Contact us', href: '/contacts', isTitle: false },
        { id: 'first_4', title: 'Product Care', href: '#', isTitle: false },
    ],
    [
        { id: 'second_1', title: 'Information', isTitle: true },
        { id: 'second_2', title: 'Terms of Service', href: '#', isTitle: false },
        { id: 'second_3', title: 'Privacy Policy', href: '#', isTitle: false },
        { id: 'second_4', title: 'Shipping Policy', href: '#', isTitle: false },
        { id: 'second_5', title: 'Refunds & Returns', href: '#', isTitle: false },
        { id: 'second_6', title: 'Customer Reviews', href: '#', isTitle: false },
    ],
    [
        { id: 'third_1', title: 'Wholesale', isTitle: true },
        { id: 'third_2', title: 'Email for corporate order', href: '#', isTitle: false },
        { id: 'third_3', title: 'Samples (instagram)', href: '#', isTitle: false },
    ],
    [
        { id: 'fourth_1', title: 'Helpful Links', isTitle: true },
        { id: 'fourth_2', title: 'FAQ', href: '#', isTitle: false },
        { id: 'fourth_3', title: 'Search', href: '#', isTitle: false },
        { id: 'fourth_4', title: 'Blog', href: '#', isTitle: false },
        { id: 'fourth_5', title: 'Candle Information', href: '#', isTitle: false },
    ],
]

const FooterColumn: React.FC<{ items: (typeof footerData)[0] }> = ({ items }) => (
    <div className="flex flex-col items-start w-fit">
        {items.map((item) =>
            item.isTitle ? (
                <p key={item.id} className="uppercase font-[300] text-[12px] mb-[21px] max-w-[206px]">
                    {item.title}
                </p>
            ) : (
                <Link key={item.id} href={item.href!} className="font-[400] text-[14px] mb-[14px] hover:underline">
                    {item.title}
                </Link>
            )
        )}
    </div>
)

export const Footer: React.FC = () => {
    return (
        <div className="w-full flex flex-col container mx-auto px-4 mb-[30px]">
            <div className="grid grid-cols-2 w-full gap-5 justify-between items-start sm:flex">
                {footerData.map((column, index) => (
                    <FooterColumn key={index} items={column} />
                ))}
            </div>
            <div className="flex mt-[82px] flex-col gap-[30px] items-center">
                <SocialsLinks />
                <p className="font-[300] uppercase">© 2025 - AUSTRIS CANDLES</p>
            </div>
        </div>
    )
}
