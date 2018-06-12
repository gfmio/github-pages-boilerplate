// tslint:disable:max-line-length

import * as React from "react";
import { Link } from "react-router-dom";

import { Flex } from "./flex";
import { IAsComponentProps } from "./interfaces";

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
                                <a href="https://github.com/gfmio/github-pages-boilerplate" target="_blank">Github</a> &middot; <Link to="/privacy-policy">Privacy Policy</Link> &middot; <Link to="/terms-of-use">Terms of Use</Link>
                            </Flex.Child>
                        </Flex.Container>
                    </Flex.Child>
                </Flex.Container>
            </footer>
        );
    };
