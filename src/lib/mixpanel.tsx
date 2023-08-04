// Import Mixpanel library and necessary interfaces
import mixpanel, { Dict, Mixpanel } from "mixpanel-browser";
// Import environment configuration
import { applicationEnvConfigs } from "src/env/client";

/**
 * Interface that defines the methods a TelemetryClient should implement
 */
interface TelemetryClient {
  trackEvent(eventName: string, properties?: Dict): void;
  trackEventOfType(type: MIXPANEL_EVENTS, properties?: Dict): void;
  registerSuperProperties(props: Dict): void;
  setIdentity(userID: string, metaData: TelemetryUserMetadata): void;
}

/**
 * Interface that defines the user metadata for telemetry
 */
interface TelemetryUserMetadata {
  userName: string;
  tags: string[];
}

/**
 * Enumeration of possible Mixpanel events
 */
enum MIXPANEL_EVENTS {
  REGISTRATION = "Registration",
  LOGIN = "Login",
  QUESTION_ASKED = "Question Asked",
  ACCOUNT_LINK = "Account Link",
}

// Constant representing the name of the Mixpanel client
const MIXPANEL_CLIENT_NAME: string = "melodiy-chrome-extension";

/**
 * Implementation of TelemetryClient using MixPanel
 */
class MixPanelClient implements TelemetryClient {
  private instance: Mixpanel; // Instance of Mixpanel client
  private isProd: boolean; // Flag indicating whether the environment is production

  /**
   * Constructs a new MixPanelClient
   * @param token - Mixpanel token
   * @param debugMode - Whether debug mode is enabled
   * @param name - Name of the Mixpanel client
   * @param env - Current environment
   */
  constructor(token: string, debugMode: boolean, name: string, env: string) {
    this.instance = mixpanel.init(token, { debug: debugMode }, name);
    this.isProd = env === "production";
  }

  /**
   * Registers super properties if in production environment
   * @param props - The properties to register
   */
  registerSuperProperties(props: Dict): void {
    if (this.isProd) {
      this.instance.register_once(props);
    }
  }

  /**
   * Tracks an event if in production environment
   * @param eventName - The name of the event
   * @param properties - The properties of the event
   */
  trackEvent(eventName: string, properties?: Dict): void {
    if (this.isProd) {
      properties
        ? this.instance.track(eventName, properties)
        : this.instance.track(eventName);
    }
  }

  /**
   * Tracks a specific type of event using the Mixpanel events enum
   * @param type - The type of the event
   * @param properties - The properties of the event
   */
  trackEventOfType(type: MIXPANEL_EVENTS, properties?: Dict): void {
    this.trackEvent(type, properties);
  }

  /**
   * Sets the user identity and metadata if in production environment
   * @param userID - The user's ID
   * @param metaData - The user's metadata
   */
  setIdentity(userID: string, metaData?: TelemetryUserMetadata): void {
    if (this.isProd) {
      this.instance.identify(userID);
      if (metaData) {
        this.instance.people.union(metaData);
      }
    }
  }
}

// Get Mixpanel token and environment from configuration
const token: string = applicationEnvConfigs.REACT_APP_MIXPANEL_TOKEN;
const env: string = process.env.NODE_ENV;
// Set debug mode based on environment
const debugMode: boolean = ["development", "test"].includes(env);

/**
 * An instance of MixPanelClient
 * @public
 */
export const mixPanelClient = new MixPanelClient(
  token,
  debugMode,
  MIXPANEL_CLIENT_NAME,
  env
);
