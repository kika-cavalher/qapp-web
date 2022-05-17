import { Link } from "react-router-dom";

import './style.scss'
import { Button } from "../../../Global/button/default";

export type CreateProjectProps = {
    closeModal: (isOpen: boolean) => void
}

export function ModalMobile({ closeModal }: CreateProjectProps) {

    function handleClose() {
        closeModal(false) 
    };

    return (
        <div className="menu-mobile--main">
            <div className="menu-mobile--modal">

                <div className="menu-mobile--modal-content">
                    <Button
                    className="menu-mobile__pages--projects" 
                    onClick={handleClose}>Projetos</Button>
                    <Link to='/project' className='menu-mobile__pages--reports'>Relatórios
                    </Link>
                </div>
            </div>
        </div>
    )
}
