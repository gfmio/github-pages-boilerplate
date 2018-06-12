
import * as React from "react";
import { ISeparationProps } from "./interfaces";

export const Separator: React.StatelessComponent<{ separate?: ISeparationProps } & React.HTMLAttributes<any>> =
    (props: { separate: ISeparationProps } & React.HTMLAttributes<any>) => {
    const { className, separate, ...rest } = props;
    const classNames = [
        separate!.row
            ? `separate-row-${typeof separate.row === "string" ? separate.row : "medium"}`
            : undefined,
        separate!.rowReverse
            ? `separate-rowReverse-${typeof separate.rowReverse === "string" ? separate.rowReverse : "medium"}`
            : undefined,
        separate!.column
            ? `separate-column-${typeof separate.column === "string" ? separate.column : "medium"}`
            : undefined,
        separate!.columnReverse
            ? `separate-columnReverse-${typeof separate.columnReverse === "string" ? separate.columnReverse : "medium"}`
            : undefined,
        className,
    ];

    return <div className={classNames.filter((v) => typeof v === "string").join(" ")} {...rest} />;
};

export default Separator;
