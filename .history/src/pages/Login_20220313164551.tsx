import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import Logo from '../components/Logo';

/* import { Button } from '../components/Button'; */
import imgLogin from '../assets/images/imgLogin.jpg';
import googleIconImg from '../assets/icon/googleIconImg.png';
import '../styles/pages/login.scss'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React from 'react';


export function LoginPage() {
    const history = useNavigate();
    const { user, signInWithGoogle } = useAuth()
    const [state, setState] = React.useState({
        email: "",
        password: ""
      })

    function handleChange(e: any) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      }

    async function handleCreateUser () {
        if (!user) {
            await signInWithGoogle()
          }
            history('/')
        }

    function handleSignInWithEmailAndPassword() {
        const auth = getAuth();
        if (!user) {
            signInWithEmailAndPassword(auth, state.email, state.password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                if(error.code ==='auth/user-not-found'||error.code ==='auth/wrong-password'){
                    alert('Usuário não encontrado. Email e/ou senha inválida!')
                }
            });
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
                                    <input 
                                    type="email"
                                    name="email"
                                    value={state.email}
                                    onChange={handleChange}
                                    placeholder="Insira o seu e-mail"/>
                                </div>
                                <div className='page-login--forms__password'>
                                    <p>Senha</p>
                                    <input 
                                    type="password" 
                                    name="password"                                    
                                    value={state.password}
                                    onChange={handleChange}
                                    placeholder="Insira sua senha"/>
                                </div>
                                <div className='btn__send'>
                                    <button
                                    onClick={handleSignInWithEmailAndPassword} 
                                    type="submit" >Entrar</button>
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
    };
