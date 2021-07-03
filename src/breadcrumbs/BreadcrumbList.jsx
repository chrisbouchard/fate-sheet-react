import { Link } from "@reach/router";
import { Breadcrumb, Container, Divider } from "semantic-ui-react";

import { useBreadcrumbs } from "./Breadcrumbs";

function formatSection({ label, uri }, active) {
    const activeProps = { active: true };
    const nonActiveProps = { as: Link, to: uri, link: true };

    return {
        ...(active ? activeProps : nonActiveProps),
        content: label,
        key: uri,
    };
}

export function BreadcrumbList() {
    const sections = useBreadcrumbs().map((item, index, items) =>
        formatSection(item, index === items.length - 1)
    );

    return (
        <Container>
            <Breadcrumb sections={sections} />
            <Divider hidden></Divider>
        </Container>
    );
}
