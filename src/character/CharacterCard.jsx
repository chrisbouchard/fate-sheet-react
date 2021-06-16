import { Link } from "@reach/router";
import { Card, Placeholder } from "semantic-ui-react";

export function CharacterCard(props) {
    if (props.loading) {
        return (
            <Card>
                <Card.Content>
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                </Card.Content>
            </Card>
        );
    } else {
        return (
            <Card as={Link} to={props.character.id}>
                <Card.Content>
                    <Card.Header>{props.character.name}</Card.Header>
                    {props.character.aspects ? (
                        <Card.Meta>
                            {props.character.aspects.data[0]?.name}
                        </Card.Meta>
                    ) : null}
                </Card.Content>
            </Card>
        );
    }
}
