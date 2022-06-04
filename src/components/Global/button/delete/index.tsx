
import './style.scss'
import { ButtonDeleteProps } from '../../../../types/button'

export function ButtonDelete ({ className, children, onClick, type }: ButtonDeleteProps) {
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


