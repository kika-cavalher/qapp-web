import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import Logo from '../../components/Logo';

/* import { Button } from '../components/Button'; */
import imgLogin from '../../assets/images/imgLogin.jpg';
import googleIconImg from '../../assets/icon/googleIconImg.png';
import '../../styles/pages/login.scss'
import React, { useState } from 'react';
import { auth } from '../../services/firebase';
import { getAuth } from '@firebase/auth';

type auth = {
    accessToken: string;
  }
  

export function LoginPage() {
    const {signIn, user} = useAuth()
    const [error, setError] = useState("")
    const history = useNavigate();
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

      const handleSubmit = (e: any) => {
        e.preventDefault();
        signIn(state)
        const user = auth.currentUser
        if (user){
            console.log("VAAAAAAAIII")
        } else{
            console.log("MERDA")
        }

/*         
        console.log(user) */
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
                                {error && <h3>{error}</h3> }
                                <Link to='/auth/sign-up' className='page-login--main__link-register'>
                                Cadastre-se
                                </Link>
                            </div>
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
                                    onClick={handleSubmit}
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
