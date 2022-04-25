import { Suspense } from "react";

import { Fetch } from "../api/Fetch";

import { CharacterList } from "./CharacterList";

const characterPath = (character) => character.id;

export function CharacterSelectPage() {
    const params = { include: "aspects" };

    return (
        <Suspense fallback={<CharacterList loading />}>
            <Fetch resource="characters" params={params}>
                {({ data: characters }) => (
                    <CharacterList
                        characters={characters}
                        path={characterPath}
                    />
                )}
            </Fetch>
        </Suspense>
    );
}
