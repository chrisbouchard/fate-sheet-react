import { Router } from "@reach/router";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ProvideApi } from "./api/Api";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
    <StrictMode>
        <ProvideApi baseUri="http://localhost:8080">
            <Router>
                <App path="/" />
            </Router>
        </ProvideApi>
    </StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
