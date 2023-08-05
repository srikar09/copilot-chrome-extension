/**
 * An object containing key-value pairs representing constant values used throughout the application.
 * @type {Object}
 *
 * @property {string} JWT_TOKEN_KEY - The key for the JSON Web Token in storage.
 * @property {number} DEFAULT_REQUEST_TIMEOUT - The default timeout for requests in milliseconds.
 * @property {string} DEFAULT_BASE_URI - The default base URI for the API gateway.
 * @property {string} DEFAULT_REACT_APP_MIXPANEL_TOKEN - The Mixpanel token for tracking events.
 * @property {string} USER_ID_KEY - The key for the user ID in storage.
 * @property {string} USER_PROFILE_ID_KEY - The key for the user profile ID in storage.
 * @property {string} USER_PROFILE_KEY - The key for the user profile data in storage.
 * @property {string} USER_ACCOUNT_KEY - The key for the user account data in storage.
 * @property {string} PROFILE_PICTURE - The default URL for a user profile picture.
 * @property {string} REACT_APP_ALGOLIA_APP_ID - The application ID for Algolia search.
 * @property {string} REACT_APP_ALGOLIA_API_KEY - The API key for Algolia search.
 * @property {number} RECOMMENDED_ENTITIES_LIMIT - The default limit for recommended entities in queries.
 * @property {string} USER_FINANCIAL_PROFILE_KEY - The key for the user's financial profile in storage.
 * @property {string} USER_FINANCIAL_CONTEXT_KEY - The key for the user's financial context in storage.
 */
export const constants: {
  JWT_TOKEN_KEY: string;
  DEFAULT_REQUEST_TIMEOUT: number;
  DEFAULT_BASE_URI: string;
  DEFAULT_REACT_APP_MIXPANEL_TOKEN: string;
  USER_ID_KEY: string;
  USER_PROFILE_ID_KEY: string;
  USER_PROFILE_KEY: string;
  USER_ACCOUNT_KEY: string;
  PROFILE_PICTURE: string;
  REACT_APP_ALGOLIA_APP_ID: string;
  REACT_APP_ALGOLIA_API_KEY: string;
  RECOMMENDED_ENTITIES_LIMIT: number;
  USER_FINANCIAL_PROFILE_KEY: string;
  USER_FINANCIAL_CONTEXT_KEY: string;
} = {
  JWT_TOKEN_KEY: "jwt",
  DEFAULT_REQUEST_TIMEOUT: 50000,
  DEFAULT_BASE_URI: "https://simfiny.dev/v1/gateway",
  DEFAULT_REACT_APP_MIXPANEL_TOKEN: "5bd41afa405ef13cd18c8807d6f13ee7",
  USER_ID_KEY: "userid",
  USER_PROFILE_ID_KEY: "userprofileid",
  USER_PROFILE_KEY: "userprofile",
  USER_ACCOUNT_KEY: "useraccount",
  PROFILE_PICTURE:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  REACT_APP_ALGOLIA_APP_ID: "E38YNAPMTE",
  REACT_APP_ALGOLIA_API_KEY: "86732f2b3e736e1999bb9c2928fba919",
  RECOMMENDED_ENTITIES_LIMIT: 5,
  USER_FINANCIAL_PROFILE_KEY: "userfinancialprofile",
  USER_FINANCIAL_CONTEXT_KEY: "userfinancialcontext",
};
