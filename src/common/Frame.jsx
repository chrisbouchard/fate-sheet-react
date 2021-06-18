import { createMedia } from "@artsy/fresnel";

import { FullMenu } from "./FullMenu";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        small: 992,
        large: 1201,
    },
});

export function Frame(props) {
    return (
        <MediaContextProvider>
            <Media at="mobile">
                <p>Hello Mobile!</p>
                {props.children}
            </Media>
            <Media greaterThan="mobile">
                <FullMenu />
                {props.children}
            </Media>
        </MediaContextProvider>
    );
}
