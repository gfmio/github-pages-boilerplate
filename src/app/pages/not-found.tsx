
import * as React from "react";
// import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

export class NotFoundPage extends React.Component {
    public componentDidMount() {
        document.title = "??? - Not found";
    }

    public render() {
        return (
            <Layout>
                <h1>Not found</h1>
            </Layout>
        );
    }
}

export default NotFoundPage;
