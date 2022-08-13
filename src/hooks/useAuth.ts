import api from "../services/api";
// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import { UserProps } from "../types/user";

export default function useAuth(){
    async function register(user: UserProps) {
        try {
            const data = await api.post('/users/signup').then(
                (response) => {
                    return response.data
                })

        } catch (error) {
            console.log(error)
        }
    }

    return {register}
}
