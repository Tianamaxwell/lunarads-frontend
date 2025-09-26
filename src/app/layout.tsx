import "@/app/globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = { title: "LunarAds", description: "Clean frontend" };
<Sidebar className="mr-6" />

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </body></html>
    
  );
  <Sidebar className="mr-6" />
}