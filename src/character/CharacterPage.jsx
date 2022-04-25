import { Router } from "@reach/router";
import { Container } from "semantic-ui-react";

import { CharacterSelectPage } from "./CharacterSelectPage";
import { CharacterDetailPage } from "./CharacterDetailPage";

export function CharacterPage() {
    return (
        <Container>
            <Router>
                <CharacterSelectPage path="/" />
                <CharacterDetailPage path=":id" />
            </Router>
        </Container>
    );
}
