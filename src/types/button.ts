export type ButtonDefaultProps = {
    className?: string,
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}