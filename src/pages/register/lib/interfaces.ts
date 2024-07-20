export interface Token extends Response {
  access_token: string;
  token_type: string;
}

export interface CredentialsForLogin extends Response {
  username: string;
  password: string;
}

export interface CredentialsForRegister extends Response {
  username: string;
  password: string;
  email: string;
}
