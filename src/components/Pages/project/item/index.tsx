import { ProjectProps} from '../../../../types/project'

import { useProjects } from '../../../../hooks/useProjects'

import { ButtonEdit } from '../../../Global/button/edit'
import { ButtonDelete } from '../../../Global/button/delete'

import deleteCrud from '../../../../assets/icon/delete-crud.png'
import editCrud from '../../../../assets/icon/edit-crud.png'

import './style.scss'

export function ItemProject({ _id, name, content, describe }: ProjectProps) {

    const { handleEdit } = useProjects()

    return (
            <div id="page-item-project">
                <div
                    className="item-project--box">
                    <div className="item-project--container">
                        <div className="item-project--head">
                            <div className="item-project--container__initials">
                                <div className="item-project--initials">
                                    <h2 className="item-project--initials__title">{content}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item-project--content">
                            <div className="item-project--title">
                                <h2 className="item-project--title__title">{name}</h2>
                            </div>
                            <div className="item-project--subtitle">
                                <h3 className="item-project--title__subtitle">{describe}</h3>
                            </div>
                        </div>
                        <div className="item-project--divider"></div>
                        <div className="item-project--more-options">
                            
                            <ButtonEdit
                            className="btn-crud btn-crud-edit"
                            onClick={() => handleEdit({_id, name, content, describe})}
                            >
                                <img className="item-project--btn-more-edit" src={editCrud} alt="icone para editar projeto" />
                            </ButtonEdit>

                            <ButtonDelete className="btn-crud btn-crud-delete">
                                <img className="item-project--btn-more-delete" src={deleteCrud} alt="icone para excluir projeto" />
                            </ButtonDelete>
                        </div>

                    </div>
                </div>
            </div>
    )
}