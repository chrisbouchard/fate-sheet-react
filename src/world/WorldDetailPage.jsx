import { Router } from "@reach/router";
import { Suspense } from "react";
import { Segment } from "semantic-ui-react";

import { Fetch } from "../api/Fetch";
import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

import { WorldCharacterSelectPage } from "./WorldCharacterSelectPage";
import { WorldOverview } from "./WorldOverview";

export function WorldDetailPage({ id, location, uri }) {
    const resource = `worlds/${id}`;

    const initialWorld = location.state?.world;

    return (
        <>
            <Suspense
                fallback={
                    <>
                        <BreadcrumbItem
                            label={initialWorld?.name ?? <>&hellip;</>}
                            uri={uri}
                        />
                        <WorldOverview loading />
                    </>
                }
            >
                <Fetch resource={resource}>
                    {({ data: world }) => (
                        <>
                            <BreadcrumbItem label={world.name} uri={uri} />
                            <WorldOverview world={world} />
                        </>
                    )}
                </Fetch>
            </Suspense>
            <Segment basic>
                <Router>
                    <WorldCharacterSelectPage path="/" worldId={id} />
                </Router>
            </Segment>
        </>
    );
}
