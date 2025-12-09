import CachedTestComponent from "@/components/cached-test-component";
import UncachedTestComponent from "@/components/uncached-test-component";
import { connection } from "next/server";
import { Suspense } from "react";

export default async function Home() {
  
  return (
    <main>
      <Suspense>
        <UncachedTestComponent />
        <UncachedTestComponent />
        <hr/>
        <CachedTestComponent />
        <CachedTestComponent />
      </Suspense>
    </main>
  );
}
