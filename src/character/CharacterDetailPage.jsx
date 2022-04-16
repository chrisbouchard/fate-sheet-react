import { Suspense } from "react";

import { Fetch } from "../api/Fetch";

import { CharacterSheet } from "./CharacterSheet";

export function CharacterDetailPage({ id, location, uri }) {
    const resource = `characters/${id}`;
    const params = { include: "aspects,skills,world" };

    const initialCharacter = location.state?.character;

    return (
        <Suspense
            fallback={<CharacterSheet loading character={initialCharacter} />}
        >
            <Fetch resource={resource} params={params}>
                {({ data: character }) => (
                    <CharacterSheet character={character} />
                )}
            </Fetch>
        </Suspense>
    );
}
