import Kitsu from "kitsu";
import { createContext, useMemo } from "react";

// TODO: Any better default?
export const ApiContext = createContext(null);

export function ProvideApi(props) {
    const api = useMemo(
        () =>
            new Kitsu({
                baseURL: props.baseUri,
            }),
        [props.baseUri]
    );

    return (
        <ApiContext.Provider value={api}>{props.children}</ApiContext.Provider>
    );
}
