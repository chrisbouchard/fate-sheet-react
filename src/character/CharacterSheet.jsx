import { flow, groupBy, sortBy, toPairs } from "lodash-es";
import {
    Button,
    Grid,
    Header,
    Image,
    Label,
    List,
    Segment,
} from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";

import placeholderImageUri from "./placeholder.svg";

export function CharacterSheet({ character, loading }) {
    const stressTracks = [
        {
            name: "Physical",
            boxes: [
                { level: 1, checked: false },
                { level: 2, checked: false },
            ],
        },
        {
            name: "Mental",
            boxes: [
                { level: 1, checked: true },
                { level: 2, checked: false },
                { level: 3, checked: false },
                { level: 4, checked: false },
            ],
        },
    ];

    const consequences = [
        {
            name: null,
            label: "Mild",
            level: 2,
        },
        {
            name: null,
            label: "Moderate",
            level: 4,
        },
        {
            name: null,
            label: "Severe",
            level: 6,
        },
    ];

    return (
        <>
            <Grid as={Segment} piled padded>
                <Grid.Column width={11}>
                    <Grid columns="equal">
                        <Grid.Row>
                            <Grid.Column>
                                <Header as="h1">
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
                        <Grid.Row>
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
                        <Grid.Row>
                            <Grid.Column>
                                <Header size="medium">Consequences</Header>
                                <AspectsSection
                                    aspects={consequences}
                                    loading={loading}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Header size="medium">Stress</Header>
                                <StressSection
                                    stressTracks={stressTracks}
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
        <List relaxed verticalAlign="middle">
            {aspects?.map((aspect, index) => (
                <List.Item key={index}>
                    {aspect.level ? (
                        <Image>
                            <Header size="large" textAlign="center">
                                <Shifts value={-aspect.level} />
                            </Header>
                        </Image>
                    ) : null}
                    <List.Content>
                        {aspect.name ? (
                            <List.Header>{aspect.name}</List.Header>
                        ) : (
                            <List.Description>
                                <i>Empty</i>
                            </List.Description>
                        )}
                        <List.Description>{aspect.label}</List.Description>
                    </List.Content>
                </List.Item>
            ))}
        </List>
    );
}

function SkillsSection({ skills, loading }) {
    const levelGroups = flow(
        (_) => sortBy(_, "name"),
        (_) => groupBy(_, "level"),
        toPairs,
        (_) => sortBy(_, (pair) => -pair[0])
    )(skills);

    return (
        <List relaxed verticalAlign="middle">
            {levelGroups.map(([level, skillsAtLevel]) => (
                <List.Item key={level}>
                    <Image>
                        <Header size="large" textAlign="center">
                            <Shifts value={level} />
                        </Header>
                    </Image>
                    <List.Content>
                        <List horizontal>
                            {skillsAtLevel.map((skill) => (
                                <List.Item key={skill.name}>
                                    {skill.name}
                                </List.Item>
                            ))}
                        </List>
                    </List.Content>
                </List.Item>
            ))}
        </List>
    );
}

function StressSection({ stressTracks, loading }) {
    return (
        <List relaxed>
            {stressTracks.map((stressTrack) => (
                <StressTrack stressTrack={stressTrack} loading={loading} />
            ))}
        </List>
    );
}

function StressTrack({ stressTrack, loading }) {
    return (
        <List.Item>
            <List.Header>{stressTrack.name}</List.Header>
            <List.Content style={{ "margin-top": "2pt" }}>
                {stressTrack.boxes.map((box) => (
                    <Button
                        basic={!box.checked}
                        circular
                        compact
                        content={box.level}
                        icon={box.checked ? "times circle" : "circle outline"}
                        negative={box.checked}
                        size="small"
                    />
                ))}
            </List.Content>
        </List.Item>
    );
}

function Shifts({ absolute = false, value }) {
    const positiveModifier = absolute ? null : "+";
    const negativeModifier = <>&minus;</>;

    return value != null ? (
        <>
            {value >= 0 ? positiveModifier : negativeModifier}
            {Math.abs(value)}
        </>
    ) : null;
}
