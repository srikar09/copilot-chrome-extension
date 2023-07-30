/* eslint-disable */
import { CommunityProfile, UserProfile } from './message';
import {
  AccountType,
  accountTypeFromJSON,
  accountTypeToJSON,
  PollPost,
  Post,
  PostType,
  postTypeFromJSON,
  postTypeToJSON,
  SharedPost,
} from './mongo';

export enum NotificationType {
  NOTIFICATION_TYPE_UNSPECIFIED = 0,
  NOTIFICATION_TYPE_REPLIED_TO_POST = 1,
  NOTIFICATION_TYPE_MENTIONED_IN_POST = 2,
  NOTIFICATION_TYPE_REPLIED_TO_COMMENT = 3,
  NOTIFICATION_TYPE_MENTIONED_IN_COMMENT = 4,
  NOTIFICATION_TYPE_SHARED_POST = 5,
  NOTIFICATION_TYPE_REACTED_TO_POST = 6,
  NOTIFICATION_TYPE_REACTED_TO_COMMENT = 7,
  NOTIFICATION_TYPE_FOLLOW_REQUEST = 8,
  UNRECOGNIZED = -1,
}

export function notificationTypeFromJSON(object: any): NotificationType {
  switch (object) {
    case 0:
    case 'NOTIFICATION_TYPE_UNSPECIFIED':
      return NotificationType.NOTIFICATION_TYPE_UNSPECIFIED;
    case 1:
    case 'NOTIFICATION_TYPE_REPLIED_TO_POST':
      return NotificationType.NOTIFICATION_TYPE_REPLIED_TO_POST;
    case 2:
    case 'NOTIFICATION_TYPE_MENTIONED_IN_POST':
      return NotificationType.NOTIFICATION_TYPE_MENTIONED_IN_POST;
    case 3:
    case 'NOTIFICATION_TYPE_REPLIED_TO_COMMENT':
      return NotificationType.NOTIFICATION_TYPE_REPLIED_TO_COMMENT;
    case 4:
    case 'NOTIFICATION_TYPE_MENTIONED_IN_COMMENT':
      return NotificationType.NOTIFICATION_TYPE_MENTIONED_IN_COMMENT;
    case 5:
    case 'NOTIFICATION_TYPE_SHARED_POST':
      return NotificationType.NOTIFICATION_TYPE_SHARED_POST;
    case 6:
    case 'NOTIFICATION_TYPE_REACTED_TO_POST':
      return NotificationType.NOTIFICATION_TYPE_REACTED_TO_POST;
    case 7:
    case 'NOTIFICATION_TYPE_REACTED_TO_COMMENT':
      return NotificationType.NOTIFICATION_TYPE_REACTED_TO_COMMENT;
    case 8:
    case 'NOTIFICATION_TYPE_FOLLOW_REQUEST':
      return NotificationType.NOTIFICATION_TYPE_FOLLOW_REQUEST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NotificationType.UNRECOGNIZED;
  }
}

export function notificationTypeToJSON(object: NotificationType): string {
  switch (object) {
    case NotificationType.NOTIFICATION_TYPE_UNSPECIFIED:
      return 'NOTIFICATION_TYPE_UNSPECIFIED';
    case NotificationType.NOTIFICATION_TYPE_REPLIED_TO_POST:
      return 'NOTIFICATION_TYPE_REPLIED_TO_POST';
    case NotificationType.NOTIFICATION_TYPE_MENTIONED_IN_POST:
      return 'NOTIFICATION_TYPE_MENTIONED_IN_POST';
    case NotificationType.NOTIFICATION_TYPE_REPLIED_TO_COMMENT:
      return 'NOTIFICATION_TYPE_REPLIED_TO_COMMENT';
    case NotificationType.NOTIFICATION_TYPE_MENTIONED_IN_COMMENT:
      return 'NOTIFICATION_TYPE_MENTIONED_IN_COMMENT';
    case NotificationType.NOTIFICATION_TYPE_SHARED_POST:
      return 'NOTIFICATION_TYPE_SHARED_POST';
    case NotificationType.NOTIFICATION_TYPE_REACTED_TO_POST:
      return 'NOTIFICATION_TYPE_REACTED_TO_POST';
    case NotificationType.NOTIFICATION_TYPE_REACTED_TO_COMMENT:
      return 'NOTIFICATION_TYPE_REACTED_TO_COMMENT';
    case NotificationType.NOTIFICATION_TYPE_FOLLOW_REQUEST:
      return 'NOTIFICATION_TYPE_FOLLOW_REQUEST';
    case NotificationType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/**
 * ReactionType outlines the types of reactions an action can have associated
 * with it
 */
export enum ReactionType {
  REACTION_TYPE_UNSPECIFIED = 0,
  /** REACTION_TYPE_LIKE - Like action */
  REACTION_TYPE_LIKE = 1,
  /** REACTION_TYPE_DISLIKE - Dislike action */
  REACTION_TYPE_DISLIKE = 2,
  /** REACTION_TYPE_STAR - Star action */
  REACTION_TYPE_STAR = 3,
  UNRECOGNIZED = -1,
}

export function reactionTypeFromJSON(object: any): ReactionType {
  switch (object) {
    case 0:
    case 'REACTION_TYPE_UNSPECIFIED':
      return ReactionType.REACTION_TYPE_UNSPECIFIED;
    case 1:
    case 'REACTION_TYPE_LIKE':
      return ReactionType.REACTION_TYPE_LIKE;
    case 2:
    case 'REACTION_TYPE_DISLIKE':
      return ReactionType.REACTION_TYPE_DISLIKE;
    case 3:
    case 'REACTION_TYPE_STAR':
      return ReactionType.REACTION_TYPE_STAR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ReactionType.UNRECOGNIZED;
  }
}

export function reactionTypeToJSON(object: ReactionType): string {
  switch (object) {
    case ReactionType.REACTION_TYPE_UNSPECIFIED:
      return 'REACTION_TYPE_UNSPECIFIED';
    case ReactionType.REACTION_TYPE_LIKE:
      return 'REACTION_TYPE_LIKE';
    case ReactionType.REACTION_TYPE_DISLIKE:
      return 'REACTION_TYPE_DISLIKE';
    case ReactionType.REACTION_TYPE_STAR:
      return 'REACTION_TYPE_STAR';
    case ReactionType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/**
 * FeedType encompasses the various types of feeds a profile can have
 * (in conjuction) with getstream.
 */
export enum FeedType {
  FEED_TYPE_UNSPECIFIED = 0,
  /** FEED_TYPE_PERSONAL - UserFeed is a profile's personal feed */
  FEED_TYPE_PERSONAL = 1,
  /** FEED_TYPE_NEWS - NewsFeed is a profile's timeline */
  FEED_TYPE_NEWS = 2,
  /** FEED_TYPE_NOTIFICATION - NotificationFeed encompasses a profile's notification feed */
  FEED_TYPE_NOTIFICATION = 3,
  UNRECOGNIZED = -1,
}

export function feedTypeFromJSON(object: any): FeedType {
  switch (object) {
    case 0:
    case 'FEED_TYPE_UNSPECIFIED':
      return FeedType.FEED_TYPE_UNSPECIFIED;
    case 1:
    case 'FEED_TYPE_PERSONAL':
      return FeedType.FEED_TYPE_PERSONAL;
    case 2:
    case 'FEED_TYPE_NEWS':
      return FeedType.FEED_TYPE_NEWS;
    case 3:
    case 'FEED_TYPE_NOTIFICATION':
      return FeedType.FEED_TYPE_NOTIFICATION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return FeedType.UNRECOGNIZED;
  }
}

export function feedTypeToJSON(object: FeedType): string {
  switch (object) {
    case FeedType.FEED_TYPE_UNSPECIFIED:
      return 'FEED_TYPE_UNSPECIFIED';
    case FeedType.FEED_TYPE_PERSONAL:
      return 'FEED_TYPE_PERSONAL';
    case FeedType.FEED_TYPE_NEWS:
      return 'FEED_TYPE_NEWS';
    case FeedType.FEED_TYPE_NOTIFICATION:
      return 'FEED_TYPE_NOTIFICATION';
    case FeedType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/**
 * UserProfileRequestPayload encompasses the request object necessary to
 * perform operations against a user profile
 */
export interface UserProfileRequestPayload {
  /** Profile name is the name tied to the user profile */
  profileName: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /** Profileimage_url witholds the url of a given profile image */
  profileImageUrl: string;
}

/**
 * TopicsRequestPayload encompasses the request object necessary to perform operations
 * against topics
 */
export interface TopicsRequestPayload {
  /** Topic name refers to the name of a given topic */
  topicName: string;
  /** description refers to details about the topic */
  description: string;
  /** Refers to the image tied to the created topic of interest */
  imageUrl: string;
}

/**
 * CommunityProfileRpc encompasses the client side request object
 * to perform operations against communities
 */
export interface CommunityProfileRequestPayload {
  communityName: string;
  /** Desscription defines additional info about the community */
  description: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /** Visible defines wether just about anyone can find this group */
  visible: boolean;
  /** Defines rules community members must abide by */
  communityRules: string;
  /** Defines topics assoociated with the community of interest */
  topics: TopicsRequestPayload[];
  /** Profileimage_url witholds the url of a given profile image */
  profileImageUrl: string;
}

/**
 * PostRequestPayload encompasses the client side post object sent to perform
 * operations pertinent to posts
 */
export interface PostRequestPayload {
  /** Content refers to the content in the post object. */
  content: string;
  /** Title refers to the high level description of the post content */
  title: string;
  /** Extra are any additional metadata included in the post */
  extra: { [key: string]: string };
  /** Post type refers to the type of post: Achievement, Post, Poll ... */
  postType: PostType;
  /** topic_name is native to community accounts and can be associated to posts */
  topicName: string;
  /** tags are additional points of details ties to the post */
  tags: string[];
  /** Username of the person making the comment */
  authorUserName: string;
  /** Profile image of the person making this comment */
  authorProfileImage: string;
  /**
   * Backgroundimage_url signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   */
  backgroundImageUrl: string;
}

export interface PostRequestPayload_ExtraEntry {
  key: string;
  value: string;
}

/**
 * PollRequestPayload encompasses the client side poll object sent to perform
 * operations pertinent to polls (special posts)
 */
export interface PollRequestPayload {
  /** Content refers to the content in the post object. */
  content: string;
  /** Title refers to the high level description of the post content */
  title: string;
  /** Extra are any additional metadata included in the post */
  extra: { [key: string]: string };
  /** Post type refers to the type of post: Achievement, Post, Poll ... */
  postType: PostType;
  /** topic_name is native to community accounts and can be associated to posts */
  topicName: string;
  /** tags are additional points of details ties to the post */
  tags: string[];
  /** Username of the person making the comment */
  authorUserName: string;
  /** Profile image of the person making this comment */
  authorProfileImage: string;
  /**
   * Backgroundimage_url signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   */
  backgroundImageUrl: string;
  /** The set of options the poll witholds */
  pollOptions: string[];
  /** The end date of a given poll */
  pollEndDate: Date | undefined;
}

export interface PollRequestPayload_ExtraEntry {
  key: string;
  value: string;
}

/**
 * CommentRequestObject encompasses the request object sent by the
 * client to the service in order to add a new comment
 */
export interface CommentRequestPayload {
  /** Content encompasses the comment payload */
  content: string;
  /** Extra refers to addional metadata tied to the comment */
  extra: { [key: string]: string };
  /** Username of the person making the comment */
  authorUsername: string;
  /** Profile image of the person making this comment */
  authorProfileImage: string;
}

export interface CommentRequestPayload_ExtraEntry {
  key: string;
  value: string;
}

/** Actor references the profile performing an operation */
export interface Actor {
  /** UserProfile is the user profile who's performing a given operation */
  userProfile?: UserProfile | undefined;
  /** Communtiy is the community profile who's performing a given operation */
  community?: CommunityProfile | undefined;
  /** AccountType is the type of account this actor is */
  actorType: AccountType;
}

export interface BaseTimeline {
  activities: FeedActivity[];
}

export interface NotificationTimeline {
  activities: NotificationFeedGroup[];
}

/** FeedActivity references an actvitiy present in a given user's timeline */
export interface FeedActivity {
  /** Actor refers to profile who created the object in the Activity */
  actor: Actor | undefined;
  /** Identifies the action that the activity describes. */
  verb: PostType;
  regularPost?: Post | undefined;
  sharedPost?: SharedPost | undefined;
  pollPost?: PollPost | undefined;
  /**
   * ForeignID is used as a reference identifier between our datastore
   * and getstream
   */
  foreignId: string;
  /**
   * Object	Describes the target of the activity. The precise meaning of the
   * activity's target is dependent on the activities verb, but will often be
   * the object the English preposition "to". For instance, in the activity,
   * "John saved a movie to his wishlist", the target of the activity is
   * "wishlist".
   */
  target: string;
  /** Time is the time this activity was created at */
  time: string;
  origin: string;
  /**
   * The TO field allows you to specify a list of feeds to which the activity
   * should be copied. One way to think about it is as the CC functionality of
   * email.
   */
  to: string[];
  /** Score associated to an activity */
  score: number;
  /** Extra encompasses any additional activity metadata */
  extra: { [key: string]: string };
  /** The ID of the activity from the context of getstream */
  getstreamActivityId: string;
}

export interface FeedActivity_ExtraEntry {
  key: string;
  value: string;
}

export interface NotificationFeedGroup {
  activityCount: number;
  actorCount: number;
  createdAt: string;
  group: string;
  feedGroupId: string;
  isRead: boolean;
  isSeen: boolean;
  updatedAt: string;
  verb: string;
  activities: NotificationActivity[];
}

export interface NotificationActivity {
  actorName: string;
  foreignId: string;
  activityId: string;
  verb: string;
  time: string;
  target: string;
  origin: string;
  object: string;
}

/**
 * PendingFollowRequest defines the record describing the given pending follow
 * relationship
 */
export interface PendingFollowRequest {
  /** The ID of the follow request */
  followRequestId: number;
  /** The profile who initiated follow request */
  followerRequestionToFollow: UserProfile | undefined;
  /** The time the follow request originated */
  createdAt: string;
}

export interface SocialRelationshipMetadata {
  sourceProfile: SocialRelationshipMetadata_SocialProfileMetadata | undefined;
  targetProfile: SocialRelationshipMetadata_SocialProfileMetadata | undefined;
  following: boolean;
  followingSince: string;
  blocked: boolean;
}

export interface SocialRelationshipMetadata_SocialProfileMetadata {
  profileType: AccountType;
  profileId: number;
}

export interface FeedActivityPostRecord {
  regularPost?: Post | undefined;
  sharedPost?: SharedPost | undefined;
  pollPost?: PollPost | undefined;
  postType: PostType;
  postId: string;
}

export interface FeedActorRecord {
  userProfile?: UserProfile | undefined;
  communityProfile?: CommunityProfile | undefined;
  actorType: AccountType;
}

function createBaseUserProfileRequestPayload(): UserProfileRequestPayload {
  return { profileName: '', private: false, profileImageUrl: '' };
}

export const UserProfileRequestPayload = {
  fromJSON(object: any): UserProfileRequestPayload {
    return {
      profileName: isSet(object.profileName) ? String(object.profileName) : '',
      private: isSet(object.private) ? Boolean(object.private) : false,
      profileImageUrl: isSet(object.profileImageUrl) ? String(object.profileImageUrl) : '',
    };
  },

  toJSON(message: UserProfileRequestPayload): unknown {
    const obj: any = {};
    message.profileName !== undefined && (obj.profileName = message.profileName);
    message.private !== undefined && (obj.private = message.private);
    message.profileImageUrl !== undefined && (obj.profileImageUrl = message.profileImageUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserProfileRequestPayload>, I>>(
    base?: I
  ): UserProfileRequestPayload {
    return UserProfileRequestPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserProfileRequestPayload>, I>>(
    object: I
  ): UserProfileRequestPayload {
    const message = createBaseUserProfileRequestPayload();
    message.profileName = object.profileName ?? '';
    message.private = object.private ?? false;
    message.profileImageUrl = object.profileImageUrl ?? '';
    return message;
  },
};

function createBaseTopicsRequestPayload(): TopicsRequestPayload {
  return { topicName: '', description: '', imageUrl: '' };
}

export const TopicsRequestPayload = {
  fromJSON(object: any): TopicsRequestPayload {
    return {
      topicName: isSet(object.topicName) ? String(object.topicName) : '',
      description: isSet(object.description) ? String(object.description) : '',
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : '',
    };
  },

  toJSON(message: TopicsRequestPayload): unknown {
    const obj: any = {};
    message.topicName !== undefined && (obj.topicName = message.topicName);
    message.description !== undefined && (obj.description = message.description);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<TopicsRequestPayload>, I>>(base?: I): TopicsRequestPayload {
    return TopicsRequestPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TopicsRequestPayload>, I>>(
    object: I
  ): TopicsRequestPayload {
    const message = createBaseTopicsRequestPayload();
    message.topicName = object.topicName ?? '';
    message.description = object.description ?? '';
    message.imageUrl = object.imageUrl ?? '';
    return message;
  },
};

function createBaseCommunityProfileRequestPayload(): CommunityProfileRequestPayload {
  return {
    communityName: '',
    description: '',
    private: false,
    visible: false,
    communityRules: '',
    topics: [],
    profileImageUrl: '',
  };
}

export const CommunityProfileRequestPayload = {
  fromJSON(object: any): CommunityProfileRequestPayload {
    return {
      communityName: isSet(object.communityName) ? String(object.communityName) : '',
      description: isSet(object.description) ? String(object.description) : '',
      private: isSet(object.private) ? Boolean(object.private) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      communityRules: isSet(object.communityRules) ? String(object.communityRules) : '',
      topics: Array.isArray(object?.topics)
        ? object.topics.map((e: any) => TopicsRequestPayload.fromJSON(e))
        : [],
      profileImageUrl: isSet(object.profileImageUrl) ? String(object.profileImageUrl) : '',
    };
  },

  toJSON(message: CommunityProfileRequestPayload): unknown {
    const obj: any = {};
    message.communityName !== undefined && (obj.communityName = message.communityName);
    message.description !== undefined && (obj.description = message.description);
    message.private !== undefined && (obj.private = message.private);
    message.visible !== undefined && (obj.visible = message.visible);
    message.communityRules !== undefined && (obj.communityRules = message.communityRules);
    if (message.topics) {
      obj.topics = message.topics.map((e) => (e ? TopicsRequestPayload.toJSON(e) : undefined));
    } else {
      obj.topics = [];
    }
    message.profileImageUrl !== undefined && (obj.profileImageUrl = message.profileImageUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunityProfileRequestPayload>, I>>(
    base?: I
  ): CommunityProfileRequestPayload {
    return CommunityProfileRequestPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommunityProfileRequestPayload>, I>>(
    object: I
  ): CommunityProfileRequestPayload {
    const message = createBaseCommunityProfileRequestPayload();
    message.communityName = object.communityName ?? '';
    message.description = object.description ?? '';
    message.private = object.private ?? false;
    message.visible = object.visible ?? false;
    message.communityRules = object.communityRules ?? '';
    message.topics = object.topics?.map((e) => TopicsRequestPayload.fromPartial(e)) || [];
    message.profileImageUrl = object.profileImageUrl ?? '';
    return message;
  },
};

function createBasePostRequestPayload(): PostRequestPayload {
  return {
    content: '',
    title: '',
    extra: {},
    postType: 0,
    topicName: '',
    tags: [],
    authorUserName: '',
    authorProfileImage: '',
    backgroundImageUrl: '',
  };
}

export const PostRequestPayload = {
  fromJSON(object: any): PostRequestPayload {
    return {
      content: isSet(object.content) ? String(object.content) : '',
      title: isSet(object.title) ? String(object.title) : '',
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
      topicName: isSet(object.topicName) ? String(object.topicName) : '',
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      authorUserName: isSet(object.authorUserName) ? String(object.authorUserName) : '',
      authorProfileImage: isSet(object.authorProfileImage) ? String(object.authorProfileImage) : '',
      backgroundImageUrl: isSet(object.backgroundImageUrl) ? String(object.backgroundImageUrl) : '',
    };
  },

  toJSON(message: PostRequestPayload): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content);
    message.title !== undefined && (obj.title = message.title);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    message.topicName !== undefined && (obj.topicName = message.topicName);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.authorUserName !== undefined && (obj.authorUserName = message.authorUserName);
    message.authorProfileImage !== undefined &&
      (obj.authorProfileImage = message.authorProfileImage);
    message.backgroundImageUrl !== undefined &&
      (obj.backgroundImageUrl = message.backgroundImageUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<PostRequestPayload>, I>>(base?: I): PostRequestPayload {
    return PostRequestPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PostRequestPayload>, I>>(object: I): PostRequestPayload {
    const message = createBasePostRequestPayload();
    message.content = object.content ?? '';
    message.title = object.title ?? '';
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.postType = object.postType ?? 0;
    message.topicName = object.topicName ?? '';
    message.tags = object.tags?.map((e) => e) || [];
    message.authorUserName = object.authorUserName ?? '';
    message.authorProfileImage = object.authorProfileImage ?? '';
    message.backgroundImageUrl = object.backgroundImageUrl ?? '';
    return message;
  },
};

function createBasePostRequestPayload_ExtraEntry(): PostRequestPayload_ExtraEntry {
  return { key: '', value: '' };
}

export const PostRequestPayload_ExtraEntry = {
  fromJSON(object: any): PostRequestPayload_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: PostRequestPayload_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<PostRequestPayload_ExtraEntry>, I>>(
    base?: I
  ): PostRequestPayload_ExtraEntry {
    return PostRequestPayload_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PostRequestPayload_ExtraEntry>, I>>(
    object: I
  ): PostRequestPayload_ExtraEntry {
    const message = createBasePostRequestPayload_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBasePollRequestPayload(): PollRequestPayload {
  return {
    content: '',
    title: '',
    extra: {},
    postType: 0,
    topicName: '',
    tags: [],
    authorUserName: '',
    authorProfileImage: '',
    backgroundImageUrl: '',
    pollOptions: [],
    pollEndDate: undefined,
  };
}

export const PollRequestPayload = {
  fromJSON(object: any): PollRequestPayload {
    return {
      content: isSet(object.content) ? String(object.content) : '',
      title: isSet(object.title) ? String(object.title) : '',
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
      topicName: isSet(object.topicName) ? String(object.topicName) : '',
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      authorUserName: isSet(object.authorUserName) ? String(object.authorUserName) : '',
      authorProfileImage: isSet(object.authorProfileImage) ? String(object.authorProfileImage) : '',
      backgroundImageUrl: isSet(object.backgroundImageUrl) ? String(object.backgroundImageUrl) : '',
      pollOptions: Array.isArray(object?.pollOptions)
        ? object.pollOptions.map((e: any) => String(e))
        : [],
      pollEndDate: object.pollEndDate,
    };
  },

  toJSON(message: PollRequestPayload): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content);
    message.title !== undefined && (obj.title = message.title);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    message.topicName !== undefined && (obj.topicName = message.topicName);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.authorUserName !== undefined && (obj.authorUserName = message.authorUserName);
    message.authorProfileImage !== undefined &&
      (obj.authorProfileImage = message.authorProfileImage);
    message.backgroundImageUrl !== undefined &&
      (obj.backgroundImageUrl = message.backgroundImageUrl);
    if (message.pollOptions) {
      obj.pollOptions = message.pollOptions.map((e) => e);
    } else {
      obj.pollOptions = [];
    }
    message.pollEndDate !== undefined && (obj.pollEndDate = message.pollEndDate.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<PollRequestPayload>, I>>(base?: I): PollRequestPayload {
    return PollRequestPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollRequestPayload>, I>>(object: I): PollRequestPayload {
    const message = createBasePollRequestPayload();
    message.content = object.content ?? '';
    message.title = object.title ?? '';
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.postType = object.postType ?? 0;
    message.topicName = object.topicName ?? '';
    message.tags = object.tags?.map((e) => e) || [];
    message.authorUserName = object.authorUserName ?? '';
    message.authorProfileImage = object.authorProfileImage ?? '';
    message.backgroundImageUrl = object.backgroundImageUrl ?? '';
    message.pollOptions = object.pollOptions?.map((e) => e) || [];
    message.pollEndDate = object.pollEndDate ?? undefined;
    return message;
  },
};

function createBasePollRequestPayload_ExtraEntry(): PollRequestPayload_ExtraEntry {
  return { key: '', value: '' };
}

export const PollRequestPayload_ExtraEntry = {
  fromJSON(object: any): PollRequestPayload_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: PollRequestPayload_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<PollRequestPayload_ExtraEntry>, I>>(
    base?: I
  ): PollRequestPayload_ExtraEntry {
    return PollRequestPayload_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollRequestPayload_ExtraEntry>, I>>(
    object: I
  ): PollRequestPayload_ExtraEntry {
    const message = createBasePollRequestPayload_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseCommentRequestPayload(): CommentRequestPayload {
  return { content: '', extra: {}, authorUsername: '', authorProfileImage: '' };
}

export const CommentRequestPayload = {
  fromJSON(object: any): CommentRequestPayload {
    return {
      content: isSet(object.content) ? String(object.content) : '',
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      authorUsername: isSet(object.authorUsername) ? String(object.authorUsername) : '',
      authorProfileImage: isSet(object.authorProfileImage) ? String(object.authorProfileImage) : '',
    };
  },

  toJSON(message: CommentRequestPayload): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    message.authorUsername !== undefined && (obj.authorUsername = message.authorUsername);
    message.authorProfileImage !== undefined &&
      (obj.authorProfileImage = message.authorProfileImage);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommentRequestPayload>, I>>(base?: I): CommentRequestPayload {
    return CommentRequestPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommentRequestPayload>, I>>(
    object: I
  ): CommentRequestPayload {
    const message = createBaseCommentRequestPayload();
    message.content = object.content ?? '';
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.authorUsername = object.authorUsername ?? '';
    message.authorProfileImage = object.authorProfileImage ?? '';
    return message;
  },
};

function createBaseCommentRequestPayload_ExtraEntry(): CommentRequestPayload_ExtraEntry {
  return { key: '', value: '' };
}

export const CommentRequestPayload_ExtraEntry = {
  fromJSON(object: any): CommentRequestPayload_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: CommentRequestPayload_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommentRequestPayload_ExtraEntry>, I>>(
    base?: I
  ): CommentRequestPayload_ExtraEntry {
    return CommentRequestPayload_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommentRequestPayload_ExtraEntry>, I>>(
    object: I
  ): CommentRequestPayload_ExtraEntry {
    const message = createBaseCommentRequestPayload_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseActor(): Actor {
  return { userProfile: undefined, community: undefined, actorType: 0 };
}

export const Actor = {
  fromJSON(object: any): Actor {
    return {
      userProfile: isSet(object.userProfile) ? UserProfile.fromJSON(object.userProfile) : undefined,
      community: isSet(object.community) ? CommunityProfile.fromJSON(object.community) : undefined,
      actorType: isSet(object.actorType) ? accountTypeFromJSON(object.actorType) : 0,
    };
  },

  toJSON(message: Actor): unknown {
    const obj: any = {};
    message.userProfile !== undefined &&
      (obj.userProfile = message.userProfile ? UserProfile.toJSON(message.userProfile) : undefined);
    message.community !== undefined &&
      (obj.community = message.community ? CommunityProfile.toJSON(message.community) : undefined);
    message.actorType !== undefined && (obj.actorType = accountTypeToJSON(message.actorType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Actor>, I>>(base?: I): Actor {
    return Actor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Actor>, I>>(object: I): Actor {
    const message = createBaseActor();
    message.userProfile =
      object.userProfile !== undefined && object.userProfile !== null
        ? UserProfile.fromPartial(object.userProfile)
        : undefined;
    message.community =
      object.community !== undefined && object.community !== null
        ? CommunityProfile.fromPartial(object.community)
        : undefined;
    message.actorType = object.actorType ?? 0;
    return message;
  },
};

function createBaseBaseTimeline(): BaseTimeline {
  return { activities: [] };
}

export const BaseTimeline = {
  fromJSON(object: any): BaseTimeline {
    return {
      activities: Array.isArray(object?.activities)
        ? object.activities.map((e: any) => FeedActivity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BaseTimeline): unknown {
    const obj: any = {};
    if (message.activities) {
      obj.activities = message.activities.map((e) => (e ? FeedActivity.toJSON(e) : undefined));
    } else {
      obj.activities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BaseTimeline>, I>>(base?: I): BaseTimeline {
    return BaseTimeline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BaseTimeline>, I>>(object: I): BaseTimeline {
    const message = createBaseBaseTimeline();
    message.activities = object.activities?.map((e) => FeedActivity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNotificationTimeline(): NotificationTimeline {
  return { activities: [] };
}

export const NotificationTimeline = {
  fromJSON(object: any): NotificationTimeline {
    return {
      activities: Array.isArray(object?.activities)
        ? object.activities.map((e: any) => NotificationFeedGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NotificationTimeline): unknown {
    const obj: any = {};
    if (message.activities) {
      obj.activities = message.activities.map((e) =>
        e ? NotificationFeedGroup.toJSON(e) : undefined
      );
    } else {
      obj.activities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotificationTimeline>, I>>(base?: I): NotificationTimeline {
    return NotificationTimeline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotificationTimeline>, I>>(
    object: I
  ): NotificationTimeline {
    const message = createBaseNotificationTimeline();
    message.activities = object.activities?.map((e) => NotificationFeedGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeedActivity(): FeedActivity {
  return {
    actor: undefined,
    verb: 0,
    regularPost: undefined,
    sharedPost: undefined,
    pollPost: undefined,
    foreignId: '',
    target: '',
    time: '',
    origin: '',
    to: [],
    score: 0,
    extra: {},
    getstreamActivityId: '',
  };
}

export const FeedActivity = {
  fromJSON(object: any): FeedActivity {
    return {
      actor: isSet(object.actor) ? Actor.fromJSON(object.actor) : undefined,
      verb: isSet(object.verb) ? postTypeFromJSON(object.verb) : 0,
      regularPost: isSet(object.regularPost) ? Post.fromJSON(object.regularPost) : undefined,
      sharedPost: isSet(object.sharedPost) ? SharedPost.fromJSON(object.sharedPost) : undefined,
      pollPost: isSet(object.pollPost) ? PollPost.fromJSON(object.pollPost) : undefined,
      foreignId: isSet(object.foreignId) ? String(object.foreignId) : '',
      target: isSet(object.target) ? String(object.target) : '',
      time: isSet(object.time) ? String(object.time) : '',
      origin: isSet(object.origin) ? String(object.origin) : '',
      to: Array.isArray(object?.to) ? object.to.map((e: any) => String(e)) : [],
      score: isSet(object.score) ? Number(object.score) : 0,
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      getstreamActivityId: isSet(object.getstreamActivityId)
        ? String(object.getstreamActivityId)
        : '',
    };
  },

  toJSON(message: FeedActivity): unknown {
    const obj: any = {};
    message.actor !== undefined &&
      (obj.actor = message.actor ? Actor.toJSON(message.actor) : undefined);
    message.verb !== undefined && (obj.verb = postTypeToJSON(message.verb));
    message.regularPost !== undefined &&
      (obj.regularPost = message.regularPost ? Post.toJSON(message.regularPost) : undefined);
    message.sharedPost !== undefined &&
      (obj.sharedPost = message.sharedPost ? SharedPost.toJSON(message.sharedPost) : undefined);
    message.pollPost !== undefined &&
      (obj.pollPost = message.pollPost ? PollPost.toJSON(message.pollPost) : undefined);
    message.foreignId !== undefined && (obj.foreignId = message.foreignId);
    message.target !== undefined && (obj.target = message.target);
    message.time !== undefined && (obj.time = message.time);
    message.origin !== undefined && (obj.origin = message.origin);
    if (message.to) {
      obj.to = message.to.map((e) => e);
    } else {
      obj.to = [];
    }
    message.score !== undefined && (obj.score = Math.round(message.score));
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    message.getstreamActivityId !== undefined &&
      (obj.getstreamActivityId = message.getstreamActivityId);
    return obj;
  },

  create<I extends Exact<DeepPartial<FeedActivity>, I>>(base?: I): FeedActivity {
    return FeedActivity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeedActivity>, I>>(object: I): FeedActivity {
    const message = createBaseFeedActivity();
    message.actor =
      object.actor !== undefined && object.actor !== null
        ? Actor.fromPartial(object.actor)
        : undefined;
    message.verb = object.verb ?? 0;
    message.regularPost =
      object.regularPost !== undefined && object.regularPost !== null
        ? Post.fromPartial(object.regularPost)
        : undefined;
    message.sharedPost =
      object.sharedPost !== undefined && object.sharedPost !== null
        ? SharedPost.fromPartial(object.sharedPost)
        : undefined;
    message.pollPost =
      object.pollPost !== undefined && object.pollPost !== null
        ? PollPost.fromPartial(object.pollPost)
        : undefined;
    message.foreignId = object.foreignId ?? '';
    message.target = object.target ?? '';
    message.time = object.time ?? '';
    message.origin = object.origin ?? '';
    message.to = object.to?.map((e) => e) || [];
    message.score = object.score ?? 0;
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.getstreamActivityId = object.getstreamActivityId ?? '';
    return message;
  },
};

function createBaseFeedActivity_ExtraEntry(): FeedActivity_ExtraEntry {
  return { key: '', value: '' };
}

export const FeedActivity_ExtraEntry = {
  fromJSON(object: any): FeedActivity_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: FeedActivity_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<FeedActivity_ExtraEntry>, I>>(
    base?: I
  ): FeedActivity_ExtraEntry {
    return FeedActivity_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeedActivity_ExtraEntry>, I>>(
    object: I
  ): FeedActivity_ExtraEntry {
    const message = createBaseFeedActivity_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseNotificationFeedGroup(): NotificationFeedGroup {
  return {
    activityCount: 0,
    actorCount: 0,
    createdAt: '',
    group: '',
    feedGroupId: '',
    isRead: false,
    isSeen: false,
    updatedAt: '',
    verb: '',
    activities: [],
  };
}

export const NotificationFeedGroup = {
  fromJSON(object: any): NotificationFeedGroup {
    return {
      activityCount: isSet(object.activityCount) ? Number(object.activityCount) : 0,
      actorCount: isSet(object.actorCount) ? Number(object.actorCount) : 0,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      group: isSet(object.group) ? String(object.group) : '',
      feedGroupId: isSet(object.feedGroupId) ? String(object.feedGroupId) : '',
      isRead: isSet(object.isRead) ? Boolean(object.isRead) : false,
      isSeen: isSet(object.isSeen) ? Boolean(object.isSeen) : false,
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : '',
      verb: isSet(object.verb) ? String(object.verb) : '',
      activities: Array.isArray(object?.activities)
        ? object.activities.map((e: any) => NotificationActivity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NotificationFeedGroup): unknown {
    const obj: any = {};
    message.activityCount !== undefined && (obj.activityCount = Math.round(message.activityCount));
    message.actorCount !== undefined && (obj.actorCount = Math.round(message.actorCount));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.group !== undefined && (obj.group = message.group);
    message.feedGroupId !== undefined && (obj.feedGroupId = message.feedGroupId);
    message.isRead !== undefined && (obj.isRead = message.isRead);
    message.isSeen !== undefined && (obj.isSeen = message.isSeen);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.verb !== undefined && (obj.verb = message.verb);
    if (message.activities) {
      obj.activities = message.activities.map((e) =>
        e ? NotificationActivity.toJSON(e) : undefined
      );
    } else {
      obj.activities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotificationFeedGroup>, I>>(base?: I): NotificationFeedGroup {
    return NotificationFeedGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotificationFeedGroup>, I>>(
    object: I
  ): NotificationFeedGroup {
    const message = createBaseNotificationFeedGroup();
    message.activityCount = object.activityCount ?? 0;
    message.actorCount = object.actorCount ?? 0;
    message.createdAt = object.createdAt ?? '';
    message.group = object.group ?? '';
    message.feedGroupId = object.feedGroupId ?? '';
    message.isRead = object.isRead ?? false;
    message.isSeen = object.isSeen ?? false;
    message.updatedAt = object.updatedAt ?? '';
    message.verb = object.verb ?? '';
    message.activities = object.activities?.map((e) => NotificationActivity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNotificationActivity(): NotificationActivity {
  return {
    actorName: '',
    foreignId: '',
    activityId: '',
    verb: '',
    time: '',
    target: '',
    origin: '',
    object: '',
  };
}

export const NotificationActivity = {
  fromJSON(object: any): NotificationActivity {
    return {
      actorName: isSet(object.actorName) ? String(object.actorName) : '',
      foreignId: isSet(object.foreignId) ? String(object.foreignId) : '',
      activityId: isSet(object.activityId) ? String(object.activityId) : '',
      verb: isSet(object.verb) ? String(object.verb) : '',
      time: isSet(object.time) ? String(object.time) : '',
      target: isSet(object.target) ? String(object.target) : '',
      origin: isSet(object.origin) ? String(object.origin) : '',
      object: isSet(object.object) ? String(object.object) : '',
    };
  },

  toJSON(message: NotificationActivity): unknown {
    const obj: any = {};
    message.actorName !== undefined && (obj.actorName = message.actorName);
    message.foreignId !== undefined && (obj.foreignId = message.foreignId);
    message.activityId !== undefined && (obj.activityId = message.activityId);
    message.verb !== undefined && (obj.verb = message.verb);
    message.time !== undefined && (obj.time = message.time);
    message.target !== undefined && (obj.target = message.target);
    message.origin !== undefined && (obj.origin = message.origin);
    message.object !== undefined && (obj.object = message.object);
    return obj;
  },

  create<I extends Exact<DeepPartial<NotificationActivity>, I>>(base?: I): NotificationActivity {
    return NotificationActivity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NotificationActivity>, I>>(
    object: I
  ): NotificationActivity {
    const message = createBaseNotificationActivity();
    message.actorName = object.actorName ?? '';
    message.foreignId = object.foreignId ?? '';
    message.activityId = object.activityId ?? '';
    message.verb = object.verb ?? '';
    message.time = object.time ?? '';
    message.target = object.target ?? '';
    message.origin = object.origin ?? '';
    message.object = object.object ?? '';
    return message;
  },
};

function createBasePendingFollowRequest(): PendingFollowRequest {
  return {
    followRequestId: 0,
    followerRequestionToFollow: undefined,
    createdAt: '',
  };
}

export const PendingFollowRequest = {
  fromJSON(object: any): PendingFollowRequest {
    return {
      followRequestId: isSet(object.followRequestId) ? Number(object.followRequestId) : 0,
      followerRequestionToFollow: isSet(object.followerRequestionToFollow)
        ? UserProfile.fromJSON(object.followerRequestionToFollow)
        : undefined,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
    };
  },

  toJSON(message: PendingFollowRequest): unknown {
    const obj: any = {};
    message.followRequestId !== undefined &&
      (obj.followRequestId = Math.round(message.followRequestId));
    message.followerRequestionToFollow !== undefined &&
      (obj.followerRequestionToFollow = message.followerRequestionToFollow
        ? UserProfile.toJSON(message.followerRequestionToFollow)
        : undefined);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingFollowRequest>, I>>(base?: I): PendingFollowRequest {
    return PendingFollowRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PendingFollowRequest>, I>>(
    object: I
  ): PendingFollowRequest {
    const message = createBasePendingFollowRequest();
    message.followRequestId = object.followRequestId ?? 0;
    message.followerRequestionToFollow =
      object.followerRequestionToFollow !== undefined && object.followerRequestionToFollow !== null
        ? UserProfile.fromPartial(object.followerRequestionToFollow)
        : undefined;
    message.createdAt = object.createdAt ?? '';
    return message;
  },
};

function createBaseSocialRelationshipMetadata(): SocialRelationshipMetadata {
  return {
    sourceProfile: undefined,
    targetProfile: undefined,
    following: false,
    followingSince: '',
    blocked: false,
  };
}

export const SocialRelationshipMetadata = {
  fromJSON(object: any): SocialRelationshipMetadata {
    return {
      sourceProfile: isSet(object.sourceProfile)
        ? SocialRelationshipMetadata_SocialProfileMetadata.fromJSON(object.sourceProfile)
        : undefined,
      targetProfile: isSet(object.targetProfile)
        ? SocialRelationshipMetadata_SocialProfileMetadata.fromJSON(object.targetProfile)
        : undefined,
      following: isSet(object.following) ? Boolean(object.following) : false,
      followingSince: isSet(object.followingSince) ? String(object.followingSince) : '',
      blocked: isSet(object.blocked) ? Boolean(object.blocked) : false,
    };
  },

  toJSON(message: SocialRelationshipMetadata): unknown {
    const obj: any = {};
    message.sourceProfile !== undefined &&
      (obj.sourceProfile = message.sourceProfile
        ? SocialRelationshipMetadata_SocialProfileMetadata.toJSON(message.sourceProfile)
        : undefined);
    message.targetProfile !== undefined &&
      (obj.targetProfile = message.targetProfile
        ? SocialRelationshipMetadata_SocialProfileMetadata.toJSON(message.targetProfile)
        : undefined);
    message.following !== undefined && (obj.following = message.following);
    message.followingSince !== undefined && (obj.followingSince = message.followingSince);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    return obj;
  },

  create<I extends Exact<DeepPartial<SocialRelationshipMetadata>, I>>(
    base?: I
  ): SocialRelationshipMetadata {
    return SocialRelationshipMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SocialRelationshipMetadata>, I>>(
    object: I
  ): SocialRelationshipMetadata {
    const message = createBaseSocialRelationshipMetadata();
    message.sourceProfile =
      object.sourceProfile !== undefined && object.sourceProfile !== null
        ? SocialRelationshipMetadata_SocialProfileMetadata.fromPartial(object.sourceProfile)
        : undefined;
    message.targetProfile =
      object.targetProfile !== undefined && object.targetProfile !== null
        ? SocialRelationshipMetadata_SocialProfileMetadata.fromPartial(object.targetProfile)
        : undefined;
    message.following = object.following ?? false;
    message.followingSince = object.followingSince ?? '';
    message.blocked = object.blocked ?? false;
    return message;
  },
};

function createBaseSocialRelationshipMetadata_SocialProfileMetadata(): SocialRelationshipMetadata_SocialProfileMetadata {
  return { profileType: 0, profileId: 0 };
}

export const SocialRelationshipMetadata_SocialProfileMetadata = {
  fromJSON(object: any): SocialRelationshipMetadata_SocialProfileMetadata {
    return {
      profileType: isSet(object.profileType) ? accountTypeFromJSON(object.profileType) : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
    };
  },

  toJSON(message: SocialRelationshipMetadata_SocialProfileMetadata): unknown {
    const obj: any = {};
    message.profileType !== undefined && (obj.profileType = accountTypeToJSON(message.profileType));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<SocialRelationshipMetadata_SocialProfileMetadata>, I>>(
    base?: I
  ): SocialRelationshipMetadata_SocialProfileMetadata {
    return SocialRelationshipMetadata_SocialProfileMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SocialRelationshipMetadata_SocialProfileMetadata>, I>>(
    object: I
  ): SocialRelationshipMetadata_SocialProfileMetadata {
    const message = createBaseSocialRelationshipMetadata_SocialProfileMetadata();
    message.profileType = object.profileType ?? 0;
    message.profileId = object.profileId ?? 0;
    return message;
  },
};

function createBaseFeedActivityPostRecord(): FeedActivityPostRecord {
  return {
    regularPost: undefined,
    sharedPost: undefined,
    pollPost: undefined,
    postType: 0,
    postId: '',
  };
}

export const FeedActivityPostRecord = {
  fromJSON(object: any): FeedActivityPostRecord {
    return {
      regularPost: isSet(object.regularPost) ? Post.fromJSON(object.regularPost) : undefined,
      sharedPost: isSet(object.sharedPost) ? SharedPost.fromJSON(object.sharedPost) : undefined,
      pollPost: isSet(object.pollPost) ? PollPost.fromJSON(object.pollPost) : undefined,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
    };
  },

  toJSON(message: FeedActivityPostRecord): unknown {
    const obj: any = {};
    message.regularPost !== undefined &&
      (obj.regularPost = message.regularPost ? Post.toJSON(message.regularPost) : undefined);
    message.sharedPost !== undefined &&
      (obj.sharedPost = message.sharedPost ? SharedPost.toJSON(message.sharedPost) : undefined);
    message.pollPost !== undefined &&
      (obj.pollPost = message.pollPost ? PollPost.toJSON(message.pollPost) : undefined);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  create<I extends Exact<DeepPartial<FeedActivityPostRecord>, I>>(
    base?: I
  ): FeedActivityPostRecord {
    return FeedActivityPostRecord.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeedActivityPostRecord>, I>>(
    object: I
  ): FeedActivityPostRecord {
    const message = createBaseFeedActivityPostRecord();
    message.regularPost =
      object.regularPost !== undefined && object.regularPost !== null
        ? Post.fromPartial(object.regularPost)
        : undefined;
    message.sharedPost =
      object.sharedPost !== undefined && object.sharedPost !== null
        ? SharedPost.fromPartial(object.sharedPost)
        : undefined;
    message.pollPost =
      object.pollPost !== undefined && object.pollPost !== null
        ? PollPost.fromPartial(object.pollPost)
        : undefined;
    message.postType = object.postType ?? 0;
    message.postId = object.postId ?? '';
    return message;
  },
};

function createBaseFeedActorRecord(): FeedActorRecord {
  return { userProfile: undefined, communityProfile: undefined, actorType: 0 };
}

export const FeedActorRecord = {
  fromJSON(object: any): FeedActorRecord {
    return {
      userProfile: isSet(object.userProfile) ? UserProfile.fromJSON(object.userProfile) : undefined,
      communityProfile: isSet(object.communityProfile)
        ? CommunityProfile.fromJSON(object.communityProfile)
        : undefined,
      actorType: isSet(object.actorType) ? accountTypeFromJSON(object.actorType) : 0,
    };
  },

  toJSON(message: FeedActorRecord): unknown {
    const obj: any = {};
    message.userProfile !== undefined &&
      (obj.userProfile = message.userProfile ? UserProfile.toJSON(message.userProfile) : undefined);
    message.communityProfile !== undefined &&
      (obj.communityProfile = message.communityProfile
        ? CommunityProfile.toJSON(message.communityProfile)
        : undefined);
    message.actorType !== undefined && (obj.actorType = accountTypeToJSON(message.actorType));
    return obj;
  },

  create<I extends Exact<DeepPartial<FeedActorRecord>, I>>(base?: I): FeedActorRecord {
    return FeedActorRecord.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeedActorRecord>, I>>(object: I): FeedActorRecord {
    const message = createBaseFeedActorRecord();
    message.userProfile =
      object.userProfile !== undefined && object.userProfile !== null
        ? UserProfile.fromPartial(object.userProfile)
        : undefined;
    message.communityProfile =
      object.communityProfile !== undefined && object.communityProfile !== null
        ? CommunityProfile.fromPartial(object.communityProfile)
        : undefined;
    message.actorType = object.actorType ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
