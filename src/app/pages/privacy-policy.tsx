
import * as React from "react";
// import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

export class PrivacyPolicyPage extends React.Component {
    public componentDidMount() {
        document.title = "??? - Privacy Policy";
    }

    public render() {
        return (
            <Layout>
                <h1>Privacy Policy</h1>
                <p>
                    tbi
                </p>
            </Layout>
        );
    }
}

export default PrivacyPolicyPage;
