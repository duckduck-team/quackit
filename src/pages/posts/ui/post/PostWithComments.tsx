import { Post } from "@/pages/posts/ui/post/Post";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { CommentInDB } from "../../lib/posts";
import { Comment } from "@/pages/comments/ui/Comment";

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
  const text =
    "There will be comment submission form. Use Form instead of TextArea.";
  return (
    <Post {...props}>
      <div className="flex flex-col gap-4 p-4 border rounded-md">
        <Textarea placeholder={text} />
        <Button className="w-fit">Publish comment</Button>
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
