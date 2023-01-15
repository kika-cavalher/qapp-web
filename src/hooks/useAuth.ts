import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseMessage from "../contexts/useMessage";
import api from "../services/api";

import { UserProps } from "../types/user";

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate()
    const { setMessage } = UseMessage()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.defaults.headers.common['Authorization'] =
                `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true)
        }
    }, [])

    async function registerUser(user: UserProps) {
        let msgText = 'Cadastro realizado com sucesso!'

        try {
            const data = await api.post('/users/signup', user).then(
                (response) => { return response.data })
            await authUser(data)

        } catch (error: any) {
            msgText = error.response.data.msg
        }

        setMessage(msgText)
    }

    async function authUser(data: any) {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        setTimeout(() => {
            navigate('/projects')
        }, 2000)

    }

    async function login(user: any) {
        let msgText = 'Login realizado com sucesso!'

        try {
            const data = await api.post('/users/signin', user).then(
                (response) => { return response.data })
            await authUser(data)

        } catch (error: any) {
            msgText = error.response.data.msg
        }

        setMessage(msgText)
    }

    async function logout() {
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.common['Authorization'] = false
        navigate('/auth/sign-in')
        window.location.reload();
    }

    return { authenticated, registerUser, login, logout }
}
