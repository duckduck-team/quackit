import { Separator } from "@/shared/ui/separator";
import { AccountBar } from "@/shared/ui/layout/sidebar/bars/AccountBar";
import { TopicsBar } from "@/shared/ui/layout/sidebar/bars/TopicsBar";
import { AboutBar } from "@/shared/ui/layout/sidebar/bars/AboutBar";

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between w-sidebar">
      <div className="flex flex-col gap-2.5">
        <AccountBar />
        <Separator className="h-0.5 w-[23rem]" />
        <TopicsBar />
        <Separator className="h-0.5 w-[23rem]" />
      </div>
      <div className="flex flex-col gap-2.5">
        <Separator className="h-0.5 w-[23rem]" />
        <AboutBar />
      </div>
    </aside>
  );
}
