import gql from "graphql-tag";
export const SIGN_UP = gql(
  `mutation createCompany($input: CompanyInput!) {
    company(input: $input) {
      owner {
        email
      }
    }
  }`
);

export const SIGN_IN = gql(
  `mutation (
    $email: String!, 
    $password: String!, 
    $secret: String!, 
    $identifier: String!) {
    credentials(
      email: $email, 
      password: $password, 
      secret: $secret, 
      identifier: $identifier) {
      access_token
      refresh_token
    }
  }`
);
