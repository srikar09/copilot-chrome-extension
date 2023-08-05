import { api } from "../api/api";

/**
 * The `VerifyEmail` function is a Redux Toolkit Query API endpoint injector.
 * It extends the API slice defined in the imported 'api' module with a new 'verifyEmail' mutation endpoint.
 *
 * This endpoint is for verifying the email of a user. It takes a request object as an argument which
 * should contain the user's ID as `userID`.
 *
 * The 'verifyEmail' mutation sends a POST request to the '/user/verification/:userID' API endpoint,
 * and expects a response object with a single `accountVerified` boolean property.
 *
 * The `transformResponse` method picks out the `accountVerified` property from the response and returns it.
 * This can simplify the data your components receive, as they don't need to deal with the entire response object.
 *
 * The `VerifyEmail` function can be beneficial in larger applications that have many endpoints,
 * by allowing you to inject additional endpoints after setting up the initial service definition, thus keeping your initial
 * bundle size small.
 *
 * The `overrideExisting` option is set to 'false' which means that if an endpoint with the same name already
 * exists, it won't be overridden by this injector.
 *
 * This function also exports a React hook named `useVerifyEmailMutation` that allows components to trigger
 * this mutation.
 */
const VerifyEmail = api.injectEndpoints({
  endpoints: (builder) => ({
    verifyEmail: builder.mutation({
      query: (req: { userID: string }) => ({
        url: `/user/verification/${req.userID}`,
        method: "POST",
      }),
      // TODO: clean this up
      transformResponse: (
        response: { accountVerified: boolean },
        _meta,
        _arg
      ) => response.accountVerified,
    }),
  }),
  overrideExisting: false,
});

export { VerifyEmail };
export const { useVerifyEmailMutation } = VerifyEmail;
