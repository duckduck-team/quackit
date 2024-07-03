import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex h-header px-8 py-4 justify-between items-center">
          <span className="text-2xl font-semibold">Quackit</span>
          <Input placeholder="Search Quackit..." className="w-[52rem]" />
          <Button>
            <LogInIcon className="mr-2 h-4 w-4" /> Login
          </Button>
        </header>
        <main className="flex justify-between px-8 pb-4 h-screen-wo-header">
          <Sidebar />
          {children}
          <div className="flex flex-col bg-[#F9F9F9] w-[23rem] gap-2.5 p-4 rounded-sm">
            <span className="text-xl font-semibold">Popular authors</span>
            <Card className="flex p-4 gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/danmaninc.png" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">@danmaninc</span>
                <span className="text-sm font-normal">
                  Frontend Developer & UX/UI
                </span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4">
              <Avatar>
                <AvatarFallback>PE</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">@Petrel321</span>
                <span className="text-sm font-normal">Frontend Developer</span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4">
              <Avatar>
                <AvatarFallback>BA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">@bakinasa</span>
                <span className="text-sm font-normal">Frontend Developer</span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4">
              <Avatar>
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">@MonitorPC</span>
                <span className="text-sm font-normal">Monitor+PC=LOVE</span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4">
              <Avatar>
                <AvatarFallback>IL</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">@iliyasone</span>
                <span className="text-sm font-normal">Frontend Developer</span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/duckduck-team.png" />
                <AvatarFallback>DU</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">@duckduck</span>
                <span className="text-sm font-normal">
                  Best quacking solutions 🦆
                </span>
              </div>
            </Card>
          </div>
        </main>
      </body>
    </html>
  );
}
