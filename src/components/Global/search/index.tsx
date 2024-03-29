import iconSearch from '../../../assets/icon/search.png';
import './style.scss'
import { ButtonSend } from '../button/send';


export function Search () {
    return (
        <div id="component--search">
            <div className='component--search__input'>
                <input type="text" placeholder="Digite o nome do (colocar variavel)"/>
                <div className='search__input--icon'>
                    <img id="icon-search" src={iconSearch} alt="icone de identificação visual do campo de busca" />
                </div>
            </div>
            <ButtonSend 
            type="submit" 
            className="btn__search">
                Buscar
            </ButtonSend>
        </div>
    )
}