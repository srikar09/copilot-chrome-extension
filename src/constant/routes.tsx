/**
 * An object that contains the route names and corresponding URLs for the application.
 * @type {Object}
 *
 * @property {string} REGISTRATION - The URL for the registration page.
 * @property {string} AUTHENTICATION - The URL for the authentication page.
 * @property {string} HOME - The URL for the home page.
 * @property {string} PROFILE - The URL for the profile page.
 * @property {string} FORGOTPASSWORD - The URL for the forgotten password page.
 * @property {string} FINANCIALPORTAL - The URL for the financial portal.
 * @property {string} TRANSACTIONS - The URL for the transactions page.
 * @property {string} CHAT - The URL for the chat page.
 * @property {string} COMMUNITIES - The URL for the communities page.
 * @property {string} BOOKMARKS - The URL for the bookmarks page.
 * @property {string} ONBOARDING - The URL for the onboarding page.
 * @property {string} NOTIFICATION - The URL for the notification page.
 * @property {string} EDITPROFILE - The URL for the edit profile page.
 * @property {string} COMMUNITY_PROFILE - The URL for the community profile page.
 * @property {string} PAY_FOR_SUBSCRIPTION - The URL for the pay for subscription page.
 * @property {string} LANDING_PAGE - The URL for the landing page.
 * @property {string} EDITOR - The URL for the editor page.
 * @property {string} LANDING - The URL for the landing page.
 * @property {string} INSIGHTS - The URL for the insights page.
 * @property {string} INSIGHTSPORTAL - The URL for the insights portal page.
 * @property {string} EMAILVERIFICATION - The URL for the email verification page.
 */
export const routes: {
  REGISTRATION: string;
  AUTHENTICATION: string;
  HOME: string;
  PROFILE: string;
  FORGOTPASSWORD: string;
  FINANCIALPORTAL: string;
  CHAT: string;
  COMMUNITIES: string;
  TRANSACTIONS: string;
  BOOKMARKS: string;
  ONBOARDING: string;
  NOTIFICATION: string;
  EDITPROFILE: string;
  COMMUNITY_PROFILE: string;
  PAY_FOR_SUBSCRIPTION: string;
  LANDING_PAGE: string;
  EDITOR: string;
  LANDING: string;
  INSIGHTS: string;
  INSIGHTSPORTAL: string;
  EMAILVERIFICATION: string;
  REQUEST_PASSWORD_CHANGE: string;
  RESET_PASSWORD: string;
  PAYMENT: string;
} = {
  REGISTRATION: "/registration",
  AUTHENTICATION: "/sign-in",
  HOME: "/home",
  PROFILE: "/profile",
  FORGOTPASSWORD: "/forgot-password",
  FINANCIALPORTAL: "/financial-portal",
  TRANSACTIONS: "/financial-portal/transactions",
  CHAT: "/chat",
  COMMUNITIES: "/communities",
  BOOKMARKS: "/bookmarks",
  ONBOARDING: "/onboarding",
  NOTIFICATION: "/notification",
  EDITPROFILE: "/edit-profile",
  COMMUNITY_PROFILE: "/community/profile",
  PAY_FOR_SUBSCRIPTION: "/pay-for-subscription",
  LANDING_PAGE: "/welcome",
  EDITOR: "/editor",
  LANDING: "/",
  INSIGHTS: "/insights",
  INSIGHTSPORTAL: "/insights-portal",
  EMAILVERIFICATION: "/email-verification",
  REQUEST_PASSWORD_CHANGE: "/request-password-change",
  RESET_PASSWORD: "/reset-password",
  PAYMENT: "/payment",
};
