import { avatarProps } from '../../../../types/user'
import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'

import styles from './avatarImage.module.css'

export function UserAvatar({ src, alt, width}: avatarProps) {

    return (
        <div className='main__avatar'>
            <img 
                className={`${styles.rounded_image} ${styles[width]}`}
                src={src}
                alt={alt}
            />
        </div>
    )
}