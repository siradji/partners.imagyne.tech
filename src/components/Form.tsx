import { HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import classNames from "classnames"

interface FormProps {
onSubmit: (e: any) => void
testId: string
children?: ReactNode
classname?: string
}


export function Form (props: PropsWithChildren<FormProps>): JSX.Element {
    return (
        <form 
            className={classNames(props.classname)}
            data-testid={props.testId}
            onSubmit={props.onSubmit}
        >
            {props.children}
        </form>
    )
}

function Group (props: PropsWithChildren<{testId: string, groupName: string}>): JSX.Element {
    return (
        <div  data-testid={props.testId} className="flex flex-col w-full my-2">
            <label className="text-xs font-light text-imagyne-secondary">{props.groupName}</label>
            {props.children}
        </div>
    )
}


interface InputProps extends   HTMLAttributes<HTMLInputElement>{
    placeholderStyle?: string
    inputFieldStyle?: string
    onChange: (e: any) => void
    value: string
    placeHolder: string
    testId: string
    type: 'email' | 'number' | 'text'
    name: string
}
function Input (props: InputProps): JSX.Element {
    return (
        <input
            name={props.name}
            className={classNames('outline-none bg-transparent border-0.5 py-3 px-5 text-sm placeholder:text-imagyne-accent  border-imagyne-secondary ', props.inputFieldStyle, props.placeholderStyle)}
            data-testid={props.testId}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeHolder}
            />
    )
}

interface ButtonProps {
    classname: string
    testId: string
    text: string
}

function Button (props: ButtonProps): JSX.Element {
    return (
        <button
            className={classNames('outline-none border-0 shadow-lg', props.classname)}
            data-testid={props.testId}
        >
            {props.text}
        </button>
    )
}
Form.Group = Group
Form.Input = Input
Form.Button = Button
