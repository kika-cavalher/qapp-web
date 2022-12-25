
import { useState } from 'react'
import ModalProject from '../../../../Layouts/modal/projects'
import { ButtonCloseModal } from '../close'


import './style.scss'

export function ButtonNewModal() {
    const [show, setShow] = useState(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <div className='main--btn_new'>
                <div className='container--btn_new'>
                    <button className="img--add"
                        onClick={handleOpen}>+</button>
                    <button className='btn_new'
                        onClick={handleOpen}>Novo Projeto</button>
                </div>
            </div>
            {show && (
                <>
                    <div className='main--modal'>
                        <div className='main--header__modal'>
                            <button className='buttonCLoseModal' onClick={handleClose}>Voltar</button>
                            <h1 className='TitleModal'>Adicionar novo Projeto</h1>
                        </div>
                        <ModalProject />
                    </div>
                </>
            )}
        </>
    )
}