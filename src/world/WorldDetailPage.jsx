import { Router } from "@reach/router";
import { Suspense } from "react";
import { Segment } from "semantic-ui-react";

import { Fetch } from "../api/Fetch";

import { WorldCharacterSelectPage } from "./WorldCharacterSelectPage";
import { WorldOverview } from "./WorldOverview";

export function WorldDetailPage({ id, location }) {
    const resource = `worlds/${id}`;
    const initialWorld = location.state?.world;

    return (
        <>
            <Suspense fallback={<WorldOverview loading world={initialWorld} />}>
                <Fetch resource={resource}>
                    {({ data: world }) => <WorldOverview world={world} />}
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
