import { Redirect, Router } from "@reach/router";

import { CharacterPage } from "./character/CharacterPage";

export function App() {
    return (
        <Router>
            <Redirect from="/" to="characters" noThrow />
            <CharacterPage path="characters/*" />
        </Router>
    );
}
