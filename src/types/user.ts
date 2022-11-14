export type UserProps = {
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
    image?: string
}

export type UserContextProps = {
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
    registerUser: (user: UserProps) => Promise<void>;
    login: (user: UserProps) => Promise<void>;
    authenticated: boolean
    logout: () => Promise<void>
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

export type avatarProps = {
    src: string, 
    width: number
    alt?: string, 
}