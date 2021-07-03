import { Suspense } from "react";
import { Header, Segment } from "semantic-ui-react";

import { Fetch } from "../api/Fetch";
import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

export function CharacterSheet({ id, uri }) {
    const resource = `characters/${id}`;
    const params = { include: "aspects,skills" };

    return (
        <Suspense
            fallback={
                <>
                    <BreadcrumbItem label={<>&hellip;</>} uri={uri} />
                    <div>Loading&hellip;</div>
                </>
            }
        >
            <Fetch resource={resource} params={params}>
                {({ data: character }) => (
                    <>
                        <BreadcrumbItem label={character.name} uri={uri} />
                        <Segment stacked>
                            <Header size="huge" dividing>
                                {character.name}
                                <Header.Subheader>
                                    {character.aspects.data[0]?.name}
                                </Header.Subheader>
                            </Header>
                        </Segment>
                    </>
                )}
            </Fetch>
        </Suspense>
    );
}
