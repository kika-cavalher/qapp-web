import { useNavigate } from 'react-router-dom'
import { ButtonModal } from '../../../Global/button/modal'
import './style.scss'

export function MenuDeslogado() {
    const navigate = useNavigate()

    const HandleOpen = () => {
        navigate('/auth/sign-in')
    }

    return (
        <div className="component--menu-deslogado">
            <ButtonModal className="button--menu-deslogado"onClick={HandleOpen}>Entrar</ButtonModal>
            </div>
    )
}