import { ProjectProps } from '../../../types/project'

import { ButtonEdit } from '../../../components/Global/button/CRUD/edit'
import { ButtonDelete } from '../../../components/Global/button/CRUD/delete'

import './style.scss'

export function ItemProject({ _id, name, content, describe }: ProjectProps) {
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

                        <ButtonEdit />
                        <ButtonDelete />
                    </div>

                </div>
            </div>
        </div>
    )
}