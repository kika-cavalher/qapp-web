import { useEffect, useState } from 'react'
import { ButtonModal } from '../../Global/button/modal'


import iconCloseModal from '../../../assets/icon/closeModalX.png'
import './style.scss'
import bus from '../../../utils/bus'


function Message() {
    const [message, setMessage] = useState(false)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    useEffect(() => {
        bus.addListener('flash', ({ message }) => {
            setShow(true)
            setMessage(message)

            setTimeout(() => {
                setShow(false)
            }, 3000)
        })
    }, [])

    return (
        <>
            {show &&
                <div className='message--container'>
                    <div className='message--header'>
                        <ButtonModal className="icon-close-modal" onClick={handleClose}>
                            <img className="item-project--btn-close-modal" src={iconCloseModal} alt="icone para fechar o modal." />
                        </ButtonModal>
                    </div>
                    <div className='message--content'>
                        <h2 className='message--text'>{message}</h2>
                    </div>
                </div>}
        </>
    )
}
export default Message