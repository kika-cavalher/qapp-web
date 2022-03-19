import { Link } from 'react-router-dom'
import { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import Logo from '../../components/Logo';
    
import imgLogin from '../../assets/images/imgLogin.jpg';
import '../../styles/pages/login.scss'
import '../../styles/pages/register.scss'
import { getAuth, signOut } from '@firebase/auth';

interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword: string
}
    
export function RegisterPage () {
/*     const {signUp} = useAuth() */
    const [error, setError] = useState("")
    const [state, setState] = useState({
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
      
    function HandleSignOut(e: any)   {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
    }

      
    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        setError("")
        try{
/*             signUp(state.email, state.password) */
        }catch(error: unknown) {
            setError((error as Error).message)
        };
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
                        <form>
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
                                    type="email" 
                                    placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-register--forms__password'>
                                    <p>Senha</p>
                                    <input
                                    name="password"                                    
                                    value={state.password}
                                    onChange={handleChange}
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
                            <div className='btn__send'>
                                <button type="submit">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
    
                <div className='page-login--main__img'>
                    <button  onClick={HandleSignOut} type="submit"></button>
                    <img src={imgLogin} alt="Imagem decorativa na pagina" />
                </div>
            </main>
        </div>
    )
};