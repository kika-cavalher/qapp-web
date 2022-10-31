import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { AuthContext } from '../../../../contexts/UserContext'

import { ButtonLink } from '../../../Global/button/link'
import { ButtonModal } from '../../../Global/button/modal'

import './style.scss'

export function MenuLogado() {
    const [show, setShow] = useState(false)
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
    }

    const profilePage =() => {
        navigate('/profile')
    }

    return (
        <div className='component--menu-header'>
            <div className='component--openMenu'>
                <div className='container--Initials'>
                    <ButtonModal className="name--initials" onClick={handleShow}>
                        Logado
                    </ButtonModal>
                </div>
                {show && <div className="component--menu-logado">
                <ButtonModal className="icon-close-modal__withX" onClick={handleClose}>
                    X
                </ButtonModal>
                <div className='component--top-menu__pages'>
                    <ul className='top-menu__list'>
                        <li className='top-menu__itens'>
                            <ButtonLink onClick={profilePage} className='top-menu menu--perfil'>Perfil
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
            </div>
        </div>
    )
}

function setAuthenticated(arg0: boolean) {
    throw new Error('Function not implemented.')
}
