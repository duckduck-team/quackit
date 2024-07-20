import { PostButton } from "@/pages/posts/ui/post/buttons/PostButton";
import { Share2Icon } from "lucide-react";

export function ShareButton() {
  return (
    <PostButton className="w-fit flex p-2 px-3 gap-2 bg-secondary font-medium text-sm text-primary/75 rounded-md">
      <Share2Icon strokeWidth={3} size={16} />
      Share
    </PostButton>
  );
}
