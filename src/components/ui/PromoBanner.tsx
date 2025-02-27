import { X } from 'lucide-react'

interface Props {
    onClose: () => void
}

export const PromoBanner: React.FC<Props> = ({ onClose }) => {
    return (
        <div className="bg-beige flex justify-center h-10 px-4 items-center relative w-full">
            <p className="text-xs uppercase">Free shipping on orders over 30€</p>
            <button onClick={onClose} className="absolute right-4">
                <X size={16} color="#1c1c1c" />
            </button>
        </div>
    )
}
