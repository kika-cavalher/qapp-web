import { useEffect, useState } from 'react'

import avatarDefault2 from '../../../../../assets/images/avatarDefault2.jpg'
import api from '../../../../../services/api'

import './style.scss'


export function UserAvatarMenu() {
    const [token] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState({
        image: ""
    })

    
    useEffect(() => {
        
        api.get('/users/checkuser' , {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            setUser(response.data)
        })

    }, [token])

    const avatarImage = (user.image !== undefined && user.image !== null) ? 
    user.image: avatarDefault2

    return (
        <div className='main__avatar'>
            <div className='avatar-menu'>
                <div className='avatar--img'>
                    <img src={avatarImage} alt="Avatar perfil" />
                </div>
            </div>
        </div>
        
    )
}