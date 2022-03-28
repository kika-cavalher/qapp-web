
import './style.scss'

//usestate
//onchange
//value
//name


type ButtonProps = {
    className?: string
    children?: React.ReactNode
    name?: string
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}

export function Button ({ className, children, onClick, type }: ButtonProps) {
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


