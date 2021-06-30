import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import usePromise from "react-promise-suspense";

import { ApiContext } from "../api/Api";

export function Fetch(props) {
    const api = useContext(ApiContext);
    const { getAccessTokenSilently } = useAuth0();

    const resource = props.resource;
    const params = props.params ?? {};

    const response = usePromise(async () => {
        const token = await getAccessTokenSilently();
        return await api.fetch(resource, {
            params,
            headers: {
                Authorization: `bearer ${token}`,
            },
        });
    }, [api, getAccessTokenSilently, resource, params]);

    return props.children(response);
}
