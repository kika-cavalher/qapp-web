
import { avatarProps } from '../../../types/user'
import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'


import './style.scss'
import { useEffect, useState } from 'react'
import { ButtonFile } from '../../../components/Global/button/file'
import api from '../../../services/api'

export function UserAvatar({ className }: avatarProps) {
    const [token] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState({
        image: ""
    })


    useEffect(() => {

        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            setUser(response.data)
        })

    }, [token])

    const avatarImage = (user.image !== undefined && user.image !== null) ?
        user.image : avatarDefault2

    return (
        <div className='main__avatarAndButton '>
            <div className='main__avatar'>
                <div className='avatar-profile'>
                    <div className='avatar--img'>
                        <img src={avatarImage} alt="Avatar perfil" />
                    </div>
                </div>
            </div>
            <ButtonFile />
        </div>

    )
}