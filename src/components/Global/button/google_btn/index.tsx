
import './style.scss'
import { ButtonGoogleProps } from '../../../../types/button'

export function ButtonGoogle({ className, children, onClick, type }: ButtonGoogleProps) {
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


