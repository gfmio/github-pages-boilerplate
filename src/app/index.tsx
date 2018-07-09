
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app";

import "../scss/index.scss";

window!.onload = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById("root") as HTMLElement,
    );
};
