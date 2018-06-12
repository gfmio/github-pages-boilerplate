/**
 * Layout component module
 */
// Disable max line length for tsx files
// tslint:disable:max-line-length

import * as React from "react";
import { Link } from "react-router-dom";

import { Flex } from "./flex";
import { IAsComponentProps } from "./interfaces";

// tslint:disable-next-line:no-empty-interface
export interface ILayoutProps extends IAsComponentProps {}

export const Layout: React.StatelessComponent<ILayoutProps & React.HTMLAttributes<any>> =
    (props: ILayoutProps & React.HTMLAttributes<any>) => {

    const { as, ...rest } = props;

    return (
        <Flex.Container as={as} direction="column" {...rest}>
            <Flex.Child as="header" className="padding-medium" style={{ background: "rgba(0,0,0,0.1)" }}>
                <Flex.Container align="center" justify="space-between">
                    <Flex.Child as="h3">
                        Header
                    </Flex.Child>
                    <Flex.Child as="nav">
                        <Flex.Container as="ul" align="stretch" justify="flex-end" style={{ listStyle: "none", height: "100%" }} className="separate-row-medium">
                            <Flex.Child as="li">
                                <Flex.Container align="stretch">
                                    <Flex.Child><Link to="/">Home</Link></Flex.Child>
                                </Flex.Container>
                            </Flex.Child>
                            <Flex.Child as="li">
                                <Flex.Container align="stretch">
                                    <Flex.Child><Link to="/non-existent">Non existent</Link></Flex.Child>
                                </Flex.Container>
                            </Flex.Child>
                        </Flex.Container>
                    </Flex.Child>
                </Flex.Container>
            </Flex.Child>
            <Flex.Child as="div" expand={true} className="padding-medium">
                { props.children }
            </Flex.Child>
            <Flex.Child as="footer" className="padding-medium" style={{ background: "rgba(0,0,0,0.1)" }}>
                <h3>Footer</h3>
                <hr />
                <Flex.Container align="center" justify="space-between">
                    <Flex.Child>
                        Copyright &copy; Frédérique Mittelstaedt 2018. License: MIT
                    </Flex.Child>
                    <Flex.Child>
                        <Flex.Container align="start" justify="space-between">
                            <Flex.Child>
                                <Link to="/privacy-policy">Privacy Policy</Link> &middot; <Link to="/terms-of-use">Terms of Use</Link>
                            </Flex.Child>
                        </Flex.Container>
                    </Flex.Child>
                </Flex.Container>
            </Flex.Child>
        </Flex.Container>
    );
};
