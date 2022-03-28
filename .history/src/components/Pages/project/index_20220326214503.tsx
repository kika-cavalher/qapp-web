import { useCallback, useRef, useState } from "react";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import { Button } from "../../Global/button";
import Modals, { ModalHandles } from "../../Global/modal";

import './style.scss'
import { CreateProjectProps, ProjectProps } from "../../../types/project";
import { ListProject } from "./list";

export function ProjectPage () {
    const page = "Projetos";
    const modalRef = useRef<CreateProjectProps>(null)
    const [project, setProject] = useState<ProjectProps[]>([]);
    const [select, setSelect] = useState<ProjectProps>();

    const handleOpenModal = useCallback(() => {
        modalRef.current?.openModal!();
    }, [])

    function selectProject(projectselected: ProjectProps) {
        setSelect(projectselected);
        setProject(projectselected => projectselected.map(project => ({
          ...project,
        //   select: project.id === projectselected.id ? true : false
        })))
      }


    return (
        <div id="page-project">
            <TopMenu />
                <div className='page-project--main__container'>
                    <div className='page-project--container__title'>
                        <h1>{page}</h1>
                    </div>
                <div className='page-project--container__options'>
                    <Search />
                    <Button 
                    onClick={handleOpenModal} 
                    className="btn-open-modal">
                        Novo projeto
                    </Button>
                </div>
                <Modals ref={modalRef}/>
                </div>
                <ListProject
                    projects={project}
                    selectProject={selectProject}
                />
            <Footer />
        </div>
    )
}