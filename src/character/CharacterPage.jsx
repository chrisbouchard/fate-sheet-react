import { Router } from "@reach/router";
import { Container } from "semantic-ui-react";

import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

import { CharacterList } from "./CharacterList";
import { CharacterSheet } from "./CharacterSheet";

export function CharacterPage({ uri }) {
    return (
        <>
            <BreadcrumbItem label="Characters" uri={uri} />
            <Container>
                <Router>
                    <CharacterList path="/" />
                    <CharacterSheet path=":id" />
                </Router>
            </Container>
        </>
    );
}
