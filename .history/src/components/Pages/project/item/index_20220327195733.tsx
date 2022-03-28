import { ProjectProps } from '../../../../types/project'
import { Button } from '../../../Global/button'

import moreOptions from '../../../../assets/icon/more-option-white.png'
import './style.scss'

type ItemProps = ProjectProps & {
    selectProject: (selectedProject: ProjectProps) => void 
}


export function ItemProject({ id, title, abbreviation, describe, selecionado, selectProject}: ItemProps) {
    return (
        <div id="page-item-project">
            <div  
                className={`${'item-project--box'} ${selecionado ? 'item-project--box-active' : ''}`}
                onClick={() =>  selectProject({ id, title, abbreviation, describe, selecionado})}>
                <div className="item-project--container">
                    <div className="item-project--head">
                        <div className="item-project--container__initials">
                            <div className="item-project--initials">
                                <h2 className="item-project--initials__title">{abbreviation}</h2>
                            </div>
                            <div className="item-project--menber">
                                {/* <h2 className="item-project--menber__title">{member}</h2> */}
                            </div>
                        </div>
                        <div className="item-project--more-options">
                            <Button className="btn-more-options">
                                <img className="item-project--btn-more-options" src={moreOptions} alt="icone para expandir maios opções." />
                            </Button>               
                        </div>
                    </div>
                    <div className="item-project--content">
                        <div className="item-project--title">
                            <h2 className="item-project--title__title">{title}</h2>
                        </div>
                        <div className="item-project--divider"></div>
                        <div className="item-project--subtitle">
                            <h3 className="item-project--title__subtitle">{describe}</h3>
                        </div>
                    </div>
                    <div className="item-project--footer">
                        <Button
                        type="submit">Entrar</Button> 
                    </div>

                </div>
            </div>
        </div>
    )
}