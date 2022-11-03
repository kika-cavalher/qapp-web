import { useNavigate } from 'react-router-dom'

import { TitlePage } from '../../../components/Layouts/body/titlePage'
import { Footer } from '../../../components/Layouts/footer'
import { TopMenu } from '../../../components/Layouts/menu'

import avatarDefault from '../../../assets/images/avatarDefault.svg'
import avatarDefault1 from '../../../assets/images/avatarDefault1.png'
import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'
import './style.scss'


export function ProfilePage() {
    const navigate = useNavigate()

    const HomePage = () => {
        navigate('/projects')
    }

    return (
        <div className="page-profile">
            <TopMenu />
            <div className='page-profile--main__container'>
                <div className='page-project--header'>
                    <TitlePage titlePage={'Perfil'} />
                </div>
                <div className='main__content'>
                    <div className='main__avatar'>
                        <div className='avatar--img'>
                        <img src={avatarDefault2} alt="Avatar perfil" />
                        </div>
                    </div>
                    <div className='main__forms'>
                        <form>
                            <div className='page-register--forms__name'>
                                <p>Nome completo</p>
                                <input
                                    type="text"
                                    placeholder="Insira o seu nome." />
                            </div>
                            <div className='page-register--forms__email'>
                                <p>E-mail</p>
                                <input
                                    type="email"
                                    placeholder="Insira o seu e-mail." />
                            </div>
                            <div className='page-register--forms__email'>
                                <p>initials</p>
                                <input
                                    type="email"
                                    placeholder="Insira o seu e-mail." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

