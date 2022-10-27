import { useNavigate } from 'react-router-dom'
import { ButtonModal } from '../../../Global/button/modal'
import './style.scss'

export function MenuDeslogado() {
    const navigate = useNavigate()

    const HandleOpen = () => {
        navigate('/auth/sign-in')
    }

    return (
        <div id="component--menu-deslogado">
            <ButtonModal onClick={HandleOpen}>Entrar</ButtonModal>
            </div>
    )
}