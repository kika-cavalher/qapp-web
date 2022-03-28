import {ButtonHTMLAttributes} from 'react'
import '../styles/components/button.scss'



type Button = {
    ButtonProps: ButtonHTMLAttributes<HTMLButtonElement>
    type?: "button" | "submit" | "reset" | undefined,
    className?: string
    onClick?: () => void
}

export function Button (props:Button) {
    const { className, type, onClick, ButtonProps } = props
    return (
        <button 
        onClick={onClick} 
        className={`${className}`}
        type={type}
         {...ButtonProps} />
    )
}


//onClick = {() => funcao()}