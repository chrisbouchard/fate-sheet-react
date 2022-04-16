import { Link } from "@reach/router";
import { flow, groupBy, sortBy, toPairs } from "lodash-es";
import {
    Button,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Statistic,
} from "semantic-ui-react";

import { LoadedImage } from "../common/LoadedImage";

import { ReactComponent as PlaceholderImage } from "./placeholder.svg";

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

    const powerLevel = 4;
    const skillPoints = 35;

    return (
        <Segment piled padded>
            <Grid stackable>
                <Grid.Column mobile={16} tablet={16} computer={11}>
                    <Menu secondary stackable>
                        <Menu.Item>
                            <Header as="h1">
                                {character?.name ?? (
                                    loading
                                        ? <>Loading&hellip;</>
                                        : <>Unknown Character</>
                                )}{" "}
                            </Header>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Button
                                    as={character.world?.data && Link}
                                    basic
                                    content={
                                        character.world?.data?.name ?? (
                                            loading
                                                ? <i>Loading&hellip;</i>
                                                : <i>Unknown World</i>
                                        )
                                    }
                                    icon="globe"
                                    labelPosition="left"
                                    to={`/worlds/${character.world?.data?.id}`}
                                    primary
                                />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7}>
                                <Segment basic>
                                    <Header size="medium">Aspects</Header>
                                    <AspectsSection
                                        aspects={character?.aspects?.data}
                                        loading={loading}
                                    />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Segment basic>
                                    <Header size="medium">Skills</Header>
                                    <SkillsSection
                                        skills={character?.skills?.data}
                                        loading={loading}
                                    />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row reversed="mobile">
                            <Grid.Column width={7}>
                                <Segment basic>
                                    <Header size="medium">Consequences</Header>
                                    <AspectsSection
                                        aspects={consequences}
                                        loading={loading}
                                    />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Segment basic>
                                    <Header size="medium">Stress</Header>
                                    <StressSection
                                        stressTracks={stressTracks}
                                        loading={loading}
                                    />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment basic>
                                    <Header size="medium">Stunts</Header>
                                    <List>
                                        <List.Item>
                                            <List.Header>Test</List.Header>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Mauris
                                            sed feugiat ligula, vitae iaculis
                                            tellus. Proin quis enim sit amet ex
                                            convallis convallis. Aenean
                                            convallis viverra ultricies.
                                            Vestibulum ut lacinia justo. Donec
                                            viverra facilisis purus ut sagittis.
                                            Interdum et malesuada fames ac ante
                                            ipsum primis in faucibus. Donec
                                            convallis leo.
                                        </List.Item>
                                    </List>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={5}>
                    <Segment secondary>
                        <Grid>
                            <Grid.Column mobile={16} tablet={7} computer={16}>
                                <LoadedImage
                                    placeholder={<PlaceholderImage />}
                                    loading={loading}
                                    bordered
                                />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={9} computer={16}>
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
                                <Divider hidden />
                                <Statistic.Group size="tiny" widths={3}>
                                    <Statistic>
                                        <Statistic.Value>
                                            {powerLevel}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            Power
                                            <br />
                                            Level
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>
                                            {character?.refresh}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            Refresh
                                        </Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>
                                            {skillPoints}
                                        </Statistic.Value>
                                        <Statistic.Label>
                                            Skill
                                            <br />
                                            Points
                                        </Statistic.Label>
                                    </Statistic>
                                </Statistic.Group>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
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
            {stressTracks.map((stressTrack, i) => (
                <StressTrack key={i} stressTrack={stressTrack} loading={loading} />
            ))}
        </List>
    );
}

function StressTrack({ stressTrack, loading }) {
    return (
        <List.Item>
            <List.Header>{stressTrack.name}</List.Header>
            <List.Content style={{ marginTop: "2pt" }}>
                {stressTrack.boxes.map((box, i) => (
                    <Button
                        key={i}
                        basic={!box.checked}
                        circular
                        compact
                        content={box.level}
                        icon={box.checked ? "times circle" : "circle outline"}
                        negative={box.checked}
                        size="small"
                    ></Button>
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
