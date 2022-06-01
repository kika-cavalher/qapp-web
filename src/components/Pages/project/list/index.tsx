
import { useEffect, useState } from 'react'
import api from '../../../../services/api'
import { ListProps } from '../../../../types/project'

import { ItemProject } from '../item'

import './style.scss'

export function ListProject() {
        const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get("projects").then(({data}) => {
            setProjects(data)
        })
    }, [])

    return (
            <div id="page-list-project">
                <div className="page-list--itens">
                    {projects.map((projects, index) => (
                        <ItemProject
                            key={index}
                            {...projects}
                        />
                    ))}
                </div>
            </div>
    )
}