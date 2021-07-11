import { Suspense } from "react";

import { Fetch } from "../api/Fetch";
import { CharacterList } from "../character/CharacterList";

const characterPath = (character) => `/characters/${character.id}`;

export function WorldCharacterSelectPage({ worldId }) {
    const resource = `worlds/${worldId}/characters`;
    const params = { include: "aspects" };

    return (
        <Suspense fallback={<CharacterList loading />}>
            <Fetch resource={resource} params={params}>
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
