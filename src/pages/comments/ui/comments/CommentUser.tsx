"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
dayjs.extend(relativeTime);
interface CommentUserProps {
  username: string;
  published_at: string;
}
export function CommentUser({ username, published_at }: CommentUserProps) {
  const date = dayjs(published_at).add(3, "hour");
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex gap-4 items-center">
        <Avatar className="w-8 h-8">
          <AvatarImage src={`https://github.com/${username}.png`} />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
        <span className="text-sm font-semibold">@{username}</span>
        <Tooltip>
          <TooltipTrigger className="text-sm">
            <span className="text-sm opacity-75 font-semibold">
              {date.fromNow()}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{date.format("YYYY-MM-DD HH:mm")}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
