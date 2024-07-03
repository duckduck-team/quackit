import { Post } from "@/pages/posts/ui/post/Post";

export function SinglePostPage() {
  return (
    <div className="flex flex-col bg-secondary p-4 w-content gap-4">
      <Post />
    </div>
  );
}
