import {ButtonHTMLAttributes} from 'react'

import '../styles/components/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button (props:ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}


/* import { useNavigate } from 'react-router-dom'; */


/*     const history = useNavigate();

    function navigateToRegisterPage(e: { preventDefault: () => void; }) {
        e.preventDefault();
        history('/register');
    } */