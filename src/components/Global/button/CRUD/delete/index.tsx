
import './style.scss'
import deleteCrud  from '../../../../../assets/icon/delete-crud.png'
import { ButtonProps } from '../../../../../types/button'


export function ButtonDelete ({ onClick }: ButtonProps) {
    return (
        <div className='container--crud-delete' >
            <button className='btn-delete' onClick={onClick}>
                <img className="img--btn__delete" src={deleteCrud} alt="icone para excluir" />
            </button>
        </div>
    )
}


