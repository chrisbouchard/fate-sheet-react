import { Grid, Header, List, Segment } from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";
import { WorldTag } from "../world/WorldTag";

import placeholderImageUri from "./placeholder.svg";

export function CharacterSheet({ character, loading }) {
    return (
        <>
            <Grid as={Segment} stacked>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Header size="huge">
                            {character?.name ??
                                (loading ? (
                                    <>Loading&hellip;</>
                                ) : (
                                    "Unknown Character"
                                ))}
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign="right">
                        {character?.world?.data ? (
                            <WorldTag world={character.world.data} />
                        ) : null}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <AspectsSection
                            aspects={character?.aspects?.data}
                            loading={loading}
                        />
                    </Grid.Column>
                    <Grid.Column width={8}>Skills</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <LoadedImage
                            placeholderSrc={placeholderImageUri}
                            loading={loading}
                            bordered
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
}

function AspectsSection({ aspects, loading }) {
    return (
        <List>
            {aspects?.map((aspect, index) => (
                <List.Item key={index}>
                    <List.Header>{aspect.name}</List.Header>
                    <List.Description>{aspect.label}</List.Description>
                </List.Item>
            ))}
        </List>
    );
}
