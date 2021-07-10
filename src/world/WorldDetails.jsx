import {
    Dimmer,
    Divider,
    Grid,
    Header,
    Image,
    Loader,
    Placeholder,
    Segment,
} from "semantic-ui-react";

import placeholderImageUri from "./placeholder.svg";

export function WorldDetails({ loading, world }) {
    return (
        <Grid as={Segment}>
            <Grid.Column width={5}>
                <Image>
                    <Dimmer inverted active={loading}>
                        <Loader />
                    </Dimmer>
                    <Image src={placeholderImageUri} bordered />
                </Image>
            </Grid.Column>
            <Grid.Column width={11}>
                {world?.name ? (
                    <Header size="huge">{world.name}</Header>
                ) : loading ? (
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                ) : null}
                {world?.description ? (
                    <p>{world.description}</p>
                ) : loading ? (
                    <Placeholder>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                ) : null}
            </Grid.Column>
        </Grid>
    );
}
