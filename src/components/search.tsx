import { Button } from '../components/Button';

import iconSearch from '../assets/icon/search.png';
import iconFilter from '../assets/icon/filter.png';


export function Search () {
    return (
        <div id="component--search">
            <div className='component--search__input'>
                <input type="text" placeholder="Digite o nome do (colocar variavel)"/>
                <img id="icon-search" src={iconSearch} alt="icone de identificação visual do campo de busca" />
            </div>
            <div className='btn__search'>
                <Button type="submit">Buscar</Button>
            </div>
            <div className='component--filters'>
                <img id="icon-filter" src={iconFilter} alt="icone de identificação visual das opções de filtragem" />
            </div>
        </div>
    )
}