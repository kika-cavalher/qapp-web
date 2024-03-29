import { TopMenu } from "../../components/Layouts/menu";
import { Footer } from "../../components/Layouts/footer";
import { TitlePage } from "../../components/Layouts/body/titlePage";

import noData from "../../assets/images/noData.svg"

// import { ListProject } from "./list";
import './style.scss'
import { useEffect, useState } from "react";
import { ButtonNewModal } from "../../components/Layouts/modal/new";
import { ListProject } from "./list";
import api from "../../services/api";

export function ProjectPage() {
    const [projects, setProjects] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('/projects/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        .then((response) => {
            setProjects(response.data.projects)
        })
        .catch((err) => {
            return err.response.data
        })
    }, [token])

    return (
        <div id="page-project">
            <TopMenu />
            <div className='page-project--main__container'>
                <TitlePage titlePage={'Projetos'} />
                <div className='page-project--container__options'>
                    <ButtonNewModal _id={""} name={""} content={""} />
                </div>
                {projects.length > 0 && <ListProject /> }
                {projects.length === 0 && (<div className='page-project--list page-project--waiting'>
                    <h1 className="no-projects">Nenhum projeto ainda...</h1>
                    <img className="img--no-projects" src={noData} alt="icone sem data" />
                </div>)}
            </div>
            <Footer />
        </div>
    )
}

