import { createMedia } from "@artsy/fresnel";

// These breakpoints are chosen to match the breakpoints of a SemanticUI
// container, as described here:
//     https://semantic-ui.com/elements/container.html
const SemanticUiMedia = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 992,
        largeScreen: 1200,
        widescreen: 1920,
    },
});

export const { Media, MediaContextProvider } = SemanticUiMedia;
