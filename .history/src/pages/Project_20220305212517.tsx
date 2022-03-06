
import { TopMenu } from "../components/top-menu";
import { Search } from "../components/search";

import iconAdd from '../assets/icon/add.png';

export function ProjectPage () {
    const arrumarVariavel = "Projetos";

    return (
        <div id="page-project">
            <TopMenu />
            <h1>{arrumarVariavel}</h1>
            <Search />
            <div className='page-project--main__container'>
                <div className='page-project--cards'>
                    <div className='page-project--cards__new'>
                        <div className='page-project--cards__new--icon'>
                            <img id="icon-add" src={iconAdd} alt="icone de orientação para adicionar novo projeto" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}