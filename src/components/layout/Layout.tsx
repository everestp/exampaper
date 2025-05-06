
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollArea className="flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
      </ScrollArea>
      <Footer />
      <Toaster />
    </div>
  );
}
