import { Link } from 'react-router-dom'
import {FormEvent, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    
import { Button } from '../components/Button';
import Logo from '../components/Logo';
    
import imgLogin from '../assets/images/imgLogin.jpg';
import '../styles/pages/login.scss'
import '../styles/pages/register.scss'
import React from 'react';

    
export function RegisterPage () {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      })

    function handleChange(e: any) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      }

    function CreateNewUSer(e: any) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, state.email, state.password)
          .then((userCredential) => {
          const user = userCredential.user;
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };




    function aoEnviar() {
        console.log({...state})
    }

    function enviarFOrmulario(e: FormEvent) {
        e.preventDefault();
        aoEnviar();
    };



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
                        <form onSubmit={enviarFOrmulario}>
                            <div className='page-register--forms__name'>
                                    <p>Nome</p>
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
                                    value={state.email}
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-register--forms__password'>
                                    <p>Senha</p>
                                    <input
                                    name="password"                                    
                                    value={state.password}
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Insira sua senha"/>                 
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                    <p>Confirmar senha</p>
                                    <input
                                    name="confirmPassword"
                                    value={state.confirmPassword}
                                    onChange={handleChange}                                 
                                    type="text" 
                                    placeholder="Confirmar senha"/>
                            </div>
                            <div className='btn__send'>
                                <Button onClick={CreateNewUSer} type="submit">Entrar</Button>
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