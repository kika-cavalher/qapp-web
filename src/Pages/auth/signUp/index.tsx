import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { ButtonSend } from '../../../components/Global/button/send';
import Logo from '../../../components/Layouts/logo';
import { Input } from '../../../components/Global/inputs/input';

import imgLogin from '../../../assets/images/imgLogin.jpg';
import './style.scss'

export function RegisterPage() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    function handleChange(e: any) {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        });
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
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
                                <Input
                                    text='Nome completo'
                                    type="text"
                                    name="name"
                                    placeholder="Insira o seu nome."
                                    handleOnChange={handleChange} />
                            </div>
                            <div className='page-register--forms__email'>
                                <Input
                                    text='E-mail'
                                    type="email"
                                    name="email"
                                    placeholder="Insira o seu e-mail."
                                    handleOnChange={handleChange} />
                            </div>
                            <div className='page-register--forms__password'>
                                <Input
                                    text='Senha'
                                    type="password"
                                    name="password"
                                    placeholder="Insira a sua senha."
                                    handleOnChange={handleChange} />
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                <Input
                                    text='Confirmar senha'
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirme a sua senha."
                                    handleOnChange={handleChange} />
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