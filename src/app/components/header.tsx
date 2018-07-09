// tslint:disable:max-line-length

import * as React from "react";

import { Flex } from "./flex";
import { IAsComponentProps } from "./interfaces";
import { Link } from "./link";

export const Header: React.StatelessComponent<IAsComponentProps & React.HTMLAttributes<any>> =
    (props: IAsComponentProps & React.HTMLAttributes<any>) => {
        return (
            <header className="padding-medium" style={{ background: "rgba(0,0,0,0.1)" }}>
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
                                    <Flex.Child><Link to="/non-existent">Purposefully broken link</Link></Flex.Child>
                                </Flex.Container>
                            </Flex.Child>
                            <Flex.Child as="li">
                                <Flex.Container align="stretch">
                                    <Flex.Child><a href="https://github.com/gfmio/github-pages-boilerplate" target="_blank">Github</a></Flex.Child>
                                </Flex.Container>
                            </Flex.Child>
                        </Flex.Container>
                    </Flex.Child>
                </Flex.Container>
            </header>
        );
    };
