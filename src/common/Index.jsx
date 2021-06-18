import { Container, Header, Segment } from "semantic-ui-react";

export function Index() {
    return (
        <Container>
            <Segment basic padded="very">
                <Header as="h1" textAlign="center">
                    Fate Sheet App
                </Header>
            </Segment>
        </Container>
    );
}
