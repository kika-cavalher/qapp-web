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