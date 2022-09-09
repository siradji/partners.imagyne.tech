import classNames from "classnames";
import {  PropsWithChildren } from "react";

export default function Cards (props: PropsWithChildren<{classname?: string}>): JSX.Element {
    return (
        <div className={classNames("p-3 shadow-xl rounded  bg-imagyne-secondary flex  h-[100px]", props.classname)}>
            {props.children}
        </div>
    )
}