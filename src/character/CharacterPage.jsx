import { Router } from "@reach/router";
import { Container } from "semantic-ui-react";

import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

import { CharacterSelectPage } from "./CharacterSelectPage";
import { CharacterDetailPage } from "./CharacterDetailPage";

export function CharacterPage({ uri }) {
    return (
        <>
            <BreadcrumbItem label="Characters" uri={uri} />
            <Container>
                <Router>
                    <CharacterSelectPage path="/" />
                    <CharacterDetailPage path=":id" />
                </Router>
            </Container>
        </>
    );
}
