import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'
import { ButtonProps } from '../../../types/button'

import './style.scss'

export function UserAvatarSimple({ className}: ButtonProps) {

    return (
        <div className='main__avatar'>
            <div className={className}>
                <div className='avatar--img'>
                    <img src={avatarDefault2} alt="Avatar padrão"/>
                </div>
            </div>
        </div>
        
    )
}