import { Link } from "@reach/router";
import { Card, Dimmer, Image, Loader, Placeholder } from "semantic-ui-react";

import worldImageUri from "./world.svg";

export function WorldCard({ world, loading }) {
    return (
        <Card
            link
            as={loading ? undefined : Link}
            to={world?.id}
            state={{ world }}
        >
            <Image>
                <Dimmer inverted active={loading}>
                    <Loader />
                </Dimmer>
                <Image src={worldImageUri} />
            </Image>
            <Card.Content>
                {loading ? (
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                ) : (
                    <>
                        <Card.Header>{world.name}</Card.Header>
                        <Card.Description>{world.description}</Card.Description>
                    </>
                )}
            </Card.Content>
        </Card>
    );
}
