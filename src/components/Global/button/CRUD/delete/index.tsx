
import './style.scss'
import deleteCrud  from '../../../../assets/icon/delete-crud.png'

export function ButtonDelete () {
    return (
        <div className='container--crud-delete' >
            <button className='btn-delete'>
                <img className="img--btn__delete" src={deleteCrud} alt="icone para excluir" />
            </button>
        </div>
    )
}


