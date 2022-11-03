
import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'
import { avatarProps } from '../../../types/user'

import './style.scss'

export function UserAvatar({ className }: avatarProps) {


    return (
        <div className='main__avatar'>
            <div className={className}>
                <div className='avatar--img'>
                    <img src={avatarDefault2} alt="Avatar perfil" />
                </div>
            </div>
        </div>
        
    )
}