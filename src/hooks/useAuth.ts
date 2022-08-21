import api from "../services/api";

import { UserProps } from "../types/user";

export default function useAuth(){
    async function registerUser(user: UserProps) {
        try {
            const data = await api.post('/users/signup', user).then(
                (response) => {
                    return response.data
                })

        } catch (error) {
            console.log(error)
        }
    }

    return {registerUser}
}
