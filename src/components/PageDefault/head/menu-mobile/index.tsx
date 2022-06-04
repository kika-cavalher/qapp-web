import { Link } from "react-router-dom";

import { ButtonModal } from "../../../Global/button/modal";

import './style.scss'

export type CreateProjectProps = {
    closeModal: (isOpen: boolean) => void
}

export function ModalMobile({ closeModal }: CreateProjectProps) {

    function handleClose() {
        closeModal(false) 
    };

    //refactoring
    return (
        <div className="menu-mobile--main">
            <div className="menu-mobile--modal">

                <div className="menu-mobile--modal-content">

                    <ButtonModal
                    className="close-modal" 
                    onClick={handleClose}>Projetos
                    </ButtonModal>

                    <Link to='/project' className='menu-mobile__pages--reports'>Relatórios
                    </Link>
                </div>
            </div>
        </div>
    )
}
