import useSWR from "swr";
import { Suspense } from "react";

import { useApi } from "../api/Api";

import { WorldList } from "./WorldList";

function FetchWorlds({ children: render }) {
    const { apiFetch } = useApi();
    const { data: { data: worlds } } = useSWR("worlds", apiFetch, { suspense: true });

    return render(worlds);
}

export function WorldSelectPage() {
    return (
        <Suspense fallback={<WorldList loading />}>
            <FetchWorlds>
                {(worlds) => <WorldList worlds={worlds} />}
            </FetchWorlds>
        </Suspense>
    );
}
