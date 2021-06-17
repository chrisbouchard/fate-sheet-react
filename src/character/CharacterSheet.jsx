import { Suspense } from "react";
import { Header, Segment } from "semantic-ui-react";

import { Fetch } from "../api/Fetch";

export function CharacterSheet(props) {
    const resource = `characters/${props.id}`;
    const params = { include: "aspects,skills" };

    return (
        <Suspense fallback="Loading...">
            <Fetch resource={resource} params={params}>
                {({ data: character }) => (
                    <Segment stacked>
                        <Header size="huge" dividing>
                            {character.name}
                            <Header.Subheader>
                                {character.aspects.data[0]?.name}
                            </Header.Subheader>
                        </Header>
                    </Segment>
                )}
            </Fetch>
        </Suspense>
    );
}
