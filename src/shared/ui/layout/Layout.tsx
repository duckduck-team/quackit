"use client";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { LogInIcon, LogOut, User } from "lucide-react";
import { Sidebar } from "@/shared/ui/layout/sidebar/Sidebar";
import { PopularAuthors } from "@/shared/ui/layout/popular-authors/PopularAuthors";
import { Inter } from "next/font/google";
import Link from "next/link";
import { current_user } from "@/pages/register/lib/login";
import { useEffect, useState } from "react";
import { UserInDB } from "@/pages/posts/lib/users";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  const [user, setUser] = useState<UserInDB | null>(null);

  useEffect(() => {
    async function fetch_user() {
      const token = localStorage.getItem("access_token");
      if (token) {
        const user = await current_user(token);
        setUser(user);
      }
    }

    fetch_user();
  }, []);

  function logout() {
    localStorage.removeItem("access_token");
    window.location.reload();
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex gap-2 h-header px-2 sm:px-8 py-2 sm:justify-between items-center">
          <span className="hidden sm:visible text-2xl font-semibold">Quackit</span>
          <Input placeholder="Search Quackit..." className="w-full sm:w-content" />
          {user === null ? (
            <Link href={`/auth/login`}>
              <Button>
                <LogInIcon className="mr-2 h-4 w-4" /> Login
              </Button>
            </Link>
          ) : (
            <div className="flex gap-4 ml-4">
              <Button>
                <User className="mr-2 h-4 w-4" /> {user.username}
              </Button>
              <Button onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          )}
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
