import { Grid, Header, Image, Label, List, Segment } from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";

import placeholderImageUri from "./placeholder.svg";

export function CharacterSheet({ character, loading }) {
    return (
        <>
            <Grid as={Segment} piled padded>
                <Grid.Column width={11}>
                    <Grid>
                        <Grid.Row columns="equal">
                            <Grid.Column>
                                <Header size="huge">
                                    {character?.name ??
                                        (loading ? (
                                            <>Loading&hellip;</>
                                        ) : (
                                            "Unknown Character"
                                        ))}{" "}
                                    {character?.world?.data ? (
                                        <Label color="blue" horizontal>
                                            {character.world.data.name}
                                        </Label>
                                    ) : null}
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns="equal">
                            <Grid.Column>
                                <Header size="medium">Aspects</Header>
                                <AspectsSection
                                    aspects={character?.aspects?.data}
                                    loading={loading}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Header size="medium">Skills</Header>
                                <SkillsSection
                                    skills={character?.skills?.data}
                                    loading={loading}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <LoadedImage
                                    placeholderSrc={placeholderImageUri}
                                    loading={loading}
                                    bordered
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis lectus tellus, vestibulum
                                eget pellentesque et, aliquet vel nisi. In
                                laoreet molestie mattis. Fusce sit amet est
                                gravida, volutpat magna quis, pulvinar magna.
                                Cras sed laoreet nulla. Aenean volutpat ligula
                                eu elit aliquet, et pulvinar lectus euismod.
                                Duis quis tincidunt dolor. Mauris eu elit a
                                augue volutpat dignissim a eget lectus. Quisque
                                porta sit amet turpis vel ultricies. In sem
                                felis, interdum at massa vitae, ultricies tempus
                                velit. Sed porttitor eros at arcu porttitor
                                ultricies. Praesent in porttitor tellus. Etiam
                                at felis pulvinar mauris placerat mattis.
                                Quisque tempor lacus velit, non.
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>
        </>
    );
}

function AspectsSection({ aspects, loading }) {
    return (
        <List relaxed>
            {aspects?.map((aspect, index) => (
                <List.Item key={index}>
                    <List.Header>{aspect.name}</List.Header>
                    <List.Description>{aspect.label}</List.Description>
                </List.Item>
            ))}
        </List>
    );
}

function SkillsSection({ skills, loading }) {
    return (
        <List relaxed verticalAlign="middle">
            <List.Item>
                <Image>
                    <Header size="large" textAlign="center">
                        +2
                    </Header>
                </Image>
                <List.Content>
                    <List horizontal>
                        <List.Item>Foo</List.Item>
                        <List.Item>Bar</List.Item>
                    </List>
                </List.Content>
            </List.Item>
            <List.Item>
                <Image>
                    <Header size="large" textAlign="center">
                        &minus;1
                    </Header>
                </Image>
                <List.Content>
                    <List horizontal>
                        <List.Item>Alpha</List.Item>
                        <List.Item>Beta</List.Item>
                    </List>
                </List.Content>
            </List.Item>
        </List>
    );
}
