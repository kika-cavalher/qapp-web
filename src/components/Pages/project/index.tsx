import { useState } from "react";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import { Button } from "../../Global/button/default";

import './style.scss'
import { Modal } from "../../Global/modal/index";
import { ListProject } from "./list";
import { ProjectsContextProvider } from "../../../contexts/ProjectsContext";
import { TitlePage } from "../../PageDefault/body/titlePage";


// const userName = localStorage.getItem("@qapp:user-name");
export function ProjectPage() {
    const page = "Projetos";
    const [openModal, setOpenModal] = useState(false);
    const [updateProject, setUpdateProject] = useState({});
    const [projects, setProjects] = useState([]);

    return (
        <ProjectsContextProvider>
            <div id="page-project">
                <TopMenu />
                <div className='page-project--main__container'>
                    <TitlePage titlePage={'Projetos'} />
                    <div className='page-project--container__options'>
                        <Search />
                        <Button
                            onClick={() => { setOpenModal(true) }}
                            className="btn-open-modal"> Novo projeto
                        </Button>
                    </div>
                    {openModal &&
                        <Modal
                            closeModal={setOpenModal}
                            titleModal={'Adicione um novo projeto.'}
                            nameModal={'Nome do projeto.'}
                            name_placeholder={'Qual será o titulo do seu projeto.'}
                            contentModal={'Abreviação.'}
                            content_placeholder={'3 caracteres.'}
                            describeModal={'Descreva o seu projeto.'}
                            describe_placeholder={'Descreva o seu projeto melhor nesse campo.'}
                        />
                    }
                    <div className='page-project--list'>
                        <ListProject
                            // ItemUpdate={(title, abbreviation, describe) => UpdateProject(title, abbreviation, describe)} 
                            projects={projects}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </ProjectsContextProvider>
    )
}

