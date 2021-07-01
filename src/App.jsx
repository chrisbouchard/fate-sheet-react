import { Router } from "@reach/router";

import { AuthProvider } from "./api/Auth";
import { CharacterPage } from "./character/CharacterPage";
import { Frame } from "./common/Frame";
import { Index } from "./common/Index";
import { MediaContextProvider } from "./common/Responsive";

export function App() {
    return (
        <AuthProvider>
            <MediaContextProvider>
                <Frame>
                    <Router>
                        <Index path="/" />
                        <CharacterPage path="characters/*" />
                    </Router>
                </Frame>
            </MediaContextProvider>
        </AuthProvider>
    );
}
