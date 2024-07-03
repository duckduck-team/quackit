import { Separator } from "@/components/ui/separator";
import { AccountBar } from "@/components/AccountBar";
import { TopicsBar } from "@/components/TopicsBar";
import { AboutBar } from "@/components/AboutBar";

export function Sidebar() {
  return (
    <aside className="flex flex-col grow w-[23rem]">
      <div className="flex flex-col gap-2.5">
        <AccountBar />
        <Separator className="h-0.5 w-[23rem]" />
        <TopicsBar />
        <Separator className="h-0.5 w-[23rem]" />
        <AboutBar />
      </div>
    </aside>
  );
}
