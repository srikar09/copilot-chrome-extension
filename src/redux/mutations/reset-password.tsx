import {
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "src/types/request-response/reset-password";
import { api } from "../api/api";

const ResetPassword = api.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (req: ResetPasswordRequest) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: req,
      }),
      transformResponse: (response: ResetPasswordResponse) => {
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { ResetPassword };
export const { useResetPasswordMutation } = ResetPassword;
