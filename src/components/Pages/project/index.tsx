import { useState } from "react";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import { Button } from "../../Global/button/default";
import { ListProject } from "./list";
import { TitlePage } from "../../PageDefault/body/titlePage";

import { useProjects } from "../../../hooks/useProjects";

import './style.scss'


export function ProjectPage() {
    const [projects, setProjects] = useState([]);
    const { handleAddProject } = useProjects()

    return (
        <div id="page-project">
            <TopMenu />
            <div className='page-project--main__container'>
                <TitlePage titlePage={'Projetos'} />
                <div className='page-project--container__options'>
                    <Search />
                    <Button
                        onClick={handleAddProject}
                        className="btn-open-modal"> Novo projeto
                    </Button>
                </div>
                <div className='page-project--list'>
                    <ListProject
                        projects={projects}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

