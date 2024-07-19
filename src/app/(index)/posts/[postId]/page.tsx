import { SinglePostPage } from "@/pages/posts/ui/SinglePostPage";
import { Metadata, ResolvingMetadata } from "next";
import { fetchPost } from "@/pages/posts/lib/posts";

type Props = {
  params: { postId: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const postId = params.postId;

  const post = await fetchPost(postId);
  if (post) {
    return {
      title: `${post.title} | Quackit`,
      description: post.content,
    };
  } else {
    return {
      title: "404",
      description: "404",
    };
  }
}

export default function Post({ params }: { params: { postId: number } }) {
  return <SinglePostPage post_id={params.postId} />;
}
