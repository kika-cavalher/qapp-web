import { useEffect, useState } from 'react'
import bus from '../../../utils/bus'

import { ButtonCloseModal } from '../../Global/button/modal/close'


import './style.scss'


function Message() {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState(false)

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
                        <ButtonCloseModal onClick={handleClose}/>
                    </div>
                    <div className='message--content'>
                        <h2 className='message--text'>{message}</h2>
                    </div>
                </div>}
        </>
    )
}
export default Message