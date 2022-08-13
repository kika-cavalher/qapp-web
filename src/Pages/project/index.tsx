import { TopMenu } from "../../components/Layouts/menu";
import { Search } from "../../components/Global/search";
import { Footer } from "../../components/Layouts/footer";
import { ListProject } from "./list";
import { TitlePage } from "../../components/Layouts/body/titlePage";
import { ButtonModal } from "../../components/Global/button/modal";


import './style.scss'


export function ProjectPage() {

    return (
        <div id="page-project">
            <TopMenu />
            <div className='page-project--main__container'>
                <TitlePage titlePage={'Projetos'} />
                <div className='page-project--container__options'>
                    <Search />
                    <ButtonModal
                        className="btn-open-modal"
                        // onClick={handleAddProject}
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

