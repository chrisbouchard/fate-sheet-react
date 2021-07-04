import { Suspense } from "react";

import { Fetch } from "../api/Fetch";

import { CharacterList } from "./CharacterList";

export function CharacterSelectPage() {
    const params = { include: "aspects" };

    return (
        <Suspense fallback={<CharacterList loading />}>
            <Fetch resource="characters" params={params}>
                {({ data: characters }) => (
                    <CharacterList characters={characters} />
                )}
            </Fetch>
        </Suspense>
    );
}
