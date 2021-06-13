import { Link } from "@reach/router";
import { Card } from "semantic-ui-react";

import { Fetch } from "../api/Fetch";

export function CharacterList(props) {
    const resource = `characters`;
    const params = {
        include: "aspects",
        page: {
            number: props.pageNumber ?? 1,
            size: props.pageSize ?? 10,
        },
    };

    return (
        <Card.Group>
            <Fetch resource={resource} params={params}>
                {({ data: characters }) =>
                    characters.map((character) => (
                        <Card as={Link} to={character.id}>
                            <Card.Content>
                                <Card.Header>{character.name}</Card.Header>
                                <Card.Meta>
                                    {character.aspects.data[0]?.name}
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Fetch>
        </Card.Group>
    );
}
