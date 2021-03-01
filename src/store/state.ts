export interface Credentials {
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
}

export interface State {
  credentials: Credentials;
}
