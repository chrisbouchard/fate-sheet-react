import { Suspense } from "react";
import { Card } from "semantic-ui-react";

import { Fetch } from "../api/Fetch";

import { CharacterCard } from "./CharacterCard";

export function CharacterList(props) {
    const resource = `characters`;
    const params = {
        include: "aspects",
        page: {
            number: props.pageNumber ?? 1,
            ...(props.pageSize ? { size: props.pageSize } : {}),
        },
    };

    return (
        <Suspense
            fallback={
                <Card.Group>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <CharacterCard loading key={i} />
                    ))}
                </Card.Group>
            }
        >
            <Fetch resource={resource} params={params}>
                {({ data: characters }) => (
                    <Card.Group>
                        {characters.map((character) => (
                            <CharacterCard
                                character={character}
                                key={character.id}
                            />
                        ))}
                    </Card.Group>
                )}
            </Fetch>
        </Suspense>
    );
}
