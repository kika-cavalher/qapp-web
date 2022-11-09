
import { avatarProps } from '../../../types/user'


import './style.scss'

export function UserAvatar({ className, image }: avatarProps) {

    return (
        <div className='main__avatar'>
            <div className={className}>
                <div className='avatar--img'>
                    <img src={image} alt="Avatar perfil" />
                </div>
            </div>
        </div>
        
    )
}