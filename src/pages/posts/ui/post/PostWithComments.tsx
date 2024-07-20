"use client"
import { Post } from "@/pages/posts/ui/post/Post";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { CommentInDB, createComment } from "../../lib/posts";
import { Comment } from "@/pages/comments/ui/Comment";
import { current_user } from "@/pages/register/lib/login";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface PostWithCommentsProps {
  title: string;
  content: string;
  post_id: number;
  user_id: number;
  votes_count: number;
  published_at: string;
  comments: CommentInDB[];
  children?: React.ReactNode;
}
export function PostWithComments(props: PostWithCommentsProps) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [commentUser, setCommentUser] = useState({
    username: "",
    user_id: -1,
  });

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem('access_token');
      if (token) {
        const user = await current_user(token);
        if (user) {
          setCommentUser(user);
        } else {
          router.push("/login");
        }
      }
    }

    getUser();
  }, []);

  async function handleSubmit() {
    const result = await createComment(content, null, props.post_id, localStorage.getItem('access_token'));
    if (result) router.push(`/posts/${props.post_id}`);
  }

  return (
    <Post {...props}>
      <div className="flex flex-col gap-4 p-4 border rounded-md">
        <form onSubmit={handleSubmit}>
          <Textarea onChange={(e) => setContent(e.target.value)} placeholder="Some text" name="comment" />
          <Button className="w-fit" type="submit">Publish comment</Button>
        </form>
      </div>
      {props.comments.map((comment: CommentInDB) => (
        <Comment
          key={comment.published_at}
          comment_id={comment.comment_id}
          user_id={comment.user_id}
          post_id={comment.post_id}
          published_at={comment.published_at}
          content={comment.content}
          votes_count={comment.votes_count}
        />
      ))}
    </Post>
  );
}
