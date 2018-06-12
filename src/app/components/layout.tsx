/**
 * Layout component module
 */
// Disable max line length for tsx files
// tslint:disable:max-line-length

import * as React from "react";

import { Flex } from "./flex";
import { Footer } from "./footer";
import { Header } from "./header";
import { IAsComponentProps } from "./interfaces";

// tslint:disable-next-line:no-empty-interface
export interface ILayoutProps extends IAsComponentProps {}

export const Layout: React.StatelessComponent<ILayoutProps & React.HTMLAttributes<any>> =
    (props: ILayoutProps & React.HTMLAttributes<any>) => {

    const { as, ...rest } = props;

    return (
        <Flex.Container as={as} direction="column" {...rest}>
            <Flex.Child as={Header} />
            <Flex.Child as="div" expand={true} className="padding-medium">
                { props.children }
            </Flex.Child>
            <Flex.Child as={Footer} />
        </Flex.Container>
    );
};
