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
    register: (user: UserProps) => Promise<void>;
}

export type UserContextProviderProps = {
    children: React.ReactNode;
};