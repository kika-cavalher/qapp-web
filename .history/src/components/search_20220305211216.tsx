import { Button } from '../components/Button';

import iconSearch from '../assets/icon/search.png';

export function Search () {
    return (
        <div id="component--search">
            <div className='component--search__input'>
                <input type="text" placeholder="Digite o nome do (colocar variavel)"/>
                <img id="icon-search" src={iconSearch} alt="Logo da empresa QApp" />
            </div>
            <div className='btn__search'>
                <Button type="submit">Buscar</Button>
            </div>
        </div>
    )
}