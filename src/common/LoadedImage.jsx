import { useLayoutEffect, useReducer } from "react";
import { Dimmer, Image, Label, Loader } from "semantic-ui-react";

const initialState = {
    loading: false,
    loaded: false,
    errored: false,
    complete: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "reset":
            return {
                ...state,
                loading: action.src != null,
                loaded: false,
                errored: false,
                complete: false,
            };
        case "load":
            return {
                ...state,
                loading: false,
                loaded: true,
                complete: true,
            };
        case "error":
            return {
                ...state,
                loading: false,
                errored: true,
                complete: true,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export function LoadedImage({
    image,
    loading = false,
    placeholder,
    ...imageProps
}) {
    const [imageState, dispatch] = useReducer(reducer, initialState);

    // Reset state when the image source changes. We use a layout effect so
    // that the reset happens *before* the <img> element is "painted" and
    // begins loading, to avoid a race condition.
    useLayoutEffect(() => {
        dispatch({ type: "reset", image });
    }, [image]);

    const dimmerActive =
        (loading && !imageState.complete) || imageState.loading;

    return (
        <Image {...imageProps}>
            <Dimmer inverted active={dimmerActive}>
                <Loader />
            </Dimmer>
            {imageState.errored && (
                <Label color="red" corner="right" icon="warning sign" />
            )}
            <div
                style={{ display: imageState.loaded ? "block" : "none" }}
                onLoad={() => dispatch({ type: "load" })}
                onError={() => dispatch({ type: "error" })}
            >
                {image}
            </div>
            <div style={{ display: imageState.loaded ? "none" : "block" }}>
                {placeholder}
            </div>
        </Image>
    );
}
