
import '../styles/components/button.scss'



type Button = {
    className?: string
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}

export function Button ({ className, children, onClick, type }: Button) {
    return (
        <button 
        onClick={onClick} 
        className={`${className}`}
        type={type}
        >
            {children}
        </button>
    )
}


