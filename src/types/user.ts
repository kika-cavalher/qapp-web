export type UserProps = {
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}

export type UserContextProps = {
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
    registerUser: (user: UserProps) => Promise<void>;
    authenticated: boolean
}

export type UserContextProviderProps = {
    children: React.ReactNode;
};

export type FlashMessage = {
    msg?: string, 
    type?: string
}

export type Message = {
    className?: string, 
    text?: string
}