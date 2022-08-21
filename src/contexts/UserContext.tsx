import { createContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import { UserContextProps, UserContextProviderProps } from "../types/user";

const AuthContext = createContext<UserContextProps>({} as UserContextProps);

function UserContextProvider({ children }: UserContextProviderProps) {
    const {registerUser} = useAuth()

    return(
        <AuthContext.Provider value={{ registerUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, UserContextProvider }