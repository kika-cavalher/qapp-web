import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import { UserProps } from "../types/user";

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.defaults.headers.common['Authorization'] =
                `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true)
        }
    }, [])

    async function registerUser(user: UserProps) {
        try {
            const data = await api.post('/users/signup', user).then(
                (response) => { return response.data })

            await authUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function authUser(data: any) {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        navigate('/projects')
    }

    return { authenticated, registerUser }
}
