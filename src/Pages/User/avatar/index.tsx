
import { avatarProps } from '../../../types/user'
import avatarDefault2 from '../../../assets/images/avatarDefault2.jpg'


import './style.scss'
import { useEffect, useState } from 'react'
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
                        <img src={avatarImage} />
                    </div>
                </div>
            </div>
            <div className='file--container' >
                <form className='file--form'>
                    <button className="file--btn">
                        Selecionar imagem
                        <input className="file--none"
                            type="file"
                            name="image"
                        />
                    </button>
                </form>
            </div>
        </div>

    )
}