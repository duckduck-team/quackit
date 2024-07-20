import { ArrowUpDown, Megaphone, MessageSquare, User } from "lucide-react";
import { Inter } from "next/font/google";
import { Card } from "../card";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}
export function LayoutAuth({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row h-screen`}>
        <header className="flex flex-col w-2/4 justify-center items-center bg-[#F9F9F9] px-4">
          <span className="text-4xl font-semibold mb-6">
            Welcome to Quackit.
          </span>
          <span className="text-2xl font-medium mb-[68px]">
            Join the community of Quackit in a few clicks.
          </span>
          <div className="flex flex-col gap-4 max-w-[630px]">
            <Card className="flex p-4 gap-4 items-center">
              <Megaphone size={40} />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold">
                  Share your content
                </span>
                <span className="text-sm font-normal">
                  The most voted content rises to top — this is your chance!
                </span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4 items-center">
              <MessageSquare size={40} />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold">
                  Participate in discussions
                </span>
                <span className="text-sm font-normal">
                  Discuss with the community latest news and share your opinion
                  with others.
                </span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4 items-center">
              <ArrowUpDown size={40} />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold">Vote for posts</span>
                <span className="text-sm font-normal">
                  You decide which content deserves popularity.
                </span>
              </div>
            </Card>
            <Card className="flex p-4 gap-4 items-center">
              <User size={40} />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold">Personal profile</span>
                <span className="text-sm font-normal">
                  Store your publications in a single storage.
                </span>
              </div>
            </Card>
          </div>
        </header>
        <main className="flex w-2/4 justify-center items-center px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
