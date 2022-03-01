import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { auth, firebase } from '../services/firebase'

import imgLogin from '../assets/images/imgLogin.jpg';
import logoQapp from '../assets/images/logoQapp.png';
import googleIconImg from '../assets/icon/googleIconImg.png';

import '../styles/pages/login.scss'

import { Button } from '../components/Button';

export function LoginPage() {
    const history = useNavigate();

    function navigateToHome(e: { preventDefault: () => void; }) {
        e.preventDefault();
        history('/');
    }

    function handleCreateUser () {
        const provider = new firebase.auth.GoogleAuthProvider()

        auth.signInWithPopup(provider).then(result => {console.log(result)})
    }

    return (
        <div id="page-login">
            <main>
                <div className='page-login--main__container'>
                    <div className='page-login--main__logo'>
                        <img onClick={navigateToHome} id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
                    </div>
                    <div className='page-login--main__title'>
                        <div className='page-login--container__title'>
                            <h1>Faça o seu login.</h1>
                            <h2>Não tem conta ainda? </h2>
                            <Link to='/register' className='page-login--main__link-register'>
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
                    <div className='page-login--main__login-forms'>
                        <form>
                            <div className='page-login--login-forms__name'>
                                <p>E-mail</p>
                                <input type="text" placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-login--login-forms__password'>
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