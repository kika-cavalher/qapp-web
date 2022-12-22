import { useState } from 'react';
import { ButtonCloseModal } from '../../../Global/button/modal/close';

import './style.scss'

export default function ModalProject() {
    const [show, setShow] = useState(true)

    return (
        <>
            {show &&
                <div className='main--modal__project'>
                    <h1>Modal add</h1>
                </div>
            }
        </>
    );
}
