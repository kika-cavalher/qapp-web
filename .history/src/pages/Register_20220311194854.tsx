import { Link } from 'react-router-dom'
import {FormEvent, useState} from 'react';
import validator from 'validator'
    
import { Button } from '../components/Button';
import Logo from '../components/Logo';
    
import imgLogin from '../assets/images/imgLogin.jpg';
import '../styles/pages/login.scss'
import '../styles/pages/register.scss'
import React from 'react';


type UserRegister = {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

/* type ValidatorPassword = {
    password: string;
  }

type errorMessage = {
    error: String;
}


  } */
    
export function RegisterPage () {
    const [user, setUser] = useState<UserRegister>();
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


    function aoEnviar() {
        console.log({...state})
    }

    function enviarFOrmulario(e: FormEvent) {
        e.preventDefault();
        aoEnviar();
    };


    function ValidatorPassword(senha: string) {
        const [error, setErrorMessage] = useState(''); 
        if(!senha === undefined) {
            if (validator.isStrongPassword(senha, {
                minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
              })) {
                setErrorMessage('Senha forte')
                console.log(senha)
                return senha
              } else {
                setErrorMessage('Senha fraca')
                console.log(senha)
            }
        }
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
                                    value={state.name}
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Insira o seu nome"/>
                            </div>
                            <div className='page-register--forms__email'>
                                    <p>E-mail</p>
                                    <input
                                    value={state.email}
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-register--forms__password'>
                                <p>Senha</p>
                                <input
                                value={state.password}
                                onChange={handleChange}
                                name="senha"
                                type="text" 
                                placeholder="Insira sua senha"/>                 
                                <span style={{ fontWeight: 'bold', color: 'red', }}>
                                    {ValidatorPassword}</span>
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                    <p>Confirmar senha</p>
                                    <input
                                value={state.confirmPassword}
                                onChange={handleChange}                                 
                                    type="text" 
                                    placeholder="Confirmar senha"/>
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