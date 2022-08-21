import { Link } from "react-router-dom";

export function ModalLinks() {
    return (
        <div className='component--top-menu__pages'>
            <ul className='top-menu__list'>
                <li className='top-menu__itens'>
                    <Link to='/' className='top-menu__pages--project menu-mobile__pages--projects'>Projetos
                    </Link>
                </li>
            </ul>
            <ul className='top-menu__list'>
                <li className='top-menu__itens'>
                    <Link to='/' className='top-menu__pages--reports menu-mobile__pages--reports'>Relatórios
                    </Link>
                </li>
            </ul>
        </div>
    )
}