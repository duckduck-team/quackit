import { MoreHorizontalIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";
import { PostUser } from "@/pages/posts/ui/post/PostUser";
import { PostContent } from "@/pages/posts/ui/post/PostContent";
import { VoteButton } from "@/pages/posts/ui/post/VoteButton";

interface PostProps {
  title: string;
  content: string;
  post_id: number;
  user_id: number;
  votes_count: number;
  published_at: string;
}
export function Post({
  title,
  content,
  post_id,
  user_id,
  votes_count,
  published_at,
}: PostProps) {
  return (
    <Card className="flex flex-col w-full bg-background p-4 gap-4">
      <CardTitle className="flex w-full justify-between items-center">
        <PostUser
          user_id={user_id}
          username={"danmaninc"}
          published_at={published_at}
        />
        <MoreHorizontalIcon />
      </CardTitle>
      <CardContent className="flex flex-col w-full gap-4 p-0">
        <PostContent title={title} content={content} post_id={post_id} />
      </CardContent>
      <VoteButton votes_count={votes_count} />
    </Card>
  );
}
