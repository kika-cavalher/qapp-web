import iconSearch from '../assets/icon/search.svg';

export function Search () {
    return (
        <div id="component--search">
            <div className='page-register--forms__password'>
                <input type="text" placeholder="Digite o nome do (colocar variavel)"/>
                <img id="icon-search" src={iconSearch} alt="Logo da empresa QApp" />
            </div>
        </div>
    )
}