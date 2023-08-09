import mixpanel, { Dict, Mixpanel } from 'mixpanel-browser';
import { eventNames } from './MixPanelEvents';
import { environment } from './env';
import {constants} from  'src/constant/constants'
interface TelemetryClient {
  trackEvent(ventName: string, properties: Dict): void;
  registerSuperProperties(props: Dict): void;
  setIdentity(userID: string, metaData: TelemetryUserMetadata): void;
}

interface TelemetryUserMetadata {
  userName: string;
  tags: string[];
}

const MIXPANEL_CLIENT_NAME = 'SimfinyMixPanelClient';

/**
 * Enumeration of possible Mixpanel events
 */
export enum MIXPANEL_EVENTS {
  REGISTRATION = "Registration",
  LOGIN = "Login",
  QUESTION_ASKED = "Question Asked",
  ACCOUNT_LINK = "Account Link",
}


class MixPanelClient implements TelemetryClient {
  private instance: Mixpanel;
  private environment: string;
  private eventNames = eventNames;

  constructor(token: string, debugModeEnabled: boolean, name: string, env: string) {
    this.instance = mixpanel.init(token, { debug: debugModeEnabled }, name);
    this.environment = env;
  }
  /**
   * Registers super properties
   * It's very common to have certain properties that we want to include with each event we send. Generally, these are things we know about
   * the user rather than about a specific event - for example, the user's age, gender, source, or initial referrer. To
   * make things easier, we can register these properties as super properties. If we tell this instance just once that these properties are important,
   * we will automatically include them with all events sent. Super properties are stored in a browser cookie, and will persist between visits to the site.
   *
   * Super properties uses a cookie (created in the domain of the page loading the lib) to store super properties. These are stored as JSON in the cookie.
   *  They will persist for the life of that cookie, which by default is 365 days. If we wish to change the life of the cookie,
   * we may do so using set_config to adjust the value for the cookie_expiration(an integer in days).
   * @param props
   */
  registerSuperProperties(props: Dict): void {
    if (this.isProd()) {
      this.instance.register_once(props);
    }
  }

  trackEvent(eventName: string, properties?: Dict): void {
    if (this.isProd()) {
      if (properties === undefined) {
        this.instance.track(eventName);
      } else {
        this.instance.track(eventName, properties);
      }
    }
  }

  trackRegistrationEvent(properties?: Dict): void {
    const eventName: string = this.eventNames.REGISTRATION_EVENT;
    if (this.isProd()) {
      this.trackEvent(eventName, properties);
    }
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
   * Sets identity
   * Identify a user with a unique ID to track user activity across devices, tie a user to their events, and create a user profile.
   *
   * NOTE: This should only be called when you know the identity of the current user, typically after log-in or sign-up
   * @param userID
   */
  setIdentity(userID: string, metaData?: TelemetryUserMetadata): void {
    if (this.isProd()) {
      this.instance.identify(userID);
      if (metaData !== undefined) {
        this.instance.people.union(metaData);
      }
    }
  }

  /**
   * Determines whether prod is the current set environment
   * @returns true if prod
   */
  private isProd(): boolean {
    return this.environment === environment.PRODUCTION;
  }
}

const token: string =
  process.env.REACT_APP_MIXPANEL_TOKEN === undefined
    ? constants.DEFAULT_REACT_APP_MIXPANEL_TOKEN
    : process.env.REACT_APP_MIXPANEL_TOKEN;
const env: string =
  process.env.NODE_ENV === undefined ? environment.PRODUCTION : process.env.NODE_ENV;
const debugModeEnabled: boolean =
  process.env.NODE_ENV === environment.DEVELOPMENT || process.env.NODE_ENV === environment.TEST
    ? true
    : false;

export const mixPanelClient = new MixPanelClient(
  token,
  debugModeEnabled,
  MIXPANEL_CLIENT_NAME,
  env
);
