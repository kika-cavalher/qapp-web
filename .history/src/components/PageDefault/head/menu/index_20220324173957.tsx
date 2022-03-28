import { Link } from 'react-router-dom'

import './style.scss'
import Logo from '../logo';

export function TopMenu () {



    return (
        <div id="component--top-menu">
             <div className='component--top-menu__logo'>
                <Logo />
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
                <div className='component--user__round'>
{/*                     <h1>{initials}</h1> */}
                </div>
            </div>
        </div>
    )
}