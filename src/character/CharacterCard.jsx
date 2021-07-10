import { Link } from "@reach/router";
import { Card, Placeholder } from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";

import placeholderImageUri from "./placeholder.svg";

export function CharacterCard({ character, loading, path }) {
    return (
        <Card
            link
            as={loading ? undefined : Link}
            to={loading ? null : path}
            state={{ character }}
        >
            <LoadedImage
                placeholderSrc={placeholderImageUri}
                loading={loading}
                bordered
            />
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
