import { BreadcrumbsProvider } from "@fransvilhelm/react-breadcrumbs";

import { FullMenu } from "./FullMenu";
import { Media } from "./Responsive";

export function Frame(props) {
    return (
        <BreadcrumbsProvider>
            <Media at="mobile">
                <p>Hello Mobile!</p>
                {props.children}
            </Media>
            <Media greaterThan="mobile">
                <FullMenu />
                {props.children}
            </Media>
        </BreadcrumbsProvider>
    );
}
