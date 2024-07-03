import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { MoreHorizontalIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";

export function Post() {
  return (
    <Card className="flex flex-col w-full bg-background p-4 gap-4">
      <CardTitle className="flex w-full justify-between items-center">
        <div className="flex gap-4 items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/danmaninc.png" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold">@danmaninc</span>
          <span className="text-sm opacity-75 font-semibold">2 hr. ago</span>
        </div>
        <MoreHorizontalIcon />
      </CardTitle>
      <CardContent className="flex flex-col w-full gap-4 p-0">
        <div className="w-full h-[30rem] bg-secondary"></div>
      </CardContent>
    </Card>
  );
}
