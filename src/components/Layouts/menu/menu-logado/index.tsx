
import { useState } from "react";
import { ButtonModal } from "../../../Global/button/modal";
import { ModalLogado } from "./modal-logado";

import './style.scss'

export default function MenuLogado() {
    const [openModal, setOpenModal] = useState(false)

    // Criar abreviação no menu com as iniciais. 
    const name = localStorage.getItem('name')

    return (
        <>
            <div className='component--top-menu__user'>
                <ButtonModal
                    onClick={() => { setOpenModal(true) }}
                    className="modal-btn-open">
                    <div className='component--user__round'></div>
                </ButtonModal>
                {
                    openModal && <ModalLogado
                        closeModal={setOpenModal} />
                }
            </div>
        </>
    );
}
