"use client";
import { MoreHorizontalIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";
import { PostUser } from "@/pages/posts/ui/post/PostUser";
import { PostContent } from "@/pages/posts/ui/post/PostContent";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchUser } from "@/pages/posts/lib/users";
import { VoteButton } from "./buttons/VoteButton";
import { CommentButton } from "./buttons/CommentButton";
import { ShareButton } from "./buttons/ShareButton";
import { ReportButton } from "./buttons/ReportButton";

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
  const [postUser, setPostUser] = useState({
    username: "",
    user_id: -1,
  });
  const [loading, setLoading] = useState(true);
  const [noPost, setNoPost] = useState(false);
  useEffect(() => {
    async function getUser(user_id: number) {
      const user = await fetchUser(user_id);
      if (user) {
        setPostUser(user);
        setLoading(false);
      } else {
        setNoPost(true);
        setLoading(false);
      }
    }
    getUser(user_id);
  }, []);

  if (loading)
    return (
      <Card className="flex flex-col w-full bg-background p-4 gap-4">
        <CardTitle className="flex w-full justify-between items-center">
          Loading...
          <MoreHorizontalIcon />
        </CardTitle>
        <CardContent className="flex flex-col w-full gap-4 p-0">
          Loading...
        </CardContent>
      </Card>
    );

  if (postUser) {
    return (
      <Card className="flex flex-col w-full bg-background p-4 gap-4">
        <CardTitle className="flex w-full justify-between items-center">
          <PostUser
            user_id={user_id}
            username={postUser.username}
            published_at={published_at}
          />
          <MoreHorizontalIcon />
        </CardTitle>
        <CardContent className="flex flex-col w-full gap-4 p-0">
          <PostContent title={title} content={content} post_id={post_id} />
        </CardContent>
        <div className="flex gap-4">
          <VoteButton post_id={post_id} votes_count={votes_count} />
          <Link href={`/posts/${post_id}`}>
            <CommentButton />
          </Link>
          <ShareButton />
          <ReportButton />
        </div>
        {children ? children : null}
      </Card>
    );
  } else {
    return null;
  }
}
