import { Router } from "@reach/router";
import { Suspense } from "react";
import { Container } from "semantic-ui-react";

import { CharacterList } from "./character/CharacterList";
import { CharacterSheet } from "./character/CharacterSheet";

export function App() {
    return (
        <Container>
            <Suspense fallback="Loading...">
                <Router>
                    <CharacterList path="/"></CharacterList>
                    <CharacterSheet path="/:id"></CharacterSheet>
                </Router>
            </Suspense>
        </Container>
    );
}
