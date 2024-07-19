export interface UserInDB extends Response {
  user_id: number;
  is_active: boolean;
  is_verified: boolean;
  username: string;
  email: string;
  description: string;
}

export async function fetchUser(user_id: number) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/unauthorized/user/${user_id}`,
    { cache: "no-store" },
  )
    .then((r) => {
      if (r.status === 404) return null;
      return r.json();
    })
    .then((user: UserInDB) => user)
    .catch((e) => {
      console.log("Error occurred while fetching the post", e);
      return null;
    });
}
