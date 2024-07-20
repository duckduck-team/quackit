import { UserInDB } from "@/pages/posts/lib/users";
import { CredentialsForRegister } from "./interfaces";
import { get_token } from "./token";

async function register_user({
  username,
  password,
  email,
}: CredentialsForRegister) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      description: "",
    }),
  })
    .then((r) => {
      if (r.status != 200) return null;
      return r.json();
    })
    .then((user: UserInDB) => user)
    .catch((e) => {
      console.log("Error occurred while trying to register user", e);
      return null;
    });
}

export async function register(credentials: CredentialsForRegister) {
  const response = await register_user(credentials);
  console.log(response);

  const token = await get_token(credentials.username, credentials.password);
  return token;
}
