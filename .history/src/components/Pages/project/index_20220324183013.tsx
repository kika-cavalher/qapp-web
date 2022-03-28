import { useCallback, useRef } from "react";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import Modals, { ModalHandles } from "../../Global/modal";
import { Button } from "../../Global/button";

import iconAdd from '../../../assets/icon/add.png';
import './style.scss'

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
            <Footer />
        </div>
    )
}