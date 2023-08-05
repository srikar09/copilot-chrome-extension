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

/**
 * The `AuthenticateUser` function is a Redux Toolkit Query API endpoint injector.
 * It extends the API slice defined in the imported 'api' module with a new 'authenticatedUser' mutation endpoint.
 *
 * This endpoint is for authenticating a user in the application. It takes an `AuthenticateRequest`
 * object as an argument which should contain the user's 'Username' and 'Password'.
 *
 * The 'authenticatedUser' mutation sends a POST request to the '/user/login/{username}/{password}' API endpoint,
 * and expects an `AuthenticationResponse` object as a response.
 *
 * If there is an error message in the response, it will be processed by the `processErrorIfPresent` utility function.
 *
 * `AuthenticateUser` function can be beneficial in larger applications that have many endpoints, by allowing
 * you to inject additional endpoints after setting up the initial service definition, thus keeping your initial
 * bundle size small.
 *
 * The `overrideExisting` option is set to 'false' which means that if an endpoint with the same name already
 * exists, it won't be overridden by this injector.
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

// Export the `AuthenticateUser` injector and the auto-generated 'useAuthenticatedUserMutation' hook for dispatching mutations to the 'authenticatedUser' endpoint.
export { AuthenticateUser };
export const { useAuthenticatedUserMutation } = AuthenticateUser;
