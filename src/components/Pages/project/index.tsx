import { useState } from "react";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import { Button } from "../../Global/button";

import './style.scss'
import { Modals } from "../../Global/modal/index";
import { ProjectProps } from "../../../types/project";
import { ListProject } from "./list";

export function ProjectPage () {
    const page = "Projetos";
    const [openModal, setOpenModal] = useState(false)
    const [project, setProject] = useState<ProjectProps[]>([]);
    const [selected, setSelected] = useState<ProjectProps>();

    const userName = localStorage.getItem("@qapp:user-name");

  
    function selectedProject(selecterProject: ProjectProps) {
        setSelected(selecterProject);
        setProject(oldProject => oldProject.map(project => ({
        ...project,
        selected: project.id === selecterProject.id ? true : false
      })))
    }

    return (
        <div id="page-project">
            <TopMenu />
                <div className='page-project--main__container'>
                    <div className='page-project--container__title'>
                        <h1>{page}</h1>
                        {userName}
                    </div>
                    <div className='page-project--container__options'>
                        <Search />
                        <Button 
                        onClick={() => {setOpenModal(true)}} 
                        className="btn-open-modal">
                            Novo projeto
                        </Button>
                    </div>
                    {openModal && <Modals 
                        setProject={setProject}
                        closeModal={setOpenModal}/>}

                    <div className='page-project--list'>
                        <ListProject 
                        projects={project}
                        selectProject={selectedProject}/>
                    </div>
                </div>
            <Footer />
        </div>
    )
}