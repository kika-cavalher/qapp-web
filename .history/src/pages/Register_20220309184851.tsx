import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
    
import { Button } from '../components/Button';
    
import imgLogin from '../assets/images/imgLogin.jpg';
import logoQapp from '../assets/images/logoQapp.png';
import '../styles/pages/login.scss'
import '../styles/pages/register.scss'

/* type UserRegister = {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  } */
    
export function RegisterPage () {
    const history = useNavigate();
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    
    function navigateToHome(e: { preventDefault: () => void; }) {
        e.preventDefault();
        history('/');
    };

    function enviarFOrmulario(e: { preventDefault: () => void; }) {
        e.preventDefault();
/*         aoEnviar(); */
    };


    
/* 
    const [name, setName] = useState("Valor inicial")



    function OnChangeInputValues ({(e) => {
        setName(e.target.value)}}
    );

    function OnSubmitUserForms ({(e) => {
        e.preventDefault();
        console.log(name)}}
    ); */
   
    
    return (
        <div id="page-login">
            <main>
                <div className='page-register--main__container'>
                    <div className='page-register--main__header'>
                        <div className='page-register--main__logo'>
                            <img onClick={navigateToHome} id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
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
                                    value={nome}
                                    onChange={(e) => {setNome(e.target.value)}}
                                    type="text" 
                                    placeholder="Insira o seu nome"/>
                            </div>
                            <div className='page-register--forms__email'>
                                    <p>E-mail</p>
                                    <input
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    type="text" 
                                    placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-register--forms__password'>
                                <p>Senha</p>
                                <input
                                value={senha}
                                onChange={(e) => {setSenha(e.target.value)}}                                
                                type="text" 
                                placeholder="Insira sua senha"/>
                            </div>
                            <div className='page-register--forms__confirm-password'>
                                    <p>Confirmar senha</p>
                                    <input
                                    value={confirmarSenha}
                                    onChange={(e) => {setConfirmarSenha(e.target.value)}}                                    
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