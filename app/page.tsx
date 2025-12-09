import CachedTestComponent from "@/components/cached-test-component";
import UncachedTestComponent from "@/components/uncached-test-component";
import { connection } from "next/server";
import { Suspense } from "react";

const Connection = async () => {
    await connection();

    return null;
}

export default async function Home() {
  
  return (
    <main>
      <Suspense>
        <Connection />
        <UncachedTestComponent />
        <UncachedTestComponent />
        <hr/>
        <CachedTestComponent />
        <CachedTestComponent />
      </Suspense>
    </main>
  );
}
