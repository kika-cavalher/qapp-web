import Logo from '../justLogo';
import './style.scss'

export default function FullLogo() {

    return (
        <div className='component--top-menu__logo'>
            <Logo />
            <p>Gerenciador de testes.</p>
        </div>
    );
}


