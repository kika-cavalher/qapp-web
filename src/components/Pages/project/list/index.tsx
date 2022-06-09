import { Key } from 'react'
import { useAxios } from '../../../../hooks/useAxios'

import { ProjectProps } from '../../../../types/project'

import { ItemProject } from '../item'

import './style.scss'

export function ListProject() {
    const { data } = useAxios('projects')
      
    return (
            <div id="page-list-project">
                <div className="page-list--itens">
                    {data?.map((projects: ProjectProps, index: Key | null | undefined) =>
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