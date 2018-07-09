/**
 * @module components/separator-list
 */

import * as React from "react";
import { IAsComponentProps } from "./interfaces";

export interface ISeparatorListProps extends IAsComponentProps {
    separator?: React.ReactNode;
    children?: React.ReactNodeArray;
}

export const SeparatorList: React.StatelessComponent<ISeparatorListProps> =
    ({ as, separator, children, ...rest }: ISeparatorListProps) => {
    const Element = as || "p";
    const separatorIsUndefined = typeof separator === "undefined";
    const childrenIsNotUndefined = typeof children !== "undefined";

    const actualChildren = separatorIsUndefined && childrenIsNotUndefined ? (children || []) : [];
    if (childrenIsNotUndefined && !separatorIsUndefined) {
        const maxIndex = children!.length - 1;
        children!.forEach((value, index) => {
            actualChildren.push(value);
            if (index < maxIndex) {
                actualChildren.push(separator || "");
            }
        });
    }

    return <Element children={actualChildren} {...rest} />;
};
