import { useCallback, useRef, useState } from "react";

import { TopMenu } from "../../PageDefault/head/menu";
import { Search } from "../../Global/search";
import { Footer } from "../../PageDefault/footer";
import { Button } from "../../Global/button";

import './style.scss'
import { Modals } from "../../Global/modal";

export function ProjectPage () {
    const page = "Projetos";
    const [openModal, setOpenModal] = useState(false)


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
                {openModal && <Modals closeModal={() => {setOpenModal(false)}} />}
                </div>


            <Footer />
        </div>
    )
}