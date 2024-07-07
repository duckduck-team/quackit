export interface PostInDB extends Response {
  title: string;
  content: string;
  post_id: number;
  user_id: number;
  votes_count: number;
  published_at: string;
  detail?: string;
}
export async function fetchPost(post_id: number) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/unauthorized/post/${post_id}`,
  )
    .then((r) => {
      if (r.status === 404) return null;
      return r.json();
    })
    .then((post: PostInDB) => post)
    .catch((e) => {
      console.log("Error occurred while fetching the post", e);
      return null;
    });
}
