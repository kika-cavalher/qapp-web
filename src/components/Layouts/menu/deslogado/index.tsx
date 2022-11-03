import { useNavigate } from 'react-router-dom'

import './style.scss'

export function MenuDeslogado() {
    const navigate = useNavigate()

    const HandleOpen = () => {
        navigate('/auth/sign-in')
    }

    return (
        <div className="component--menu-deslogado">
            <button className="button--menu-deslogado"onClick={HandleOpen}>Entrar
            </button>
            </div>
    )
}