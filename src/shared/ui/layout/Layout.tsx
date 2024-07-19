import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { LogInIcon } from "lucide-react";
import { Sidebar } from "@/shared/ui/layout/sidebar/Sidebar";
import { PopularAuthors } from "@/shared/ui/layout/popular-authors/PopularAuthors";
import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex h-header px-8 py-4 justify-between items-center">
          <span className="text-2xl font-semibold">Quackit</span>
          <Input placeholder="Search Quackit..." className="w-content" />
          <Link href={`/auth`}>
            <Button>
              <LogInIcon className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>
        </header>
        <main className="flex justify-between px-8 pb-4">
          <Sidebar />
          {children}
          <PopularAuthors />
        </main>
      </body>
    </html>
  );
}
