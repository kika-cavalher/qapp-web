import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

import logoQapp from '../assets/images/logoQapp.png';

export function TopMenu () {

    const history = useNavigate();
    
        function navigateToHome(e: { preventDefault: () => void; }) {
            e.preventDefault();
            history('/');
        }

    return (
        <div id="component--top-menu">
             <div className='component--top-menu__logo'>
                <img onClick={navigateToHome} id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
                <p>Gerenciador de testes.</p>
            </div>
            <div className='component--top-menu__pages'>
                <Link to='/auth/sign-in' className='top-menu__pages--project'>Projetos
                </Link>
                <Link to='/auth/sign-in' className='top-menu__pages--reports'>Relatórios
                </Link>
            </div>
        </div>
    )
}