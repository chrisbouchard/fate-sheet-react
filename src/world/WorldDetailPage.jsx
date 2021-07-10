import { Suspense } from "react";

import { Fetch } from "../api/Fetch";
import { BreadcrumbItem } from "../breadcrumbs/BreadcrumbItem";

import { WorldDetails } from "./WorldDetails";

export function WorldDetailPage({ id, location, uri }) {
    const resource = `worlds/${id}`;

    const initialWorld = location.state?.world;

    return (
        <Suspense
            fallback={
                <>
                    <BreadcrumbItem
                        label={initialWorld?.name ?? <>&hellip;</>}
                        uri={uri}
                    />
                    <WorldDetails loading />
                </>
            }
        >
            <Fetch resource={resource}>
                {({ data: world }) => (
                    <>
                        <BreadcrumbItem label={world.name} uri={uri} />
                        <WorldDetails world={world} />
                    </>
                )}
            </Fetch>
        </Suspense>
    );
}
