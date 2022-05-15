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
import api from '../../../services/api'
import { ProjectsContextProvider } from "../../../contexts/ProjectsContext";

export type ModalProps = {
    // ItemUpdate: (title:string, abbreviation:string, describe:string) => void
}

 // const userName = localStorage.getItem("@qapp:user-name");
function ProjectPageBody () {
const page = "Projetos";
const [openModal, setOpenModal] = useState(false);
const [updateProject, setUpdateProject] = useState({});
const [projects, setProjects] = useState([]);

//     function UpdateProject(title:string, abbreviation:string, describe:string) {
//     setUpdateProject({
//         title,
//         abbreviation,
//         describe})
//     setOpenModal(true)
//     axios.put('https://qapp-api.herokuapp.com/projects', {
//         title,
//         abbreviation,
//         describe
//     })
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
// }

//     useEffect(() => {
//         api.get("projects")
//         .then(({data}) => {
//             setProjects(data);
//         })
//     } , [])

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
                        closeModal={setOpenModal}/>}

                    <div className='page-project--list'>
                        <ListProject
                        // ItemUpdate={(title, abbreviation, describe) => UpdateProject(title, abbreviation, describe)} 
                        projects={projects}
                        />
                    </div>
                </div>
            <Footer />
        </div>
    )
}

function ProjectPage() {
    return(
        <ProjectsContextProvider>
            <ProjectPageBody />
        </ProjectsContextProvider>
    )
}

export default ProjectPage;
