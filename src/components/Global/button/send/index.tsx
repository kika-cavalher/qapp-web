
import './style.scss'
import { ButtonSendProps } from '../../../../types/button'

export function ButtonSend ({ className, children, onClick, type }: ButtonSendProps) {
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


