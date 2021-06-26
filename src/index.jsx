import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ProvideApi } from "./api/Api";
import { ProvideUser } from "./api/User";
import { MediaContextProvider } from "./common/Responsive";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

const apiBaseUri = process.env.REACT_APP_API_BASE_URI;

ReactDOM.render(
    <StrictMode>
        <ProvideApi baseUri={apiBaseUri}>
            <ProvideUser>
                <MediaContextProvider>
                    <App />
                </MediaContextProvider>
            </ProvideUser>
        </ProvideApi>
    </StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
