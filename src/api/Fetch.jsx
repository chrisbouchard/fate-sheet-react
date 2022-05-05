import useSWR from "swr";

import { useApi } from "../api/Api";

export function Fetch({ resource, params = {}, children }) {
    const { apiFetch } = useApi();
    const { data } = useSWR([resource, { params }], apiFetch, { suspense: true });

    return children(data);
}
