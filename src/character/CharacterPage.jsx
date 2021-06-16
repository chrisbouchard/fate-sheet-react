import { Router } from "@reach/router";
import { Suspense } from "react";
import { Container } from "semantic-ui-react";

import { CharacterList } from "./CharacterList";
import { CharacterSheet } from "./CharacterSheet";

export function CharacterPage() {
    return (
        <Container>
            <Suspense fallback="Loading...">
                <Router>
                    <CharacterList path="/" />
                    <CharacterSheet path="/:id" />
                </Router>
            </Suspense>
        </Container>
    );
}
