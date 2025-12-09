import { Suspense } from "react";
import CacheTestComponent from "./cache-test-component";

export default async function CachedTestComponent() {
    "use cache";

    return (
        <Suspense>
            <CacheTestComponent />
        </Suspense>
    );
};