import { Router } from "@reach/router";
import { Container } from "semantic-ui-react";

import { WorldDetailPage } from "./WorldDetailPage";
import { WorldSelectPage } from "./WorldSelectPage";

export function WorldPage() {
    return (
        <Container>
            <Router>
                <WorldSelectPage path="/" />
                <WorldDetailPage path=":id/*" />
            </Router>
        </Container>
    );
}
