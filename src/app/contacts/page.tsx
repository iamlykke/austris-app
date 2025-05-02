import { Services } from '@/components/ui/Services'
import Link from 'next/link'

export default function Contacts() {
    return (
        <>
            <div className="flex flex-col gap-5 px-3 mb-[100px] mt-[100px] mx-auto container max-w-[720px]">
                <p className="text-[24px] font-[400] uppercase text-center">Contacts</p>
                <div className="flex flex-col gap-3">
                    <p className="text-[14px] font-[400]">
                        Hey! If you want to talk anything about candles, order something or simply want to say hello, just
                        catch me on the below.
                    </p>
                    <p className="text-[14px] font-[400]">
                        Mail:{' '}
                        <Link className="font-bold" href="mailto:resong@icloud.com">
                            resong@icloud.com
                        </Link>
                    </p>
                    <p className="text-[14px] font-[400]">
                        Telegram:{' '}
                        <Link className="font-bold" href="https://t.me/resong_design">
                            @resong_design
                        </Link>
                    </p>
                </div>
            </div>
            <Services />
        </>
    )
}
