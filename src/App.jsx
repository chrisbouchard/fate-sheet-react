import { Suspense } from "react";
import { Container } from "semantic-ui-react";

import Sheet from "./sheet/Sheet";

export default function App() {
    return (
        <Container>
            <Suspense fallback="Loading...">
                <Sheet></Sheet>
            </Suspense>
        </Container>
    );
}
