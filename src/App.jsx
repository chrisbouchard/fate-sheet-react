import { Router } from "@reach/router";

import { ApiProvider } from "./api/Api";
import { AuthProvider } from "./api/Auth";
import { BreadcrumbsProvider } from "./breadcrumbs/Breadcrumbs";
import { CharacterPage } from "./character/CharacterPage";
import { BreadcrumbItem } from "./breadcrumbs/BreadcrumbItem";
import { BreadcrumbList } from "./breadcrumbs/BreadcrumbList";
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
                            <BreadcrumbsProvider>
                                <BreadcrumbItem label="Home" uri="/" />
                                <BreadcrumbList />
                                <Router>
                                    <Index path="/" />
                                    <CharacterPage path="characters/*" />
                                    <WorldPage path="worlds/*" />
                                </Router>
                            </BreadcrumbsProvider>
                        )}
                    </Frame>
                </MediaContextProvider>
            </ApiProvider>
        </AuthProvider>
    );
}
