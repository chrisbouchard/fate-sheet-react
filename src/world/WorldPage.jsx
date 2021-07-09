import { Router } from "@reach/router";
import { Container } from "semantic-ui-react";

import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

import { WorldDetailPage } from "./WorldDetailPage";
import { WorldSelectPage } from "./WorldSelectPage";

export function WorldPage({ uri }) {
    return (
        <>
            <BreadcrumbItem label="Worlds" uri={uri} />
            <Container>
                <Router>
                    <WorldSelectPage path="/" />
                    <WorldDetailPage path=":id" />
                </Router>
            </Container>
        </>
    );
}
