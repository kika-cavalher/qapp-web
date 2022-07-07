import { Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";

import { ButtonSend } from '../../../Global/button/send';

import Logo from '../../../PageDefault/head/logo';
import imgLogin from '../../../../assets/images/imgLogin.jpg';
import './style.scss'
import '../signIn/style.scss'

import api from'../../../../services/api';
import { useState } from 'react';


export function RegisterPage () {
    const RegexHaveUppercase = RegExp(/(?=.[A-Z]).$/);
    const RegexHaveLowercase = RegExp(/(?=.[a-z]).$/);
    const RegexHaveNumber = RegExp(/((?=.\d)).$/);
    const RegexHaveQuantityCaracteres = RegExp(/(?=^.{8,}$).*$/);
    const navigate = useNavigate()

    type FormData ={
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

    const [apiError, setApiError] = useState("")
    const { handleSubmit, register, formState: { errors }  } = useForm<FormData>({mode:'onSubmit'});
    
    const onSubmit = handleSubmit(async(data) => {
        const res= await api.post("users", data);
        if(res.status == 201) {
            navigate("/auth/sign-in")
        }else{
            setApiError("Digitou algo errado")
        }
        console.log(res)
    })

    const passwordValidation = (password: string, confirmation: string = "") => {
        const regExp = [
          {
            test: RegexHaveQuantityCaracteres,
            message: "8 caracteres",
          },
          {
            test: RegexHaveUppercase,
            message: "1 letra minúscula",
          },
          {
            test: RegexHaveLowercase,
            message: "1 letra maiúscula",
          },
          {
            test: RegexHaveNumber,
            message: "1 número",
          },
        ];
        let msg = "";
        regExp.forEach((item) => {
          msg += item.test.test(password) ? "" : item.message + ", ";
        });
    
        if (confirmation === "") {
          return msg === "" || "Sua senha precisa conter: " + msg;
        } else {
          return confirmation === password || "Senhas diferentes";
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
                                <h2>Já possuí conta conosco?</h2>
                                <Link to='/auth/sign-in' className='page-register--main__link-register'>
                                Faça o Login
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='page-register--main__forms'>
                        <form onSubmit={onSubmit}>
                            <div className='page-register--forms__name'>
                                    <p>Nome completo</p>
                                    <input
                                    {...register("name", {required: true})}
                                    name="name"
                                    type="text" 
                                    placeholder="Insira o seu nome"/>
                                    <div>{errors?.name ? "Errors" : ""}</div>
                                    
                            </div>
                            <div className='page-register--forms__email'>
                                    <p>E-mail</p>
                                    <input
                                    {...register("email", {required: {value: true, message: "Preenche o campo seu ANIMAL"}})}
                                    name="email"                                    
                                    type="email" 
                                    placeholder="Insira o seu e-mail"/>
                                    <div>{errors?.email ? errors?.email?.message : ""}</div>
                            </div>
                            <div className='page-register--forms__password'>
                                    <p>Senha</p>
                                    <input
                                    {...register("password", {required: true})}
                                    name="password"                                    
                                    type="password" 
                                    placeholder="Insira sua senha"/>
                                    <div>{errors?.password ? errors?.password?.message : ""}</div>             
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                    <p>Confirmar senha</p>
                                    <input
                                    {...register("confirmPassword") }
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirmar senha"/>
                            </div>
                            <ButtonSend
                                className='btn__send'
                                type="submit">Entrar
                            </ButtonSend>
                            {apiError}
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