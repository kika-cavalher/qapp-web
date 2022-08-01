import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react';

import { ButtonSend } from '../../../Global/button/send';

import Logo from '../../../PageDefault/head/logo';
import imgLogin from '../../../../assets/images/imgLogin.jpg';
import './style.scss'
import '../signIn/style.scss'



export function RegisterPage () {
    const navigate = useNavigate()
    const [state, setState] = useState({
        name: "",
        confirmPassword: ""
      })

    function handleChange(e: any) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      }

      const [signUpForms, setsignUpForms] = useState({
        email: "",
        password: ""
      })

    function handleChangesignUp(e: any) {
        const value = e.target.value;
        setsignUpForms({
          ...signUpForms,
          [e.target.name]: value
        });
      }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            navigate("/auth/sign-in") 
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <div id="page-login">
            <main>
                <div className='page-register--main__container'>
                    <div className='page-register--main__header'>
                        <div className='page-register--main__logo'>
                            <Logo />
                        </div>
                        <div className='page-register--main__title'>
                            <div className='page-register--container__title'>
                                <h1>Faça o seu cadastro.</h1>
                                <h2>Já possuí conta conosco? </h2>
                                <Link to='/auth/sign-in' className='page-register--main__link-register'>
                                Faça o Login
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='page-register--main__forms'>
                        <form onSubmit={handleSubmit}>
                            <div className='page-register--forms__name'>
                                    <p>Nome completo</p>
                                    <input
                                    name="name"
                                    value={state.name}
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Insira o seu nome"/>
                            </div>
                            <div className='page-register--forms__email'>
                                    <p>E-mail</p>
                                    <input
                                    name="email"                                    
                                    value={signUpForms.email}
                                    onChange={handleChangesignUp}
                                    type="email" 
                                    placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-register--forms__password'>
                                    <p>Senha</p>
                                    <input
                                    name="password"                                    
                                    value={signUpForms.password}
                                    onChange={handleChangesignUp}
                                    type="password" 
                                    placeholder="Insira sua senha"/>                 
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                    <p>Confirmar senha</p>
                                    <input
                                    name="confirmPassword"
                                    value={state.confirmPassword}
                                    onChange={handleChange}                                 
                                    type="password"
                                    placeholder="Confirmar senha"/>
                            </div>
                            <ButtonSend
                                className='btn__send'
                                type="submit">Entrar
                            </ButtonSend>
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