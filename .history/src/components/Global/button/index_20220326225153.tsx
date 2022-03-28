
import './style.scss'

//usestate
//onchange
//value
//name


type ButtonProps = {
    className?: string,
    children?: React.ReactNode,
    name?: string,
    value?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}

export function Button ({ className, children, name, value, onClick, type }: ButtonProps) {
    return (
        <div className={className} >
            <button
            onClick={onClick}
            name={name}
            type={type}
            value={value}
            >
                {children}
            </button>
        </div>
    )
}


