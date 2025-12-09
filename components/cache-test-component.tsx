import { cacheTest } from "@/lib/cache-test";

export default function CacheTestComponent({ name } : { name: string }) {
    const cacheTestValue = cacheTest(name);

    return (
        <div>
            Cache test value from TestComponent: {cacheTestValue}
        </div>
    )
}