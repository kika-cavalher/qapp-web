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

export type RegisterInputs = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  }

  export type LoginInputs = {
    email: string,
    password: string
  }