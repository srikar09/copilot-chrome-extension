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
const MIXPANEL_CLIENT_NAME: string = "melodiy-web-app";

/**
 * Implementation of TelemetryClient using MixPanel
 */
class MixPanelClient implements TelemetryClient {
  private static instance: MixPanelClient;
  private mixpanelInstance: Mixpanel; // Instance of Mixpanel client
  private isProd: boolean; // Flag indicating whether the environment is production
  eventNames: any;

  /**
   * Constructs a new MixPanelClient
   * @param token - Mixpanel token
   * @param debugMode - Whether debug mode is enabled
   * @param name - Name of the Mixpanel client
   * @param env - Current environment
   */
  private constructor(
    token: string,
    debugMode: boolean,
    name: string,
    env: string
  ) {
    this.mixpanelInstance = mixpanel.init(token, { debug: debugMode }, name);
    this.isProd = env === "production";
  }

  /**
   * Creates a single instance of MixPanelClient
   */
  public static getInstance(): MixPanelClient {
    if (!MixPanelClient.instance) {
      const token: string = applicationEnvConfigs.REACT_APP_MIXPANEL_TOKEN;
      const env: string = process.env.NODE_ENV;
      const debugMode: boolean = ["development", "test"].includes(env);

      MixPanelClient.instance = new MixPanelClient(
        token,
        debugMode,
        MIXPANEL_CLIENT_NAME,
        env
      );
    }

    return MixPanelClient.instance;
  }
  

   /**
   * Registers super properties if in production environment
   * @param props - The properties to register
   */
   registerSuperProperties(props: Dict): void {
    if (this.isProd) {
      this.mixpanelInstance.register_once(props);
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
        ? this.mixpanelInstance.track(eventName, properties)
        : this.mixpanelInstance.track(eventName);
    }
  }

  trackRegistrationEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.REGISTRATION_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackLoginEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.LOGIN_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackNewPostEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.LOGIN_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackPostCreationEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.POST_CREATION_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackCommentCreationEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.ARTICLE_CREATION_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackArticleCreationEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.ARTICLE_ENGAGEMENT_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackPostEngagementEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.POST_ENGAGEMENT_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackCommentEngagementEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.COMMENT_ENGAGEMENT_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackCommunityEngagementEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.COMMUNITY_ENGAGEMENT_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackArticleEngagementEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.ARTICLE_ENGAGEMENT_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackTopicCreationEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.TOPIC_CREATION_EVENT;
    this.trackEvent(eventName, properties);
  }

  trackCommunityCreationEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.COMMUNITY_CREATION_EVENT;
    this.trackEvent(eventName, properties);
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
      this.mixpanelInstance.identify(userID);
      if (metaData) {
        this.mixpanelInstance.people.union(metaData);
      }
    }
  }
}

/**
 * An instance of MixPanelClient
 * @public
 */
export const mixPanelClient = MixPanelClient.getInstance();
export { MIXPANEL_EVENTS };