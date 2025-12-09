import { cacheTest } from "@/lib/cache-test";

export default function CacheTestComponent() {
    const cacheTestValue = cacheTest();

    return (
        <div>
            Cache test value from TestComponent: {cacheTestValue}
        </div>
    )
}