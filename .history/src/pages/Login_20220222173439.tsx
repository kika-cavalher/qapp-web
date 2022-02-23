import imgLogin from '../assets/images/imgLogin.jpg';
import logoQapp from '../assets/images/logoQapp.png';
import googleIconImg from '../assets/icon/googleIconImg.png';

import '../styles/pages/login.scss'

export function LoginPage() {
    return (
        <div id="page-login">
            <main>
                <div>
                    <img src={logoQapp} alt="Logo da empresa QApp" />
                    <button>
                        <img src={googleIconImg} alt="Logo da empresa QApp" />
                        Entrar usando sua conta Google.
                    </button>
                    <div>Ou entre com o seu login</div>
                    <form>
                        <input type="text" placeholder="Insira o seu e-mail" />
                        <input type="text" placeholder="Insira a sua senha" />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </main>
            <aside>
                <img src={imgLogin} alt="Imagem decorativa na pagina" />
            </aside>

        </div>
    )
}