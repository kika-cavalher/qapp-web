
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
                        <ModalProject />
                        <ButtonCloseModal onClick={handleClose} />
                    </div>
                </>
            )}
        </>
    )
}