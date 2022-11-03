import { TopMenu } from "../../components/Layouts/menu";
import { Footer } from "../../components/Layouts/footer";
import { TitlePage } from "../../components/Layouts/body/titlePage";
import { ButtonNewModal } from "../../components/Global/button/modal/new";
import noData from "../../assets/images/noData.svg"

// import { ListProject } from "./list";
import './style.scss'

export function ProjectPage() {

    return (
        <div id="page-project">
            <TopMenu />
            <div className='page-project--main__container'>
                <TitlePage titlePage={'Projetos'} />
                <div className='page-project--container__options'>
                    <ButtonNewModal />
                </div>
                <div className='page-project--list page-project--waiting'>
                    <h1 className="no-projects">Nenhum projeto ainda...</h1>
                <img className="img--no-projects" src={noData} alt="icone sem data" />
                    {/* <ListProject
                    /> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

