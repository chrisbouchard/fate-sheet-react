import { Card } from "semantic-ui-react";

import { WorldCard } from "./WorldCard";

export function WorldList({ worlds, loading }) {
    return (
        <Card.Group itemsPerRow={2}>
            {loading
                ? Array.from({ length: 2 }).map((_element, index) => (
                      <WorldCard loading key={index} />
                  ))
                : worlds.map((world) => (
                      <WorldCard world={world} key={world.id} />
                  ))}
        </Card.Group>
    );
}
