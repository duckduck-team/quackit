import { Credentials, Token } from "./interfaces";

export async function get_token(username: string, password: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ 
            username: username, password: password
        }),
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