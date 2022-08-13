import { Key } from 'react'

import { ProjectProps } from '../../../types/project'

import { ItemProject } from '../item'

import './style.scss'

export function ListProject() {

    // if (!project) {
    //     return <p> Carregando...</p>
    // } 

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
                {/* {???.map((projects: ProjectProps, index: Key) =>
                    <div className="page-list--container" key={index}>
                        <ItemProject
                            _id={projects._id}
                            name={projects.name}
                            content={projects.content}
                            describe={projects.describe}
                        />
                    </div>
                )} */}
            </div>
        </div>
    )
}