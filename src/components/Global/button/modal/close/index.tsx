
import { ButtonProps } from '@material-ui/core'
import iconCloseModalGrey from '../../../../../assets/icon/closeModalGrey.png'
import iconCloseModalWhite from '../../../../../assets/icon/closeModalWhite.png'
import './style.scss'

export function ButtonCloseModal( {onClick}: ButtonProps) {
    return (
        <div className='container--modal-close' >
            <button className='icon-close-modal' onClick={onClick}> 
                <img className="img--close-modal__grey" src={iconCloseModalGrey} alt="icone para fechar o modal." />
                <img className="img--close-modal__White" src={iconCloseModalWhite} alt="icone para fechar o modal." />
            </button>
        </div>
    )
}
