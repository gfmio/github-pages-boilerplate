/**
 * @module pages/not-found
 */
// tslint:disable:max-line-length

import * as React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components";
import { generateTitle } from "../helpers";

export class NotFoundPage extends React.Component {
    public componentDidMount() {
        document.title = generateTitle("Not found");
    }

    public render() {
        return (
            <Layout>
                <h1>Page not found</h1>
                <p>The page you requested could not be found.</p>
                <p><Link to="/">Home</Link></p>
            </Layout>
        );
    }
}

export default NotFoundPage;
