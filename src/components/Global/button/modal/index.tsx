
import './style.scss'
import { ButtonModalProps } from '../../../../types/button'

export function ButtonModal ({ className, children, onClick, type }: ButtonModalProps) {
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


