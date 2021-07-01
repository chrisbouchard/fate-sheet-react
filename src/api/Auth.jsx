import { Auth0Provider } from "@auth0/auth0-react";
import { navigate } from "@reach/router";
import { useCallback } from "react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

export function AuthProvider({ children }) {
    const onRedirectCallback = useCallback((appState) => {
        navigate(appState?.returnTo ?? window.location.pathname);
    }, []);

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={audience}
            useRefreshTokens
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
}
