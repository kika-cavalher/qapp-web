import { InputProps } from "../../../types/inputs";
import './style.scss'

export function Input({ className, type, text, name, placeholder, handleOnChange, value, multiple }: InputProps) {
    return (
        <div className={className} >
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                {...(multiple ? {multiple} : '')}
            />
        </div>
    )
}
