import { Link } from "@reach/router";
import { Card, Placeholder } from "semantic-ui-react";

export function CharacterCard({ character, loading }) {
    return (
        <Card
            link
            as={loading ? undefined : Link}
            to={character?.id}
            state={{ character }}
        >
            <Placeholder>
                <Placeholder.Image square />
            </Placeholder>
            <Card.Content>
                {loading ? (
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                ) : (
                    <>
                        <Card.Header>{character.name}</Card.Header>
                        <Card.Meta>
                            {character.aspects?.data[0]?.name}
                        </Card.Meta>
                    </>
                )}
            </Card.Content>
        </Card>
    );
}
