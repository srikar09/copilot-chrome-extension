import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

/**
 * This file is used to define the environment variables that are used in the client-side code.
 */
export const applicationEnvConfigs = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  // clientPrefix: "REACT_APP_",
  server: {
    REACT_APP_OPENAI_API_KEY: z.string().nonempty(),
    REACT_APP_AI_TEMP: z.number().int().positive(),
    REACT_APP_AI_MAX_TOKENS: z.number().int().positive(),
    REACT_APP_BASE_URL: z.string().nonempty(),
    REACT_APP_REQUEST_TIMEOUT_MS: z.number().int().positive(),
    REACT_APP_MIXPANEL_TOKEN: z.string().nonempty(),
    REACT_APP_ALGOLIA_APP_ID: z.string().nonempty(),
    REACT_APP_ALGOLIA_API_KEY: z.string().nonempty(),
    REACT_APP_FEATURE_FLAG_ENABLE_FINANCIAL_PORTAL: z.boolean(),
    REACT_APP_FEATURE_FLAG_ENABLE_GOALS: z.boolean(),
    REACT_APP_FEATURE_FLAG_ENABLE_PLAID_ACCOUNT_CONNECTION: z.boolean(),
    REACT_APP_CUSTOMER_PORTAL_URL: z.string().nonempty(),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: {
    // Open-ai key
    REACT_APP_OPENAI_API_KEY: process.env.REACT_APP_OPENAI_API_KEY,
    // AI Generation (LLM Config)
    REACT_APP_AI_TEMP: process.env.REACT_APP_AI_TEMP,
    // Max Tokens to generate via open-ai
    REACT_APP_AI_MAX_TOKENS: process.env.REACT_APP_AI_MAX_TOKENS,
    // Backend base url
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    // Backend Request timeout
    REACT_APP_REQUEST_TIMEOUT_MS: process.env.REACT_APP_REQUEST_TIMEOUT_MS,
    // Mixpanel token
    REACT_APP_MIXPANEL_TOKEN: process.env.REACT_APP_MIXPANEL_TOKEN,

    /** Algolia APP ID */
    REACT_APP_ALGOLIA_APP_ID: process.env.REACT_APP_ALGOLIA_APP_ID,
    /** Algolia API key  */
    REACT_APP_ALGOLIA_API_KEY: process.env.REACT_APP_ALGOLIA_API_KEY,
    /** Feature flg to disable or enable the financial porta */
    REACT_APP_FEATURE_FLAG_ENABLE_FINANCIAL_PORTAL:
      process.env.REACT_APP_FEATURE_FLAG_ENABLE_FINANCIAL_PORTAL,
    /** Feature flag to disable or enable goal creation  */
    REACT_APP_FEATURE_FLAG_ENABLE_GOALS:
      process.env.REACT_APP_FEATURE_FLAG_ENABLE_GOALS,
    /** Feature flag to disable or enable account connection via plaid */
    REACT_APP_FEATURE_FLAG_ENABLE_PLAID_ACCOUNT_CONNECTION:
      process.env.REACT_APP_FEATURE_FLAG_ENABLE_PLAID_ACCOUNT_CONNECTION,
    REACT_APP_CUSTOMER_PORTAL_URL: process.env.REACT_APP_CUSTOMER_PORTAL_URL,
  },
});
