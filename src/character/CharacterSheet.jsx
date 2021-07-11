import { Grid, Header, Segment } from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";

import placeholderImageUri from "./placeholder.svg";

export function CharacterSheet({ character, loading }) {
    return (
        <>
            <Grid as={Segment} stacked divided="vertically">
                <Grid.Row>
                    <Grid.Column width={4}>
                        <LoadedImage
                            placeholderSrc={placeholderImageUri}
                            loading={loading}
                            bordered
                        />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header size="huge">
                            {character?.name ??
                                (loading ? (
                                    <>Loading&hellip;</>
                                ) : (
                                    "Unknown Character"
                                ))}
                            <Header.Subheader>
                                {character?.aspects
                                    ? character.aspects.data[0]?.name
                                    : null}
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={4}>World</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <p>Hello World!</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}
