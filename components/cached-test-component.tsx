import CacheTestComponent from "./cache-test-component";

export default async function CachedTestComponent() {
    "use cache: private";

    return (
        <CacheTestComponent name="cached" />
    );
};