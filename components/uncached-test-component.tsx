import { Suspense } from "react";
import CacheTestComponent from "./cache-test-component";
import { connection } from "next/server";

export default async function UncachedTestComponent() {
    return (
        <Suspense>
            <CacheTestComponent />
        </Suspense>
    );
};