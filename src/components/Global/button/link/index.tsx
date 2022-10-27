
import './style.scss'
import { ButtonLinkProps } from '../../../../types/button'

export function ButtonLink ({ className, children, onClick, type }: ButtonLinkProps) {
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


