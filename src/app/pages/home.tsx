
import * as React from "react";
// import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

export class HomePage extends React.Component {
    public componentDidMount() {
        document.title = "??? - Home";
    }

    public render() {
        return (
            <Layout>
                <h1>Home</h1>
            </Layout>
        );
    }
}

export default HomePage;
