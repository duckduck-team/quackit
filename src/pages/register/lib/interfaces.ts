export interface Token extends Response {
    access_token: string;
    token_type: string;
}

export interface Credentials extends Response {
    username: string;
    password: string;
}