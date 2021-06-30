import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { ProvideApi } from "./api/Api";
import { MediaContextProvider } from "./common/Responsive";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

const apiBaseUri = process.env.REACT_APP_API_BASE_URI;

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const auth0Audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const auth0RedirectUri = window.location.origin;

ReactDOM.render(
    <StrictMode>
        <Auth0Provider
            domain={auth0Domain}
            clientId={auth0ClientId}
            redirectUri={auth0RedirectUri}
            audience={auth0Audience}
            useRefreshTokens={true}
            cacheLocation="localstorage"
        >
            <ProvideApi baseUri={apiBaseUri}>
                <MediaContextProvider>
                    <App />
                </MediaContextProvider>
            </ProvideApi>
        </Auth0Provider>
    </StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
