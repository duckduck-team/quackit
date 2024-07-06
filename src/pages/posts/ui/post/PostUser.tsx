import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
interface PostUserProps {
  user_id: number;
  username: string;
  published_at: string;
}
export function PostUser({ user_id, username, published_at }: PostUserProps) {
  return (
    <div className="flex gap-4 items-center">
      <Avatar className="w-8 h-8">
        <AvatarImage src={`https://github.com/${username}.png`} />
        <AvatarFallback>DA</AvatarFallback>
      </Avatar>
      <span className="text-sm font-semibold">@{username}</span>
      <span className="text-sm opacity-75 font-semibold">
        {dayjs(published_at).fromNow()}
      </span>
    </div>
  );
}
