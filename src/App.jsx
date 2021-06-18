import { Router } from "@reach/router";

import { CharacterPage } from "./character/CharacterPage";
import { Frame } from "./common/Frame";
import { Index } from "./common/Index";

export function App() {
    return (
        <Frame>
            <Router>
                <Index path="/" />
                <CharacterPage path="characters/*" />
            </Router>
        </Frame>
    );
}
