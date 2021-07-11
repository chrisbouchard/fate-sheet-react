import { Router } from "@reach/router";

import { ApiProvider } from "./api/Api";
import { AuthProvider } from "./api/Auth";
import { CharacterPage } from "./character/CharacterPage";
import { Frame } from "./common/Frame";
import { Index } from "./common/Index";
import { MediaContextProvider } from "./common/Responsive";
import { WorldPage } from "./world/WorldPage";

export function App() {
    return (
        <AuthProvider>
            <ApiProvider>
                <MediaContextProvider>
                    <Frame>
                        {() => (
                            <Router>
                                <Index path="/" />
                                <CharacterPage path="characters/*" />
                                <WorldPage path="worlds/*" />
                            </Router>
                        )}
                    </Frame>
                </MediaContextProvider>
            </ApiProvider>
        </AuthProvider>
    );
}
