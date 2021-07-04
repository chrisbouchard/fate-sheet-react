import { Header, Segment } from "semantic-ui-react";

export function CharacterSheet({ character, loading }) {
    return (
        <Segment stacked>
            <Header size="huge" dividing>
                {character?.name ??
                    (loading ? <>Loading&hellip;</> : "Unknown Character")}
                <Header.Subheader>
                    {character?.aspects
                        ? character.aspects.data[0]?.name
                        : null}
                </Header.Subheader>
            </Header>
        </Segment>
    );
}
