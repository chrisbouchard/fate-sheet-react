import { Suspense } from "react";

import { Fetch } from "../api/Fetch";

export function WorldSelectPage() {
    return (
        <Suspense fallback="Loading...">
            <Fetch resource="worlds">
                {({ data: worlds }) => (
                    <ul>
                        {worlds.map((world) => (
                            <li key={world.id}>{world.name}</li>
                        ))}
                    </ul>
                )}
            </Fetch>
        </Suspense>
    );
}
