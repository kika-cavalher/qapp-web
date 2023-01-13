
import './style.scss'
import editCrud  from '../../../../../assets/icon/edit-crud.png'

export function ButtonEdit () {
    return (
        <div className='container--crud-edit' >
            <button className='btn-edit'>
                <img className="img--btn__edit" src={editCrud} alt="icone para editar" />
            </button>
        </div>
    )
}



