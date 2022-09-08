import {  PropsWithChildren } from "react";

export function Cards (props: PropsWithChildren): JSX.Element {
    return (
        <div className="p-3 shadow-xl rounded  bg-imagyne-secondary flex w-1/2 md:w-1/3 h-[100px]">
            {props.children}
        </div>
    )
}