import { createContext } from "react";
import useAuth from "../hooks/useAuth";
import { UserContextProps, UserContextProviderProps } from "../types/user";

const AuthContext = createContext<UserContextProps>({} as UserContextProps);

function UserContextProvider({ children }: UserContextProviderProps) {
    const { authenticated, registerUser, logout } = useAuth()

    return (
        <AuthContext.Provider value={{ authenticated, registerUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, UserContextProvider }