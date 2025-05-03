import Image from 'next/image'
import Link from 'next/link'

interface ISocialLink {
    id: string
    title: string
    icon: string
    href: string
}

export const SocialsLinks: React.FC = () => {
    const socialsData: ISocialLink[] = [
        {
            id: 'social_1',
            title: 'Flowwow',
            icon: '/images/socials/flowwow.svg',
            href: 'https://flowwow.com/en-en/shop/austris-handmade-candles/',
        },
        { id: 'social_2', title: 'Telegram', icon: '/images/socials/telegram.svg', href: '#' },
        { id: 'social_3', title: 'Facebook', icon: '/images/socials/facebook.svg', href: '#' },
        { id: 'social_4', title: 'Instagram', icon: '/images/socials/instagram.svg', href: '#' },
        { id: 'social_5', title: 'Pinterest', icon: '/images/socials/pinterest.svg', href: '#' },
    ]

    return (
        <section className=" flex flex-row items-center gap-[32px]">
            {socialsData.map((social) => {
                return (
                    <Link
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        className="opacity-100 hover:opacity-75 transition-opacity duration-200"
                    >
                        <Image src={social.icon} alt={social.title} width={20} height={20} />
                    </Link>
                )
            })}
        </section>
    )
}
