import { cache } from "react";

export const cacheTest = cache((key: string) => {
    console.log("Running cacheTest function for key", key);

    return "test";
});