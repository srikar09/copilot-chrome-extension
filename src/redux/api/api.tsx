// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constants } from "../../constant/constants";
import { RootState } from "../store/store";
import { persistentStorage } from "../../lib/persistent-storage";

const baseUrl: string =
  process.env.REACT_APP_BASE_URL === undefined
    ? constants.DEFAULT_BASE_URI
    : process.env.REACT_APP_BASE_URL;

// Define our single API slice object
// NOTE: we can only have one `createApi` call in our entire application
export const api = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // https://stackoverflow.com/questions/72175487/rtk-query-always-returns-cached-data-invalidatestags-not-doing-anything
      headers.set("Accept", "application/json");
      headers.set("Cache-Control", "no-cache");
      headers.set("Pragma", "no-cache");
      headers.set("Expires", "0");
      const state = getState() as RootState;
      let token = "";
      const { authenticated } = state.authentication;
      if (authenticated) {
        token = persistentStorage.getItem(constants.JWT_TOKEN_KEY);
      }
      // If user is authenticated, lets extract token from browser caches and, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "USER_FEED",
    "NEWS_FEED",
    "POST_THREAD_PARTICIPANT",
    "COMMENT",
    "POSTS",
    "POLL_POST",
    "SHARED_POST",
    "REGULAR_POST",
    "USER",
    "COMMUNITY",
    "POST",
    "TOPICS_USER_FOLLOW",
    "ACTIVITIES",
    "COMMUNITY_ACTIVITIES",
    "UNAUTHORIZED",
    "UNKNOWN_ERROR",
    "Posts",
    "TOPICS",
    "NOTIFICATIONS",
    "NOTIFICATION_FEED",
    "COMMUNITY_NEWS_FEED",
    "PENDING_REQUESTS",
    "COMMUNITIES",
    "COMMUNITIES_USER_FOLLOWS",
    "PROFILES_USER_FOLLOWS",
    "DISCOVER_PROFILES_AND_TOPICS",
    "BOOKMARKED_POST",
    "COMMUNITY_FOLLOWERS",
    "USER_FOLLOWERS",
    "USER_FOLLOWING",
    "COMMUNITY_FOLLOWING",
    "COMMUNITY_FEED",
    "COMMUNITY_DISCOVER",
    "TRANSACTION",
    "MONTHLY_TRANSACTION_METRICS",
    "RECURRING_TRANSACTION",
  ],
  // global configuration for the api
  keepUnusedDataFor: 60,
  // The "endpoints" represent operations and requests for this server
  endpoints: () => ({}),
});

// Export the auto-generated hook for the `getPosts` query endpoint
// NOTE: RTK Query's React integration will automatically generate React hooks
// for every endpoint we define! Those hooks encapsulate the process of triggering a
// request when a component mounts, and re-rendering the component as the request is processed and data is available.
