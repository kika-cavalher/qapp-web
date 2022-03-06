
import iconLinkedin from '../assets/icon/linkedin.png';
import '../styles/components/footer.scss'

export function Footer () {
    return (
        <div id="component--footer">
            <p>Produzido por Erica Cavalher</p>
            <img id="icon-add" src={iconLinkedin} alt="icone de orientação para adicionar novo projeto" />
        </div>
    )
}