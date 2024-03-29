
import { ButtonProps } from '../../../../types/button'

import './style.scss'

export function ButtonReturn ({ className, children, onClick, type }: ButtonProps) {
    return (
        <div className={className} >
            <button onClick={onClick} type={type}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M20 32.708 7.292 20 20 7.292l1.5 1.5-10.208 10.166h21.416v2.084H11.292L21.5 31.208Z"/></svg>
                {children}
            </button>
        </div>
    )
}


