import { PropsWithChildren, ReactNode } from "react"
import classnames from 'classnames'


interface ButtonProps {
    children?: ReactNode
    value?: string
    classname?: string
}

export function Button (props: PropsWithChildren<ButtonProps>): JSX.Element {
    return (
        <button className={classnames('')}>

        </button>
    )
}