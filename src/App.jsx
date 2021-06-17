import { Redirect, Router } from "@reach/router";

import { CharacterPage } from "./character/CharacterPage";
import { Frame } from "./common/Frame";

export function App() {
    return (
        <Frame>
            <Router>
                <Redirect from="/" to="characters" noThrow />
                <CharacterPage path="characters/*" />
            </Router>
        </Frame>
    );
}
