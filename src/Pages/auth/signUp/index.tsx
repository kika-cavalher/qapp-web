import { Link } from 'react-router-dom'
import { useContext, useState, } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { RegisterInputs } from '../../../types/inputs';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


import { AuthContext } from '../../../contexts/UserContext';
import { ButtonSend } from '../../../components/Global/button/send';
import Logo from '../../../components/Layouts/logo/justLogo';

import imgLogin from '../../../assets/images/imgLogin.jpg';
import Message from '../../../components/Layouts/messages';

import '../../../components/Global/forms/signUsers/style.scss'
import '../../../components/Global/forms/errors/style.scss'
import './style.scss'


export function RegisterPage() {
    const { registerUser } = useContext(AuthContext)
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
        name: yup
            .string()
            .required("O nome é obrigatório."),
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
        confirmPassword: yup
            .string()
            .required("A confirmação da senha é obrigatório.")
            .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputs>({
        resolver: yupResolver(schema)
    });

    async function onSubmit(userData: any) {
        registerUser(userData)
        console.log(userData)
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
                    <Message />
                    <div className='page-register--main__forms'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='page-register--forms__name'>
                                <p>Nome completo</p>
                                <input
                                    type="text"
                                    placeholder="Insira o seu nome."
                                    {...register("name", { required: true })} />
                                <span className="errorMessage errorMessage_register">{errors.name?.message}</span>
                            </div>
                            <div className='page-register--forms__email'>
                                <p>E-mail</p>
                                <input
                                    type="email"
                                    placeholder="Insira o seu e-mail."
                                    {...register("email", { required: true })} />
                                <span className="errorMessage errorMessage_register">{errors.email?.message}</span>

                            </div>
                            <div className='main__container--password  register__container--message'>
                                <IconButton className='eye--show-password register__show-password'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >Mostrar senhas
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </div>
                            <div className='page-register--forms__password'>
                                <p>Senha</p>
                                <input
                                    type={values.showPassword ? "text" : "password"}
                                    placeholder="Insira a sua senha."
                                    autoComplete="off"
                                    {...register("password", { required: true })} />
                                <span className="errorMessage errorMessage_register">{errors.password?.message}</span>
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                <p>Confirmar Senha</p>
                                <input
                                    type={values.showPassword ? "text" : "password"}
                                    placeholder="Confirme a sua senha."
                                    {...register("confirmPassword", { required: true })} />
                                <span className="errorMessage errorMessage_register">{errors.confirmPassword?.message}</span>
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

