import { processErrorIfPresent } from "src/lib/utils";
import { api } from "../api/api";

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
