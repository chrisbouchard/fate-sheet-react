import { useContext, useEffect } from "react";

import { BreadcrumbsContext } from "./Breadcrumbs";

export function BreadcrumbItem({ children, ...item }) {
    const { addItem, removeItem } = useContext(BreadcrumbsContext);

    useEffect(() => {
        addItem(item);
        return () => removeItem(item);
    }, [item, addItem, removeItem]);

    return null;
}
