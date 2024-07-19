import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { LogInIcon } from "lucide-react";
import { Sidebar } from "@/shared/ui/layout/sidebar/Sidebar";
import { PopularAuthors } from "@/shared/ui/layout/popular-authors/PopularAuthors";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex gap-2 h-header px-2 sm:px-8 py-2 sm:justify-between items-center">
          <span className="hidden sm:visible text-2xl font-semibold">
            Quackit
          </span>
          <Input
            placeholder="Search Quackit..."
            className="w-full sm:w-content"
          />
          <Button>
            <LogInIcon className="mr-2 h-4 w-4" /> Login
          </Button>
        </header>
        <main className="flex justify-between px-2 sm:px-8 pb-4">
          <Sidebar />
          {children}
          <PopularAuthors />
        </main>
      </body>
    </html>
  );
}
