"use client";
import { MoreHorizontalIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchUser } from "@/pages/posts/lib/users";
import { CommentUser } from "./comments/CommentUser";
import { CommentContent } from "./comments/CommentContent";
import { VoteButton } from "./buttons/VoteButton";
import { CommentButton } from "./buttons/CommentButton";
import { ShareButton } from "./buttons/ShareButton";
import { ReportButton } from "./buttons/ReportButton";

export interface CommentProps {
  content: string;
  user_id: number;
  votes_count: number;
  published_at: string;
  comment_id: number;
  post_id: number;
  children?: React.ReactNode;
}
export function Comment({
  content,
  user_id,
  votes_count,
  comment_id,
  post_id,
  published_at,
  children,
}: CommentProps) {
  const [commentUser, setCommentUser] = useState({
    username: "",
    user_id: -1,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getUser(user_id: number) {
      const user = await fetchUser(user_id);
      if (user) {
        setCommentUser(user);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    getUser(user_id);
  }, []);

  return (
    <Card className="flex flex-col w-full bg-background p-4 gap-4">
      <CardTitle className="flex w-full justify-between items-center">
        <CommentUser
          username={commentUser.username}
          published_at={published_at}
        />
        <MoreHorizontalIcon />
      </CardTitle>
      <CardContent className="flex flex-col w-full gap-4 p-0">
        <CommentContent content={content} comment_id={comment_id} />
      </CardContent>
      <div className="flex gap-4">
        <VoteButton comment_id={comment_id} votes_count={votes_count} />
        <Link href={`/posts/${comment_id}`}>
          <CommentButton />
        </Link>
        <ShareButton />
        <ReportButton />
      </div>
      {children ? children : null}
    </Card>
  );
}
