import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

import Logo from '../../../PageDefault/head/logo';
import iconError from '../../../../assets/icon/error.png'

import imgLogin from '../../../../assets/images/imgLogin.jpg';
import '../../../../styles/styles.scss'
import './style.scss'

import { ButtonSend } from '../../../Global/button/send';
import { useQuery } from 'react-query';
import api from '../../../../services/api';


export function LoginPage() {
    type FormData = {
        email: string;
        password: string;
    }
    // const {data, isLoading} = useQuery('users', () =>  api.get('users'))
    // console.log(data)

    const { handleSubmit, register, formState: { errors } } = useForm<FormData>({ mode: 'onSubmit' });

    const onSubmit = handleSubmit((data) => {

    })

    return (
        <>
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
                        <div className='page-login--main__forms'>
                            <form onSubmit={onSubmit}>
                                <div className='page-login--forms__email'>
                                    <p>E-mail</p>
                                    <input
                                        {...register("email", { required: { value: true, message: "É necessário informar o seu e-mail" } })}
                                        type="email"
                                        name="email"
                                        placeholder="Insira o seu e-mail" />
                                    <div className='error-field'>
                                        {errors?.email ? (<>
                                                <img className='error-field--img' src={iconError} alt="icon error"/> 
                                                <p className='error-field--text'>{errors?.email?.message}</p>
                                            </>) : ""}</div>
                                </div>
                                <div className='page-login--forms__password'>
                                    <p>Senha</p>
                                    <input
                                        {...register("password", { required: { value: true, message: "É necessário informar sua senha" } })}
                                        type="password"
                                        name="password"
                                        placeholder="Insira sua senha" />
                                    <div className='error-field'>
                                        {errors?.password ? (<>
                                            <img className='error-field--img' src={iconError} alt="icon error" />
                                            <p className='error-field--text'>{errors?.password?.message}</p>
                                        </>) : ""}</div>
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
                        <img className='page-img' src={imgLogin} alt="Imagem decorativa na pagina" />
                    </div>
                </main>
            </div>
        </>
    )
};


