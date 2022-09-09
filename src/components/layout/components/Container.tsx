import { PropsWithChildren } from "react";
import classNames from "classnames";

export function Container (props: PropsWithChildren<{classname?: string}>): JSX.Element {
    return (
        <div className={classNames('container px-4 overflow-hidden', props.classname)}>
                {props.children}
        </div>
    )
}