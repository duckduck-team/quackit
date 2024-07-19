import { PostInDB } from "@/pages/posts/lib/posts";

export async function createPost(
  title: string,
  content: string,
  token: string,
) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/post/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
    cache: "no-store",
  })
    .then((r) => {
      if (r.status !== 200) return null;
      return r.json();
    })
    .then((post: PostInDB) => post)
    .catch((e) => {
      console.log("Error occurred while fetching the post", e);
      return null;
    });
}
