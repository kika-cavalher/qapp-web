import { useContext, useEffect, useState } from 'react'

import { ButtonLink } from '../../../Global/button/link'
import { ButtonModal } from '../../../Global/button/modal'

import iconCloseModal from '../../../../assets/icon/closeModalX.png'

import './style.scss'
import api from '../../../../services/api'
import { AuthContext } from '../../../../contexts/UserContext'

export function MenuLogado() {
    const [show, setShow] = useState(false)
    const { logout } = useContext(AuthContext)

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)}

    return (
        <>
            <div className='component--openMenu'>
                <div className='container--Initials'>
                    <ButtonModal className="name--initials" onClick={handleShow}>
                        Logado
                    </ButtonModal>
                </div>
            </div>

            {show && <div id="component--menu-logado">
                <ButtonModal className="icon-close-modal" onClick={handleClose}>
                    <img className="item-project--btn-close-modal" src={iconCloseModal} alt="icone para fechar o modal." />
                </ButtonModal>
                <div className='component--top-menu__pages'>
                    <ul className='top-menu__list'>
                        <li className='top-menu__itens'>
                            <ButtonLink className='top-menu menu--perfil'>Perfil
                            </ButtonLink>
                        </li>
                    </ul>
                    <ul className='top-menu__list'>
                        <li className='top-menu__itens'>
                            <ButtonLink className='top-menu menu--logout'
                            onClick={logout}>Logout
                            </ButtonLink>
                        </li>
                    </ul>
                </div>
            </div>}
        </>
    )
}

function setAuthenticated(arg0: boolean) {
    throw new Error('Function not implemented.')
}
