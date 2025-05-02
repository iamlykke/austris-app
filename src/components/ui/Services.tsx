import Image from 'next/image'

interface IService {
    id: number
    title: string
    description: string
    imageLink: string
}

export const Services: React.FC = () => {
    const servicesList: IService[] = [
        { id: 1, title: 'Free RS shipping', description: 'On all orders over 30 €', imageLink: '/services/shipping.svg' },
        {
            id: 2,
            title: 'ADD gift message',
            description: 'Add a personalised message to your candle',
            imageLink: '/services/gift.svg',
        },
        {
            id: 3,
            title: 'Happiness guarantee',
            description: 'Our care team will be happy to help',
            imageLink: '/services/smile.svg',
        },
        {
            id: 4,
            title: '5 star rated',
            description: 'Across our products and services',
            imageLink: '/services/star.svg',
        },
    ]
    return (
        <div className="border-t-2 w-full">
            <div className="flex flex-col gap-[60px] mx-auto container pt-[54px] pb-[60px] items-center justify-center sm:items-start sm:flex-row">
                {servicesList.map((service) => {
                    return (
                        <div className="flex flex-col text-center items-center w-[300px]" key={service.id}>
                            <Image
                                width={32}
                                height={32}
                                src={service.imageLink}
                                alt={service.title}
                                className="mb-[26px]"
                            />
                            <p className="mb-[14px] text-[12px] font-[300] uppercase">{service.title}</p>
                            <p className="text-[14px] font-[400]">{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
