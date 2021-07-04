import usePromise from "react-promise-suspense";

import { useApi } from "../api/Api";

export function Fetch({ resource, params = {}, children }) {
    const api = useApi();

    const response = usePromise(
        () => api.fetch(resource, { params }),
        [api, resource, params]
    );

    return children(response);
}
