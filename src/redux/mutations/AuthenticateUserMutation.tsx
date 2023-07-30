import { api } from "../api/api";
import { processErrorIfPresent } from "../../lib/utils";
import { AuthenticationResponse } from "../../types/response/AuthenticateUserResponse";
import { AuthenticateRequest } from "../../types/requests/AuthenticateUserRequest";

/**
 * RTK Query makes it possible to trim down your initial bundle size by allowing you
 *  to inject additional endpoints after you've set up your initial service definition. 
 * This can be very beneficial for larger applications that may have many endpoints.

 * injectEndpoints accepts a collection of endpoints, as well as an optional overrideExisting parameter.
 * Calling injectEndpoints will inject the endpoints into the original API, but also give you that same API
 *  with correct types for these endpoints back. (Unfortunately, it cannot modify the types for the original definition.)
 */
const AuthenticateUser = api.injectEndpoints({
  endpoints: (builder) => ({
    authenticatedUser: builder.mutation({
      query: (req: AuthenticateRequest) => ({
        url: `/user/login/${req.Username}/${req.Password}`,
        method: "POST",
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: AuthenticationResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { AuthenticateUser };
export const { useAuthenticatedUserMutation } = AuthenticateUser;
