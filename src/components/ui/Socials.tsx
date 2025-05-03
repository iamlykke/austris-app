'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'

const images = [
    '/images/products/candle.png',
    '/images/products/candle.png',
    '/images/products/candle.png',
    '/images/products/candle.png',
    '/images/products/candle.png',
    '/images/products/candle.png',
    '/images/products/candle.png',
    '/images/products/candle.png',
]

export const Socials = () => {
    return (
        <section className="flex flex-col items-center border-t-2 py-14 gap-14">
            {/* Заголовок */}
            <div className="flex flex-col items-center gap-6 px-4 sm:px-0 w-full">
                <p className="text-xs uppercase text-center">Don&apos;t miss out!</p>
                <p className="text-lg uppercase text-center">follow us on social media</p>
            </div>

            {/* Swiper */}
            <div className="w-full container mx-auto px-3">
                <Swiper
                    modules={[Navigation]}
                    navigation // стрелки ‹ ›
                    spaceBetween={3}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2.2 },
                        768: { slidesPerView: 3.2 },
                        1024: { slidesPerView: 4.2 },
                        1280: { slidesPerView: 6 },
                    }}
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i} className="rounded-lg overflow-hidden">
                            <div className="w-full h-0 pb-[100%]">
                                <Image
                                    src={src}
                                    alt={`slide-${i}`}
                                    fill
                                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
