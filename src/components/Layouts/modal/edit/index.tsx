
import { useEffect, useState } from 'react'
import UseMessage from '../../../../contexts/useMessage'
import api from '../../../../services/api'
import { ProjectProps } from '../../../../types/project'
import { ButtonSend } from '../../../Global/button/send'

import editCrud  from '../../../../assets/icon/edit-crud.png'

import './style.scss'
import { useParams } from 'react-router'
import Message from '../../messages'

export function ButtonEditModal(projectData: ProjectProps) {
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState(projectData || {
        name: "",
        content: "",
        describe: "",
    })
    const [show, setShow] = useState(false)
    const { setMessage } = UseMessage()
    const [token] = useState(localStorage.getItem('token') || '')
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
    const {id} = useParams()

    useEffect(() => {
        api.get(`/projects/${project._id}`, {
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
    }, [token, id])

    function handleChange(e: any) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        const data = await api.patch(`/projects/${project._id}`, project, {
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

        setMessage(data.mgg)
    }

    return (
        <>
            <div className='container--crud-edit' >
                <button className='btn-edit' onClick={handleOpen}>
                    <img className="img--btn__edit" src={editCrud} alt="icone para editar" />
                </button>
            </div>
            {show && (
                <div className='main--modal'>
                    <div className='main--header__modal'>
                        <button className='buttonCLoseModal' onClick={handleClose}>Voltar</button>
                        <h1 className='TitleModal'>Editar Projeto</h1>
                    </div>
                    <div className='main--modal__project'>
                        <div className='container--modal__project'>
                        <Message />
                            <form className='content--modal__form' onSubmit={handleSubmit}>
                                <div className='content--modal__header'>
                                    <h1 className='title--modal__project'>Segmente os seus projetos para melhor gerir e organizar.</h1>
                                    {/* <div className='content--modal__idProject'>
                                        <h1 className='title--Idproduct'>Id do projeto</h1>
                                        <input className='input--Idproduct'
                                            type="text"
                                            name='content'
                                            value={project.content} />
                                    </div> */}
                                </div>
                                <div className='content--form__title'>
                                    <p>Título</p>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name='name'
                                        maxLength={20}
                                        value={project.name || ''}
                                        placeholder="Escreva o titulo do projeto para identificar de forma rápida." />
                                </div>
                                <div className='content--form__describe'>
                                    <p>Descrição</p>
                                    <textarea
                                        onChange={handleChange}
                                        name='describe'
                                        maxLength={80}
                                        value={project.describe || ''}
                                        placeholder="Descreva o seu projeto para saber em detalhes sobre o objetivo do projeto e testes dentro deles." />
                                </div>
                                <ButtonSend />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}