import { cache } from "react";

export const cacheTest = cache(async () => {
    return Math.random();
});