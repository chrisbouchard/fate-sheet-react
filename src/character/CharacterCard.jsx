import { Link } from "@reach/router";
import { Card, Dimmer, Image, Loader, Placeholder } from "semantic-ui-react";

import placeholderImageUri from "./placeholder.svg";

export function CharacterCard({ character, loading, path }) {
    return (
        <Card
            link
            as={loading ? undefined : Link}
            to={loading ? null : path}
            state={{ character }}
        >
            <Image>
                <Dimmer inverted active={loading}>
                    <Loader />
                </Dimmer>
                <Image src={placeholderImageUri} />
            </Image>
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
