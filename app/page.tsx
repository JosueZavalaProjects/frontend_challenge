import { Repositories } from "./components/repositories";
import { Navigation } from "./components/repositories/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-2 p-12 bg-secondaryBlack">
      <Navigation />
      <Repositories />
    </main>
  );
}
