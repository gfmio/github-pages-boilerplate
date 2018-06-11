
import * as React from "react";

export type FlexDirection = "column" | "row" | "column-reverse" | "row-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type FlexAlign = "start" | "end" | "center" | "space-around" | "space-between" | "stretch";
export type FlexJustify = "baseline" | "center" | "end" | "first-baseline" | "flex-end" | "flex-start" |
    "last-baseline" | "left" | "right" | "safe" | "space-around" | "space-between" | "space-evenly" | "start" |
    "stretch" | "unsafe";

export interface IFlexContainerProps {
    as?: string | React.StatelessComponent<any> | React.ComponentClass<any>;
    inline?: boolean;
    direction?: FlexDirection;
    wrap?: FlexWrap;
    align?: FlexAlign;
    justify?: FlexJustify;
    expand?: boolean;
    collapse?: boolean;
}

export const FlexContainer: React.StatelessComponent<IFlexContainerProps & React.HTMLAttributes<any>> = (props: IFlexContainerProps & React.HTMLAttributes<any>) => {
    const { as, inline, direction, wrap, align, justify, expand, collapse, className, ...rest } = props;
    const Element = as || "div";
    const classNames = [
        "flex",
        inline ? "inline" : undefined,
        typeof direction !== "undefined" ? `direction-${direction}` : undefined,
        typeof wrap !== "undefined" ? `wrap-${wrap}` : undefined,
        typeof align !== "undefined" ? `align-${align}` : undefined,
        typeof justify !== "undefined" ? `justify-${justify}` : undefined,
        expand !== false ? "flex-expand" : undefined,
        collapse ? "flex-collapse" : undefined,
        className
    ];

    return <Element className={classNames.filter((c) => typeof c === "string").join(" ")} {...rest} />
}

export interface IFlexChildProps {
    as?: string | React.StatelessComponent<any> | React.ComponentClass<any>;
    expand?: boolean;
    collapse?: boolean;
}

export const FlexChild: React.StatelessComponent<IFlexChildProps & React.HTMLAttributes<any>> = (props: IFlexChildProps & React.HTMLAttributes<any>) => {
    const { as, expand, collapse, className, ...rest } = props;
    const Element = as || "div";
    const classNames = [
        collapse ? "collapse" : undefined,
        expand ? "expand" : undefined,
        className
    ];

    return <Element className={classNames.filter((c) => typeof c === "string").join(" ")} {...rest} />
};

export const Flex: React.StatelessComponent<IFlexContainerProps & React.HTMLAttributes<any>> & {
    Container: React.StatelessComponent<IFlexContainerProps & React.HTMLAttributes<any>>,
    Child: React.StatelessComponent<IFlexChildProps & React.HTMLAttributes<any>>
} = (() => {
    const r: any = FlexContainer;
    r.Container = FlexContainer;
    r.Child = FlexChild;
    return r;
})();

