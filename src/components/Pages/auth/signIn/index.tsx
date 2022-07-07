import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

import Logo from '../../../PageDefault/head/logo';

import imgLogin from '../../../../assets/images/imgLogin.jpg';
import './style.scss'

import { ButtonSend } from '../../../Global/button/send';
import { useQuery } from 'react-query';
import api from '../../../../services/api';


export function LoginPage() {
    type FormData = {
        email: string;
        password: string;
    }
    const {data, isLoading} = useQuery('users', () =>  api.get('users'))
    console.log(data)

    const { handleSubmit, register, formState: { errors }  } = useForm<FormData>({mode:'onSubmit'});

    const onSubmit = handleSubmit((data) => {
        
    })


    return isLoading? <>'Carregando...'</> :    
         (
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
                                    {...register("email", {required: {value: true, message: "Preenche o campo seu ANIMAL"}})}
                                    type="email"
                                    name="email"
                                    placeholder="Insira o seu e-mail"/>
                                    <div>{errors?.email ? errors?.email?.message : ""}</div>
                                </div>
                                <div className='page-login--forms__password'>
                                    <p>Senha</p>
                                    <input
                                    {...register("password", {required: {value: true, message: "Preenche o campo seu ANIMAL"}})}
                                    type="password" 
                                    name="password"                                    
                                    placeholder="Insira sua senha"/>
                                    <div>{errors?.password ? errors?.password?.message : ""}</div>
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


