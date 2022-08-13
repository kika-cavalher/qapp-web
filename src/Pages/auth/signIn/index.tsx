import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React, { FormEvent } from 'react';

import Logo from '../../../components/Layouts/logo';

import imgLogin from '../../../assets/images/imgLogin.jpg';
import './style.scss'
import { ButtonSend } from '../../../components/Global/button/send';


export function LoginPage() {
    const navigate = useNavigate()
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


    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        try {
            navigate("/projects")
        } catch (error: any) {
            e.preventDefault()
            console.log("MERDA" + error.message)
        }
    }

        return (
            <div id="page-login">
                <main>
                    <div className='page-login--main__container'>
                        <div className='page-login--main__title'>
                            <div className='page-login--main__logo'>
                                <Logo />
                            </div>
                            <div className='page-login--container__title'>
                                <h1>Faça o seu login.</h1>
                                <h2>Não possui conta? </h2>
                                <Link to='/auth/sign-up' className='page-login--main__link-register'>
                                Cadastre-se
                                </Link>
                            </div>
                        </div>
                        <div className='page-login--main__google'>
                        </div>
                        <div className='page-login--main__divider'>
                            <div>Ou entre com o seu login</div>
                        </div>
                        <div className='page-login--main__forms'>
                            <form onSubmit={handleSubmit}>
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
                                    <ButtonSend
                                    type="submit">Entrar
                                    </ButtonSend>
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


