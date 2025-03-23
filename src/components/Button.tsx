import { ReactNode } from 'react'

interface IButton {
    children: ReactNode
}

export const Button = ({ children }: IButton) => {
    return (
        <div className="py-[11px] px-[36px] bg-[#D09D8B] w-fit text-[#4B4048] cursor-pointer transition-all duration-300 hover:bg-[#f1c3b1]">
            {children}
        </div>
    )
}
