import { UserInDB } from "@/pages/posts/lib/users";
import { CredentialsForLogin } from "./interfaces";
import { get_token } from "./token";

export async function login({ username, password }: CredentialsForLogin) {
  const token = await get_token(username, password);
  return token;
}

export async function current_user(token: string): Promise<UserInDB> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((r) => {
    return r.json();
  });
}
