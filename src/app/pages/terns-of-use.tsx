
import * as React from "react";
// import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

export class TermsOfUsePage extends React.Component {
    public componentDidMount() {
        document.title = "??? - Terms of Use";
    }

    public render() {
        return (
            <Layout>
                <h1>Terms of Use</h1>
                <p>
                    tbi
                </p>
            </Layout>
        );
    }
}

export default TermsOfUsePage;
