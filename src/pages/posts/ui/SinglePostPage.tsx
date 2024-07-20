import { PostWithComments } from "@/pages/posts/ui/post/PostWithComments";
import Head from "next/head";
import { fetchPost } from "@/pages/posts/lib/posts";
import { fetchComments } from "@/pages/posts/lib/posts";

async function getPost(post_id: number) {
  return await fetchPost(post_id);
}

async function getComments(post_id: number) {
  console.log(fetchComments(post_id));
  return await fetchComments(post_id);
}

export async function SinglePostPage({ post_id }: { post_id: number }) {
  const postData = await getPost(post_id);
  const commentData = await getComments(post_id);

  if (postData) {
    return (
      <div className="flex h-fit flex-col bg-secondary p-4 w-content gap-4">
        <Head>
          <title>{postData.title}</title>
          <meta name="description">{postData.content}</meta>
          <meta property="og:title">{postData.title}</meta>
          <meta property="og:description">{postData.content}</meta>
        </Head>
        <PostWithComments
          content={postData.content}
          post_id={postData.post_id}
          published_at={postData.published_at}
          title={postData.title}
          user_id={postData.user_id}
          votes_count={postData.votes_count}
          comments={commentData.comments}
        />
      </div>
    );
  } else {
    return (
      <div className="flex h-fit flex-col bg-secondary p-4 w-content gap-4">
        <Head>
          <title>404 — Quackit</title>
        </Head>
        <div className="flex w-full h-96 gap-4 flex-col justify-center items-center ">
          <h1 className="text-4xl font-semibold text-black/50">404</h1>
          <p className="text-xl text-black/50">Requested post does not exist</p>
        </div>
      </div>
    );
  }
}
