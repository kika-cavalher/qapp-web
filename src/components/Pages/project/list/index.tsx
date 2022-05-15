
import { ProjectProps } from '../../../../types/project'
import { ItemProject } from '../item'
import './style.scss'

export type ListProps = {
    projects: ProjectProps[],
    // ItemUpdate: (title:string, abbreviation:string, describe:string) => void
}

export function ListProject ({projects}: ListProps) {

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
                {projects.map((project, index) => (
                    <ItemProject
                        // ItemUpdate={(title, abbreviation, describe) => ItemUpdate(title, abbreviation, describe)}
                        key={index}
                        {...project}
                    />
            ))}
            </div>
        </div>
    )
}