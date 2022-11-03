import { TopMenu } from "../../components/Layouts/menu";
import { Footer } from "../../components/Layouts/footer";
import { ListProject } from "./list";
import { TitlePage } from "../../components/Layouts/body/titlePage";
import { ButtonNewModal } from "../../components/Global/button/modal/new";

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
                <div className='page-project--list'>
                    <ListProject
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

