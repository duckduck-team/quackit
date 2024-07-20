import { Token } from "@/pages/register/lib/interfaces";
export interface PostInDB extends Response {
  title: string;
  content: string;
  post_id: number;
  user_id: number;
  votes_count: number;
  published_at: string;
  detail?: string;
}

export interface TagInDB extends Response {
  tag_id: number;
  tag: string;
}
export interface AvailablePosts<PostInDB> {
  [posts: string]: PostInDB[];
}
export interface AvailableTags<TagInDB> {
  [tags: string]: TagInDB[];
}
export async function fetchPost(post_id: number) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/unauthorized/post/${post_id}`,
    { cache: "no-store" },
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
export async function fetchPosts(): Promise<AvailablePosts<PostInDB>> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/unauthorized/postlist_all`,
    { cache: "no-store" },
  ).then((r) => {
    return r.json();
  });
}

export async function fetchTags(): Promise<AvailableTags<TagInDB>> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/unauthorized/tags_all`,
    { cache: "no-store" },
  ).then((r) => {
    return r.json();
  });
}

export async function fetchPostsByTag(
  tag_title: string,
): Promise<AvailablePosts<PostInDB>> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/unauthorized/tag/${tag_title}`,
    { cache: "no-store" },
  ).then((r) => {
    return r.json();
  });
}

export async function voteForPost(post_id: number) {
  const token = localStorage.getItem('access_token');
  console.log(token, post_id)
  if (!token) return null;
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/vote/vote_for_post`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post_id: post_id,
    }),
  })
    .then((r) => {
      if (r.status != 200) return null;
      return r.json();
    })
    .then((post: PostInDB) => post)
    .catch((e) => {
      console.log("Error occurred while trying to vote", e);
      return null;
    });
}

export async function voteAgainstPost(post_id: number) {
  const token = localStorage.getItem('access_token');
  console.log(token, post_id)
  if (!token) return null;
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/vote/vote_against_post`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post_id: post_id,
    }),
  })
    .then((r) => {
      if (r.status != 200) return null;
      return r.json();
    })
    .then((post: PostInDB) => post)
    .catch((e) => {
      console.log("Error occurred while trying to vote", e);
      return null;
    });
}
