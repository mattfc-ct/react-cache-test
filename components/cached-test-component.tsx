import { Suspense } from "react";
import CacheTestComponent from "./cache-test-component";
import { cacheLife } from "next/cache";

export default async function CachedTestComponent() {
    "use cache";

    cacheLife({ revalidate: 0 });

    return (
        <CacheTestComponent name="cached" />
    );
};