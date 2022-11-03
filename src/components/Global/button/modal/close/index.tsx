
import { ButtonProps } from '@material-ui/core'
import iconCloseModal from '../../../../../assets/icon/closeModalX.png'
import './style.scss'

export function ButtonCloseModal( {onClick}: ButtonProps) {
    return (
        <div className='container--modal-close' >
            <button className='icon-close-modal' onClick={onClick}>
                <img className="img--close-modal" src={iconCloseModal} alt="icone para fechar o modal." />
            </button>
        </div>
    )
}
