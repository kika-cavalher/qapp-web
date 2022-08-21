export type InputProps = {
    className?: string,
    type?: string,
    text: string,
    name: string,
    placeholder?: string,
    value?: string,
    handleOnChange: (e: any) => void,
    multiple?: boolean,
}

export type FormInputs = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  }