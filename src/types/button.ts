export type ButtonProps = {
    className?: string,
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}