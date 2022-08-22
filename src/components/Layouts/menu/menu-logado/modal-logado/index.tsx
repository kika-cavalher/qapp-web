

import { ModalLinks } from "../modal-links";

import './style.scss'

export type CreateProjectProps = {
    closeModal: (isOpen: boolean) => void
}

export function ModalLogado({ closeModal }: CreateProjectProps) {

    function handleClose() {
        closeModal(false) 
    };

    //refactoring
    return (
        <div className="menu--main">
            <div className="menu--modal">
                <div className="menu--modal-content">
                    <ModalLinks />
                </div>
            </div>
        </div>
    )
}
