import { ItemProps, ProjectProps } from '../../../../types/project'
import { Button } from '../../../Global/button/default'

import deleteCrud from '../../../../assets/icon/delete-crud.png'
import editCrud from '../../../../assets/icon/edit-crud.png'

import './style.scss'

export function ItemProject({ title, abbreviation, describe }: ItemProps) {

    return (
            <div id="page-item-project">
                <div
                    className="item-project--box">
                    <div className="item-project--container">
                        <div className="item-project--head">
                            <div className="item-project--container__initials">
                                <div className="item-project--initials">
                                    <h2 className="item-project--initials__title">{abbreviation}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="item-project--content">
                            <div className="item-project--title">
                                <h2 className="item-project--title__title">{title}</h2>
                            </div>
                            <div className="item-project--subtitle">
                                <h3 className="item-project--title__subtitle">{describe}</h3>
                            </div>
                            <div className="item-project--menber">
                                {/* <h2 className="item-project--menber__title">{member}</h2> */}
                            </div>
                        </div>
                        <div className="item-project--divider"></div>
                        <div className="item-project--more-options">
                            <Button
                                className="btn-crud btn-crud-edit"
                            // onClick={() => ItemUpdate(title, abbreviation, describe)}
                            >
                                <img className="item-project--btn-more-edit" src={editCrud} alt="icone para expandir maios opções." />
                            </Button>
                            <Button className="btn-crud btn-crud-delete">
                                <img className="item-project--btn-more-delete" src={deleteCrud} alt="icone para expandir maios opções." />
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
    )
}