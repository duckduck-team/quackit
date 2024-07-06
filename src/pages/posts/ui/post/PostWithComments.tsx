import { Post, PostProps } from "@/pages/posts/ui/post/Post";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";

export function PostWithComments(props: PostProps) {
  const text =
    "There will be comment submission form. Use Form instead of TextArea.";
  return (
    <Post {...props}>
      <div className="flex flex-col gap-4 p-4 border rounded-md">
        <Textarea placeholder={text} value={text} />
        <Button className="w-fit">Publish comment</Button>
      </div>
    </Post>
  );
}
