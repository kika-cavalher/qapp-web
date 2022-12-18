import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { UserAvatarSimple } from '../../avatar';
import { ButtonCloseModal } from '../../../Global/button/modal/close';

import { AuthContext } from '../../../../contexts/UserContext'

import './style.scss'


export function MenuLogado() {
    const [show, setShow] = useState(false)
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const profilePage = () => {
        navigate('/profile')
    }

    return (
        <div className='component--menu-header'>
            <div className='component--openMenu'>
                <div className='container--Initials'>
                    <button className="name--initials" onClick={handleShow}>
                    <UserAvatarSimple 
                    className='avatar-menu'/>
                    </button>
                </div>
                {show && <div className="component--menu-logado">
                    <ButtonCloseModal onClick={handleClose}/>
                    <div className='component--top-menu__pages'>
                        <ul className='top-menu__list'>
                            <li className='top-menu__itens'>
                                <button onClick={profilePage} className='top-menu menu--perfil'>Perfil
                                </button>
                            </li>
                        </ul>
                        <ul className='top-menu__list'>
                            <li className='top-menu__itens last-menu'>
                                <button className='top-menu menu--logout'
                                    onClick={logout}>Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>}
            </div>
        </div>
    )
}
