import { useState } from 'react'
import { ButtonModal } from '../../Global/button/modal'

import styles from './style.module.scss'
import iconCloseModal from '../../../assets/icon/closeModalX.png'
import './style.scss'


function Message() {
    const [type, setType] = useState("")
    const [show, setShow] = useState(true)

    const handleClose = () => setShow(false)

    return (
        <>
            { show && 
                <div className='message--container'>
                    <div className='message--header'>
                        <ButtonModal className="icon-close-modal"onClick={handleClose}>
                            <img className="item-project--btn-close-modal" src={iconCloseModal} alt="icone para fechar o modal." />
                        </ButtonModal>
                    </div>
                    <div className='message--content'>
                        {/* <div className={`${styles.message} ${styles.type}`}> */}
                        <h1 className='message--title'>Erro!</h1>
                        <h2 className='message--subTitle'>Não foi possível cadastrar o seu usuário.</h2>
                        <h2 className='message--errorMessage'></h2>
                    </div>
                </div> }
        </>
    )
}

            export default Message