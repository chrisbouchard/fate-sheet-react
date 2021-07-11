import { Grid, Header, Placeholder, Segment } from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";

import placeholderImageUri from "./placeholder.svg";

export function WorldOverview({ loading, world }) {
    return (
        <Grid as={Segment}>
            <Grid.Column width={4}>
                <LoadedImage
                    src={loading ? undefined : "/world-test.svg"}
                    placeholderSrc={placeholderImageUri}
                    loading={loading}
                    bordered
                />
            </Grid.Column>
            <Grid.Column width={12}>
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
