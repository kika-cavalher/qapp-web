
import iconLinkedin from '../assets/icon/linkedin.png';
import iconInstagram from '../assets/icon/linkedin.png';
import iconGithub from '../assets/icon/linkedin.png';
import '../styles/components/footer.scss'

export function Footer () {
    return (
        <div id="component--footer">
            <p>Produzido por Erica Cavalher</p>
            <img id="icon-add--linkedin" src={iconLinkedin} alt="icone de orientação para adicionar novo projeto" />
            <img id="icon-add--instagram" src={iconInstagram} alt="icone de orientação para adicionar novo projeto" />
            <img id="icon-add--github" src={iconGithub} alt="icone de orientação para adicionar novo projeto" />
        </div>
    )
}