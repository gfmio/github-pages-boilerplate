
export interface IAsComponentProps {
    as?: string | React.StatelessComponent<any> | React.ComponentClass<any>;
}

export interface ISeparationProps {
    row?: string;
    rowReverse?: string;
    column?: string;
    columnReverse?: string;
}
