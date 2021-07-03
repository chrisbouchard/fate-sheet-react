import { useContext, useEffect } from "react";

import { BreadcrumbsContext } from "./Breadcrumbs";

export function BreadcrumbItem({ children, label, uri }) {
    const { addItem, removeItem } = useContext(BreadcrumbsContext);

    useEffect(
        () => {
            const item = { label, uri };
            addItem(item);
            return () => removeItem(item);
        },
        // It's important that we pass label and uri separately, rather than
        // passing the item as a whole. We need these values to compare equal
        // on successive renders to avoid a loop, since adding an item causes a
        // re-render on the entire BreadcrumbProvider tree. Strings are
        // compared by value, so this will be stable.
        [label, uri, addItem, removeItem]
    );

    return null;
}
