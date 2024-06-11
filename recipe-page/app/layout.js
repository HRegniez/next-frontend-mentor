import { Outfit, Young_Serif} from "next/font/google";
import "./globals.css";
import Image from "next/image"
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800"] });
const young_serif = Young_Serif({ subsets: ["latin"], variable: "--font-young-serif", weight: ["400"] });

export const metadata = {
  title: "Recipe Page - Frontend Mentor",
  description: "Recipe Page challenge from Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(outfit.className)}>
        <header className="lg:mx-8 lg:mt-8">
        <Image className="lg:rounded-xl" src="/image-omelette.jpeg" alt="Omelette" width={1920} height={1080} />
        </header>
        <main className="px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

export { young_serif };
