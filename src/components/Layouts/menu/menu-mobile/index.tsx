import { useState } from "react"

import { ButtonModal } from "../../../Global/button/modal"
import IconMenu from '../../../../assets/icon/menu.png';
import { ModalMobile } from "../menu-logado/modal-mobile";

import './style.scss'

export function MenuMobile() {
    const [openModal, setOpenModal] = useState(false)
    return (

        <div className='component--menu--mobile'>
            <ButtonModal
                onClick={() => { setOpenModal(true) }}
                className="modal-mobile--btn-open">
                <img src={IconMenu} alt="Icone menu mobile" />
            </ButtonModal>
            {
                openModal && <ModalMobile
                    closeModal={setOpenModal} />
            }
        </div>
    )
}