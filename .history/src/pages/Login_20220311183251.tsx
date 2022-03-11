import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import Logo from '../components/Logo';

import { Button } from '../components/Button';
import imgLogin from '../assets/images/imgLogin.jpg';
import googleIconImg from '../assets/icon/googleIconImg.png';
import '../styles/pages/login.scss'


export function LoginPage() {
    const history = useNavigate();
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateUser () {
        if (!user) {
            await signInWithGoogle()
          }
            history('/')
        }

    return (
        <div id="page-login">
            <main>
                <div className='page-login--main__container'>
                    <div className='page-login--main__logo'>
                        <Logo />
                    </div>
                    <div className='page-login--main__title'>
                        <div className='page-login--container__title'>
                            <h1>Faça o seu login.</h1>
                            <h2>Não tem conta ainda? </h2>
                            <Link to='/auth/sign-up' className='page-login--main__link-register'>
                            Cadastre-se
                            </Link>
                        </div>
                    </div>
                    <div className='page-login--main__google'>
                        <button onClick={handleCreateUser} className='btn__google'>
                            <img id="img-icon__google" src={googleIconImg} alt="Logo da empresa QApp" />
                            <p>Entrar usando sua conta Google.</p>
                        </button>
                    </div>
                    <div className='page-login--main__divider'>
                        <div>Ou entre com o seu login</div>
                    </div>
                    <div className='page-login--main__forms'>
                        <form>
                            <div className='page-login--forms__email'>
                                <p>E-mail</p>
                                <input type="text" placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-login--forms__password'>
                                <p>Senha</p>
                                <input type="text" placeholder="Insira sua senha"/>
                            </div>
                            <div className='btn__send'>
                                <Button type="submit">Entrar</Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='page-login--main__img'>
                    <img src={imgLogin} alt="Imagem decorativa na pagina" />
                </div>
            </main>
        </div>
    )
}