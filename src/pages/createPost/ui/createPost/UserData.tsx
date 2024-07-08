import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

interface PostUserProps {
  user_id: number;
  username: string;
}
export function UserData({ user_id, username }: PostUserProps) {
  return (
    <div className="flex gap-4 items-center">
      <Avatar className="w-8 h-8">
        <AvatarImage src={`https://github.com/${username}.png`} />
        <AvatarFallback>DA</AvatarFallback>
      </Avatar>
      <span className="text-sm font-semibold">@{username}</span>
    </div>
  );
}
