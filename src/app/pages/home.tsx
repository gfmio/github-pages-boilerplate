/**
 * @module pages/home
 */
// tslint:disable:max-line-length

import * as React from "react";
import { Layout, Link } from "../components";
import { generateTitle } from "../helpers";

export class HomePage extends React.Component {
    public componentDidMount() {
        document.title = generateTitle("Home");
    }

    public render() {
        return (
            <Layout>
                <h1>Home</h1>
                <p>
                    This is a small example of a Single Page application written in TypeScript and using React as its view library (although any other view library could also be used) running on Github Pages with working support for URL rewriting.
                </p>
                <p>
                    The code is on <Link to ="https://github.com/gfmio/github-pages-boilerplate" target="_blank">Github</Link> and licensed under the MIT license.
                </p>
                <p>
                    The example is held small on purpose to show a working bootstrapped working app, but with enough complexity to mimic a real-world scenario. SCSS compilation is integrated in the build process and everything gets bundled using Webpack. The test suite for mocha and chai is configured (although only a sample test is included) and so is linting and some config for VS Code.
                </p>
                <p>
                    The application can be run with <code>npm run watch</code> or <code>yarn run watch</code>, which watches for file changes and rebuilds the app and serves the app with live-reload locally wiht lite-server. Finally, if you're ready to publish your page, you can run <code>npm run publish</code> to build the production build and push it to the gh-pages branch. Change <code>src/CNAME</code> to support a custom CNAME for your page.
                </p>
            </Layout>
        );
    }
}

export default HomePage;
