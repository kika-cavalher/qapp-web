
import './style.scss'
import { ButtonEditProps } from '../../../../types/button'

export function ButtonEdit ({ className, children, onClick, type }: ButtonEditProps) {
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


