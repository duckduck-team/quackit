export interface PostInDB extends Response {
  title: string;
  content: string;
  post_id: number;
  user_id: number;
  votes_count: number;
  published_at: string;
  detail?: string;
}

interface Token extends Response {
  access_token: string;
  token_type: string;
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

async function dummyAuth() {
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ username: "demo", password: "123456" }),
  })
    .then((r) => {
      if (r.status != 200) return null;
      return r.json();
    })
    .then((token: Token) => token)
    .catch((e) => {
      console.log("Error occurred while trying to authorize", e);
      return null;
    });
}

export async function votePost(post_id: number) {
  const token = await dummyAuth();
  if (!token) return null;
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/post/vote`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
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
