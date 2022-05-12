import { useEffect, useState } from "react";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import { Button } from "../../Global/button";

import './style.scss'
import { Modals } from "../../Global/modal/index";
import { ProjectProps } from "../../../types/project";
import { ListProject } from "./list";
import axios from "axios";

export type ModalProps = {
    ItemUpdate: (title:string, abbreviation:string, describe:string) => void
}

 // const userName = localStorage.getItem("@qapp:user-name");
export function ProjectPage () {
const page = "Projetos";
const [openModal, setOpenModal] = useState(false);
const [project, setProject] = useState<ProjectProps[]>([]);
const [updateProject, setUpdateProject] = useState({});
const [projects, setProjects] = useState([]);

function UpdateProject(title:string, abbreviation:string, describe:string) {
    setUpdateProject({
        title,
        abbreviation,
        describe})
    setOpenModal(true)
    axios.put('https://qapp-api.herokuapp.com/projects', {
        title,
        abbreviation,
        describe
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
}

    useEffect(() => {
        axios.get('https://qapp-api.herokuapp.com/projects')
        .then((res) => setProjects(res.data))
        .catch((error) => console.log(error))
    } , [])

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
                        onClick={() => {setOpenModal(true)}} 
                        className="btn-open-modal">
                            Novo projeto
                        </Button>
                    </div>
                    {openModal && <Modals
                        // setProject={setProject}
                        closeModal={setOpenModal}/>}

                    <div className='page-project--list'>
                        <ListProject
                        selectProject={setUpdateProject}
                        ItemUpdate={(title, abbreviation, describe) => UpdateProject(title, abbreviation, describe)} 
                        projects={projects}
                        />
                    </div>
                </div>
            <Footer />
        </div>
    )
}
