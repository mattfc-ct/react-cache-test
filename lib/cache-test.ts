import { cache } from "react";

export const cacheTest = cache(() => {
    console.log("Running cacheTest function");

    return "test";
});