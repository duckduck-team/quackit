import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Card } from "@/shared/ui/card";

interface UserCardProps {
  avatarUrl: string;
  avatarFallback: string;
  username: string;
  description: string;
}
export function UserCard({
  avatarUrl,
  avatarFallback,
  username,
  description,
}: UserCardProps) {
  return (
    <Card className="flex p-4 gap-4">
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">{username}</span>
        <span className="text-sm font-normal">{description}</span>
      </div>
    </Card>
  );
}
