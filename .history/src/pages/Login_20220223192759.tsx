// import { Link } from 'react-router-dom'

import imgLogin from '../assets/images/imgLogin.jpg';
import logoQapp from '../assets/images/logoQapp.png';
import googleIconImg from '../assets/icon/googleIconImg.png';

import '../styles/pages/login.scss'

export function LoginPage() {
    return (
        <div id="page-login">
            <main>
                <div className='page-login--main__container'>
                    <div className='page-login--main__logo'>
                        <img id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
                    </div>
                    <div className='page-login--main__title'>
                        <h1>Faça o seu login.</h1>
                        <h2>Não tem conta ainda? </h2>
                        {/* <Link to="/">Cadastre-se</Link> */}
                    </div>
                    <div className='page-login--main__google'>
                        <button className='btn__google'>
                            <img id="img-icon__google" src={googleIconImg} alt="Logo da empresa QApp" />
                            <p>Entrar usando sua conta Google.</p>
                        </button>
                    </div>
                    <div className='page-login--main__divider'>
                        <div>Ou entre com o seu login</div>
                    </div>
                    <div className='page-login--main__login-forms'>
                        <form>
                            <input type="text" placeholder="Insira o seu e-mail" />
                            <input type="text" placeholder="Insira a sua senha" />
                            <button type="submit">Entrar</button>
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