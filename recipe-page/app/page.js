import Intro from "./Intro"
import { Separator } from "@/components/ui/separator"
import Ingredients from "@/app/Ingredients"
import Instructions from "@/app/Instructions"
import Nutrition from "@/app/Nutrition"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Intro />
      <Ingredients />
      <Separator />
      <Instructions />
      <Separator />
      <Nutrition />
    </main>
  );
}
