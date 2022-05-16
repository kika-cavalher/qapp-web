
import { ProjectsContextProvider } from '../../../../contexts/ProjectsContext'
import { ListProps, ProjectProps } from '../../../../types/project'
import { ItemProject } from '../item'
import './style.scss'

export function ListProject({ projects }: ListProps) {

    return (
        <ProjectsContextProvider>
            <div id="page-list-project">
                <div className="page-list--itens">
                    {projects.map((project, index) => (
                        <ItemProject
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </ProjectsContextProvider>
    )
}