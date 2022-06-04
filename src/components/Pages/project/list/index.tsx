
import { useEffect, useState } from 'react'
import api from '../../../../services/api'
import { ProjectProps } from '../../../../types/project'

import { ItemProject } from '../item'

import './style.scss'

export function ListProject() {
        const [projectsList, setProjectsList] = useState<ProjectProps[]>([])

    useEffect(() => {
        api.get("projects")
        .then(res => setProjectsList(res.data))
    }, [])

    return (
            <div id="page-list-project">
                <div className="page-list--itens">
                    {projectsList.map((projects, index) =>
                        <div className="page-list--container" key={index}>
                            <ItemProject
                                id={projects.id}
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