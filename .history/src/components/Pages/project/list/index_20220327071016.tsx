
import React from 'react';
import { ProjectProps } from '../../../../types/project'
import { ItemProject } from '../item'
import './style.scss'

export type ListProps = {
    projects: ProjectProps[],
    selectProject: (selectedProject: ProjectProps) => void 
}

export function ListProject ({projects, selectProject}: ListProps) {

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
                {projects.map(item => (
                    <ItemProject
                    selectProject={selectProject}
                        key={item.id}
                        {...item}
                    />
            ))}
            </div>
        </div>
    )
}