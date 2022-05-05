import { useAuth0 } from "@auth0/auth0-react";
import Kitsu from "kitsu";
import { createContext, useCallback, useContext, useMemo } from "react";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const debugDelay = process.env.REACT_APP_API_DEBUG_DELAY_MS;

export const ApiContext = createContext(undefined);

export function ApiProvider({ children }) {
    const { getAccessTokenSilently } = useAuth0();

    const api = useMemo(() => {
        const api = new Kitsu({ baseURL });

        if (debugDelay) {
            api.interceptors.request.use(async (config) => {
                await new Promise((resolve) =>
                    window.setTimeout(resolve, debugDelay)
                );
                return config;
            });
        }

        api.interceptors.request.use(async (config) => {
            const token = await getAccessTokenSilently();
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        });

        return api;
    }, [getAccessTokenSilently]);

    return <ApiContext.Provider value={api} children={children} />;
}

export function useApi() {
    const api = useContext(ApiContext);

    const apiFetch = useCallback(
        (...args) => api.fetch(...args),
        [api],
    );

    return { api, apiFetch };
}
