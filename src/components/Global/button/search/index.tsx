
import './style.scss'
import { ButtonSearchProps } from '../../../../types/button'

export function ButtonSearch ({ className, children, onClick, type }: ButtonSearchProps) {
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


