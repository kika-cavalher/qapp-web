import imgLogin from '../assets/images/imgLogin.jpg';
import logoQapp from '../assets/images/logoQapp.png';
import googleIconImg from '../assets/icon/googleIconImg.png';

import '../styles/pages/login.scss'

export function LoginPage() {
    return (
        <div id="page-login">
            <main>
                <div>
                    <img id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
                    <div className='page-login--main__container'>
                        <div className='btn--div__google'>
                            <button className='btn__google'>
                                <img src={googleIconImg} alt="Logo da empresa QApp" />
                                <p>Entrar usando sua conta Google.</p>
                            </button>
                        </div>
                        <div>Ou entre com o seu login</div>
                        <form>
                            <input type="text" placeholder="Insira o seu e-mail" />
                            <input type="text" placeholder="Insira a sua senha" />
                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </main>
            <aside>
                <img src={imgLogin} alt="Imagem decorativa na pagina" />
            </aside>

        </div>
    )
}