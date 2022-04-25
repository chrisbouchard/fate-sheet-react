import { Suspense } from "react";

import { Fetch } from "../api/Fetch";

import { WorldList } from "./WorldList";

export function WorldSelectPage() {
    return (
        <Suspense fallback={<WorldList loading />}>
            <Fetch resource="worlds">
                {({ data: worlds }) => <WorldList worlds={worlds} />}
            </Fetch>
        </Suspense>
    );
}
