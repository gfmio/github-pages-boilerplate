/**
 * @module components/link
 * A link component that will render local links using React Router and external links as HTML anchors
 */

import * as React from "react";

import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from "react-router-dom";

export function urlIsExternal(url: string) {
    if (url.length === 0) {
        return false;
    }

    const startsWithSlash = url[0] === "/";
    const startsWithDoubleSlash = url.slice(0, 2) === "//";
    if (startsWithDoubleSlash) {
        return true;
    }
    if (startsWithSlash) {
        return false;
    }

    const containsProtocolSeparator = url.indexOf("://") > -1;
    return containsProtocolSeparator;
}

export interface ILinkProps {
    to: string;
}

export type LinkProps =
    ILinkProps & (
        ReactRouterLinkProps |
        React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
    );

export const Link: React.StatelessComponent<LinkProps> = (props: LinkProps) =>
    urlIsExternal(props.to)
        ? <a
            target="__blank"
            { ...(props as
                React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) }
            href={props.to} />
        : <ReactRouterLink
            {...(props as ReactRouterLinkProps) } />;
