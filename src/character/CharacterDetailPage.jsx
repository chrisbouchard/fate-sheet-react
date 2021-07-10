import { Suspense } from "react";

import { Fetch } from "../api/Fetch";
import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

import { CharacterSheet } from "./CharacterSheet";

export function CharacterDetailPage({ id, location, uri }) {
    const resource = `characters/${id}`;
    const params = { include: "aspects,skills" };

    const initialCharacter = location.state?.character;

    return (
        <Suspense
            fallback={
                <>
                    <BreadcrumbItem
                        label={initialCharacter?.name ?? <>&hellip;</>}
                        uri={uri}
                    />
                    <CharacterSheet loading character={initialCharacter} />
                </>
            }
        >
            <Fetch resource={resource} params={params}>
                {({ data: character }) => (
                    <>
                        <BreadcrumbItem label={character.name} uri={uri} />
                        <CharacterSheet character={character} />
                    </>
                )}
            </Fetch>
        </Suspense>
    );
}
