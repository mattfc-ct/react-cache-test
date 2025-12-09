import { Suspense } from "react";
import CacheTestComponent from "./cache-test-component";

export default async function UncachedTestComponent() {
    return (
        <Suspense>
            <CacheTestComponent />
        </Suspense>
    );
};