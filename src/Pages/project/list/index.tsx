import { Console } from 'console'
import { Key, useEffect, useState } from 'react'
import { ButtonDelete } from '../../../components/Global/button/CRUD/delete'
import { ButtonEdit } from '../../../components/Global/button/CRUD/edit'
import Message from '../../../components/Layouts/messages'
import UseMessage from '../../../contexts/useMessage'
import api from '../../../services/api'

import { ProjectProps } from '../../../types/project'

import './style.scss'

export function ListProject() {

    const [projects, setProjects] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { setMessage } = UseMessage()

    useEffect(() => {
        api.get('/projects/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
            .then((response) => {
                setProjects(response.data.projects)
            })
            .catch((err) => {
                return err.response.data
            })
    }, [token])

    async function removeProject(projects: any) {
        const data = await api.delete(`/projects/${projects._id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
            .then((response) => {
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
                return response.data.projects
            })
            .catch((err) => {
                return err.response.data
            })

            console.log(projects._id)
        setMessage(data.msg)
    }

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
            <Message />
                {projects.map((projects: ProjectProps, index: Key) =>
                    <div className="page-list--container" key={index}>
                        <div id="page-item-project">
                            <div
                                className="item-project--box">
                                <div className="item-project--container">
                                    <div className="item-project--head">
                                        <div className="item-project--container__initials">
                                            <div className="item-project--initials">
                                                <h2 className="item-project--initials__title">{`00${index}`}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-project--content">
                                        <div className="item-project--title">
                                            <h2 className="item-project--title__title">{projects.name}</h2>
                                        </div>
                                        <div className="item-project--subtitle">
                                            <h3 className="item-project--title__subtitle">{projects.describe}</h3>
                                        </div>
                                    </div>
                                    <div className="item-project--divider"></div>
                                    <div className="item-project--more-options">

                                        <ButtonEdit />
                                        <ButtonDelete onClick={() => removeProject(projects._id)}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}