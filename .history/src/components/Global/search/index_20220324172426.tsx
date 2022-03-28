import { Button } from '../button';

import iconSearch from '../assets/icon/search.png';
import iconFilter from '../assets/icon/filter.png';
import '../styles/components/search.scss'


export function Search () {
    return (
        <div id="component--search">
            <div className='component--search__input'>
                <input type="text" placeholder="Digite o nome do (colocar variavel)"/>
                <div className='search__input--icon'>
                    <img id="icon-search" src={iconSearch} alt="icone de identificação visual do campo de busca" />
                </div>
            </div>
            <Button 
            type="submit" 
            className="btn__search">
                Buscar
            </Button>
            <div className='component--filters'>
                <img id="icon-filter" src={iconFilter} alt="icone de identificação visual das opções de filtragem" />
            </div>
        </div>
    )
}