
import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";
import { PrivacyPolicyPage } from "./pages/privacy-policy";
import { TermsOfUsePage } from "./pages/terns-of-use";

export class App extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/terms-of-use" component={TermsOfUsePage} />
                <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}
