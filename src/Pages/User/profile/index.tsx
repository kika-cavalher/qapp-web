import { useEffect, useState } from 'react'
import { ButtonSend } from '../../../components/Global/button/send'

import { TitlePage } from '../../../components/Layouts/body/titlePage'
import { Footer } from '../../../components/Layouts/footer'
import { TopMenu } from '../../../components/Layouts/menu'
import api from '../../../services/api'
import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'

import './style.scss'
import UseMessage from '../../../contexts/useMessage'
import Message from '../../../components/Layouts/messages'
import { UserAvatarMenu } from '../../../components/Layouts/avatar'


export function ProfilePage() {
    const { setMessage } = UseMessage()
    const [token] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState({
        _id: "",
        name: "",
        email: "",
        password: "",
        image: ""
    })

    useEffect(() => {

        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            setUser(response.data)
        })

    }, [token])

    function onFileChange(e: any) {
        setUser({ ...user, [e.target.name]: e.target.files[0] })
    }

    function handleChange(e: any) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        const formData = new FormData()
        await (Object.keys(user) as (keyof typeof user)[]).forEach((key, index) => {
            formData.append(key, user[key])
        });

        const data = await api.patch(`/users/edit/${user._id}`, formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            return response.data
        }).catch((error) => {
            return error.response.data
        })

        setMessage(data.msg)
    }

    return (
        <div className="page-profile">
            <TopMenu />
            <div className='page-profile--main__container'>
                <div className='page-profile--header'>
                    <TitlePage titlePage={'Perfil'} />
                </div>
                <Message />
                <div className='main__content'>
                    <div className='main__forms'>
                        <div className='main__forms--content'>
                            <div className='main__avatar--content'>
                            <UserAvatarMenu 
                            className='avatar-profile'/>
                            </div>
                            <form onSubmit={handleSubmit} className='main-profile__forms'>
                                <div className='forms__content'>
                                    <div className='page-profile--forms__name'>
                                        <p>Nome completo</p>
                                        <input
                                            type="text"
                                            placeholder="Insira o seu nome."
                                            name='name'
                                            onChange={handleChange}
                                            value={user.name || ''}
                                        />
                                    </div>
                                    <div className='page-profile--forms__email'>
                                        <p>E-mail</p>
                                        <input
                                            type="email"
                                            placeholder="Insira o seu e-mail."
                                            name='email'
                                            value={user.email || ''}
                                        />
                                    </div>
                                    <div className='page-profile--forms__password'>
                                        <p>Senha</p>
                                        <input
                                            type="password"
                                            name='password'
                                            onChange={handleChange}
                                            value={user.password || '******'}
                                        />
                                    </div>
                                </div>
                                <div className='container--btn-send'>
                                    <ButtonSend />
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </div >
    )
}

