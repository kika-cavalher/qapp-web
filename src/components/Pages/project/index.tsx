import { useProjects } from "../../../hooks/useProjects";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import { ListProject } from "./list";
import { TitlePage } from "../../PageDefault/body/titlePage";
import { ButtonModal } from "../../Global/button/modal";


import './style.scss'


export function ProjectPage() {
    const { handleAddProject } = useProjects()

    return (
        <div id="page-project">
            <TopMenu />
            <div className='page-project--main__container'>
                <TitlePage titlePage={'Projetos'} />
                <div className='page-project--container__options'>
                    <Search />
                    <ButtonModal
                        className="btn-open-modal"
                        onClick={handleAddProject}
                        >Novo projeto
                    </ButtonModal>
                </div>
                <div className='page-project--list'>
                    <ListProject
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

