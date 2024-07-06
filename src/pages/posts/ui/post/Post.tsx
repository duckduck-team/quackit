import { MoreHorizontalIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";
import { PostUser } from "@/pages/posts/ui/post/PostUser";
import { PostContent } from "@/pages/posts/ui/post/PostContent";
import { VoteButton } from "@/pages/posts/ui/post/buttons/VoteButton";
import { CommentButton } from "@/pages/posts/ui/post/buttons/CommentButton";
import { ShareButton } from "@/pages/posts/ui/post/buttons/ShareButton";
import { ReportButton } from "@/pages/posts/ui/post/buttons/ReportButton";
import React from "react";

export interface PostProps {
  title: string;
  content: string;
  post_id: number;
  user_id: number;
  votes_count: number;
  published_at: string;
  children?: React.ReactNode;
}
export function Post({
  title,
  content,
  post_id,
  user_id,
  votes_count,
  published_at,
  children,
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
      <div className="flex gap-4">
        <VoteButton votes_count={votes_count} />
        <CommentButton />
        <ShareButton />
        <ReportButton />
      </div>
      {children ? children : null}
    </Card>
  );
}
