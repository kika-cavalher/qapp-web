
import './style.scss'
import { ButtonDefaultProps } from '../../../../types/button'

export function Button ({ className, children, onClick, type }: ButtonDefaultProps) {
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


