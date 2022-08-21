import { Link } from "react-router-dom";

import { ButtonModal } from "../../../../Global/button/modal";
import { ModalLinks } from "../modal-links";

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
                    <ModalLinks />
                </div>
            </div>
        </div>
    )
}
