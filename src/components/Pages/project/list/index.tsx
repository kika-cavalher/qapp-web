
import { ProjectProps } from '../../../../types/project'
import { ItemProject } from '../item'
import './style.scss'

export type ListProps = {
    projects: ProjectProps[],
    selectProject: (selectedProject: ProjectProps) => void 
    ItemUpdate: (title:string, abbreviation:string, describe:string) => void
}

export function ListProject ({projects, selectProject, ItemUpdate}: ListProps) {

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
                {projects.map((item, index) => (
                    <ItemProject
                    selectProject={selectProject}
                    ItemUpdate={(title, abbreviation, describe) => ItemUpdate(title, abbreviation, describe)}
                        key={index}
                        {...item}
                    />
            ))}
            </div>
        </div>
    )
}