import { useEffect, useState } from 'react'
import api from '../../../../services/api'
import { avatarProps } from '../../../../types/user'
import avatarDefault from '../../../../assets/images/avatarDefault.jpg'

import styles from './avatarImage.module.css'

export function UserAvatar({ haveButton }: avatarProps) {
    const [preview, setPreview] = useState()
    const [token] = useState(localStorage.getItem('token') || '')
    const [user, setUser] = useState({
        _id: "",
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

    function onFileChange(e: any) {
        setPreview(e.target.files[0])
        setUser({ ...user, [e.target.name]: e.target.files[0] })
    }

    async function handleSubmit(e: any) {
        e.preventDefault()

        const formData = new FormData()
        await (Object.keys(user) as (keyof typeof user)[]).forEach((key, index) => {
            formData.append(key, user[key])
        });

        const data = await api.patch(`/users/edit/${user._id}`, formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            return response.data
        }).catch((error) => {
            return error.response.data
        })

    }

    // className={`${styles.rounded_image} ${styles[width]}`}

    // {user.image ? (
    //     <img
    //         className={`${styles.rounded_image}`}
    //         src={user.image}
    //         alt={"Image logo user"}
    //     />)
    //     : (<img
    //         className={`${styles.rounded_image}`}
    //         src={avatarDefault}
    //         alt={"Image logo Default"}
    //     />)
    // }

    return (
        <div className='main__avatar'>
            {( user.image || preview ) && (
               <img
                src={preview ? URL.createObjectURL(preview) : `http://localhost:5000/images/users/${user.image}`}
                alt={"Image logo user"}
                   /> 
            )}
            <div
                className={`${styles.change_image} ${styles[haveButton]}`}
            >
                <form className="avatar--btn" onSubmit={handleSubmit}>
                    <input
                        className={`${styles.input_none}`}
                        type="file"
                        name="image"
                        onChange={onFileChange}
                    />
                </form>
            </div>
        </div>
    )
}