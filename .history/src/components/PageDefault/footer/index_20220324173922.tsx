
import iconLinkedin from '../../../assets/icon/linkedin.png';
import iconInstagram from '../../../assets/icon/instagram.png';
import iconGithub from '../../../assets/icon/github.png';
import './style.scss';

export function Footer () {
    return (
        <div id="component--footer">
            <p>Produzido por Erica Cavalher</p>
            <div className='footer--list__social-media'>
                <img id="icon-add--linkedin" src={iconLinkedin} alt="icone de orientação para adicionar novo projeto" />
                <img id="icon-add--instagram" src={iconInstagram} alt="icone de orientação para adicionar novo projeto" />
                <img id="icon-add--github" src={iconGithub} alt="icone de orientação para adicionar novo projeto" />
            </div>
        </div>
    )
}