import { SinglePostPage } from "@/pages/posts/ui/SinglePostPage";

export default function Post({ params }: { params: { postId: number } }) {
  return <SinglePostPage post_id={params.postId} />;
}
