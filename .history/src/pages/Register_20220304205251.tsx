    import { Link } from 'react-router-dom'
    import { useNavigate } from 'react-router-dom';
    
    import { Button } from '../components/Button';
    import { useAuth } from '../hooks/useAuth';
    
    import imgLogin from '../assets/images/imgLogin.jpg';
    import logoQapp from '../assets/images/logoQapp.png';
    import googleIconImg from '../assets/icon/googleIconImg.png';
    import '../styles/pages/login.scss'
    
    export function RegisterPage () {
        const history = useNavigate();
        const { user, signInWithGoogle } = useAuth()
    
        function navigateToHome(e: { preventDefault: () => void; }) {
            e.preventDefault();
            history('/');
        }
    
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
                            <img onClick={navigateToHome} id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
                        </div>
                        <div className='page-login--main__title'>
                            <div className='page-login--container__title'>
                                <h1>Faça o seu cadastro.</h1>
                                <h2>Já possuí conta conosco? </h2>
                                <Link to='/auth/sign-in' className='page-login--main__link-register'>
                                Faça o Login
                                </Link>
                            </div>
                        </div>
                        <div className='page-register--main__forms'>
                            <form>
                                <div className='page-register--forms__name'>
                                    <p>Nome</p>
                                    <input type="text" placeholder="Insira o seu nome"/>
                                </div>
                                <div className='page-register--forms__email'>
                                    <p>E-mail</p>
                                    <input type="text" placeholder="Insira o seu e-mail"/>
                                </div>
                                <div className='page-register--forms__password'>
                                    <p>Senha</p>
                                    <input type="text" placeholder="Insira sua senha"/>
                                </div>
                                <div className='page-register--forms__confirm-password'>
                                    <p>Confirmar senha</p>
                                    <input type="text" placeholder="Confirmar senha"/>
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