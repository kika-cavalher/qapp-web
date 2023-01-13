
import { useState } from 'react'
import UseMessage from '../../../../contexts/useMessage'
import api from '../../../../services/api'
import { ProjectProps } from '../../../../types/project'
import { ButtonSend } from '../../../Global/button/send'
import Message from '../../messages'


import './style.scss'

export function ButtonNewModal(projectData : ProjectProps ) {
    const [show, setShow] = useState(false)
    const [token] = useState(localStorage.getItem('token') || '')
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    const { setMessage } = UseMessage()
    const [project, setProject] = useState(projectData || {
        name: "",
        describe: "",
    })

    function handleChange(e: any) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        const data = await api.post('/projects/create', project, {
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
        <>
            <div className='main--btn_new'>
                <div className='container--btn_new'>
                    <button className="img--add"
                        onClick={handleOpen}>+</button>
                    <button className='btn_new'
                        onClick={handleOpen}>Novo Projeto</button>
                </div>
            </div>
            {show && (
                <div className='main--modal'>
                    <div className='main--header__modal'>
                        <button className='buttonCLoseModal' onClick={handleClose}>Voltar</button>
                        <h1 className='TitleModal'>Adicionar novo Projeto</h1>
                    </div>
                    <div className='main--modal__project'>
                        <div className='container--modal__project'>
                            <div className='content--modal__header'>
                                <h1 className='title--modal__project'>Segmente os seus projetos para melhor gerir e organizar.</h1>
                                <div className='content--modal__idProject'>
                                    {/* <h1 className='title--Idproduct'>Id do projeto</h1>
                                <h2 className='input--Idproduct'></h2> */}
                                </div>
                            </div>
                            <Message />
                            <form className='content--modal__form' onSubmit={handleSubmit}>
                                <div className='content--form__title'>
                                    <p>Título</p>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name='name'
                                        value={project.name || ''}
                                        placeholder="Escreva o titulo do projeto para identificar de forma rápida." />
                                </div>
                                <div className='content--form__describe'>
                                    <p>Descrição</p>
                                    <textarea
                                        onChange={handleChange}
                                        name='describe'
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