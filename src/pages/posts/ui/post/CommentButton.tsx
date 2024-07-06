import { PostButton } from "@/pages/posts/ui/post/PostButton";
import { MessageSquareIcon } from "lucide-react";

export function CommentButton() {
  return (
    <PostButton className="w-fit flex p-2 px-3 gap-2 bg-secondary font-medium text-sm text-primary/75 rounded-md">
      <MessageSquareIcon strokeWidth={3} size={16} />
      Comment
    </PostButton>
  );
}
