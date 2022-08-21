import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { FormInputs } from '../../../types/inputs';

import { AuthContext } from '../../../contexts/UserContext';
import { ButtonSend } from '../../../components/Global/button/send';
import Logo from '../../../components/Layouts/logo';

import imgLogin from '../../../assets/images/imgLogin.jpg';
import './style.scss'

export function RegisterPage() {
    const navigate = useNavigate()
    const { registerUser } = useContext(AuthContext)

    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório."),
        email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório."),
        password: yup.string().min(6, "A senha deve ter no minimo 6 caracteres").required("A senha é obrigatório."),
        confirmPassword: yup.string().required("A confirmação da senha é obrigatório.").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
      }).required();

      const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: yupResolver(schema)
      });

    async function onSubmit(userData: any) {
        registerUser(userData)
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='page-register--forms__name'>
                                <label>Nome completo
                                    <input
                                        type="text"
                                        placeholder="Insira o seu nome."
                                        {...register("name", { required: true })}

                                    />
                                    <span className="errorMessage">{errors.name?.message}</span>
                                </label>
                            </div>
                            <div className='page-register--forms__email'>
                                <label>E-mail
                                    <input
                                        type="email"
                                        placeholder="Insira o seu e-mail."
                                        {...register("email", { required: true })}
                                    />
                                    <span className="errorMessage">{errors.email?.message}</span>
                                </label>
                            </div>
                            <div className='page-register--forms__password'>
                                <label>Senha
                                    <input
                                        type="password"
                                        placeholder="Insira a sua senha."
                                        {...register("password", { required: true })}
                                    />
                                    <span className="errorMessage">{errors.password?.message}</span>
                                </label>
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                <label>Confirmar Senha
                                    <input
                                        type="password"
                                        placeholder="Confirme a sua senha."
                                        {...register("confirmPassword", { required: true })}
                                    />
                                    <span className="errorMessage">{errors.confirmPassword?.message}</span>

                                </label>
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

