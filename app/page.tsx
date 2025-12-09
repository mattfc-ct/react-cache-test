import CachedTestComponent from "@/components/cached-test-component";
import UncachedTestComponent from "@/components/uncached-test-component";

export default function Home() {
  return (
    <main>
      <UncachedTestComponent />
      <UncachedTestComponent />
      <hr/>
      <CachedTestComponent />
      <CachedTestComponent />
    </main>
  );
}
