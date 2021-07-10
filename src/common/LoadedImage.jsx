import { useState } from "react";
import { Dimmer, Image, Loader } from "semantic-ui-react";

export function LoadedImage({
    loading = false,
    placeholderSrc,
    src,
    ...imageProps
}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageErrored, setImageErrored] = useState(false);

    const dimmerActive = loading || (!imageLoaded && !imageErrored);

    const displayImage = !loading && imageLoaded;
    const displayPlaceholder = !displayImage;

    return (
        <Image {...imageProps}>
            <Dimmer inverted active={dimmerActive}>
                <Loader />
            </Dimmer>
            <img
                src={src}
                style={{ display: displayImage ? "block" : "none" }}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageErrored(true)}
            />
            <img
                src={placeholderSrc}
                style={{ display: displayPlaceholder ? "block" : "none" }}
            />
        </Image>
    );
}
