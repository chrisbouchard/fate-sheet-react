import { useContext } from "react";
import usePromise from "react-promise-suspense";

import { ApiContext } from "../api/Api";

export function Fetch(props) {
    const api = useContext(ApiContext);

    const resource = props.resource;
    const params = props.params ?? {};

    const response = usePromise(
        () => api.fetch(resource, { params }),
        [resource, params]
    );

    return props.children(response);
}
