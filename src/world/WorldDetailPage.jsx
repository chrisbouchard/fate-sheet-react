import { Suspense } from "react";

import { Fetch } from "../api/Fetch";
import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

export function WorldDetailPage({ id, location, uri }) {
    const resource = `worlds/${id}`;

    const initialWorld = location.state.world;

    return (
        <Suspense
            fallback={
                <>
                    <BreadcrumbItem
                        label={initialWorld?.name ?? <>&hellip;</>}
                        uri={uri}
                    />
                    Hello World!
                </>
            }
        >
            <Fetch resource={resource}>
                {({ data: world }) => (
                    <>
                        <BreadcrumbItem label={world.name} uri={uri} />
                        Hello World!
                    </>
                )}
            </Fetch>
        </Suspense>
    );
}
