import { useState } from 'react';

import { Message } from '../../../types/user';
import './style.scss'

function ErrorMessage({className, text}: Message){
    return(
        <div className={className}>{text}</div>
    )
}

export default ErrorMessage;