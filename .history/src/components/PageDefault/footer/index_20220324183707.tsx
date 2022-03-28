
import iconLinkedin from '../../../assets/icon/linkedin.png';
import iconInstagram from '../../../assets/icon/instagram.png';
import iconGithub from '../../../assets/icon/github.png';
import './style.scss';
import { Link } from 'react-router-dom';

export function Footer () {
    return (
        <div id="component--footer">
            <p>Produzido por Erica Cavalher</p>
            <div className='footer--list__social-media'>
                <Link to="https://www.linkedin.com/in/erica-cavalher/">
                    <img id="icon-add--linkedin" src={iconLinkedin} alt="icone de orientação para adicionar novo projeto" />
                </Link>
                <Link to="https://www.instagram.com/kikacavalher/">
                    <img id="icon-add--instagram" src={iconInstagram} alt="icone de orientação para adicionar novo projeto" />
                </Link>
                <Link to="https://github.com/kika-cavalher">
                    <img id="icon-add--github" src={iconGithub} alt="icone de orientação para adicionar novo projeto" />
                </Link>
            </div>
        </div>
    )
}