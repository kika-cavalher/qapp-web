
import './style.scss'
import { ButtonProps } from '../../../../types/button'

export function ButtonSend ({ onClick}: ButtonProps) {
    return (
        <div className='btn__send'>
            <button onClick={onClick} type='submit'>
                Enviar
            </button>
        </div>
    )
}


