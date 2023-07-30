/* eslint-disable */
export enum PublicationType {
  PUBLICATION_TYPE_UNSPECIFIED = 0,
  /** PUBLICATION_TYPE_MAGAZINE - a publication with a fixed publication staff that posts stories around a specific topic */
  PUBLICATION_TYPE_MAGAZINE = 1,
  /** PUBLICATION_TYPE_PLATFORM - a publication that accepts stories published around simfiny */
  PUBLICATION_TYPE_PLATFORM = 2,
  /** PUBLICATION_TYPE_BLOG - A community blog, a publication that is created specifically to share subset (community) news */
  PUBLICATION_TYPE_BLOG = 3,
  /** PUBLICATION_TYPE_SUBJECTS - A collection of individual stories by a set of authors that are part of a whole */
  PUBLICATION_TYPE_SUBJECTS = 4,
  UNRECOGNIZED = -1,
}

export function publicationTypeFromJSON(object: any): PublicationType {
  switch (object) {
    case 0:
    case 'PUBLICATION_TYPE_UNSPECIFIED':
      return PublicationType.PUBLICATION_TYPE_UNSPECIFIED;
    case 1:
    case 'PUBLICATION_TYPE_MAGAZINE':
      return PublicationType.PUBLICATION_TYPE_MAGAZINE;
    case 2:
    case 'PUBLICATION_TYPE_PLATFORM':
      return PublicationType.PUBLICATION_TYPE_PLATFORM;
    case 3:
    case 'PUBLICATION_TYPE_BLOG':
      return PublicationType.PUBLICATION_TYPE_BLOG;
    case 4:
    case 'PUBLICATION_TYPE_SUBJECTS':
      return PublicationType.PUBLICATION_TYPE_SUBJECTS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PublicationType.UNRECOGNIZED;
  }
}

export function publicationTypeToJSON(object: PublicationType): string {
  switch (object) {
    case PublicationType.PUBLICATION_TYPE_UNSPECIFIED:
      return 'PUBLICATION_TYPE_UNSPECIFIED';
    case PublicationType.PUBLICATION_TYPE_MAGAZINE:
      return 'PUBLICATION_TYPE_MAGAZINE';
    case PublicationType.PUBLICATION_TYPE_PLATFORM:
      return 'PUBLICATION_TYPE_PLATFORM';
    case PublicationType.PUBLICATION_TYPE_BLOG:
      return 'PUBLICATION_TYPE_BLOG';
    case PublicationType.PUBLICATION_TYPE_SUBJECTS:
      return 'PUBLICATION_TYPE_SUBJECTS';
    case PublicationType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/**
 * VirtualProfile: Every user/community has a virtual profile account id
 * associated with it. A virtual profile abstracts a grouping of separate social
 * accounts a user can have (useful as we scale the types of users we support on
 * the platform - finfluencers, .. etc). All child account types withhold a
 * mapping to a parent virtual profile and in the relational world, this is
 * enforced through primary keys.
 *
 * Example: A user may have 1 or 2 types of social profiles (finfluencers |
 * regular | community). A virtual profile encompasses all such profiles and
 * associates such to user records. (in our case N = 2)
 */
export interface VirtualProfile {
  /** virtual account id */
  id: number;
  /**
   * UserID id from the context of the user service (UserID is relegated across
   * all services and is maintained as the source of truth from an indentity
   * perspective)
   */
  userId: number;
  /** ID of the user profile tied to this virtual account */
  user: UserProfile | undefined;
  /** ID of the community profile tied to this virtual account */
  communities: CommunityProfile[];
  /** Active defines wether the account is a/ctive or not */
  activated: boolean;
}

/** UserProfile: The profile object tied to a given user */
export interface UserProfile {
  /** User profile ID */
  id: number;
  /** Tags are interests */
  tags: Tags[];
  /**
   * Profile name is the name tied to the user profile
   * user name must be at least 5 characters long
   */
  name: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /** Followers outlines the number of followers this user profile has */
  followers: number;
  /** Number of people account is following */
  following: number;
  /**
   * Notification timeline Id. Notification for anything a user/group is
   * following
   */
  notificationFeedTimelineId: string;
  /** Personal timeline ID Has activities for a user that can be followed */
  personalFeedTimelineId: string;
  /**
   * Newsfeed timeline ID Displays all followed and group activities the user
   * follows
   */
  newsFeedTimelineId: string;
  /** ProfileImageUrl witholds the url of a given profile image */
  profileImageUrl: string;
  /** all the bookmarked pieces of content on the platform */
  bookmarks: Bookmark | undefined;
  /** The id of the algolia record referencing this user */
  algoliaId: string;
}

/** CommunityProfile: The profile object tied to a given community */
export interface CommunityProfile {
  /** Community profile ID */
  id: number;
  /**
   * Community name is the name tied to the community profile
   * community name must be at least 5 characters long
   */
  name: string;
  /**
   * Desscription defines additional info about the community
   * community description must be at least 50 characters long
   */
  description: string;
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean;
  /** Visible defines wether just about anyone can find this group */
  visible: boolean;
  /** Followers outlines the number of followers this user profile has */
  followers: number;
  /**
   * Defines rules community members must abide by
   * community rules must be at least 50 characters long
   */
  communityRules: string;
  /**
   * Defines topics assoociated with the community of interest
   * must create at least 1 topic
   */
  topics: Topic[];
  /**
   * Notification timeline Id. Notification for anything a user/group is
   * following
   */
  notificationFeedTimelineId: string;
  /** Personal timeline ID Has activities for a user that can be followed */
  personalFeedTimelineId: string;
  /**
   * Newsfeed timeline ID Displays all followed and group activities the user
   * follows
   */
  newsFeedTimelineId: string;
  /** ProfileImageUrl witholds the url of a given profile image */
  profileImageUrl: string;
  /** The id of the algolia record referencing this community */
  algoliaId: string;
}

/**
 * Follower: The follower record establishing a follow relationship between 2
 * profiles
 */
export interface Follower {
  /** the id of the follower */
  id: number;
  /** the id of the profile being followed */
  profileFollowedId: number;
  /** the id of the profile following the profile being followed */
  profileFollowingId: number;
  /** whther or not the follow request has been approved */
  requestApproved: boolean;
  /** when the follow request was created */
  createdAt: string;
  /** when the follow request was approved */
  approvedAt: string;
  /** the type of profile being followed */
  targetFollowerType: Follower_TargetFollowerProfileType;
}

export enum Follower_TargetFollowerProfileType {
  TARGET_FOLLOWER_PROFILE_TYPE_UNSPECIFIED = 0,
  TARGET_FOLLOWER_PROFILE_TYPE_COMMUNITY_PROFILE = 1,
  TARGET_FOLLOWER_PROFILE_TYPE_USER_PROFILE = 2,
  UNRECOGNIZED = -1,
}

export function follower_TargetFollowerProfileTypeFromJSON(
  object: any
): Follower_TargetFollowerProfileType {
  switch (object) {
    case 0:
    case 'TARGET_FOLLOWER_PROFILE_TYPE_UNSPECIFIED':
      return Follower_TargetFollowerProfileType.TARGET_FOLLOWER_PROFILE_TYPE_UNSPECIFIED;
    case 1:
    case 'TARGET_FOLLOWER_PROFILE_TYPE_COMMUNITY_PROFILE':
      return Follower_TargetFollowerProfileType.TARGET_FOLLOWER_PROFILE_TYPE_COMMUNITY_PROFILE;
    case 2:
    case 'TARGET_FOLLOWER_PROFILE_TYPE_USER_PROFILE':
      return Follower_TargetFollowerProfileType.TARGET_FOLLOWER_PROFILE_TYPE_USER_PROFILE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Follower_TargetFollowerProfileType.UNRECOGNIZED;
  }
}

export function follower_TargetFollowerProfileTypeToJSON(
  object: Follower_TargetFollowerProfileType
): string {
  switch (object) {
    case Follower_TargetFollowerProfileType.TARGET_FOLLOWER_PROFILE_TYPE_UNSPECIFIED:
      return 'TARGET_FOLLOWER_PROFILE_TYPE_UNSPECIFIED';
    case Follower_TargetFollowerProfileType.TARGET_FOLLOWER_PROFILE_TYPE_COMMUNITY_PROFILE:
      return 'TARGET_FOLLOWER_PROFILE_TYPE_COMMUNITY_PROFILE';
    case Follower_TargetFollowerProfileType.TARGET_FOLLOWER_PROFILE_TYPE_USER_PROFILE:
      return 'TARGET_FOLLOWER_PROFILE_TYPE_USER_PROFILE';
    case Follower_TargetFollowerProfileType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/** Tags: tags that can be associated to a record */
export interface Tags {
  /** the id of the tag record */
  id: number;
  /** the name of the tag ... tag must be at least 5 characters long */
  tagName: string;
  /** the description of the tag ... tag must be at least 50 characters long */
  description: string;
}

/** Topic: topic that can be associated to a record */
export interface Topic {
  /** the id of the topic */
  id: number;
  /** the name of the topic */
  topicName: string;
  /** the description of the topic */
  description: string;
  /**
   * the url of the topic image
   * the image url is required
   */
  imageUrl: string;
}

/** Blocked: blocked relationship between 2 profiles */
export interface Blocked {
  /** the id of the blocked record */
  id: number;
  /** the id of the profile being blocked */
  profileBlockedId: number;
  /** the id of the profile blocking the profile being blocked */
  profileBlockingId: number;
  /** when the block request was created */
  createdAt: string;
  /** the type of profile being blocked */
  profileBlockedType: Blocked_BlockedProfileType;
  /** the type of profile blocking the profile being blocked */
  profileBlockingType: Blocked_BlockedProfileType;
}

export enum Blocked_BlockedProfileType {
  BLOCKED_PROFILE_TYPE_UNSPECIFIED = 0,
  BLOCKED_PROFILE_TYPE_COMMUNITY_PROFILE = 1,
  BLOCKED_PROFILE_TYPE_USER_PROFILE = 2,
  UNRECOGNIZED = -1,
}

export function blocked_BlockedProfileTypeFromJSON(object: any): Blocked_BlockedProfileType {
  switch (object) {
    case 0:
    case 'BLOCKED_PROFILE_TYPE_UNSPECIFIED':
      return Blocked_BlockedProfileType.BLOCKED_PROFILE_TYPE_UNSPECIFIED;
    case 1:
    case 'BLOCKED_PROFILE_TYPE_COMMUNITY_PROFILE':
      return Blocked_BlockedProfileType.BLOCKED_PROFILE_TYPE_COMMUNITY_PROFILE;
    case 2:
    case 'BLOCKED_PROFILE_TYPE_USER_PROFILE':
      return Blocked_BlockedProfileType.BLOCKED_PROFILE_TYPE_USER_PROFILE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Blocked_BlockedProfileType.UNRECOGNIZED;
  }
}

export function blocked_BlockedProfileTypeToJSON(object: Blocked_BlockedProfileType): string {
  switch (object) {
    case Blocked_BlockedProfileType.BLOCKED_PROFILE_TYPE_UNSPECIFIED:
      return 'BLOCKED_PROFILE_TYPE_UNSPECIFIED';
    case Blocked_BlockedProfileType.BLOCKED_PROFILE_TYPE_COMMUNITY_PROFILE:
      return 'BLOCKED_PROFILE_TYPE_COMMUNITY_PROFILE';
    case Blocked_BlockedProfileType.BLOCKED_PROFILE_TYPE_USER_PROFILE:
      return 'BLOCKED_PROFILE_TYPE_USER_PROFILE';
    case Blocked_BlockedProfileType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Bookmark {
  /** the id of the blocked record */
  id: number;
  postIds: string[];
  publications: Publication[];
}

/**
 * A Publication is a collections of stories based around a common theme. Anyone can create them
 * As the creator of a publication, you're an editor by default, which means you have the ability to
 * a) add writers to your publication,
 * b) edit and publish the stories that are submitted by your writers, and
 * c) review the metrics for all of the stories that are part of your publication.
 * As the publication's creator, you'll also have the ability
 * to appoint new editors (so they can do all of that stuff I just mentioned)
 *
 * Use Case
 * - An online magazine, a publication with a fixed publication staff that posts stories around a specific topic
 * - A community publication, a publication that accepts stories published around Medium
 * - A company blog, a publication that is created specifically to share company news
 * - A collection of individual stories by a single author that are parts of a larger whole
 */
export interface Publication {
  id: number;
  /** stories are post that can be submitted only by the publication editors */
  postIds: string[];
  admin: UserProfile | undefined;
  adminSimfinyPlatformUserId: number;
  tags: string[];
  editors: UserProfile[];
  subjects: string[];
  description: string;
  createdAt: string;
  type: PublicationType;
  publicationName: string;
}

function createBaseVirtualProfile(): VirtualProfile {
  return {
    id: 0,
    userId: 0,
    user: undefined,
    communities: [],
    activated: false,
  };
}

export const VirtualProfile = {
  fromJSON(object: any): VirtualProfile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      user: isSet(object.user) ? UserProfile.fromJSON(object.user) : undefined,
      communities: Array.isArray(object?.communities)
        ? object.communities.map((e: any) => CommunityProfile.fromJSON(e))
        : [],
      activated: isSet(object.activated) ? Boolean(object.activated) : false,
    };
  },

  toJSON(message: VirtualProfile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.user !== undefined &&
      (obj.user = message.user ? UserProfile.toJSON(message.user) : undefined);
    if (message.communities) {
      obj.communities = message.communities.map((e) =>
        e ? CommunityProfile.toJSON(e) : undefined
      );
    } else {
      obj.communities = [];
    }
    message.activated !== undefined && (obj.activated = message.activated);
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualProfile>, I>>(base?: I): VirtualProfile {
    return VirtualProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VirtualProfile>, I>>(object: I): VirtualProfile {
    const message = createBaseVirtualProfile();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? 0;
    message.user =
      object.user !== undefined && object.user !== null
        ? UserProfile.fromPartial(object.user)
        : undefined;
    message.communities = object.communities?.map((e) => CommunityProfile.fromPartial(e)) || [];
    message.activated = object.activated ?? false;
    return message;
  },
};

function createBaseUserProfile(): UserProfile {
  return {
    id: 0,
    tags: [],
    name: '',
    private: false,
    followers: 0,
    following: 0,
    notificationFeedTimelineId: '',
    personalFeedTimelineId: '',
    newsFeedTimelineId: '',
    profileImageUrl: '',
    bookmarks: undefined,
    algoliaId: '',
  };
}

export const UserProfile = {
  fromJSON(object: any): UserProfile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tags.fromJSON(e)) : [],
      name: isSet(object.name) ? String(object.name) : '',
      private: isSet(object.private) ? Boolean(object.private) : false,
      followers: isSet(object.followers) ? Number(object.followers) : 0,
      following: isSet(object.following) ? Number(object.following) : 0,
      notificationFeedTimelineId: isSet(object.notificationFeedTimelineId)
        ? String(object.notificationFeedTimelineId)
        : '',
      personalFeedTimelineId: isSet(object.personalFeedTimelineId)
        ? String(object.personalFeedTimelineId)
        : '',
      newsFeedTimelineId: isSet(object.newsFeedTimelineId) ? String(object.newsFeedTimelineId) : '',
      profileImageUrl: isSet(object.profileImageUrl) ? String(object.profileImageUrl) : '',
      bookmarks: isSet(object.bookmarks) ? Bookmark.fromJSON(object.bookmarks) : undefined,
      algoliaId: isSet(object.algoliaId) ? String(object.algoliaId) : '',
    };
  },

  toJSON(message: UserProfile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Tags.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.private !== undefined && (obj.private = message.private);
    message.followers !== undefined && (obj.followers = Math.round(message.followers));
    message.following !== undefined && (obj.following = Math.round(message.following));
    message.notificationFeedTimelineId !== undefined &&
      (obj.notificationFeedTimelineId = message.notificationFeedTimelineId);
    message.personalFeedTimelineId !== undefined &&
      (obj.personalFeedTimelineId = message.personalFeedTimelineId);
    message.newsFeedTimelineId !== undefined &&
      (obj.newsFeedTimelineId = message.newsFeedTimelineId);
    message.profileImageUrl !== undefined && (obj.profileImageUrl = message.profileImageUrl);
    message.bookmarks !== undefined &&
      (obj.bookmarks = message.bookmarks ? Bookmark.toJSON(message.bookmarks) : undefined);
    message.algoliaId !== undefined && (obj.algoliaId = message.algoliaId);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserProfile>, I>>(base?: I): UserProfile {
    return UserProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserProfile>, I>>(object: I): UserProfile {
    const message = createBaseUserProfile();
    message.id = object.id ?? 0;
    message.tags = object.tags?.map((e) => Tags.fromPartial(e)) || [];
    message.name = object.name ?? '';
    message.private = object.private ?? false;
    message.followers = object.followers ?? 0;
    message.following = object.following ?? 0;
    message.notificationFeedTimelineId = object.notificationFeedTimelineId ?? '';
    message.personalFeedTimelineId = object.personalFeedTimelineId ?? '';
    message.newsFeedTimelineId = object.newsFeedTimelineId ?? '';
    message.profileImageUrl = object.profileImageUrl ?? '';
    message.bookmarks =
      object.bookmarks !== undefined && object.bookmarks !== null
        ? Bookmark.fromPartial(object.bookmarks)
        : undefined;
    message.algoliaId = object.algoliaId ?? '';
    return message;
  },
};

function createBaseCommunityProfile(): CommunityProfile {
  return {
    id: 0,
    name: '',
    description: '',
    private: false,
    visible: false,
    followers: 0,
    communityRules: '',
    topics: [],
    notificationFeedTimelineId: '',
    personalFeedTimelineId: '',
    newsFeedTimelineId: '',
    profileImageUrl: '',
    algoliaId: '',
  };
}

export const CommunityProfile = {
  fromJSON(object: any): CommunityProfile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      private: isSet(object.private) ? Boolean(object.private) : false,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      followers: isSet(object.followers) ? Number(object.followers) : 0,
      communityRules: isSet(object.communityRules) ? String(object.communityRules) : '',
      topics: Array.isArray(object?.topics) ? object.topics.map((e: any) => Topic.fromJSON(e)) : [],
      notificationFeedTimelineId: isSet(object.notificationFeedTimelineId)
        ? String(object.notificationFeedTimelineId)
        : '',
      personalFeedTimelineId: isSet(object.personalFeedTimelineId)
        ? String(object.personalFeedTimelineId)
        : '',
      newsFeedTimelineId: isSet(object.newsFeedTimelineId) ? String(object.newsFeedTimelineId) : '',
      profileImageUrl: isSet(object.profileImageUrl) ? String(object.profileImageUrl) : '',
      algoliaId: isSet(object.algoliaId) ? String(object.algoliaId) : '',
    };
  },

  toJSON(message: CommunityProfile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.private !== undefined && (obj.private = message.private);
    message.visible !== undefined && (obj.visible = message.visible);
    message.followers !== undefined && (obj.followers = Math.round(message.followers));
    message.communityRules !== undefined && (obj.communityRules = message.communityRules);
    if (message.topics) {
      obj.topics = message.topics.map((e) => (e ? Topic.toJSON(e) : undefined));
    } else {
      obj.topics = [];
    }
    message.notificationFeedTimelineId !== undefined &&
      (obj.notificationFeedTimelineId = message.notificationFeedTimelineId);
    message.personalFeedTimelineId !== undefined &&
      (obj.personalFeedTimelineId = message.personalFeedTimelineId);
    message.newsFeedTimelineId !== undefined &&
      (obj.newsFeedTimelineId = message.newsFeedTimelineId);
    message.profileImageUrl !== undefined && (obj.profileImageUrl = message.profileImageUrl);
    message.algoliaId !== undefined && (obj.algoliaId = message.algoliaId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunityProfile>, I>>(base?: I): CommunityProfile {
    return CommunityProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommunityProfile>, I>>(object: I): CommunityProfile {
    const message = createBaseCommunityProfile();
    message.id = object.id ?? 0;
    message.name = object.name ?? '';
    message.description = object.description ?? '';
    message.private = object.private ?? false;
    message.visible = object.visible ?? false;
    message.followers = object.followers ?? 0;
    message.communityRules = object.communityRules ?? '';
    message.topics = object.topics?.map((e) => Topic.fromPartial(e)) || [];
    message.notificationFeedTimelineId = object.notificationFeedTimelineId ?? '';
    message.personalFeedTimelineId = object.personalFeedTimelineId ?? '';
    message.newsFeedTimelineId = object.newsFeedTimelineId ?? '';
    message.profileImageUrl = object.profileImageUrl ?? '';
    message.algoliaId = object.algoliaId ?? '';
    return message;
  },
};

function createBaseFollower(): Follower {
  return {
    id: 0,
    profileFollowedId: 0,
    profileFollowingId: 0,
    requestApproved: false,
    createdAt: '',
    approvedAt: '',
    targetFollowerType: 0,
  };
}

export const Follower = {
  fromJSON(object: any): Follower {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      profileFollowedId: isSet(object.profileFollowedId) ? Number(object.profileFollowedId) : 0,
      profileFollowingId: isSet(object.profileFollowingId) ? Number(object.profileFollowingId) : 0,
      requestApproved: isSet(object.requestApproved) ? Boolean(object.requestApproved) : false,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      approvedAt: isSet(object.approvedAt) ? String(object.approvedAt) : '',
      targetFollowerType: isSet(object.targetFollowerType)
        ? follower_TargetFollowerProfileTypeFromJSON(object.targetFollowerType)
        : 0,
    };
  },

  toJSON(message: Follower): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.profileFollowedId !== undefined &&
      (obj.profileFollowedId = Math.round(message.profileFollowedId));
    message.profileFollowingId !== undefined &&
      (obj.profileFollowingId = Math.round(message.profileFollowingId));
    message.requestApproved !== undefined && (obj.requestApproved = message.requestApproved);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.approvedAt !== undefined && (obj.approvedAt = message.approvedAt);
    message.targetFollowerType !== undefined &&
      (obj.targetFollowerType = follower_TargetFollowerProfileTypeToJSON(
        message.targetFollowerType
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<Follower>, I>>(base?: I): Follower {
    return Follower.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Follower>, I>>(object: I): Follower {
    const message = createBaseFollower();
    message.id = object.id ?? 0;
    message.profileFollowedId = object.profileFollowedId ?? 0;
    message.profileFollowingId = object.profileFollowingId ?? 0;
    message.requestApproved = object.requestApproved ?? false;
    message.createdAt = object.createdAt ?? '';
    message.approvedAt = object.approvedAt ?? '';
    message.targetFollowerType = object.targetFollowerType ?? 0;
    return message;
  },
};

function createBaseTags(): Tags {
  return { id: 0, tagName: '', description: '' };
}

export const Tags = {
  fromJSON(object: any): Tags {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      tagName: isSet(object.tagName) ? String(object.tagName) : '',
      description: isSet(object.description) ? String(object.description) : '',
    };
  },

  toJSON(message: Tags): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.tagName !== undefined && (obj.tagName = message.tagName);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  create<I extends Exact<DeepPartial<Tags>, I>>(base?: I): Tags {
    return Tags.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Tags>, I>>(object: I): Tags {
    const message = createBaseTags();
    message.id = object.id ?? 0;
    message.tagName = object.tagName ?? '';
    message.description = object.description ?? '';
    return message;
  },
};

function createBaseTopic(): Topic {
  return { id: 0, topicName: '', description: '', imageUrl: '' };
}

export const Topic = {
  fromJSON(object: any): Topic {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      topicName: isSet(object.topicName) ? String(object.topicName) : '',
      description: isSet(object.description) ? String(object.description) : '',
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : '',
    };
  },

  toJSON(message: Topic): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.topicName !== undefined && (obj.topicName = message.topicName);
    message.description !== undefined && (obj.description = message.description);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<Topic>, I>>(base?: I): Topic {
    return Topic.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Topic>, I>>(object: I): Topic {
    const message = createBaseTopic();
    message.id = object.id ?? 0;
    message.topicName = object.topicName ?? '';
    message.description = object.description ?? '';
    message.imageUrl = object.imageUrl ?? '';
    return message;
  },
};

function createBaseBlocked(): Blocked {
  return {
    id: 0,
    profileBlockedId: 0,
    profileBlockingId: 0,
    createdAt: '',
    profileBlockedType: 0,
    profileBlockingType: 0,
  };
}

export const Blocked = {
  fromJSON(object: any): Blocked {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      profileBlockedId: isSet(object.profileBlockedId) ? Number(object.profileBlockedId) : 0,
      profileBlockingId: isSet(object.profileBlockingId) ? Number(object.profileBlockingId) : 0,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      profileBlockedType: isSet(object.profileBlockedType)
        ? blocked_BlockedProfileTypeFromJSON(object.profileBlockedType)
        : 0,
      profileBlockingType: isSet(object.profileBlockingType)
        ? blocked_BlockedProfileTypeFromJSON(object.profileBlockingType)
        : 0,
    };
  },

  toJSON(message: Blocked): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.profileBlockedId !== undefined &&
      (obj.profileBlockedId = Math.round(message.profileBlockedId));
    message.profileBlockingId !== undefined &&
      (obj.profileBlockingId = Math.round(message.profileBlockingId));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.profileBlockedType !== undefined &&
      (obj.profileBlockedType = blocked_BlockedProfileTypeToJSON(message.profileBlockedType));
    message.profileBlockingType !== undefined &&
      (obj.profileBlockingType = blocked_BlockedProfileTypeToJSON(message.profileBlockingType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Blocked>, I>>(base?: I): Blocked {
    return Blocked.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Blocked>, I>>(object: I): Blocked {
    const message = createBaseBlocked();
    message.id = object.id ?? 0;
    message.profileBlockedId = object.profileBlockedId ?? 0;
    message.profileBlockingId = object.profileBlockingId ?? 0;
    message.createdAt = object.createdAt ?? '';
    message.profileBlockedType = object.profileBlockedType ?? 0;
    message.profileBlockingType = object.profileBlockingType ?? 0;
    return message;
  },
};

function createBaseBookmark(): Bookmark {
  return { id: 0, postIds: [], publications: [] };
}

export const Bookmark = {
  fromJSON(object: any): Bookmark {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      postIds: Array.isArray(object?.postIds) ? object.postIds.map((e: any) => String(e)) : [],
      publications: Array.isArray(object?.publications)
        ? object.publications.map((e: any) => Publication.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Bookmark): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    if (message.postIds) {
      obj.postIds = message.postIds.map((e) => e);
    } else {
      obj.postIds = [];
    }
    if (message.publications) {
      obj.publications = message.publications.map((e) => (e ? Publication.toJSON(e) : undefined));
    } else {
      obj.publications = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bookmark>, I>>(base?: I): Bookmark {
    return Bookmark.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Bookmark>, I>>(object: I): Bookmark {
    const message = createBaseBookmark();
    message.id = object.id ?? 0;
    message.postIds = object.postIds?.map((e) => e) || [];
    message.publications = object.publications?.map((e) => Publication.fromPartial(e)) || [];
    return message;
  },
};

function createBasePublication(): Publication {
  return {
    id: 0,
    postIds: [],
    admin: undefined,
    adminSimfinyPlatformUserId: 0,
    tags: [],
    editors: [],
    subjects: [],
    description: '',
    createdAt: '',
    type: 0,
    publicationName: '',
  };
}

export const Publication = {
  fromJSON(object: any): Publication {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      postIds: Array.isArray(object?.postIds) ? object.postIds.map((e: any) => String(e)) : [],
      admin: isSet(object.admin) ? UserProfile.fromJSON(object.admin) : undefined,
      adminSimfinyPlatformUserId: isSet(object.adminSimfinyPlatformUserId)
        ? Number(object.adminSimfinyPlatformUserId)
        : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      editors: Array.isArray(object?.editors)
        ? object.editors.map((e: any) => UserProfile.fromJSON(e))
        : [],
      subjects: Array.isArray(object?.subjects) ? object.subjects.map((e: any) => String(e)) : [],
      description: isSet(object.description) ? String(object.description) : '',
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      type: isSet(object.type) ? publicationTypeFromJSON(object.type) : 0,
      publicationName: isSet(object.publicationName) ? String(object.publicationName) : '',
    };
  },

  toJSON(message: Publication): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    if (message.postIds) {
      obj.postIds = message.postIds.map((e) => e);
    } else {
      obj.postIds = [];
    }
    message.admin !== undefined &&
      (obj.admin = message.admin ? UserProfile.toJSON(message.admin) : undefined);
    message.adminSimfinyPlatformUserId !== undefined &&
      (obj.adminSimfinyPlatformUserId = Math.round(message.adminSimfinyPlatformUserId));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    if (message.editors) {
      obj.editors = message.editors.map((e) => (e ? UserProfile.toJSON(e) : undefined));
    } else {
      obj.editors = [];
    }
    if (message.subjects) {
      obj.subjects = message.subjects.map((e) => e);
    } else {
      obj.subjects = [];
    }
    message.description !== undefined && (obj.description = message.description);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.type !== undefined && (obj.type = publicationTypeToJSON(message.type));
    message.publicationName !== undefined && (obj.publicationName = message.publicationName);
    return obj;
  },

  create<I extends Exact<DeepPartial<Publication>, I>>(base?: I): Publication {
    return Publication.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Publication>, I>>(object: I): Publication {
    const message = createBasePublication();
    message.id = object.id ?? 0;
    message.postIds = object.postIds?.map((e) => e) || [];
    message.admin =
      object.admin !== undefined && object.admin !== null
        ? UserProfile.fromPartial(object.admin)
        : undefined;
    message.adminSimfinyPlatformUserId = object.adminSimfinyPlatformUserId ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.editors = object.editors?.map((e) => UserProfile.fromPartial(e)) || [];
    message.subjects = object.subjects?.map((e) => e) || [];
    message.description = object.description ?? '';
    message.createdAt = object.createdAt ?? '';
    message.type = object.type ?? 0;
    message.publicationName = object.publicationName ?? '';
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
