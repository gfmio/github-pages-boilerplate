
import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { AnotherPage, HomePage, NotFoundPage, SomePage } from "./pages";

export class App extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/some-page" component={SomePage} />
                <Route path="/another-page" component={AnotherPage} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}
