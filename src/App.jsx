import { Router } from "@reach/router";

import { AuthProvider } from "./api/Auth";
import { BreadcrumbsProvider } from "./breadcrumbs/Breadcrumbs";
import { CharacterPage } from "./character/CharacterPage";
import { BreadcrumbItem } from "./breadcrumbs/BreadcrumbItem";
import { BreadcrumbList } from "./breadcrumbs/BreadcrumbList";
import { Frame } from "./common/Frame";
import { Index } from "./common/Index";
import { MediaContextProvider } from "./common/Responsive";

export function App() {
    return (
        <AuthProvider>
            <MediaContextProvider>
                <Frame>
                    {() => (
                        <BreadcrumbsProvider>
                            <BreadcrumbItem label="Home" uri="/" />
                            <BreadcrumbList />
                            <Router>
                                <Index path="/" />
                                <CharacterPage path="characters/*" />
                            </Router>
                        </BreadcrumbsProvider>
                    )}
                </Frame>
            </MediaContextProvider>
        </AuthProvider>
    );
}
