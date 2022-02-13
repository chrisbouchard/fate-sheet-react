import { Link } from "@reach/router";
import { Card, Placeholder } from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";

import { ReactComponent as PlaceholderImage } from "./placeholder.svg";

export function WorldCard({ world, loading }) {
    return (
        <Card
            link
            as={loading ? undefined : Link}
            to={world?.id}
            state={{ world }}
        >
            <LoadedImage
                image={loading || <img src="/world-test.svg" />}
                placeholder={<PlaceholderImage />}
                loading={loading}
                bordered
            />
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
