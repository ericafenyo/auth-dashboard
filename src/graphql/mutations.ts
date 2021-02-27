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
