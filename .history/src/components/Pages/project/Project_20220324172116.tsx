import { useCallback, useRef } from "react";

import { TopMenu } from "../../PageDefault/head/menu/top-menu";
import { Search } from "../../Global/search/search";
import { Footer } from "../../PageDefault/head/footer/Footer";
import Modals, { ModalHandles } from "../../Global/modal/modals";
import { Button } from "../../Global/button/button";

import iconAdd from '../assets/icon/add.png';
import '../styles/pages/project.scss'

export function ProjectPage () {
    const arrumarVariavel = "Projetos";
    const modalRef = useRef<ModalHandles>(null)

    const handleOpenModal = useCallback(() => {
        modalRef.current?.openModal();
    }, [])


    return (
        <div id="page-project">
            <TopMenu />
                <div className='page-project--main__container'>
                    <div className='page-project--container__title'>
                        <h1>{arrumarVariavel}</h1>
                    </div>
                <Search />
                <button onClick={handleOpenModal} className="btn-open-modal">
                    Novo projeto
                </button>
                <Modals ref={modalRef}/>
                    <div className='page-project--cards'>
                        <div className='page-project--cards__new'>
                            <div className='page-project--cards__new--icon'>
                                <input className='page-project--cards__new--img' type="image" src={iconAdd} alt="icone de orientação para adicionar novo projeto"/>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}