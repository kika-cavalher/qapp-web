import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';

import logoQapp from '../assets/images/logoQapp.png';
import '../styles/components/top-menu.scss'

export function TopMenu () {

    const { user } = useAuth()
    const history = useNavigate();
    
        function navigateToHome(e: { preventDefault: () => void; }) {
            e.preventDefault();
            history('/');
        }
/* 
    const initials = String(user?.name).split(" "); */
    const fullName = String(user?.name);
    const initials = fullName.normalize('NFD').replace(/[\u0300-\u036f]/g, "")


/*     for (let i = 0; i < 2; i++) {
        initials[i] = initials[i][0]
    } */

    console.log(initials)


    return (
        <div id="component--top-menu">
             <div className='component--top-menu__logo'>
                <img onClick={navigateToHome} id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
                <p>Gerenciador de testes.</p>
            </div>
            <div className='component--top-menu__pages'>
                <ul className='top-menu__list'>
                    <li className='top-menu__itens'>
                        <Link to='/' className='top-menu__pages--project'>Projetos
                        </Link>
                    </li>
                </ul>
                <ul className='top-menu__list'>
                    <li className='top-menu__itens'>
                        <Link to='/' className='top-menu__pages--reports'>Relatórios
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='component--top-menu__user'>
                <h1>{user?.name}</h1>
            </div>
        </div>
    )
}