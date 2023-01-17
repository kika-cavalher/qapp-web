import { useEffect, useState } from 'react'
import { ButtonDelete } from '../../../components/Global/button/CRUD/delete'
import { ButtonEdit } from '../../../components/Global/button/CRUD/edit'
import Message from '../../../components/Layouts/messages'
import UseMessage from '../../../contexts/useMessage'
import api from '../../../services/api'


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

    async function removeProject(id: any) {
        const data = await api.delete(`/projects/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
            .then((response) => {
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
                return response.data
            })
            .catch((err) => {
                return err.response.data
            })

        setMessage(data.msg)
    }

    return (
        <div id="page-list-project">
            <div className="page-list--itens">
                <Message />
                {projects?.map((project: any) =>
                    <div className="page-list--container" key={project._id}>
                        <div id="page-item-project">
                            <div
                                className="item-project--box">
                                <div className="item-project--container">
                                    <div className="item-project--head">
                                        <div className="item-project--container__initials">
                                            <div className="item-project--initials">
                                                <h2 className="item-project--initials__title">{project.content}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-project--content">
                                        <div className="item-project--title">
                                            <h2 className="item-project--title__title">{project.name}</h2>
                                        </div>
                                        <div className="item-project--subtitle">
                                            <h3 className="item-project--title__subtitle">{project.describe}</h3>
                                        </div>
                                    </div>
                                    <div className="item-project--divider"></div>
                                    <div className="item-project--more-options">

                                        <ButtonEdit />
                                        <ButtonDelete onClick={() => removeProject(project._id)} />
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