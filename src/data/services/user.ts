import { Result } from "../Result";
import { apolloClient } from "@/vue-clients";
import { Credentials } from "@/store/state";
import { SIGN_IN } from "@/graphql/mutations";

export interface UserService {
  authenticate: (email: string, password: string) => Promise<Result>;
}

export class UserServiceImpl implements UserService {
  async authenticate(email: string, password: string): Promise<Result> {
    const request = await apolloClient.mutate({
      mutation: SIGN_IN,
      variables: {
        email: email,
        password: password,
        secret: "",
        identifier: "",
      },
    });

    if (request.data) {
      const credentials: Credentials = {
        refreshToken: request.data.credentials.refresh_token,
        accessToken: request.data.credentials.access_token,
      };

      console.log(credentials);

      return Result.success(credentials);
    } else if (request.errors) {
      return Result.error(request.errors);
    } else {
      return Result.error("Unknown error");
    }
  }
}
