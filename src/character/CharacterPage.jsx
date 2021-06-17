import { Router } from "@reach/router";
import { Container } from "semantic-ui-react";

import { CharacterList } from "./CharacterList";
import { CharacterSheet } from "./CharacterSheet";

export function CharacterPage() {
    return (
        <Container>
            <Router>
                <CharacterList path="/" />
                <CharacterSheet path=":id" />
            </Router>
        </Container>
    );
}
