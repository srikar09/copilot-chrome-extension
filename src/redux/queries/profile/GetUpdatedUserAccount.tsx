import {
    GetAccountUpdated,
  } from 'src/types/request-response/GetAccountUpdated';
  import { api } from '../../api/api';
import { GetUpdatedUserAccountResponse } from 'src/types/request-response/GetUpdatedUserAccountResponse';
import { processErrorIfPresent } from "src/lib/utils";

const GetUpdatedUserProfile = api.injectEndpoints({
    endpoints: (builder) => ({
      getUpdatedUserProfile: builder.query({
        query: (req: GetAccountUpdated) => ({
          url: `/user/${req.userId}`,
        }),
        transformResponse: (response: GetUpdatedUserAccountResponse) => {
          processErrorIfPresent(response.error_message);
          return response;
        },
        keepUnusedDataFor: 0
      }),
    }),
    overrideExisting: false,
});

export const { useGetUpdatedUserProfileQuery } = GetUpdatedUserProfile;