import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useNavigate();
  const { user, signInWithGoogle } = useAuth()

  function navigateToHome(e: { preventDefault: () => void; }) {
      e.preventDefault();
      history('/');
  }
  
  async function handleCreateUser () {
      if (!user) {
          await signInWithGoogle()
        }
          history('/')
      }

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

    return (
        <div id="page-login">
            <main>
                <div className='page-login--main__container'>
                    <div className='page-login--main__logo'>
                        <img onClick={navigateToHome} id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
                    </div>
                    <div className='page-login--main__title'>
                        <div className='page-login--container__title'>
                            <h1>Faça o seu login.</h1>
                            <h2>Não tem conta ainda? </h2>
                            <Link to='/auth/sign-up' className='page-login--main__link-register'>
                            Cadastre-se
                            </Link>
                        </div>
                    </div>
                    <div className='page-login--main__google'>
                        <button onClick={handleCreateUser} className='btn__google'>
                            <img id="img-icon__google" src={googleIconImg} alt="Logo da empresa QApp" />
                            <p>Entrar usando sua conta Google.</p>
                        </button>
                    </div>
                    <div className='page-login--main__divider'>
                        <div>Ou entre com o seu login</div>
                    </div>
                    <div className='page-login--main__forms'>
                        <form>
                            <div className='page-login--forms__email'>
                                <p>E-mail</p>
                                <input
                                error={state.isError}
                                id="username"
                                type="email"
                                label="Username"
                                onChange={handleUsernameChange}
                                onKeyPress={handleKeyPress} 
                                placeholder="Insira o seu e-mail"/>
                            </div>
                            <div className='page-login--forms__password'>
                                <p>Senha</p>
                                <input 
                                error={state.isError}
                                id="password"
                                type="password"
                                label="Password"
                                helperText={state.helperText}
                                onChange={handlePasswordChange}
                                onKeyPress={handleKeyPress}
                                placeholder="Insira sua senha"/>
                            </div>
                            <div className='btn__send'>
                                <Button 
                                onClick={handleLogin}
                                disabled={state.isButtonDisabled}
                                type="submit">Entrar</Button>
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

export default Login;