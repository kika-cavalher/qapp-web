
import { ProjectProps } from '../../../../types/project'
import { ItemProject } from '../item'
import './style.scss'

export type ListProps = {
    projects: ProjectProps[],
    selectProject: (selectedProject: ProjectProps) => void 
    edit: (title:string, abbreviation:string, describe:string) => void
}

export function ListProject ({projects, selectProject, edit}: ListProps) {

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
                {projects.map((item, index) => (
                    <ItemProject
                    selectProject={selectProject}
                    editar={(title, abbreviation, describe) => edit(title, abbreviation, describe)}
                        key={index}
                        {...item}
                    />
            ))}
            </div>
        </div>
    )
}