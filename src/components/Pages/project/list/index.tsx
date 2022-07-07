import { Key, useState } from 'react'
import { useQuery } from 'react-query'
import { useApi } from '../../../../hooks/useApi'
import api from '../../../../services/api'

import { ProjectProps } from '../../../../types/project'

import { ItemProject } from '../item'

import './style.scss'

export function ListProject() {
    // const { data: project } = useApi<ProjectProps[]>('projects')
    const [project, setProject] = useState([])
    const {data} = useQuery('project', () =>  api.get('projects'), {onSuccess: (resp) => setProject(resp.data)})

    if (!project) {
        return <p> Carregando...</p>
    } 

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
                {project.map((projects: ProjectProps, index: Key) =>
                    <div className="page-list--container" key={index}>
                        <ItemProject
                            _id={projects._id}
                            name={projects.name}
                            content={projects.content}
                            describe={projects.describe}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}