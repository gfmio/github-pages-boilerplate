
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { App } from "./app";

window!.onload = () => {
    ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
        document.getElementById("root") as HTMLElement,
    );
};
