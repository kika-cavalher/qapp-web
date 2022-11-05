
import './style.scss'
import { ButtonProps } from '../../../../../types/button'

export function ButtonCloseModal ({ className, children, onClick, type }: ButtonProps) {
    return (
        <div className={className} >
            <button
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </div>
    )
}


