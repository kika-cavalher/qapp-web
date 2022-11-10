import { useEffect, useState } from 'react'
import { ButtonFile } from '../../../components/Global/button/file'
import { ButtonSend } from '../../../components/Global/button/send'

import { TitlePage } from '../../../components/Layouts/body/titlePage'
import { Footer } from '../../../components/Layouts/footer'
import { TopMenu } from '../../../components/Layouts/menu'
import api from '../../../services/api'
import { UserAvatar } from '../avatar'

import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'

import './style.scss'


export function ProfilePage() {

    const [token] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
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

    // function onFileChange(e: any){
    //     setUser({ ...user, [e.target.name]: e.target.files[0] })
    // }

    return (
        <div className="page-profile">
            <TopMenu />
            <div className='page-profile--main__container'>
                <div className='page-profile--header'>
                    <TitlePage titlePage={'Perfil'} />
                </div>
                <div className='main__content'>
                    <div className='container--avatar'>
                        <UserAvatar />
                    </div>
                    <div className='page-profile--divider'>
                    </div>
                    <div className='main__forms'>
                        <form className='main-profile__forms'>
                            <div className='page-profile--forms__name'>
                                <p>Nome completo</p>
                                <input
                                    type="text"
                                    placeholder="Insira o seu nome."
                                    value={user.name || ''}
                                />
                            </div>
                            <div className='page-profile--forms__email'>
                                <p>E-mail</p>
                                <input
                                    type="email"
                                    placeholder="Insira o seu e-mail."
                                    value={user.email || ''}
                                />
                            </div>
                            <div className='page-profile--forms__email'>
                                <p>Senha</p>
                                <input
                                    type="password"
                                    value={user.password || '******'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='container--btn-send'>
                    <ButtonSend />
                </div>
            </div>
            <Footer />
        </div>

    )
}

