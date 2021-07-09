import { Card } from "semantic-ui-react";

import { CharacterCard } from "./CharacterCard";

export function CharacterList({ characters, loading, path }) {
    return (
        <Card.Group>
            {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                      <CharacterCard loading key={i} />
                  ))
                : characters.map((character) => (
                      <CharacterCard
                          character={character}
                          path={path(character)}
                          key={character.id}
                      />
                  ))}
        </Card.Group>
    );
}
