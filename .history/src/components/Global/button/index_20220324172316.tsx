
import './style.scss'



type Button = {
    className?: string
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}

export function Button ({ className, children, onClick, type }: Button) {
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


