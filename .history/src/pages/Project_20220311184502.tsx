
import { TopMenu } from "../components/Top-menu";
import { Search } from "../components/Search";
import { Footer } from "../components/Footer";

import iconAdd from '../assets/icon/add.png';
import '../styles/pages/project.scss'
import { Button } from "../components/Button";

export function ProjectPage () {
    const arrumarVariavel = "Projetos";

/*     async function HandleCreateProject(e) {

    } */

    return (
        <div id="page-project">
            <TopMenu />
                <div className='page-project--main__container'>
                    <div className='page-project--container__title'>
                        <h1>{arrumarVariavel}</h1>
                    </div>
                <Search />
                    <div className='page-project--cards'>
                        <div className='page-project--cards__new'>
                            <div className='page-project--cards__new--icon'>
                                <input className='page-project--cards__new--img' type="image" src={iconAdd} alt="icone de orientação para adicionar novo projeto"/>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}