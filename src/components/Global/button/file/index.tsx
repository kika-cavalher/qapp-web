
import { ButtonProps } from '../../../../types/button'
import './style.scss'

export function ButtonFile({onClick}: ButtonProps) {

    return (
        <div className='file--container' >
            <form className='file--form'>
                <button className="file--btn">
                    Selecionar imagem
                    <input className="file--none"
                        type="file"
                        name="image"
                        onClick={onClick} />
                </button>
            </form>
        </div>
    )
}


