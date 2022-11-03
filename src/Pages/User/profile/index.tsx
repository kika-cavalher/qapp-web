import { ButtonFile } from '../../../components/Global/button/file'

import { TitlePage } from '../../../components/Layouts/body/titlePage'
import { Footer } from '../../../components/Layouts/footer'
import { TopMenu } from '../../../components/Layouts/menu'
import { UserAvatar } from '../avatar'

import './style.scss'


export function ProfilePage() {

    return (
        <div className="page-profile">
            <TopMenu />
            <div className='page-profile--main__container'>
                <div className='page-profile--header'>
                    <TitlePage titlePage={'Perfil'} />
                </div>
                <div className='main__content'>
                    <div className='container--avatar'>
                        <UserAvatar
                            className='avatar-profile' />
                        <ButtonFile />
                    </div>
                    <div className='page-profile--divider'>
                    </div>
                    <div className='main__forms'>
                        <form className='main-profile__forms'>
                            <div className='page-profile--forms__name'>
                                <p>Nome completo</p>
                                <input
                                    type="text"
                                    placeholder="Insira o seu nome." />
                            </div>
                            <div className='page-profile--forms__email'>
                                <p>E-mail</p>
                                <input
                                    type="email"
                                    placeholder="Insira o seu e-mail." />
                            </div>
                            <div className='page-profile--forms__email'>
                                <p>Iniciais</p>
                                <input
                                    type="email"
                                    placeholder="Insira as iniciais do seu nome." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

