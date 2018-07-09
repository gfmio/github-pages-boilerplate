// tslint:disable:max-line-length

import * as React from "react";
import { Link } from "./link";

import { Flex } from "./flex";
import { IAsComponentProps } from "./interfaces";
import { SeparatorList } from "./separator-list";

export const Footer: React.StatelessComponent<IAsComponentProps & React.HTMLAttributes<any>> =
    (props: IAsComponentProps & React.HTMLAttributes<any>) => {
        return (
            <footer className="padding-medium" style={{ background: "rgba(0,0,0,0.1)" }}>
                <h3>Footer</h3>
                <hr />
                <Flex.Container align="center" justify="space-between">
                    <Flex.Child>
                        Copyright &copy; Frédérique Mittelstaedt 2018. License: MIT
                                </Flex.Child>
                    <Flex.Child>
                        <Flex.Container align="start" justify="space-between">
                            <Flex.Child>
                                <SeparatorList separator=" &middot; ">
                                    <Link to="https://github.com/gfmio/github-pages-boilerplate">Github</Link>
                                    <Link to="/some-page">Some page</Link>
                                    <Link to="/another-page">Another page</Link>
                                </SeparatorList>
                            </Flex.Child>
                        </Flex.Container>
                    </Flex.Child>
                </Flex.Container>
            </footer>
        );
    };
