import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { FormEvent, useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Logo from '../../../components/Layouts/logo/justLogo';
import { ButtonSend } from '../../../components/Global/button/send';

import { LoginInputs } from '../../../types/inputs';

import imgLogin from '../../../assets/images/imgLogin.jpg';

import '../../../components/Global/forms/errors/style.scss'
import '../../../components/Global/forms/signUsers/style.scss'
import './style.scss'
import { AuthContext } from '../../../contexts/UserContext';
import Message from '../../../components/Layouts/messages';


export function LoginPage() {
    const { login } = useContext(AuthContext)

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const schema = yup.object({
        email: yup
            .string()
            .email("Digite um e-mail válido")
            .required("O e-mail é obrigatório."),
        password: yup
            .string()
            .min(6, "A senha deve ter no minimo 6 caracteres")
            .required("A senha é obrigatório.")
            .matches(
                // eslint-disable-next-line
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\.\$%\^&\*])(?=.{6,})/,
                "Deve conter 6 caracteres, 1 maiúsculo, 1 minúsculo, 1 numero e 1 caractere especial."
            ),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>({
        resolver: yupResolver(schema)
    });

    async function onSubmit(userData: any) {
        login(userData)
        console.log(userData)
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
                    <Message />
                    <div className='page-login--main__forms'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='page-login--forms__email'>
                                <p>E-mail</p>
                                <input
                                    type="email"
                                    placeholder="Insira o seu e-mail"
                                    {...register("email", { required: true })} />
                                <span className="errorMessage errorMessage_login">{errors.email?.message}</span>
                            </div>
                            <div className='page-login--forms__password'>
                                <div className='header--message'>
                                    <p>Senha</p>
                                    <div className='main__container--password login__container--message'>
                                        <IconButton className='eye--show-password login__show-password'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >Mostrar senha
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </div>
                                </div>
                                <input
                                    type={values.showPassword ? "text" : "password"}
                                    placeholder="Insira sua senha"
                                    {...register("password", { required: true })} />
                                <span className="errorMessage errorMessage_login">{errors.password?.message}</span>
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


