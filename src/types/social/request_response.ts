/* eslint-disable */
import { ErrorMessage, ErrorResponse } from 'src/types/error/error';
import {
  BaseTimeline,
  FeedType,
  feedTypeFromJSON,
  feedTypeToJSON,
  NotificationTimeline,
  PendingFollowRequest,
  ReactionType,
  reactionTypeFromJSON,
  reactionTypeToJSON,
  SocialRelationshipMetadata,
} from './common';
import { Bookmark, CommunityProfile, Publication, Tags, Topic, UserProfile } from './message';
import {
  AccountType,
  accountTypeFromJSON,
  accountTypeToJSON,
  Comment,
  CommentReply,
  Note,
  PollPost,
  Post,
  PostType,
  postTypeFromJSON,
  postTypeToJSON,
  Reaction,
  reactionFromJSON,
  reactionToJSON,
  SharedPost,
} from './mongo';

export const protobufPackage = 'api.v2';

/**
 * EmptyRequest: Represents a request object invoked against the social service
 * that is empty
 */
export interface EmptyRequest {}

/**
 * ServiceHealthRequest: Represents a request object invoked against the social
 * service to ascertain service health
 */
export interface HealthCheckRequest {}

/**
 * ServiceHealthResponse: Represent the object returned as a response to the
 * service health api invocation
 */
export interface HealthCheckResponse {
  healthy: boolean;
}

/**
 * ReadynessCheckRequest: Represents a request object invoked against the social service
 * for the readyness check
 */
export interface ReadynessCheckRequest {}

/**
 * ReadynessCheckResponse Represents a request invoked against the social service for the
 * readyness check response
 */
export interface ReadynessCheckResponse {
  ready: boolean;
}

/**
 * GetUserProfileRequest: Represents the request object invoked against the
 * social service to obtain a user's social profile
 */
export interface GetUserProfileRequest {
  /** The user ID associated with the profile | type: uint64 */
  userId: number;
  /**
   * The RequestorProfileID is an optional parameter used to check if the
   * profileID (requestor) making a request for the record actually follows the
   * record
   */
  requestorProfileId: number;
  /**
   * The RequestorProfileType is an optional parameter which tells us what type
   * of profile is the requestor
   */
  requestorProfileType: AccountType;
}

/**
 * GetCommunityProfileRequest: Represents the request object invoked against the
 * social
 * service to obtain a user's social profile
 */
export interface GetCommunityProfileRequest {
  /**
   * The communityID associated with the community being requested  | type:
   * uint64
   */
  communityId: number;
  /**
   * The RequestorProfileID is an optional parameter used to check if the
   * profileID (requestor) making a request for the record actually follows the
   * record
   */
  requestorProfileId: number;
  /**
   * The RequestorProfileType is an optional parameter which tells us what type
   * of profile is the requestor
   */
  requestorProfileType: AccountType;
}

/**
 * CreateUserProfileRequest: Represents the request object invoked against the
 * social service to create a user profile account
 */
export interface CreateUserProfileRequest {
  /**
   * the user ID trying to create this user profile (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** the set of ids of community profiles to follow */
  idsOfCommunitiesToFollow: number[];
  username: string;
  tags: Tags[];
  isPrivate: boolean;
  profileImageUrl: string;
}

/**
 * CreateCommunityProfileRequest: Represents the request object invoked against
 * the social service to create a community profile account
 */
export interface CreateCommunityProfileRequest {
  /** the community profile being created | type: json_object */
  profile: CommunityProfile | undefined;
  /**
   * the user ID trying to create this community profile (NOTE: userID refers to
   * the ID from the vantage point of the user service. This ID is the single
   * source of truth for a given user across our suite of services) | type:
   * uint64
   */
  userId: number;
}

/**
 * DeleteUserProfileRequest: Represents the request object invoked against the
 * social service to delete a user profile account
 */
export interface DeleteUserProfileRequest {
  /**
   * the user ID trying to delete this user profile (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
}

/**
 * DeleteCommunityProfileRequest: Represents the request object invoked against
 * the social service to delete a community profile account
 */
export interface DeleteCommunityProfileRequest {
  /**
   * the user ID trying to delete this community profile (NOTE: userID refers to
   * the ID from the vantage point of the user service. This ID is the single
   * source of truth for a given user across our suite of services) | type:
   * uint64
   */
  userId: number;
  communityProfileId: number;
}

/**
 * EditUserProfileRequest: Represents the request object invoked against the
 * social service to update a user profile account
 */
export interface EditUserProfileRequest {
  /**
   * the user ID trying to update this user profile (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** the profile payload | type: json_object */
  profile: UserProfile | undefined;
}

/**
 * EditCommunityProfileRequest: Represents the request object invoked against
 * the social service to update a community profile account
 */
export interface EditCommunityProfileRequest {
  /** The community profile being updated | type: json_object */
  profile: CommunityProfile | undefined;
  /**
   * the user ID trying to update this community profile (NOTE: userID refers to
   * the ID from the vantage point of the user service. This ID is the single
   * source of truth for a given user across our suite of services) | type:
   * uint64
   */
  userId: number;
  /** The community profile ID of the community being updated | type: uint64 */
  communityProfileId: number;
}

/**
 * BlockUserProfileRequest: Represents the request object invoked against the
 * social service to block a given user profile
 */
export interface BlockUserProfileRequest {
  /**
   * the user ID trying to block another user (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  sourceUserId: number;
  /**
   * the user ID being blocked by another user (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  targetUserId: number;
}

/**
 * FollowProfileRequest: Represents the request object invoked against the
 * social service to follow a given user profile
 */
export interface FollowProfileRequest {
  /**
   * the user ID trying to follow another user (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  sourceUserId: number;
  /**
   * the user ID being followed by another user (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  targetUserId: number;
}

/**
 * FollowCommunityProfileRequest: Represents the request object invoked against
 * the social service to follow a given community profile
 */
export interface FollowCommunityProfileRequest {
  /**
   * the user ID trying to follow another user (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  sourceUserId: number;
  /** the targetCommunityProfileID ID being followed by another user */
  targetCommunityProfileId: number;
}

/**
 * AcceptFollowProfileRequest: Represents the request object invoked against the
 * social service to accept a follow request
 */
export interface AcceptFollowProfileRequest {
  /** The id of the follow record | type: uint64 */
  followRecordId: number;
}

/**
 * CreatePostRequest: Represents the request object invoked against the
 * social service to create a post
 */
export interface CreatePostRequest {
  /**
   * the user ID trying to create a post (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /**
   * The ID of the community profile attempting to create the post  | type:
   * uint64
   */
  communityProfileId: number;
  /** The post payload | type: json_object */
  post: Post | undefined;
  /** The type of profile making the request | type: string */
  accountType: AccountType;
}

/**
 * DeletePostRequest: Represents the request object invoked against the
 * social service to delete a post
 */
export interface DeletePostRequest {
  /**
   * the user ID trying to delete a post (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The ID of the post attempted to be delete | type: string */
  postId: string;
  postType: PostType;
}

/**
 * EditPostRequest: Represents the request object invoked against the
 * social service to update a post
 */
export interface EditPostRequest {
  /** The post payload | type: json_object */
  post: Post | undefined;
  /** The ID of the post to be updated | type: string */
  postId: string;
  postType: PostType;
}

/**
 * GetPostRequest: Represents the request object invoked against the
 * social service to obtain a post
 */
export interface GetPostRequest {
  /**
   * the user ID trying to obtain a post (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The ID of the post to obtain | type: string */
  postId: string;
  postType: PostType;
}

/**
 * ReactionRequest: Represents the request object invoked against the
 * social service to create, update or obtain a reaction
 */
export interface ReactionRequest {
  /** The ID of the post to whom we aim to add a reaction to | type: string */
  postId: string;
  /**
   * the user ID trying to add a reaction (NOTE: user_id refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The type of reaction to add to a post or comment | type: string */
  type: ReactionType;
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

/**
 * GetUserFeedRequest: Represents the request object invoked against the
 * social service to obtain a feed
 */
export interface GetUserFeedRequest {
  /**
   * the user ID trying to obtain a given feed (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The type of feed aiming to be obtained | type: string */
  feedType: FeedType;
  /** The type of account making the request to obtain the feed | type: string */
  accountType: AccountType;
  nextPageToken: string;
}

/**
 * GetCommunityFeedRequest: Represents the request object invoked against the
 * social service to obtain a community's feed
 */
export interface GetCommunityFeedRequest {
  /** The ID of the community we are trying to obtain the feed for | type: uint64 */
  communityProfileId: number;
  /** The type of feed aiming to be obtained | type: string */
  feedType: FeedType;
  /** The type of account making the request to obtain the feed | type: string */
  accountType: AccountType;
  nextPageToken: string;
}

/**
 * CreateCommentRequest: Represents the request object invoked against the
 * social service to create a comment
 */
export interface CreateCommentRequest {
  /** The ID of the post to whom to add the comment | type: string */
  postId: string;
  /**
   * the user ID trying to create a comment (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The ID of the community trying to create a comment | type: uint64 */
  communityProfileId: number;
  /** The type of account making the request to create a comment | type: string */
  accountType: AccountType;
  /** The actual comment payload | type: json_object */
  comment: Comment | undefined;
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

/**
 * DeleteCommentRequest: Represents the request object invoked against the
 * social service to delete a comment
 */
export interface DeleteCommentRequest {
  /** The ID of the post trying to be deleted | type: string */
  postId: string;
  /** The ID of the comment trying to be delete | type: string */
  commentId: string;
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

/**
 * CreateTopicRequest: Represent the request object inoked against the
 * social service to create a topic
 */
export interface CreateTopicRequest {
  /** the community profile to associate the topic to | type: uint64 */
  communityProfileId: number;
  /**
   * the user ID trying to whom the community is tied to (NOTE: userID refers to
   * the ID from the vantage point of the user service. This ID is the single
   * source of truth for a given user across our suite of services) | type:
   * uint64
   */
  userId: number;
  /** topic payload | type: json_object */
  topic: Topic | undefined;
}

/**
 * GetPostsByTopicRequest: Represents the request object inoked against the
 * social service to get all post tied to a topic name
 */
export interface GetPostsByTopicRequest {
  /** the community profile to associate the topic to | type: uint64 */
  communityProfileId: number;
  /** the name of a given topic | type: string */
  topicName: string;
}

/**
 * GetPendingFollowRequests: Represent the request object invoked against the
 * social service to get all pending follow requests tied to a user
 */
export interface GetPendingFollowsRequest {
  /**
   * the user ID who's pending request we want to obtain (NOTE: userID refers to
   * the ID from the vantage point of the user service. This ID is the single
   * source of truth for a given user across our suite of services) | type:
   * uint64
   */
  userId: number;
}

/**
 * GetCommunitiesUserFollowsRequest: Represent the request object invoked
 * against the social service to get all the communities a given user follows
 */
export interface GetCommunitiesUserFollowsRequest {
  /**
   * the user ID who's communities follow set we want to obtain (NOTE: userID
   * refers to the ID from the vantage point of the user service. This ID is the
   * single source of truth for a given user across our suite of services) |
   * type: uint64
   */
  userId: number;
  /** the max number of communities to return | type: uint64 */
  limit: number;
}

/**
 * GetTopicsOfCommunitiesUserFollowsRequest: Represents the request object
 * invoked against the social service to get all the topics tied to the
 * communities a user follows
 */
export interface GetTopicsOfCommunitiesUserFollowsRequest {
  /**
   * the user ID whose communities topics follow set we want to obtain (NOTE:
   * userID refers to the ID from the vantage point of the user service. This ID
   * is the single source of truth for a given user across our suite of
   * services) | type: uint64
   */
  userId: number;
  limit: number;
}

/**
 * PaginationRequest: Represents the request object invoked against the
 * social service to obtain a paginated response from a given endpoint
 */
export interface PaginationRequest {
  pageSize: number;
  pageNumber: number;
}

/**
 * GetUserProfilesRequest: Represents the request object invoked against the
 * social service to obtain a paginated response of user profiles
 */
export interface GetUserProfilesRequest {
  pageSize: number;
  pageNumber: number;
}

/**
 * GetCommunityProfilesRequest: Represents the request object invoked against the
 * social service to obtain a paginated response of community profiles
 */
export interface GetCommunityProfilesRequest {
  pageSize: number;
  pageNumber: number;
}

/**
 * AddPostQualityScoreRequest: Represents the request object invoked against the
 * social service to add a quality score to a given post
 */
export interface AddPostQualityScoreRequest {
  postId: string;
  qualityScore: number;
  userId: number;
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

/**
 * AddCommentQualityScoreRequest: Represents the request object invoked against
 * the social service to add a quality score to a given comment
 */
export interface AddCommentQualityScoreRequest {
  postId: string;
  commentId: string;
  qualityScore: number;
  userId: number;
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

/**
 * ReportPostRequest: Represents the request object invoked against the
 * social service to report a post
 */
export interface ReportPostRequest {
  userId: number;
  postId: string;
  postType: PostType;
}

/**
 * ReportCommentRequest: Represents the request object invoked against the
 * social service to report a comment
 */
export interface ReportCommentRequest {
  userId: number;
  postId: string;
  commentId: string;
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

/**
 * GetBlogPostsByTagRequest: Represents the request object invoked against the
 * social service to block posts by a given tag
 */
export interface GetBlogPostsByTagRequest {
  tag: string;
  /** The type of post being reacted to | type: string */
  postType: PostType;
}

/**
 * GetCommunityBlogPostsRequest represents the request object invoked against the
 * social service to get all blog posts tied to a given community
 */
export interface GetCommunityBlogPostsRequest {
  communityProfileId: number;
}

/**
 * DiscoverRequest: Represents the request object invoked against the
 * social service to discover posts
 */
export interface DiscoverProfilesRequest {
  userId: number;
  limit: number;
}

/**
 * ServiceReadyResponse: Represent the object returned as a response to the
 * service readyness api invocation
 */
export interface ServiceReadyResponse {
  ready: boolean;
}

/**
 * GetUserProfileResponse: Represents the object returned as a response to
 * `get-user-profile` request
 */
export interface GetUserProfileResponse {
  profile: UserProfile | undefined;
  metadata: SocialRelationshipMetadata | undefined;
}

/**
 * GetCommunityProfileResponse: Represents the object returned as a response to
 * `get-commmunity-profile` request
 */
export interface GetCommunityProfileResponse {
  profile: CommunityProfile | undefined;
  metadata: SocialRelationshipMetadata | undefined;
}

/**
 * CreateUserProfileResponse: Represents the response object returned as a
 * response to the `create-user` request
 */
export interface CreateUserProfileResponse {
  virtualProfileId: number;
}

/**
 * CreateCommunityProfileResponse: Represents the response object returned as a
 * response to the `create-community` request
 */
export interface CreateCommunityProfileResponse {
  profile: CommunityProfile | undefined;
}

/**
 * DeleteUserProfileResponse: Represent the response object returned as a response
 * to the `delete profile` and `delete-community` request
 */
export interface DeleteUserProfileResponse {
  success: boolean;
}

/**
 * EditUserProfileResponse: Represents the object returned as a response to
 * `update-user-profile` request
 */
export interface EditUserProfileResponse {
  profile: UserProfile | undefined;
}

/**
 * UpdateCommunityProfileResponse: Represents the object returned as a response
 * to `update-commmunity-profile` request
 */
export interface EditCommunityProfileResponse {
  profile: CommunityProfile | undefined;
}

/**
 * BlockUserProfileResponse: Represents the object returned as a response to the
 * block user request
 */
export interface BlockUserProfileResponse {
  success: boolean;
}

/**
 * FollowProfileResponse: Represent the object returned as a response to the
 * follow profile user request
 */
export interface FollowCommunityProfileResponse {
  success: boolean;
}

/**
 * AcceptFollowProfileRequestResponse: Represent the object returned as a
 * response to the accept follow profile request
 */
export interface AcceptFollowProfileResponse {
  success: boolean;
}

/**
 * CreatePostResponse: Represent the object returned as a
 * response to the create post request
 */
export interface CreatePostResponse {
  post: Post | undefined;
}

/**
 * DeletePostResponse: Represent the object returned as a
 * response to the delete post request
 */
export interface DeletePostResponse {
  success: boolean;
}

/**
 * EditPostResponse: Represent the object returned as a
 * response to the update post request
 */
export interface EditPostResponse {
  success: boolean;
}

/**
 * GetPostResponse: Represent the object returned as a
 * response to the get post request
 */
export interface GetPostResponse {
  post: Post | undefined;
}

/**
 * ReportPostResponse: Represent the object returned as a
 * response to the report post request
 */
export interface ReportPostResponse {
  post: Post | undefined;
}

/**
 * ReactionResponse: Represent the object returned as a
 * response to the (create/update) reaction request
 */
export interface ReactionResponse {}

/**
 * GetUserFeedResponse: Represent the object returned as a
 * response to the get user feed request
 */
export interface GetUserFeedResponse {
  baseTimeline?: BaseTimeline | undefined;
  notificationTimeline?: NotificationTimeline | undefined;
  nextPageToken: string;
}

/**
 * GetCommunityFeedResponse: Represent the object returned as a
 * response to the get community feed request
 */
export interface GetCommunityFeedResponse {
  baseTimeline?: BaseTimeline | undefined;
  notificationTimeline?: NotificationTimeline | undefined;
  nextPageToken: string;
}

/**
 * CreateCommentResponse: Represent the object returned as a
 * response to the create comment request
 */
export interface CreateCommentResponse {
  regularPost?: Post | undefined;
  sharedPost?: SharedPost | undefined;
  pollPost?: PollPost | undefined;
}

/**
 * DeleteCommentResponse: Represent the object returned as a
 * response to the delete comment request
 */
export interface DeleteCommentResponse {
  sucess: boolean;
}

/**
 * CreateTopicResponse: Represent the object returned as a response to the
 * create topic request
 */
export interface CreateTopicResponse {
  topicId: number;
}

/**
 * GetPostsByTopicResponse: Represent the object returned as a
 * response to the get posts by topic request
 */
export interface GetPostsByTopicResponse {
  posts: Post[];
}

/**
 * GetPendingFollowRequestsResponse: Represent the response object invoked
 * against the social service to get all pending follow requests tied to a user
 */
export interface GetPendingFollowsResponse {
  requests: PendingFollowRequest[];
}

/**
 * GetCommunitiesUserFollowsResponse: Represent the response object invoked
 * against the social service to get all the communities a given user follows
 */
export interface GetCommunitiesUserFollowsResponse {
  communities: CommunityProfile[];
}

/**
 * GetTopicsOfCommunitiesUserFollowsResponse: Represent the response object
 * invoked against the social service to get all the communities a given user
 * follows
 */
export interface GetTopicsOfCommunitiesUserFollowsResponse {
  topic: Topic[];
}

export interface GetUserProfilesResponse {
  nextPageNumber: number;
  profiles: UserProfile[];
}

export interface GetCommunityProfilesResponse {
  nextPageNumber: number;
  profiles: CommunityProfile[];
}

export interface AddPostQualityScoreResponse {
  regularPost?: Post | undefined;
  sharedPost?: SharedPost | undefined;
  pollPost?: PollPost | undefined;
}

export interface GetBlogPostsByTagResponse {
  posts: Post[];
}

export interface ReportCommentResponse {
  comment: Comment | undefined;
}

export interface PostsPaginationResponse {
  posts: Post[];
  nextPageNumber: number;
}

export interface DiscoverProfilesResponse {
  communityProfiles: CommunityProfile[];
  userProfiles: UserProfile[];
  topics: Topic[];
}

/**
 * DeleteCommunityProfileResponse: Represent the response object returned as a response
 * to the `delete profile` and `delete-community` request
 */
export interface DeleteCommunityProfileResponse {
  success: boolean;
}

/**
 * FollowProfileResponse: Represent the object returned as a response to the
 * follow profile user request
 */
export interface FollowProfileResponse {
  success: boolean;
}

export interface AddCommentQualityScoreResponse {
  comment: Comment | undefined;
}

export interface GetCommunityBlogPostsResponse {
  posts: Post[];
}

/**
 * CreatePollRequest: Represents the request object invoked against the
 * social service to create a post
 */
export interface CreatePollRequest {
  /**
   * the user ID trying to create a post (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The post payload | type: json_object */
  poll: PollPost | undefined;
}

export interface CreatePollResponse {
  pollId: string;
}

export interface DeletePollRequest {
  /**
   * the user ID trying to delete this user profile (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The ID of the post attempted to be delete | type: string */
  postId: string;
}

export interface DeletePollResponse {
  success: boolean;
}

export interface GetPollRequest {
  /**
   * the user ID trying to delete this user profile (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
  /** The ID of the post attempted to be delete | type: string */
  postId: string;
}

export interface GetPollResponse {
  poll: PollPost | undefined;
}

export interface GetPollsRequest {
  /**
   * the user ID trying to delete this user profile (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId: number;
}

export interface GetPollsResponse {
  polls: PollPost[];
}

export interface RespondToPollRequest {
  userId: number;
  pollId: string;
  /** the poll option the user is responding with */
  pollOption: string;
  /** the index of the poll option the user is responding with */
  pollOptionIdx: number;
}

export interface RespondToPollResponse {
  poll: PollPost | undefined;
}

export interface CreateNoteRequest {
  userId: number;
  postId: string;
  postType: PostType;
  note: Note | undefined;
}

export interface CreateNoteResponse {
  regularPost?: Post | undefined;
  sharedPost?: SharedPost | undefined;
  pollPost?: PollPost | undefined;
}

export interface DeleteNoteRequest {
  userId: number;
  postId: string;
  noteId: string;
  postType: PostType;
}

export interface DeleteNoteResponse {
  success: boolean;
}

export interface EditNoteRequest {
  userId: number;
  postId: string;
  noteId: string;
  note: Note | undefined;
  postType: PostType;
}

export interface CreatePublicationRequest {
  userId: number;
  publication: Publication | undefined;
}

export interface CreatePublicationResponse {
  id: number;
}

export interface GetPublicationRequest {
  userId: number;
  publicationId: number;
}

export interface GetPublicationResponse {
  publication: Publication | undefined;
}

export interface DeletePublicationRequest {
  adminUserId: number;
  publicationId: number;
}

export interface DeletePublicationResponse {
  success: boolean;
}

export interface AddPublicationEditorRequest {
  adminUserId: number;
  editorUserId: number;
  publicationId: number;
}

export interface AddPublicationEditorResponse {
  publication: Publication | undefined;
}

export interface DeletePublicationEditorRequest {
  adminUserId: number;
  editorUserId: number;
  publicationId: number;
}

export interface DeletePublicationEditorResponse {
  success: boolean;
}

export interface AddPostToPublicationRequest {
  editorUserId: number;
  publicationId: number;
  post: Post | undefined;
}

export interface AddPostToPublicationResponse {
  publication: Publication | undefined;
}

export interface DeletePostFromPublicationRequest {
  editorUserId: number;
  publicationId: number;
  postId: string;
  postType: PostType;
}

export interface DeletePostFromPublicationResponse {
  success: boolean;
}

export interface AddPostToThreadRequest {
  userId: number;
  parentPostId: string;
  post: Post | undefined;
  postType: PostType;
}

export interface AddPostToThreadResponse {
  regularPost?: Post | undefined;
  sharedPost?: SharedPost | undefined;
  pollPost?: PollPost | undefined;
}

export interface RemovePostFromThreadRequest {
  userId: number;
  parentPostId: string;
  participantPostId: string;
  postType: PostType;
}

export interface RemovePostFromThreadResponse {
  success: boolean;
}

export interface GetPostThreadRequest {
  userId: number;
  postId: string;
  postType: PostType;
}

export interface GetPostThreadResponse {
  posts: Post[];
}

export interface BookmarkPostRequest {
  userId: number;
  postId: string;
}

export interface BookmarkPostResponse {
  bookmark: Bookmark | undefined;
}

export interface RemoveBookmarkedPostRequest {
  userId: number;
  postId: string;
  postType: PostType;
}

export interface RemoveBookmarkedPostResponse {
  bookmark: Bookmark | undefined;
}

export interface BookmarkPublicationRequest {
  userId: number;
  publicationId: number;
}

export interface BookmarkPublicationResponse {
  bookmark: Bookmark | undefined;
}

export interface RemoveBookmarkedPublicationRequest {
  userId: number;
  publicationId: number;
}

export interface RemoveBookmarkedPublicationResponse {
  bookmark: Bookmark | undefined;
}

export interface GetFollowersRequest {
  userId: number;
  profileId: number;
  limit: number;
}

export interface GetFollowersResponse {
  users: UserProfile[];
}

export interface GetAccountsFollowingRequest {
  userId: number;
  profileId: number;
  /** the account type of the user whoses followers are being requested */
  accountType: AccountType;
  limit: number;
}

export interface GetAccountsFollowingResponse {
  users: UserProfile[];
  communities: CommunityProfile[];
}

export interface ReactToPostRequest {
  userId: number;
  postId: string;
  accountType: AccountType;
  reaction: Reaction;
  postType: PostType;
}

export interface ReactToPostResponse {
  regularPost?: Post | undefined;
  sharedPost?: SharedPost | undefined;
  pollPost?: PollPost | undefined;
}

export interface ReactToCommentRequest {
  userId: number;
  postId: string;
  commentId: string;
  accountType: AccountType;
  reaction: Reaction;
  postType: PostType;
}

export interface ReactToCommentResponse {
  comment: Comment | undefined;
}

export interface ReactToCommentReplyRequest {
  userId: number;
  postId: string;
  commentId: string;
  replyId: string;
  accountType: AccountType;
  reaction: Reaction;
  postType: PostType;
}

export interface ReactToCommentReplyResponse {
  reply: CommentReply | undefined;
}

export interface CreateCommentReplyRequest {
  userId: number;
  postId: string;
  commentId: string;
  reply: CommentReply | undefined;
  postType: PostType;
}

export interface CreateCommentReplyResponse {
  comment: Comment | undefined;
}

export interface DeleteCommentReplyRequest {
  userId: number;
  postId: string;
  commentId: string;
  replyId: string;
  postType: PostType;
}

export interface DeleteCommentReplyResponse {
  comment: Comment | undefined;
}

export interface EditCommentReplyRequest {
  userId: number;
  postId: string;
  commentId: string;
  replyId: string;
  reply: CommentReply | undefined;
  postType: PostType;
}

export interface EditCommentReplyResponse {
  reply: CommentReply | undefined;
}

export interface GetCommentRepliesRequest {
  userId: number;
  postId: string;
  commentId: string;
  postType: PostType;
}

export interface GetCommentRepliesResponse {
  replies: CommentReply[];
}

export interface ReportCommentReplyRequest {
  userId: number;
  postId: string;
  commentId: string;
  replyId: string;
  postType: PostType;
}

export interface ReportCommentReplyResponse {
  reply: CommentReply | undefined;
}

export interface SharePostRequest {
  userId: number;
  parentPostId: string;
  parentPostType: PostType;
  content: string;
}

export interface SharePostResponse {
  success: boolean;
}

function createBaseEmptyRequest(): EmptyRequest {
  return {};
}

export const EmptyRequest = {
  fromJSON(_: any): EmptyRequest {
    return {};
  },

  toJSON(_: EmptyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<EmptyRequest>, I>>(base?: I): EmptyRequest {
    return EmptyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EmptyRequest>, I>>(_: I): EmptyRequest {
    const message = createBaseEmptyRequest();
    return message;
  },
};

function createBaseHealthCheckRequest(): HealthCheckRequest {
  return {};
}

export const HealthCheckRequest = {
  fromJSON(_: any): HealthCheckRequest {
    return {};
  },

  toJSON(_: HealthCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckRequest>, I>>(base?: I): HealthCheckRequest {
    return HealthCheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckRequest>, I>>(_: I): HealthCheckRequest {
    const message = createBaseHealthCheckRequest();
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return { healthy: false };
}

export const HealthCheckResponse = {
  fromJSON(object: any): HealthCheckResponse {
    return { healthy: isSet(object.healthy) ? Boolean(object.healthy) : false };
  },

  toJSON(message: HealthCheckResponse): unknown {
    const obj: any = {};
    message.healthy !== undefined && (obj.healthy = message.healthy);
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(base?: I): HealthCheckResponse {
    return HealthCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(
    object: I
  ): HealthCheckResponse {
    const message = createBaseHealthCheckResponse();
    message.healthy = object.healthy ?? false;
    return message;
  },
};

function createBaseReadynessCheckRequest(): ReadynessCheckRequest {
  return {};
}

export const ReadynessCheckRequest = {
  fromJSON(_: any): ReadynessCheckRequest {
    return {};
  },

  toJSON(_: ReadynessCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadynessCheckRequest>, I>>(base?: I): ReadynessCheckRequest {
    return ReadynessCheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReadynessCheckRequest>, I>>(_: I): ReadynessCheckRequest {
    const message = createBaseReadynessCheckRequest();
    return message;
  },
};

function createBaseReadynessCheckResponse(): ReadynessCheckResponse {
  return { ready: false };
}

export const ReadynessCheckResponse = {
  fromJSON(object: any): ReadynessCheckResponse {
    return { ready: isSet(object.ready) ? Boolean(object.ready) : false };
  },

  toJSON(message: ReadynessCheckResponse): unknown {
    const obj: any = {};
    message.ready !== undefined && (obj.ready = message.ready);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadynessCheckResponse>, I>>(
    base?: I
  ): ReadynessCheckResponse {
    return ReadynessCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReadynessCheckResponse>, I>>(
    object: I
  ): ReadynessCheckResponse {
    const message = createBaseReadynessCheckResponse();
    message.ready = object.ready ?? false;
    return message;
  },
};

function createBaseGetUserProfileRequest(): GetUserProfileRequest {
  return { userId: 0, requestorProfileId: 0, requestorProfileType: 0 };
}

export const GetUserProfileRequest = {
  fromJSON(object: any): GetUserProfileRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      requestorProfileId: isSet(object.requestorProfileId) ? Number(object.requestorProfileId) : 0,
      requestorProfileType: isSet(object.requestorProfileType)
        ? accountTypeFromJSON(object.requestorProfileType)
        : 0,
    };
  },

  toJSON(message: GetUserProfileRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.requestorProfileId !== undefined &&
      (obj.requestorProfileId = Math.round(message.requestorProfileId));
    message.requestorProfileType !== undefined &&
      (obj.requestorProfileType = accountTypeToJSON(message.requestorProfileType));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserProfileRequest>, I>>(base?: I): GetUserProfileRequest {
    return GetUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfileRequest>, I>>(
    object: I
  ): GetUserProfileRequest {
    const message = createBaseGetUserProfileRequest();
    message.userId = object.userId ?? 0;
    message.requestorProfileId = object.requestorProfileId ?? 0;
    message.requestorProfileType = object.requestorProfileType ?? 0;
    return message;
  },
};

function createBaseGetCommunityProfileRequest(): GetCommunityProfileRequest {
  return { communityId: 0, requestorProfileId: 0, requestorProfileType: 0 };
}

export const GetCommunityProfileRequest = {
  fromJSON(object: any): GetCommunityProfileRequest {
    return {
      communityId: isSet(object.communityId) ? Number(object.communityId) : 0,
      requestorProfileId: isSet(object.requestorProfileId) ? Number(object.requestorProfileId) : 0,
      requestorProfileType: isSet(object.requestorProfileType)
        ? accountTypeFromJSON(object.requestorProfileType)
        : 0,
    };
  },

  toJSON(message: GetCommunityProfileRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined && (obj.communityId = Math.round(message.communityId));
    message.requestorProfileId !== undefined &&
      (obj.requestorProfileId = Math.round(message.requestorProfileId));
    message.requestorProfileType !== undefined &&
      (obj.requestorProfileType = accountTypeToJSON(message.requestorProfileType));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityProfileRequest>, I>>(
    base?: I
  ): GetCommunityProfileRequest {
    return GetCommunityProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityProfileRequest>, I>>(
    object: I
  ): GetCommunityProfileRequest {
    const message = createBaseGetCommunityProfileRequest();
    message.communityId = object.communityId ?? 0;
    message.requestorProfileId = object.requestorProfileId ?? 0;
    message.requestorProfileType = object.requestorProfileType ?? 0;
    return message;
  },
};

function createBaseCreateUserProfileRequest(): CreateUserProfileRequest {
  return {
    userId: 0,
    idsOfCommunitiesToFollow: [],
    username: '',
    tags: [],
    isPrivate: false,
    profileImageUrl: '',
  };
}

export const CreateUserProfileRequest = {
  fromJSON(object: any): CreateUserProfileRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      idsOfCommunitiesToFollow: Array.isArray(object?.idsOfCommunitiesToFollow)
        ? object.idsOfCommunitiesToFollow.map((e: any) => Number(e))
        : [],
      username: isSet(object.username) ? String(object.username) : '',
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tags.fromJSON(e)) : [],
      isPrivate: isSet(object.isPrivate) ? Boolean(object.isPrivate) : false,
      profileImageUrl: isSet(object.profileImageUrl) ? String(object.profileImageUrl) : '',
    };
  },

  toJSON(message: CreateUserProfileRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    if (message.idsOfCommunitiesToFollow) {
      obj.idsOfCommunitiesToFollow = message.idsOfCommunitiesToFollow.map((e) => Math.round(e));
    } else {
      obj.idsOfCommunitiesToFollow = [];
    }
    message.username !== undefined && (obj.username = message.username);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Tags.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.isPrivate !== undefined && (obj.isPrivate = message.isPrivate);
    message.profileImageUrl !== undefined && (obj.profileImageUrl = message.profileImageUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserProfileRequest>, I>>(
    base?: I
  ): CreateUserProfileRequest {
    return CreateUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserProfileRequest>, I>>(
    object: I
  ): CreateUserProfileRequest {
    const message = createBaseCreateUserProfileRequest();
    message.userId = object.userId ?? 0;
    message.idsOfCommunitiesToFollow = object.idsOfCommunitiesToFollow?.map((e) => e) || [];
    message.username = object.username ?? '';
    message.tags = object.tags?.map((e) => Tags.fromPartial(e)) || [];
    message.isPrivate = object.isPrivate ?? false;
    message.profileImageUrl = object.profileImageUrl ?? '';
    return message;
  },
};

function createBaseCreateCommunityProfileRequest(): CreateCommunityProfileRequest {
  return { profile: undefined, userId: 0 };
}

export const CreateCommunityProfileRequest = {
  fromJSON(object: any): CreateCommunityProfileRequest {
    return {
      profile: isSet(object.profile) ? CommunityProfile.fromJSON(object.profile) : undefined,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: CreateCommunityProfileRequest): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? CommunityProfile.toJSON(message.profile) : undefined);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommunityProfileRequest>, I>>(
    base?: I
  ): CreateCommunityProfileRequest {
    return CreateCommunityProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommunityProfileRequest>, I>>(
    object: I
  ): CreateCommunityProfileRequest {
    const message = createBaseCreateCommunityProfileRequest();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? CommunityProfile.fromPartial(object.profile)
        : undefined;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseDeleteUserProfileRequest(): DeleteUserProfileRequest {
  return { userId: 0 };
}

export const DeleteUserProfileRequest = {
  fromJSON(object: any): DeleteUserProfileRequest {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: DeleteUserProfileRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserProfileRequest>, I>>(
    base?: I
  ): DeleteUserProfileRequest {
    return DeleteUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserProfileRequest>, I>>(
    object: I
  ): DeleteUserProfileRequest {
    const message = createBaseDeleteUserProfileRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseDeleteCommunityProfileRequest(): DeleteCommunityProfileRequest {
  return { userId: 0, communityProfileId: 0 };
}

export const DeleteCommunityProfileRequest = {
  fromJSON(object: any): DeleteCommunityProfileRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
    };
  },

  toJSON(message: DeleteCommunityProfileRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommunityProfileRequest>, I>>(
    base?: I
  ): DeleteCommunityProfileRequest {
    return DeleteCommunityProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommunityProfileRequest>, I>>(
    object: I
  ): DeleteCommunityProfileRequest {
    const message = createBaseDeleteCommunityProfileRequest();
    message.userId = object.userId ?? 0;
    message.communityProfileId = object.communityProfileId ?? 0;
    return message;
  },
};

function createBaseEditUserProfileRequest(): EditUserProfileRequest {
  return { userId: 0, profile: undefined };
}

export const EditUserProfileRequest = {
  fromJSON(object: any): EditUserProfileRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      profile: isSet(object.profile) ? UserProfile.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: EditUserProfileRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.profile !== undefined &&
      (obj.profile = message.profile ? UserProfile.toJSON(message.profile) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditUserProfileRequest>, I>>(
    base?: I
  ): EditUserProfileRequest {
    return EditUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditUserProfileRequest>, I>>(
    object: I
  ): EditUserProfileRequest {
    const message = createBaseEditUserProfileRequest();
    message.userId = object.userId ?? 0;
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? UserProfile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

function createBaseEditCommunityProfileRequest(): EditCommunityProfileRequest {
  return { profile: undefined, userId: 0, communityProfileId: 0 };
}

export const EditCommunityProfileRequest = {
  fromJSON(object: any): EditCommunityProfileRequest {
    return {
      profile: isSet(object.profile) ? CommunityProfile.fromJSON(object.profile) : undefined,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
    };
  },

  toJSON(message: EditCommunityProfileRequest): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? CommunityProfile.toJSON(message.profile) : undefined);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<EditCommunityProfileRequest>, I>>(
    base?: I
  ): EditCommunityProfileRequest {
    return EditCommunityProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditCommunityProfileRequest>, I>>(
    object: I
  ): EditCommunityProfileRequest {
    const message = createBaseEditCommunityProfileRequest();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? CommunityProfile.fromPartial(object.profile)
        : undefined;
    message.userId = object.userId ?? 0;
    message.communityProfileId = object.communityProfileId ?? 0;
    return message;
  },
};

function createBaseBlockUserProfileRequest(): BlockUserProfileRequest {
  return { sourceUserId: 0, targetUserId: 0 };
}

export const BlockUserProfileRequest = {
  fromJSON(object: any): BlockUserProfileRequest {
    return {
      sourceUserId: isSet(object.sourceUserId) ? Number(object.sourceUserId) : 0,
      targetUserId: isSet(object.targetUserId) ? Number(object.targetUserId) : 0,
    };
  },

  toJSON(message: BlockUserProfileRequest): unknown {
    const obj: any = {};
    message.sourceUserId !== undefined && (obj.sourceUserId = Math.round(message.sourceUserId));
    message.targetUserId !== undefined && (obj.targetUserId = Math.round(message.targetUserId));
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockUserProfileRequest>, I>>(
    base?: I
  ): BlockUserProfileRequest {
    return BlockUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlockUserProfileRequest>, I>>(
    object: I
  ): BlockUserProfileRequest {
    const message = createBaseBlockUserProfileRequest();
    message.sourceUserId = object.sourceUserId ?? 0;
    message.targetUserId = object.targetUserId ?? 0;
    return message;
  },
};

function createBaseFollowProfileRequest(): FollowProfileRequest {
  return { sourceUserId: 0, targetUserId: 0 };
}

export const FollowProfileRequest = {
  fromJSON(object: any): FollowProfileRequest {
    return {
      sourceUserId: isSet(object.sourceUserId) ? Number(object.sourceUserId) : 0,
      targetUserId: isSet(object.targetUserId) ? Number(object.targetUserId) : 0,
    };
  },

  toJSON(message: FollowProfileRequest): unknown {
    const obj: any = {};
    message.sourceUserId !== undefined && (obj.sourceUserId = Math.round(message.sourceUserId));
    message.targetUserId !== undefined && (obj.targetUserId = Math.round(message.targetUserId));
    return obj;
  },

  create<I extends Exact<DeepPartial<FollowProfileRequest>, I>>(base?: I): FollowProfileRequest {
    return FollowProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FollowProfileRequest>, I>>(
    object: I
  ): FollowProfileRequest {
    const message = createBaseFollowProfileRequest();
    message.sourceUserId = object.sourceUserId ?? 0;
    message.targetUserId = object.targetUserId ?? 0;
    return message;
  },
};

function createBaseFollowCommunityProfileRequest(): FollowCommunityProfileRequest {
  return { sourceUserId: 0, targetCommunityProfileId: 0 };
}

export const FollowCommunityProfileRequest = {
  fromJSON(object: any): FollowCommunityProfileRequest {
    return {
      sourceUserId: isSet(object.sourceUserId) ? Number(object.sourceUserId) : 0,
      targetCommunityProfileId: isSet(object.targetCommunityProfileId)
        ? Number(object.targetCommunityProfileId)
        : 0,
    };
  },

  toJSON(message: FollowCommunityProfileRequest): unknown {
    const obj: any = {};
    message.sourceUserId !== undefined && (obj.sourceUserId = Math.round(message.sourceUserId));
    message.targetCommunityProfileId !== undefined &&
      (obj.targetCommunityProfileId = Math.round(message.targetCommunityProfileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<FollowCommunityProfileRequest>, I>>(
    base?: I
  ): FollowCommunityProfileRequest {
    return FollowCommunityProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FollowCommunityProfileRequest>, I>>(
    object: I
  ): FollowCommunityProfileRequest {
    const message = createBaseFollowCommunityProfileRequest();
    message.sourceUserId = object.sourceUserId ?? 0;
    message.targetCommunityProfileId = object.targetCommunityProfileId ?? 0;
    return message;
  },
};

function createBaseAcceptFollowProfileRequest(): AcceptFollowProfileRequest {
  return { followRecordId: 0 };
}

export const AcceptFollowProfileRequest = {
  fromJSON(object: any): AcceptFollowProfileRequest {
    return {
      followRecordId: isSet(object.followRecordId) ? Number(object.followRecordId) : 0,
    };
  },

  toJSON(message: AcceptFollowProfileRequest): unknown {
    const obj: any = {};
    message.followRecordId !== undefined &&
      (obj.followRecordId = Math.round(message.followRecordId));
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptFollowProfileRequest>, I>>(
    base?: I
  ): AcceptFollowProfileRequest {
    return AcceptFollowProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcceptFollowProfileRequest>, I>>(
    object: I
  ): AcceptFollowProfileRequest {
    const message = createBaseAcceptFollowProfileRequest();
    message.followRecordId = object.followRecordId ?? 0;
    return message;
  },
};

function createBaseCreatePostRequest(): CreatePostRequest {
  return { userId: 0, communityProfileId: 0, post: undefined, accountType: 0 };
}

export const CreatePostRequest = {
  fromJSON(object: any): CreatePostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
    };
  },

  toJSON(message: CreatePostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePostRequest>, I>>(base?: I): CreatePostRequest {
    return CreatePostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePostRequest>, I>>(object: I): CreatePostRequest {
    const message = createBaseCreatePostRequest();
    message.userId = object.userId ?? 0;
    message.communityProfileId = object.communityProfileId ?? 0;
    message.post =
      object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    message.accountType = object.accountType ?? 0;
    return message;
  },
};

function createBaseDeletePostRequest(): DeletePostRequest {
  return { userId: 0, postId: '', postType: 0 };
}

export const DeletePostRequest = {
  fromJSON(object: any): DeletePostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: DeletePostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePostRequest>, I>>(base?: I): DeletePostRequest {
    return DeletePostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePostRequest>, I>>(object: I): DeletePostRequest {
    const message = createBaseDeletePostRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseEditPostRequest(): EditPostRequest {
  return { post: undefined, postId: '', postType: 0 };
}

export const EditPostRequest = {
  fromJSON(object: any): EditPostRequest {
    return {
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: EditPostRequest): unknown {
    const obj: any = {};
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<EditPostRequest>, I>>(base?: I): EditPostRequest {
    return EditPostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditPostRequest>, I>>(object: I): EditPostRequest {
    const message = createBaseEditPostRequest();
    message.post =
      object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseGetPostRequest(): GetPostRequest {
  return { userId: 0, postId: '', postType: 0 };
}

export const GetPostRequest = {
  fromJSON(object: any): GetPostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: GetPostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostRequest>, I>>(base?: I): GetPostRequest {
    return GetPostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostRequest>, I>>(object: I): GetPostRequest {
    const message = createBaseGetPostRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseReactionRequest(): ReactionRequest {
  return { postId: '', userId: 0, type: 0, postType: 0 };
}

export const ReactionRequest = {
  fromJSON(object: any): ReactionRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : '',
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      type: isSet(object.type) ? reactionTypeFromJSON(object.type) : 0,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: ReactionRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.type !== undefined && (obj.type = reactionTypeToJSON(message.type));
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactionRequest>, I>>(base?: I): ReactionRequest {
    return ReactionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactionRequest>, I>>(object: I): ReactionRequest {
    const message = createBaseReactionRequest();
    message.postId = object.postId ?? '';
    message.userId = object.userId ?? 0;
    message.type = object.type ?? 0;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseGetUserFeedRequest(): GetUserFeedRequest {
  return { userId: 0, feedType: 0, accountType: 0, nextPageToken: '' };
}

export const GetUserFeedRequest = {
  fromJSON(object: any): GetUserFeedRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      feedType: isSet(object.feedType) ? feedTypeFromJSON(object.feedType) : 0,
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : '',
    };
  },

  toJSON(message: GetUserFeedRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.feedType !== undefined && (obj.feedType = feedTypeToJSON(message.feedType));
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserFeedRequest>, I>>(base?: I): GetUserFeedRequest {
    return GetUserFeedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserFeedRequest>, I>>(object: I): GetUserFeedRequest {
    const message = createBaseGetUserFeedRequest();
    message.userId = object.userId ?? 0;
    message.feedType = object.feedType ?? 0;
    message.accountType = object.accountType ?? 0;
    message.nextPageToken = object.nextPageToken ?? '';
    return message;
  },
};

function createBaseGetCommunityFeedRequest(): GetCommunityFeedRequest {
  return {
    communityProfileId: 0,
    feedType: 0,
    accountType: 0,
    nextPageToken: '',
  };
}

export const GetCommunityFeedRequest = {
  fromJSON(object: any): GetCommunityFeedRequest {
    return {
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
      feedType: isSet(object.feedType) ? feedTypeFromJSON(object.feedType) : 0,
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : '',
    };
  },

  toJSON(message: GetCommunityFeedRequest): unknown {
    const obj: any = {};
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    message.feedType !== undefined && (obj.feedType = feedTypeToJSON(message.feedType));
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityFeedRequest>, I>>(
    base?: I
  ): GetCommunityFeedRequest {
    return GetCommunityFeedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityFeedRequest>, I>>(
    object: I
  ): GetCommunityFeedRequest {
    const message = createBaseGetCommunityFeedRequest();
    message.communityProfileId = object.communityProfileId ?? 0;
    message.feedType = object.feedType ?? 0;
    message.accountType = object.accountType ?? 0;
    message.nextPageToken = object.nextPageToken ?? '';
    return message;
  },
};

function createBaseCreateCommentRequest(): CreateCommentRequest {
  return {
    postId: '',
    userId: 0,
    communityProfileId: 0,
    accountType: 0,
    comment: undefined,
    postType: 0,
  };
}

export const CreateCommentRequest = {
  fromJSON(object: any): CreateCommentRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : '',
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
      comment: isSet(object.comment) ? Comment.fromJSON(object.comment) : undefined,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: CreateCommentRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    message.comment !== undefined &&
      (obj.comment = message.comment ? Comment.toJSON(message.comment) : undefined);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommentRequest>, I>>(base?: I): CreateCommentRequest {
    return CreateCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentRequest>, I>>(
    object: I
  ): CreateCommentRequest {
    const message = createBaseCreateCommentRequest();
    message.postId = object.postId ?? '';
    message.userId = object.userId ?? 0;
    message.communityProfileId = object.communityProfileId ?? 0;
    message.accountType = object.accountType ?? 0;
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? Comment.fromPartial(object.comment)
        : undefined;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseDeleteCommentRequest(): DeleteCommentRequest {
  return { postId: '', commentId: '', postType: 0 };
}

export const DeleteCommentRequest = {
  fromJSON(object: any): DeleteCommentRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: DeleteCommentRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommentRequest>, I>>(base?: I): DeleteCommentRequest {
    return DeleteCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentRequest>, I>>(
    object: I
  ): DeleteCommentRequest {
    const message = createBaseDeleteCommentRequest();
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseCreateTopicRequest(): CreateTopicRequest {
  return { communityProfileId: 0, userId: 0, topic: undefined };
}

export const CreateTopicRequest = {
  fromJSON(object: any): CreateTopicRequest {
    return {
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      topic: isSet(object.topic) ? Topic.fromJSON(object.topic) : undefined,
    };
  },

  toJSON(message: CreateTopicRequest): unknown {
    const obj: any = {};
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.topic !== undefined &&
      (obj.topic = message.topic ? Topic.toJSON(message.topic) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTopicRequest>, I>>(base?: I): CreateTopicRequest {
    return CreateTopicRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateTopicRequest>, I>>(object: I): CreateTopicRequest {
    const message = createBaseCreateTopicRequest();
    message.communityProfileId = object.communityProfileId ?? 0;
    message.userId = object.userId ?? 0;
    message.topic =
      object.topic !== undefined && object.topic !== null
        ? Topic.fromPartial(object.topic)
        : undefined;
    return message;
  },
};

function createBaseGetPostsByTopicRequest(): GetPostsByTopicRequest {
  return { communityProfileId: 0, topicName: '' };
}

export const GetPostsByTopicRequest = {
  fromJSON(object: any): GetPostsByTopicRequest {
    return {
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
      topicName: isSet(object.topicName) ? String(object.topicName) : '',
    };
  },

  toJSON(message: GetPostsByTopicRequest): unknown {
    const obj: any = {};
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    message.topicName !== undefined && (obj.topicName = message.topicName);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostsByTopicRequest>, I>>(
    base?: I
  ): GetPostsByTopicRequest {
    return GetPostsByTopicRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostsByTopicRequest>, I>>(
    object: I
  ): GetPostsByTopicRequest {
    const message = createBaseGetPostsByTopicRequest();
    message.communityProfileId = object.communityProfileId ?? 0;
    message.topicName = object.topicName ?? '';
    return message;
  },
};

function createBaseGetPendingFollowsRequest(): GetPendingFollowsRequest {
  return { userId: 0 };
}

export const GetPendingFollowsRequest = {
  fromJSON(object: any): GetPendingFollowsRequest {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: GetPendingFollowsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPendingFollowsRequest>, I>>(
    base?: I
  ): GetPendingFollowsRequest {
    return GetPendingFollowsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPendingFollowsRequest>, I>>(
    object: I
  ): GetPendingFollowsRequest {
    const message = createBaseGetPendingFollowsRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetCommunitiesUserFollowsRequest(): GetCommunitiesUserFollowsRequest {
  return { userId: 0, limit: 0 };
}

export const GetCommunitiesUserFollowsRequest = {
  fromJSON(object: any): GetCommunitiesUserFollowsRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: GetCommunitiesUserFollowsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunitiesUserFollowsRequest>, I>>(
    base?: I
  ): GetCommunitiesUserFollowsRequest {
    return GetCommunitiesUserFollowsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunitiesUserFollowsRequest>, I>>(
    object: I
  ): GetCommunitiesUserFollowsRequest {
    const message = createBaseGetCommunitiesUserFollowsRequest();
    message.userId = object.userId ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseGetTopicsOfCommunitiesUserFollowsRequest(): GetTopicsOfCommunitiesUserFollowsRequest {
  return { userId: 0, limit: 0 };
}

export const GetTopicsOfCommunitiesUserFollowsRequest = {
  fromJSON(object: any): GetTopicsOfCommunitiesUserFollowsRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: GetTopicsOfCommunitiesUserFollowsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTopicsOfCommunitiesUserFollowsRequest>, I>>(
    base?: I
  ): GetTopicsOfCommunitiesUserFollowsRequest {
    return GetTopicsOfCommunitiesUserFollowsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetTopicsOfCommunitiesUserFollowsRequest>, I>>(
    object: I
  ): GetTopicsOfCommunitiesUserFollowsRequest {
    const message = createBaseGetTopicsOfCommunitiesUserFollowsRequest();
    message.userId = object.userId ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBasePaginationRequest(): PaginationRequest {
  return { pageSize: 0, pageNumber: 0 };
}

export const PaginationRequest = {
  fromJSON(object: any): PaginationRequest {
    return {
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageNumber: isSet(object.pageNumber) ? Number(object.pageNumber) : 0,
    };
  },

  toJSON(message: PaginationRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageNumber !== undefined && (obj.pageNumber = Math.round(message.pageNumber));
    return obj;
  },

  create<I extends Exact<DeepPartial<PaginationRequest>, I>>(base?: I): PaginationRequest {
    return PaginationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaginationRequest>, I>>(object: I): PaginationRequest {
    const message = createBasePaginationRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageNumber = object.pageNumber ?? 0;
    return message;
  },
};

function createBaseGetUserProfilesRequest(): GetUserProfilesRequest {
  return { pageSize: 0, pageNumber: 0 };
}

export const GetUserProfilesRequest = {
  fromJSON(object: any): GetUserProfilesRequest {
    return {
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageNumber: isSet(object.pageNumber) ? Number(object.pageNumber) : 0,
    };
  },

  toJSON(message: GetUserProfilesRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageNumber !== undefined && (obj.pageNumber = Math.round(message.pageNumber));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserProfilesRequest>, I>>(
    base?: I
  ): GetUserProfilesRequest {
    return GetUserProfilesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfilesRequest>, I>>(
    object: I
  ): GetUserProfilesRequest {
    const message = createBaseGetUserProfilesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageNumber = object.pageNumber ?? 0;
    return message;
  },
};

function createBaseGetCommunityProfilesRequest(): GetCommunityProfilesRequest {
  return { pageSize: 0, pageNumber: 0 };
}

export const GetCommunityProfilesRequest = {
  fromJSON(object: any): GetCommunityProfilesRequest {
    return {
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageNumber: isSet(object.pageNumber) ? Number(object.pageNumber) : 0,
    };
  },

  toJSON(message: GetCommunityProfilesRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageNumber !== undefined && (obj.pageNumber = Math.round(message.pageNumber));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityProfilesRequest>, I>>(
    base?: I
  ): GetCommunityProfilesRequest {
    return GetCommunityProfilesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityProfilesRequest>, I>>(
    object: I
  ): GetCommunityProfilesRequest {
    const message = createBaseGetCommunityProfilesRequest();
    message.pageSize = object.pageSize ?? 0;
    message.pageNumber = object.pageNumber ?? 0;
    return message;
  },
};

function createBaseAddPostQualityScoreRequest(): AddPostQualityScoreRequest {
  return { postId: '', qualityScore: 0, userId: 0, postType: 0 };
}

export const AddPostQualityScoreRequest = {
  fromJSON(object: any): AddPostQualityScoreRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : '',
      qualityScore: isSet(object.qualityScore) ? Number(object.qualityScore) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: AddPostQualityScoreRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.qualityScore !== undefined && (obj.qualityScore = Math.round(message.qualityScore));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPostQualityScoreRequest>, I>>(
    base?: I
  ): AddPostQualityScoreRequest {
    return AddPostQualityScoreRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPostQualityScoreRequest>, I>>(
    object: I
  ): AddPostQualityScoreRequest {
    const message = createBaseAddPostQualityScoreRequest();
    message.postId = object.postId ?? '';
    message.qualityScore = object.qualityScore ?? 0;
    message.userId = object.userId ?? 0;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseAddCommentQualityScoreRequest(): AddCommentQualityScoreRequest {
  return { postId: '', commentId: '', qualityScore: 0, userId: 0, postType: 0 };
}

export const AddCommentQualityScoreRequest = {
  fromJSON(object: any): AddCommentQualityScoreRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      qualityScore: isSet(object.qualityScore) ? Number(object.qualityScore) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: AddCommentQualityScoreRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.qualityScore !== undefined && (obj.qualityScore = Math.round(message.qualityScore));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<AddCommentQualityScoreRequest>, I>>(
    base?: I
  ): AddCommentQualityScoreRequest {
    return AddCommentQualityScoreRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddCommentQualityScoreRequest>, I>>(
    object: I
  ): AddCommentQualityScoreRequest {
    const message = createBaseAddCommentQualityScoreRequest();
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.qualityScore = object.qualityScore ?? 0;
    message.userId = object.userId ?? 0;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseReportPostRequest(): ReportPostRequest {
  return { userId: 0, postId: '', postType: 0 };
}

export const ReportPostRequest = {
  fromJSON(object: any): ReportPostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: ReportPostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportPostRequest>, I>>(base?: I): ReportPostRequest {
    return ReportPostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReportPostRequest>, I>>(object: I): ReportPostRequest {
    const message = createBaseReportPostRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseReportCommentRequest(): ReportCommentRequest {
  return { userId: 0, postId: '', commentId: '', postType: 0 };
}

export const ReportCommentRequest = {
  fromJSON(object: any): ReportCommentRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: ReportCommentRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportCommentRequest>, I>>(base?: I): ReportCommentRequest {
    return ReportCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReportCommentRequest>, I>>(
    object: I
  ): ReportCommentRequest {
    const message = createBaseReportCommentRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseGetBlogPostsByTagRequest(): GetBlogPostsByTagRequest {
  return { tag: '', postType: 0 };
}

export const GetBlogPostsByTagRequest = {
  fromJSON(object: any): GetBlogPostsByTagRequest {
    return {
      tag: isSet(object.tag) ? String(object.tag) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: GetBlogPostsByTagRequest): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostsByTagRequest>, I>>(
    base?: I
  ): GetBlogPostsByTagRequest {
    return GetBlogPostsByTagRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostsByTagRequest>, I>>(
    object: I
  ): GetBlogPostsByTagRequest {
    const message = createBaseGetBlogPostsByTagRequest();
    message.tag = object.tag ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseGetCommunityBlogPostsRequest(): GetCommunityBlogPostsRequest {
  return { communityProfileId: 0 };
}

export const GetCommunityBlogPostsRequest = {
  fromJSON(object: any): GetCommunityBlogPostsRequest {
    return {
      communityProfileId: isSet(object.communityProfileId) ? Number(object.communityProfileId) : 0,
    };
  },

  toJSON(message: GetCommunityBlogPostsRequest): unknown {
    const obj: any = {};
    message.communityProfileId !== undefined &&
      (obj.communityProfileId = Math.round(message.communityProfileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityBlogPostsRequest>, I>>(
    base?: I
  ): GetCommunityBlogPostsRequest {
    return GetCommunityBlogPostsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityBlogPostsRequest>, I>>(
    object: I
  ): GetCommunityBlogPostsRequest {
    const message = createBaseGetCommunityBlogPostsRequest();
    message.communityProfileId = object.communityProfileId ?? 0;
    return message;
  },
};

function createBaseDiscoverProfilesRequest(): DiscoverProfilesRequest {
  return { userId: 0, limit: 0 };
}

export const DiscoverProfilesRequest = {
  fromJSON(object: any): DiscoverProfilesRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: DiscoverProfilesRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<DiscoverProfilesRequest>, I>>(
    base?: I
  ): DiscoverProfilesRequest {
    return DiscoverProfilesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DiscoverProfilesRequest>, I>>(
    object: I
  ): DiscoverProfilesRequest {
    const message = createBaseDiscoverProfilesRequest();
    message.userId = object.userId ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseServiceReadyResponse(): ServiceReadyResponse {
  return { ready: false };
}

export const ServiceReadyResponse = {
  fromJSON(object: any): ServiceReadyResponse {
    return { ready: isSet(object.ready) ? Boolean(object.ready) : false };
  },

  toJSON(message: ServiceReadyResponse): unknown {
    const obj: any = {};
    message.ready !== undefined && (obj.ready = message.ready);
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceReadyResponse>, I>>(base?: I): ServiceReadyResponse {
    return ServiceReadyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ServiceReadyResponse>, I>>(
    object: I
  ): ServiceReadyResponse {
    const message = createBaseServiceReadyResponse();
    message.ready = object.ready ?? false;
    return message;
  },
};

function createBaseGetUserProfileResponse(): GetUserProfileResponse {
  return { profile: undefined, metadata: undefined };
}

export const GetUserProfileResponse = {
  fromJSON(object: any): GetUserProfileResponse {
    return {
      profile: isSet(object.profile) ? UserProfile.fromJSON(object.profile) : undefined,
      metadata: isSet(object.metadata)
        ? SocialRelationshipMetadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: GetUserProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? UserProfile.toJSON(message.profile) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? SocialRelationshipMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserProfileResponse>, I>>(
    base?: I
  ): GetUserProfileResponse {
    return GetUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfileResponse>, I>>(
    object: I
  ): GetUserProfileResponse {
    const message = createBaseGetUserProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? UserProfile.fromPartial(object.profile)
        : undefined;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? SocialRelationshipMetadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

function createBaseGetCommunityProfileResponse(): GetCommunityProfileResponse {
  return { profile: undefined, metadata: undefined };
}

export const GetCommunityProfileResponse = {
  fromJSON(object: any): GetCommunityProfileResponse {
    return {
      profile: isSet(object.profile) ? CommunityProfile.fromJSON(object.profile) : undefined,
      metadata: isSet(object.metadata)
        ? SocialRelationshipMetadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: GetCommunityProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? CommunityProfile.toJSON(message.profile) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? SocialRelationshipMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityProfileResponse>, I>>(
    base?: I
  ): GetCommunityProfileResponse {
    return GetCommunityProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityProfileResponse>, I>>(
    object: I
  ): GetCommunityProfileResponse {
    const message = createBaseGetCommunityProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? CommunityProfile.fromPartial(object.profile)
        : undefined;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? SocialRelationshipMetadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

function createBaseCreateUserProfileResponse(): CreateUserProfileResponse {
  return { virtualProfileId: 0 };
}

export const CreateUserProfileResponse = {
  fromJSON(object: any): CreateUserProfileResponse {
    return {
      virtualProfileId: isSet(object.virtualProfileId) ? Number(object.virtualProfileId) : 0,
    };
  },

  toJSON(message: CreateUserProfileResponse): unknown {
    const obj: any = {};
    message.virtualProfileId !== undefined &&
      (obj.virtualProfileId = Math.round(message.virtualProfileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserProfileResponse>, I>>(
    base?: I
  ): CreateUserProfileResponse {
    return CreateUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserProfileResponse>, I>>(
    object: I
  ): CreateUserProfileResponse {
    const message = createBaseCreateUserProfileResponse();
    message.virtualProfileId = object.virtualProfileId ?? 0;
    return message;
  },
};

function createBaseCreateCommunityProfileResponse(): CreateCommunityProfileResponse {
  return { profile: undefined };
}

export const CreateCommunityProfileResponse = {
  fromJSON(object: any): CreateCommunityProfileResponse {
    return {
      profile: isSet(object.profile) ? CommunityProfile.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: CreateCommunityProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? CommunityProfile.toJSON(message.profile) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommunityProfileResponse>, I>>(
    base?: I
  ): CreateCommunityProfileResponse {
    return CreateCommunityProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommunityProfileResponse>, I>>(
    object: I
  ): CreateCommunityProfileResponse {
    const message = createBaseCreateCommunityProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? CommunityProfile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

function createBaseDeleteUserProfileResponse(): DeleteUserProfileResponse {
  return { success: false };
}

export const DeleteUserProfileResponse = {
  fromJSON(object: any): DeleteUserProfileResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DeleteUserProfileResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserProfileResponse>, I>>(
    base?: I
  ): DeleteUserProfileResponse {
    return DeleteUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserProfileResponse>, I>>(
    object: I
  ): DeleteUserProfileResponse {
    const message = createBaseDeleteUserProfileResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseEditUserProfileResponse(): EditUserProfileResponse {
  return { profile: undefined };
}

export const EditUserProfileResponse = {
  fromJSON(object: any): EditUserProfileResponse {
    return {
      profile: isSet(object.profile) ? UserProfile.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: EditUserProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? UserProfile.toJSON(message.profile) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditUserProfileResponse>, I>>(
    base?: I
  ): EditUserProfileResponse {
    return EditUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditUserProfileResponse>, I>>(
    object: I
  ): EditUserProfileResponse {
    const message = createBaseEditUserProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? UserProfile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

function createBaseEditCommunityProfileResponse(): EditCommunityProfileResponse {
  return { profile: undefined };
}

export const EditCommunityProfileResponse = {
  fromJSON(object: any): EditCommunityProfileResponse {
    return {
      profile: isSet(object.profile) ? CommunityProfile.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: EditCommunityProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? CommunityProfile.toJSON(message.profile) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditCommunityProfileResponse>, I>>(
    base?: I
  ): EditCommunityProfileResponse {
    return EditCommunityProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditCommunityProfileResponse>, I>>(
    object: I
  ): EditCommunityProfileResponse {
    const message = createBaseEditCommunityProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? CommunityProfile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

function createBaseBlockUserProfileResponse(): BlockUserProfileResponse {
  return { success: false };
}

export const BlockUserProfileResponse = {
  fromJSON(object: any): BlockUserProfileResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: BlockUserProfileResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockUserProfileResponse>, I>>(
    base?: I
  ): BlockUserProfileResponse {
    return BlockUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlockUserProfileResponse>, I>>(
    object: I
  ): BlockUserProfileResponse {
    const message = createBaseBlockUserProfileResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseFollowCommunityProfileResponse(): FollowCommunityProfileResponse {
  return { success: false };
}

export const FollowCommunityProfileResponse = {
  fromJSON(object: any): FollowCommunityProfileResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: FollowCommunityProfileResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<FollowCommunityProfileResponse>, I>>(
    base?: I
  ): FollowCommunityProfileResponse {
    return FollowCommunityProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FollowCommunityProfileResponse>, I>>(
    object: I
  ): FollowCommunityProfileResponse {
    const message = createBaseFollowCommunityProfileResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseAcceptFollowProfileResponse(): AcceptFollowProfileResponse {
  return { success: false };
}

export const AcceptFollowProfileResponse = {
  fromJSON(object: any): AcceptFollowProfileResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: AcceptFollowProfileResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptFollowProfileResponse>, I>>(
    base?: I
  ): AcceptFollowProfileResponse {
    return AcceptFollowProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AcceptFollowProfileResponse>, I>>(
    object: I
  ): AcceptFollowProfileResponse {
    const message = createBaseAcceptFollowProfileResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseCreatePostResponse(): CreatePostResponse {
  return { post: undefined };
}

export const CreatePostResponse = {
  fromJSON(object: any): CreatePostResponse {
    return {
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: CreatePostResponse): unknown {
    const obj: any = {};
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePostResponse>, I>>(base?: I): CreatePostResponse {
    return CreatePostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePostResponse>, I>>(object: I): CreatePostResponse {
    const message = createBaseCreatePostResponse();
    message.post =
      object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
};

function createBaseDeletePostResponse(): DeletePostResponse {
  return { success: false };
}

export const DeletePostResponse = {
  fromJSON(object: any): DeletePostResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DeletePostResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePostResponse>, I>>(base?: I): DeletePostResponse {
    return DeletePostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePostResponse>, I>>(object: I): DeletePostResponse {
    const message = createBaseDeletePostResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseEditPostResponse(): EditPostResponse {
  return { success: false };
}

export const EditPostResponse = {
  fromJSON(object: any): EditPostResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: EditPostResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditPostResponse>, I>>(base?: I): EditPostResponse {
    return EditPostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditPostResponse>, I>>(object: I): EditPostResponse {
    const message = createBaseEditPostResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseGetPostResponse(): GetPostResponse {
  return { post: undefined };
}

export const GetPostResponse = {
  fromJSON(object: any): GetPostResponse {
    return {
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: GetPostResponse): unknown {
    const obj: any = {};
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostResponse>, I>>(base?: I): GetPostResponse {
    return GetPostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostResponse>, I>>(object: I): GetPostResponse {
    const message = createBaseGetPostResponse();
    message.post =
      object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
};

function createBaseReportPostResponse(): ReportPostResponse {
  return { post: undefined };
}

export const ReportPostResponse = {
  fromJSON(object: any): ReportPostResponse {
    return {
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: ReportPostResponse): unknown {
    const obj: any = {};
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportPostResponse>, I>>(base?: I): ReportPostResponse {
    return ReportPostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReportPostResponse>, I>>(object: I): ReportPostResponse {
    const message = createBaseReportPostResponse();
    message.post =
      object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
};

function createBaseReactionResponse(): ReactionResponse {
  return {};
}

export const ReactionResponse = {
  fromJSON(_: any): ReactionResponse {
    return {};
  },

  toJSON(_: ReactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactionResponse>, I>>(base?: I): ReactionResponse {
    return ReactionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactionResponse>, I>>(_: I): ReactionResponse {
    const message = createBaseReactionResponse();
    return message;
  },
};

function createBaseGetUserFeedResponse(): GetUserFeedResponse {
  return {
    baseTimeline: undefined,
    notificationTimeline: undefined,
    nextPageToken: '',
  };
}

export const GetUserFeedResponse = {
  fromJSON(object: any): GetUserFeedResponse {
    return {
      baseTimeline: isSet(object.baseTimeline)
        ? BaseTimeline.fromJSON(object.baseTimeline)
        : undefined,
      notificationTimeline: isSet(object.notificationTimeline)
        ? NotificationTimeline.fromJSON(object.notificationTimeline)
        : undefined,
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : '',
    };
  },

  toJSON(message: GetUserFeedResponse): unknown {
    const obj: any = {};
    message.baseTimeline !== undefined &&
      (obj.baseTimeline = message.baseTimeline
        ? BaseTimeline.toJSON(message.baseTimeline)
        : undefined);
    message.notificationTimeline !== undefined &&
      (obj.notificationTimeline = message.notificationTimeline
        ? NotificationTimeline.toJSON(message.notificationTimeline)
        : undefined);
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserFeedResponse>, I>>(base?: I): GetUserFeedResponse {
    return GetUserFeedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserFeedResponse>, I>>(
    object: I
  ): GetUserFeedResponse {
    const message = createBaseGetUserFeedResponse();
    message.baseTimeline =
      object.baseTimeline !== undefined && object.baseTimeline !== null
        ? BaseTimeline.fromPartial(object.baseTimeline)
        : undefined;
    message.notificationTimeline =
      object.notificationTimeline !== undefined && object.notificationTimeline !== null
        ? NotificationTimeline.fromPartial(object.notificationTimeline)
        : undefined;
    message.nextPageToken = object.nextPageToken ?? '';
    return message;
  },
};

function createBaseGetCommunityFeedResponse(): GetCommunityFeedResponse {
  return {
    baseTimeline: undefined,
    notificationTimeline: undefined,
    nextPageToken: '',
  };
}

export const GetCommunityFeedResponse = {
  fromJSON(object: any): GetCommunityFeedResponse {
    return {
      baseTimeline: isSet(object.baseTimeline)
        ? BaseTimeline.fromJSON(object.baseTimeline)
        : undefined,
      notificationTimeline: isSet(object.notificationTimeline)
        ? NotificationTimeline.fromJSON(object.notificationTimeline)
        : undefined,
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : '',
    };
  },

  toJSON(message: GetCommunityFeedResponse): unknown {
    const obj: any = {};
    message.baseTimeline !== undefined &&
      (obj.baseTimeline = message.baseTimeline
        ? BaseTimeline.toJSON(message.baseTimeline)
        : undefined);
    message.notificationTimeline !== undefined &&
      (obj.notificationTimeline = message.notificationTimeline
        ? NotificationTimeline.toJSON(message.notificationTimeline)
        : undefined);
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityFeedResponse>, I>>(
    base?: I
  ): GetCommunityFeedResponse {
    return GetCommunityFeedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityFeedResponse>, I>>(
    object: I
  ): GetCommunityFeedResponse {
    const message = createBaseGetCommunityFeedResponse();
    message.baseTimeline =
      object.baseTimeline !== undefined && object.baseTimeline !== null
        ? BaseTimeline.fromPartial(object.baseTimeline)
        : undefined;
    message.notificationTimeline =
      object.notificationTimeline !== undefined && object.notificationTimeline !== null
        ? NotificationTimeline.fromPartial(object.notificationTimeline)
        : undefined;
    message.nextPageToken = object.nextPageToken ?? '';
    return message;
  },
};

function createBaseCreateCommentResponse(): CreateCommentResponse {
  return { regularPost: undefined, sharedPost: undefined, pollPost: undefined };
}

export const CreateCommentResponse = {
  fromJSON(object: any): CreateCommentResponse {
    return {
      regularPost: isSet(object.regularPost) ? Post.fromJSON(object.regularPost) : undefined,
      sharedPost: isSet(object.sharedPost) ? SharedPost.fromJSON(object.sharedPost) : undefined,
      pollPost: isSet(object.pollPost) ? PollPost.fromJSON(object.pollPost) : undefined,
    };
  },

  toJSON(message: CreateCommentResponse): unknown {
    const obj: any = {};
    message.regularPost !== undefined &&
      (obj.regularPost = message.regularPost ? Post.toJSON(message.regularPost) : undefined);
    message.sharedPost !== undefined &&
      (obj.sharedPost = message.sharedPost ? SharedPost.toJSON(message.sharedPost) : undefined);
    message.pollPost !== undefined &&
      (obj.pollPost = message.pollPost ? PollPost.toJSON(message.pollPost) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommentResponse>, I>>(base?: I): CreateCommentResponse {
    return CreateCommentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentResponse>, I>>(
    object: I
  ): CreateCommentResponse {
    const message = createBaseCreateCommentResponse();
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
    return message;
  },
};

function createBaseDeleteCommentResponse(): DeleteCommentResponse {
  return { sucess: false };
}

export const DeleteCommentResponse = {
  fromJSON(object: any): DeleteCommentResponse {
    return { sucess: isSet(object.sucess) ? Boolean(object.sucess) : false };
  },

  toJSON(message: DeleteCommentResponse): unknown {
    const obj: any = {};
    message.sucess !== undefined && (obj.sucess = message.sucess);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommentResponse>, I>>(base?: I): DeleteCommentResponse {
    return DeleteCommentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentResponse>, I>>(
    object: I
  ): DeleteCommentResponse {
    const message = createBaseDeleteCommentResponse();
    message.sucess = object.sucess ?? false;
    return message;
  },
};

function createBaseCreateTopicResponse(): CreateTopicResponse {
  return { topicId: 0 };
}

export const CreateTopicResponse = {
  fromJSON(object: any): CreateTopicResponse {
    return { topicId: isSet(object.topicId) ? Number(object.topicId) : 0 };
  },

  toJSON(message: CreateTopicResponse): unknown {
    const obj: any = {};
    message.topicId !== undefined && (obj.topicId = Math.round(message.topicId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTopicResponse>, I>>(base?: I): CreateTopicResponse {
    return CreateTopicResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateTopicResponse>, I>>(
    object: I
  ): CreateTopicResponse {
    const message = createBaseCreateTopicResponse();
    message.topicId = object.topicId ?? 0;
    return message;
  },
};

function createBaseGetPostsByTopicResponse(): GetPostsByTopicResponse {
  return { posts: [] };
}

export const GetPostsByTopicResponse = {
  fromJSON(object: any): GetPostsByTopicResponse {
    return {
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetPostsByTopicResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostsByTopicResponse>, I>>(
    base?: I
  ): GetPostsByTopicResponse {
    return GetPostsByTopicResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostsByTopicResponse>, I>>(
    object: I
  ): GetPostsByTopicResponse {
    const message = createBaseGetPostsByTopicResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPendingFollowsResponse(): GetPendingFollowsResponse {
  return { requests: [] };
}

export const GetPendingFollowsResponse = {
  fromJSON(object: any): GetPendingFollowsResponse {
    return {
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => PendingFollowRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetPendingFollowsResponse): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) => (e ? PendingFollowRequest.toJSON(e) : undefined));
    } else {
      obj.requests = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPendingFollowsResponse>, I>>(
    base?: I
  ): GetPendingFollowsResponse {
    return GetPendingFollowsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPendingFollowsResponse>, I>>(
    object: I
  ): GetPendingFollowsResponse {
    const message = createBaseGetPendingFollowsResponse();
    message.requests = object.requests?.map((e) => PendingFollowRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCommunitiesUserFollowsResponse(): GetCommunitiesUserFollowsResponse {
  return { communities: [] };
}

export const GetCommunitiesUserFollowsResponse = {
  fromJSON(object: any): GetCommunitiesUserFollowsResponse {
    return {
      communities: Array.isArray(object?.communities)
        ? object.communities.map((e: any) => CommunityProfile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCommunitiesUserFollowsResponse): unknown {
    const obj: any = {};
    if (message.communities) {
      obj.communities = message.communities.map((e) =>
        e ? CommunityProfile.toJSON(e) : undefined
      );
    } else {
      obj.communities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunitiesUserFollowsResponse>, I>>(
    base?: I
  ): GetCommunitiesUserFollowsResponse {
    return GetCommunitiesUserFollowsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunitiesUserFollowsResponse>, I>>(
    object: I
  ): GetCommunitiesUserFollowsResponse {
    const message = createBaseGetCommunitiesUserFollowsResponse();
    message.communities = object.communities?.map((e) => CommunityProfile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetTopicsOfCommunitiesUserFollowsResponse(): GetTopicsOfCommunitiesUserFollowsResponse {
  return { topic: [] };
}

export const GetTopicsOfCommunitiesUserFollowsResponse = {
  fromJSON(object: any): GetTopicsOfCommunitiesUserFollowsResponse {
    return {
      topic: Array.isArray(object?.topic) ? object.topic.map((e: any) => Topic.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetTopicsOfCommunitiesUserFollowsResponse): unknown {
    const obj: any = {};
    if (message.topic) {
      obj.topic = message.topic.map((e) => (e ? Topic.toJSON(e) : undefined));
    } else {
      obj.topic = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTopicsOfCommunitiesUserFollowsResponse>, I>>(
    base?: I
  ): GetTopicsOfCommunitiesUserFollowsResponse {
    return GetTopicsOfCommunitiesUserFollowsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetTopicsOfCommunitiesUserFollowsResponse>, I>>(
    object: I
  ): GetTopicsOfCommunitiesUserFollowsResponse {
    const message = createBaseGetTopicsOfCommunitiesUserFollowsResponse();
    message.topic = object.topic?.map((e) => Topic.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUserProfilesResponse(): GetUserProfilesResponse {
  return { nextPageNumber: 0, profiles: [] };
}

export const GetUserProfilesResponse = {
  fromJSON(object: any): GetUserProfilesResponse {
    return {
      nextPageNumber: isSet(object.nextPageNumber) ? Number(object.nextPageNumber) : 0,
      profiles: Array.isArray(object?.profiles)
        ? object.profiles.map((e: any) => UserProfile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetUserProfilesResponse): unknown {
    const obj: any = {};
    message.nextPageNumber !== undefined &&
      (obj.nextPageNumber = Math.round(message.nextPageNumber));
    if (message.profiles) {
      obj.profiles = message.profiles.map((e) => (e ? UserProfile.toJSON(e) : undefined));
    } else {
      obj.profiles = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserProfilesResponse>, I>>(
    base?: I
  ): GetUserProfilesResponse {
    return GetUserProfilesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfilesResponse>, I>>(
    object: I
  ): GetUserProfilesResponse {
    const message = createBaseGetUserProfilesResponse();
    message.nextPageNumber = object.nextPageNumber ?? 0;
    message.profiles = object.profiles?.map((e) => UserProfile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCommunityProfilesResponse(): GetCommunityProfilesResponse {
  return { nextPageNumber: 0, profiles: [] };
}

export const GetCommunityProfilesResponse = {
  fromJSON(object: any): GetCommunityProfilesResponse {
    return {
      nextPageNumber: isSet(object.nextPageNumber) ? Number(object.nextPageNumber) : 0,
      profiles: Array.isArray(object?.profiles)
        ? object.profiles.map((e: any) => CommunityProfile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCommunityProfilesResponse): unknown {
    const obj: any = {};
    message.nextPageNumber !== undefined &&
      (obj.nextPageNumber = Math.round(message.nextPageNumber));
    if (message.profiles) {
      obj.profiles = message.profiles.map((e) => (e ? CommunityProfile.toJSON(e) : undefined));
    } else {
      obj.profiles = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityProfilesResponse>, I>>(
    base?: I
  ): GetCommunityProfilesResponse {
    return GetCommunityProfilesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityProfilesResponse>, I>>(
    object: I
  ): GetCommunityProfilesResponse {
    const message = createBaseGetCommunityProfilesResponse();
    message.nextPageNumber = object.nextPageNumber ?? 0;
    message.profiles = object.profiles?.map((e) => CommunityProfile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddPostQualityScoreResponse(): AddPostQualityScoreResponse {
  return { regularPost: undefined, sharedPost: undefined, pollPost: undefined };
}

export const AddPostQualityScoreResponse = {
  fromJSON(object: any): AddPostQualityScoreResponse {
    return {
      regularPost: isSet(object.regularPost) ? Post.fromJSON(object.regularPost) : undefined,
      sharedPost: isSet(object.sharedPost) ? SharedPost.fromJSON(object.sharedPost) : undefined,
      pollPost: isSet(object.pollPost) ? PollPost.fromJSON(object.pollPost) : undefined,
    };
  },

  toJSON(message: AddPostQualityScoreResponse): unknown {
    const obj: any = {};
    message.regularPost !== undefined &&
      (obj.regularPost = message.regularPost ? Post.toJSON(message.regularPost) : undefined);
    message.sharedPost !== undefined &&
      (obj.sharedPost = message.sharedPost ? SharedPost.toJSON(message.sharedPost) : undefined);
    message.pollPost !== undefined &&
      (obj.pollPost = message.pollPost ? PollPost.toJSON(message.pollPost) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPostQualityScoreResponse>, I>>(
    base?: I
  ): AddPostQualityScoreResponse {
    return AddPostQualityScoreResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPostQualityScoreResponse>, I>>(
    object: I
  ): AddPostQualityScoreResponse {
    const message = createBaseAddPostQualityScoreResponse();
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
    return message;
  },
};

function createBaseGetBlogPostsByTagResponse(): GetBlogPostsByTagResponse {
  return { posts: [] };
}

export const GetBlogPostsByTagResponse = {
  fromJSON(object: any): GetBlogPostsByTagResponse {
    return {
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetBlogPostsByTagResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlogPostsByTagResponse>, I>>(
    base?: I
  ): GetBlogPostsByTagResponse {
    return GetBlogPostsByTagResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogPostsByTagResponse>, I>>(
    object: I
  ): GetBlogPostsByTagResponse {
    const message = createBaseGetBlogPostsByTagResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReportCommentResponse(): ReportCommentResponse {
  return { comment: undefined };
}

export const ReportCommentResponse = {
  fromJSON(object: any): ReportCommentResponse {
    return {
      comment: isSet(object.comment) ? Comment.fromJSON(object.comment) : undefined,
    };
  },

  toJSON(message: ReportCommentResponse): unknown {
    const obj: any = {};
    message.comment !== undefined &&
      (obj.comment = message.comment ? Comment.toJSON(message.comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportCommentResponse>, I>>(base?: I): ReportCommentResponse {
    return ReportCommentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReportCommentResponse>, I>>(
    object: I
  ): ReportCommentResponse {
    const message = createBaseReportCommentResponse();
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? Comment.fromPartial(object.comment)
        : undefined;
    return message;
  },
};

function createBasePostsPaginationResponse(): PostsPaginationResponse {
  return { posts: [], nextPageNumber: 0 };
}

export const PostsPaginationResponse = {
  fromJSON(object: any): PostsPaginationResponse {
    return {
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [],
      nextPageNumber: isSet(object.nextPageNumber) ? Number(object.nextPageNumber) : 0,
    };
  },

  toJSON(message: PostsPaginationResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    message.nextPageNumber !== undefined &&
      (obj.nextPageNumber = Math.round(message.nextPageNumber));
    return obj;
  },

  create<I extends Exact<DeepPartial<PostsPaginationResponse>, I>>(
    base?: I
  ): PostsPaginationResponse {
    return PostsPaginationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PostsPaginationResponse>, I>>(
    object: I
  ): PostsPaginationResponse {
    const message = createBasePostsPaginationResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.nextPageNumber = object.nextPageNumber ?? 0;
    return message;
  },
};

function createBaseDiscoverProfilesResponse(): DiscoverProfilesResponse {
  return { communityProfiles: [], userProfiles: [], topics: [] };
}

export const DiscoverProfilesResponse = {
  fromJSON(object: any): DiscoverProfilesResponse {
    return {
      communityProfiles: Array.isArray(object?.communityProfiles)
        ? object.communityProfiles.map((e: any) => CommunityProfile.fromJSON(e))
        : [],
      userProfiles: Array.isArray(object?.userProfiles)
        ? object.userProfiles.map((e: any) => UserProfile.fromJSON(e))
        : [],
      topics: Array.isArray(object?.topics) ? object.topics.map((e: any) => Topic.fromJSON(e)) : [],
    };
  },

  toJSON(message: DiscoverProfilesResponse): unknown {
    const obj: any = {};
    if (message.communityProfiles) {
      obj.communityProfiles = message.communityProfiles.map((e) =>
        e ? CommunityProfile.toJSON(e) : undefined
      );
    } else {
      obj.communityProfiles = [];
    }
    if (message.userProfiles) {
      obj.userProfiles = message.userProfiles.map((e) => (e ? UserProfile.toJSON(e) : undefined));
    } else {
      obj.userProfiles = [];
    }
    if (message.topics) {
      obj.topics = message.topics.map((e) => (e ? Topic.toJSON(e) : undefined));
    } else {
      obj.topics = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DiscoverProfilesResponse>, I>>(
    base?: I
  ): DiscoverProfilesResponse {
    return DiscoverProfilesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DiscoverProfilesResponse>, I>>(
    object: I
  ): DiscoverProfilesResponse {
    const message = createBaseDiscoverProfilesResponse();
    message.communityProfiles =
      object.communityProfiles?.map((e) => CommunityProfile.fromPartial(e)) || [];
    message.userProfiles = object.userProfiles?.map((e) => UserProfile.fromPartial(e)) || [];
    message.topics = object.topics?.map((e) => Topic.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteCommunityProfileResponse(): DeleteCommunityProfileResponse {
  return { success: false };
}

export const DeleteCommunityProfileResponse = {
  fromJSON(object: any): DeleteCommunityProfileResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DeleteCommunityProfileResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommunityProfileResponse>, I>>(
    base?: I
  ): DeleteCommunityProfileResponse {
    return DeleteCommunityProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommunityProfileResponse>, I>>(
    object: I
  ): DeleteCommunityProfileResponse {
    const message = createBaseDeleteCommunityProfileResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseFollowProfileResponse(): FollowProfileResponse {
  return { success: false };
}

export const FollowProfileResponse = {
  fromJSON(object: any): FollowProfileResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: FollowProfileResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<FollowProfileResponse>, I>>(base?: I): FollowProfileResponse {
    return FollowProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FollowProfileResponse>, I>>(
    object: I
  ): FollowProfileResponse {
    const message = createBaseFollowProfileResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseAddCommentQualityScoreResponse(): AddCommentQualityScoreResponse {
  return { comment: undefined };
}

export const AddCommentQualityScoreResponse = {
  fromJSON(object: any): AddCommentQualityScoreResponse {
    return {
      comment: isSet(object.comment) ? Comment.fromJSON(object.comment) : undefined,
    };
  },

  toJSON(message: AddCommentQualityScoreResponse): unknown {
    const obj: any = {};
    message.comment !== undefined &&
      (obj.comment = message.comment ? Comment.toJSON(message.comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddCommentQualityScoreResponse>, I>>(
    base?: I
  ): AddCommentQualityScoreResponse {
    return AddCommentQualityScoreResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddCommentQualityScoreResponse>, I>>(
    object: I
  ): AddCommentQualityScoreResponse {
    const message = createBaseAddCommentQualityScoreResponse();
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? Comment.fromPartial(object.comment)
        : undefined;
    return message;
  },
};

function createBaseGetCommunityBlogPostsResponse(): GetCommunityBlogPostsResponse {
  return { posts: [] };
}

export const GetCommunityBlogPostsResponse = {
  fromJSON(object: any): GetCommunityBlogPostsResponse {
    return {
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetCommunityBlogPostsResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommunityBlogPostsResponse>, I>>(
    base?: I
  ): GetCommunityBlogPostsResponse {
    return GetCommunityBlogPostsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommunityBlogPostsResponse>, I>>(
    object: I
  ): GetCommunityBlogPostsResponse {
    const message = createBaseGetCommunityBlogPostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePollRequest(): CreatePollRequest {
  return { userId: 0, poll: undefined };
}

export const CreatePollRequest = {
  fromJSON(object: any): CreatePollRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      poll: isSet(object.poll) ? PollPost.fromJSON(object.poll) : undefined,
    };
  },

  toJSON(message: CreatePollRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.poll !== undefined &&
      (obj.poll = message.poll ? PollPost.toJSON(message.poll) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePollRequest>, I>>(base?: I): CreatePollRequest {
    return CreatePollRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePollRequest>, I>>(object: I): CreatePollRequest {
    const message = createBaseCreatePollRequest();
    message.userId = object.userId ?? 0;
    message.poll =
      object.poll !== undefined && object.poll !== null
        ? PollPost.fromPartial(object.poll)
        : undefined;
    return message;
  },
};

function createBaseCreatePollResponse(): CreatePollResponse {
  return { pollId: '' };
}

export const CreatePollResponse = {
  fromJSON(object: any): CreatePollResponse {
    return { pollId: isSet(object.pollId) ? String(object.pollId) : '' };
  },

  toJSON(message: CreatePollResponse): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = message.pollId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePollResponse>, I>>(base?: I): CreatePollResponse {
    return CreatePollResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePollResponse>, I>>(object: I): CreatePollResponse {
    const message = createBaseCreatePollResponse();
    message.pollId = object.pollId ?? '';
    return message;
  },
};

function createBaseDeletePollRequest(): DeletePollRequest {
  return { userId: 0, postId: '' };
}

export const DeletePollRequest = {
  fromJSON(object: any): DeletePollRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
    };
  },

  toJSON(message: DeletePollRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePollRequest>, I>>(base?: I): DeletePollRequest {
    return DeletePollRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePollRequest>, I>>(object: I): DeletePollRequest {
    const message = createBaseDeletePollRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    return message;
  },
};

function createBaseDeletePollResponse(): DeletePollResponse {
  return { success: false };
}

export const DeletePollResponse = {
  fromJSON(object: any): DeletePollResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DeletePollResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePollResponse>, I>>(base?: I): DeletePollResponse {
    return DeletePollResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePollResponse>, I>>(object: I): DeletePollResponse {
    const message = createBaseDeletePollResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseGetPollRequest(): GetPollRequest {
  return { userId: 0, postId: '' };
}

export const GetPollRequest = {
  fromJSON(object: any): GetPollRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
    };
  },

  toJSON(message: GetPollRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPollRequest>, I>>(base?: I): GetPollRequest {
    return GetPollRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPollRequest>, I>>(object: I): GetPollRequest {
    const message = createBaseGetPollRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    return message;
  },
};

function createBaseGetPollResponse(): GetPollResponse {
  return { poll: undefined };
}

export const GetPollResponse = {
  fromJSON(object: any): GetPollResponse {
    return {
      poll: isSet(object.poll) ? PollPost.fromJSON(object.poll) : undefined,
    };
  },

  toJSON(message: GetPollResponse): unknown {
    const obj: any = {};
    message.poll !== undefined &&
      (obj.poll = message.poll ? PollPost.toJSON(message.poll) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPollResponse>, I>>(base?: I): GetPollResponse {
    return GetPollResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPollResponse>, I>>(object: I): GetPollResponse {
    const message = createBaseGetPollResponse();
    message.poll =
      object.poll !== undefined && object.poll !== null
        ? PollPost.fromPartial(object.poll)
        : undefined;
    return message;
  },
};

function createBaseGetPollsRequest(): GetPollsRequest {
  return { userId: 0 };
}

export const GetPollsRequest = {
  fromJSON(object: any): GetPollsRequest {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: GetPollsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPollsRequest>, I>>(base?: I): GetPollsRequest {
    return GetPollsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPollsRequest>, I>>(object: I): GetPollsRequest {
    const message = createBaseGetPollsRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetPollsResponse(): GetPollsResponse {
  return { polls: [] };
}

export const GetPollsResponse = {
  fromJSON(object: any): GetPollsResponse {
    return {
      polls: Array.isArray(object?.polls) ? object.polls.map((e: any) => PollPost.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetPollsResponse): unknown {
    const obj: any = {};
    if (message.polls) {
      obj.polls = message.polls.map((e) => (e ? PollPost.toJSON(e) : undefined));
    } else {
      obj.polls = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPollsResponse>, I>>(base?: I): GetPollsResponse {
    return GetPollsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPollsResponse>, I>>(object: I): GetPollsResponse {
    const message = createBaseGetPollsResponse();
    message.polls = object.polls?.map((e) => PollPost.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRespondToPollRequest(): RespondToPollRequest {
  return { userId: 0, pollId: '', pollOption: '', pollOptionIdx: 0 };
}

export const RespondToPollRequest = {
  fromJSON(object: any): RespondToPollRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      pollId: isSet(object.pollId) ? String(object.pollId) : '',
      pollOption: isSet(object.pollOption) ? String(object.pollOption) : '',
      pollOptionIdx: isSet(object.pollOptionIdx) ? Number(object.pollOptionIdx) : 0,
    };
  },

  toJSON(message: RespondToPollRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.pollId !== undefined && (obj.pollId = message.pollId);
    message.pollOption !== undefined && (obj.pollOption = message.pollOption);
    message.pollOptionIdx !== undefined && (obj.pollOptionIdx = Math.round(message.pollOptionIdx));
    return obj;
  },

  create<I extends Exact<DeepPartial<RespondToPollRequest>, I>>(base?: I): RespondToPollRequest {
    return RespondToPollRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RespondToPollRequest>, I>>(
    object: I
  ): RespondToPollRequest {
    const message = createBaseRespondToPollRequest();
    message.userId = object.userId ?? 0;
    message.pollId = object.pollId ?? '';
    message.pollOption = object.pollOption ?? '';
    message.pollOptionIdx = object.pollOptionIdx ?? 0;
    return message;
  },
};

function createBaseRespondToPollResponse(): RespondToPollResponse {
  return { poll: undefined };
}

export const RespondToPollResponse = {
  fromJSON(object: any): RespondToPollResponse {
    return {
      poll: isSet(object.poll) ? PollPost.fromJSON(object.poll) : undefined,
    };
  },

  toJSON(message: RespondToPollResponse): unknown {
    const obj: any = {};
    message.poll !== undefined &&
      (obj.poll = message.poll ? PollPost.toJSON(message.poll) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RespondToPollResponse>, I>>(base?: I): RespondToPollResponse {
    return RespondToPollResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RespondToPollResponse>, I>>(
    object: I
  ): RespondToPollResponse {
    const message = createBaseRespondToPollResponse();
    message.poll =
      object.poll !== undefined && object.poll !== null
        ? PollPost.fromPartial(object.poll)
        : undefined;
    return message;
  },
};

function createBaseCreateNoteRequest(): CreateNoteRequest {
  return { userId: 0, postId: '', postType: 0, note: undefined };
}

export const CreateNoteRequest = {
  fromJSON(object: any): CreateNoteRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
      note: isSet(object.note) ? Note.fromJSON(object.note) : undefined,
    };
  },

  toJSON(message: CreateNoteRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    message.note !== undefined && (obj.note = message.note ? Note.toJSON(message.note) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNoteRequest>, I>>(base?: I): CreateNoteRequest {
    return CreateNoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateNoteRequest>, I>>(object: I): CreateNoteRequest {
    const message = createBaseCreateNoteRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    message.note =
      object.note !== undefined && object.note !== null ? Note.fromPartial(object.note) : undefined;
    return message;
  },
};

function createBaseCreateNoteResponse(): CreateNoteResponse {
  return { regularPost: undefined, sharedPost: undefined, pollPost: undefined };
}

export const CreateNoteResponse = {
  fromJSON(object: any): CreateNoteResponse {
    return {
      regularPost: isSet(object.regularPost) ? Post.fromJSON(object.regularPost) : undefined,
      sharedPost: isSet(object.sharedPost) ? SharedPost.fromJSON(object.sharedPost) : undefined,
      pollPost: isSet(object.pollPost) ? PollPost.fromJSON(object.pollPost) : undefined,
    };
  },

  toJSON(message: CreateNoteResponse): unknown {
    const obj: any = {};
    message.regularPost !== undefined &&
      (obj.regularPost = message.regularPost ? Post.toJSON(message.regularPost) : undefined);
    message.sharedPost !== undefined &&
      (obj.sharedPost = message.sharedPost ? SharedPost.toJSON(message.sharedPost) : undefined);
    message.pollPost !== undefined &&
      (obj.pollPost = message.pollPost ? PollPost.toJSON(message.pollPost) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateNoteResponse>, I>>(base?: I): CreateNoteResponse {
    return CreateNoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateNoteResponse>, I>>(object: I): CreateNoteResponse {
    const message = createBaseCreateNoteResponse();
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
    return message;
  },
};

function createBaseDeleteNoteRequest(): DeleteNoteRequest {
  return { userId: 0, postId: '', noteId: '', postType: 0 };
}

export const DeleteNoteRequest = {
  fromJSON(object: any): DeleteNoteRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      noteId: isSet(object.noteId) ? String(object.noteId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: DeleteNoteRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.noteId !== undefined && (obj.noteId = message.noteId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteNoteRequest>, I>>(base?: I): DeleteNoteRequest {
    return DeleteNoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteNoteRequest>, I>>(object: I): DeleteNoteRequest {
    const message = createBaseDeleteNoteRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.noteId = object.noteId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseEditNoteRequest(): EditNoteRequest {
  return { userId: 0, postId: '', noteId: '', note: undefined, postType: 0 };
}

export const EditNoteRequest = {
  fromJSON(object: any): EditNoteRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      noteId: isSet(object.noteId) ? String(object.noteId) : '',
      note: isSet(object.note) ? Note.fromJSON(object.note) : undefined,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: EditNoteRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.noteId !== undefined && (obj.noteId = message.noteId);
    message.note !== undefined && (obj.note = message.note ? Note.toJSON(message.note) : undefined);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<EditNoteRequest>, I>>(base?: I): EditNoteRequest {
    return EditNoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditNoteRequest>, I>>(object: I): EditNoteRequest {
    const message = createBaseEditNoteRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.noteId = object.noteId ?? '';
    message.note =
      object.note !== undefined && object.note !== null ? Note.fromPartial(object.note) : undefined;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseCreatePublicationRequest(): CreatePublicationRequest {
  return { userId: 0, publication: undefined };
}

export const CreatePublicationRequest = {
  fromJSON(object: any): CreatePublicationRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      publication: isSet(object.publication) ? Publication.fromJSON(object.publication) : undefined,
    };
  },

  toJSON(message: CreatePublicationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.publication !== undefined &&
      (obj.publication = message.publication ? Publication.toJSON(message.publication) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePublicationRequest>, I>>(
    base?: I
  ): CreatePublicationRequest {
    return CreatePublicationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePublicationRequest>, I>>(
    object: I
  ): CreatePublicationRequest {
    const message = createBaseCreatePublicationRequest();
    message.userId = object.userId ?? 0;
    message.publication =
      object.publication !== undefined && object.publication !== null
        ? Publication.fromPartial(object.publication)
        : undefined;
    return message;
  },
};

function createBaseCreatePublicationResponse(): CreatePublicationResponse {
  return { id: 0 };
}

export const CreatePublicationResponse = {
  fromJSON(object: any): CreatePublicationResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: CreatePublicationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePublicationResponse>, I>>(
    base?: I
  ): CreatePublicationResponse {
    return CreatePublicationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePublicationResponse>, I>>(
    object: I
  ): CreatePublicationResponse {
    const message = createBaseCreatePublicationResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetPublicationRequest(): GetPublicationRequest {
  return { userId: 0, publicationId: 0 };
}

export const GetPublicationRequest = {
  fromJSON(object: any): GetPublicationRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
    };
  },

  toJSON(message: GetPublicationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPublicationRequest>, I>>(base?: I): GetPublicationRequest {
    return GetPublicationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPublicationRequest>, I>>(
    object: I
  ): GetPublicationRequest {
    const message = createBaseGetPublicationRequest();
    message.userId = object.userId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    return message;
  },
};

function createBaseGetPublicationResponse(): GetPublicationResponse {
  return { publication: undefined };
}

export const GetPublicationResponse = {
  fromJSON(object: any): GetPublicationResponse {
    return {
      publication: isSet(object.publication) ? Publication.fromJSON(object.publication) : undefined,
    };
  },

  toJSON(message: GetPublicationResponse): unknown {
    const obj: any = {};
    message.publication !== undefined &&
      (obj.publication = message.publication ? Publication.toJSON(message.publication) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPublicationResponse>, I>>(
    base?: I
  ): GetPublicationResponse {
    return GetPublicationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPublicationResponse>, I>>(
    object: I
  ): GetPublicationResponse {
    const message = createBaseGetPublicationResponse();
    message.publication =
      object.publication !== undefined && object.publication !== null
        ? Publication.fromPartial(object.publication)
        : undefined;
    return message;
  },
};

function createBaseDeletePublicationRequest(): DeletePublicationRequest {
  return { adminUserId: 0, publicationId: 0 };
}

export const DeletePublicationRequest = {
  fromJSON(object: any): DeletePublicationRequest {
    return {
      adminUserId: isSet(object.adminUserId) ? Number(object.adminUserId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
    };
  },

  toJSON(message: DeletePublicationRequest): unknown {
    const obj: any = {};
    message.adminUserId !== undefined && (obj.adminUserId = Math.round(message.adminUserId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePublicationRequest>, I>>(
    base?: I
  ): DeletePublicationRequest {
    return DeletePublicationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePublicationRequest>, I>>(
    object: I
  ): DeletePublicationRequest {
    const message = createBaseDeletePublicationRequest();
    message.adminUserId = object.adminUserId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    return message;
  },
};

function createBaseDeletePublicationResponse(): DeletePublicationResponse {
  return { success: false };
}

export const DeletePublicationResponse = {
  fromJSON(object: any): DeletePublicationResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DeletePublicationResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePublicationResponse>, I>>(
    base?: I
  ): DeletePublicationResponse {
    return DeletePublicationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePublicationResponse>, I>>(
    object: I
  ): DeletePublicationResponse {
    const message = createBaseDeletePublicationResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseAddPublicationEditorRequest(): AddPublicationEditorRequest {
  return { adminUserId: 0, editorUserId: 0, publicationId: 0 };
}

export const AddPublicationEditorRequest = {
  fromJSON(object: any): AddPublicationEditorRequest {
    return {
      adminUserId: isSet(object.adminUserId) ? Number(object.adminUserId) : 0,
      editorUserId: isSet(object.editorUserId) ? Number(object.editorUserId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
    };
  },

  toJSON(message: AddPublicationEditorRequest): unknown {
    const obj: any = {};
    message.adminUserId !== undefined && (obj.adminUserId = Math.round(message.adminUserId));
    message.editorUserId !== undefined && (obj.editorUserId = Math.round(message.editorUserId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPublicationEditorRequest>, I>>(
    base?: I
  ): AddPublicationEditorRequest {
    return AddPublicationEditorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPublicationEditorRequest>, I>>(
    object: I
  ): AddPublicationEditorRequest {
    const message = createBaseAddPublicationEditorRequest();
    message.adminUserId = object.adminUserId ?? 0;
    message.editorUserId = object.editorUserId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    return message;
  },
};

function createBaseAddPublicationEditorResponse(): AddPublicationEditorResponse {
  return { publication: undefined };
}

export const AddPublicationEditorResponse = {
  fromJSON(object: any): AddPublicationEditorResponse {
    return {
      publication: isSet(object.publication) ? Publication.fromJSON(object.publication) : undefined,
    };
  },

  toJSON(message: AddPublicationEditorResponse): unknown {
    const obj: any = {};
    message.publication !== undefined &&
      (obj.publication = message.publication ? Publication.toJSON(message.publication) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPublicationEditorResponse>, I>>(
    base?: I
  ): AddPublicationEditorResponse {
    return AddPublicationEditorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPublicationEditorResponse>, I>>(
    object: I
  ): AddPublicationEditorResponse {
    const message = createBaseAddPublicationEditorResponse();
    message.publication =
      object.publication !== undefined && object.publication !== null
        ? Publication.fromPartial(object.publication)
        : undefined;
    return message;
  },
};

function createBaseDeletePublicationEditorRequest(): DeletePublicationEditorRequest {
  return { adminUserId: 0, editorUserId: 0, publicationId: 0 };
}

export const DeletePublicationEditorRequest = {
  fromJSON(object: any): DeletePublicationEditorRequest {
    return {
      adminUserId: isSet(object.adminUserId) ? Number(object.adminUserId) : 0,
      editorUserId: isSet(object.editorUserId) ? Number(object.editorUserId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
    };
  },

  toJSON(message: DeletePublicationEditorRequest): unknown {
    const obj: any = {};
    message.adminUserId !== undefined && (obj.adminUserId = Math.round(message.adminUserId));
    message.editorUserId !== undefined && (obj.editorUserId = Math.round(message.editorUserId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePublicationEditorRequest>, I>>(
    base?: I
  ): DeletePublicationEditorRequest {
    return DeletePublicationEditorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePublicationEditorRequest>, I>>(
    object: I
  ): DeletePublicationEditorRequest {
    const message = createBaseDeletePublicationEditorRequest();
    message.adminUserId = object.adminUserId ?? 0;
    message.editorUserId = object.editorUserId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    return message;
  },
};

function createBaseDeletePublicationEditorResponse(): DeletePublicationEditorResponse {
  return { success: false };
}

export const DeletePublicationEditorResponse = {
  fromJSON(object: any): DeletePublicationEditorResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DeletePublicationEditorResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePublicationEditorResponse>, I>>(
    base?: I
  ): DeletePublicationEditorResponse {
    return DeletePublicationEditorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePublicationEditorResponse>, I>>(
    object: I
  ): DeletePublicationEditorResponse {
    const message = createBaseDeletePublicationEditorResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseAddPostToPublicationRequest(): AddPostToPublicationRequest {
  return { editorUserId: 0, publicationId: 0, post: undefined };
}

export const AddPostToPublicationRequest = {
  fromJSON(object: any): AddPostToPublicationRequest {
    return {
      editorUserId: isSet(object.editorUserId) ? Number(object.editorUserId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
    };
  },

  toJSON(message: AddPostToPublicationRequest): unknown {
    const obj: any = {};
    message.editorUserId !== undefined && (obj.editorUserId = Math.round(message.editorUserId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPostToPublicationRequest>, I>>(
    base?: I
  ): AddPostToPublicationRequest {
    return AddPostToPublicationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPostToPublicationRequest>, I>>(
    object: I
  ): AddPostToPublicationRequest {
    const message = createBaseAddPostToPublicationRequest();
    message.editorUserId = object.editorUserId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    message.post =
      object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    return message;
  },
};

function createBaseAddPostToPublicationResponse(): AddPostToPublicationResponse {
  return { publication: undefined };
}

export const AddPostToPublicationResponse = {
  fromJSON(object: any): AddPostToPublicationResponse {
    return {
      publication: isSet(object.publication) ? Publication.fromJSON(object.publication) : undefined,
    };
  },

  toJSON(message: AddPostToPublicationResponse): unknown {
    const obj: any = {};
    message.publication !== undefined &&
      (obj.publication = message.publication ? Publication.toJSON(message.publication) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPostToPublicationResponse>, I>>(
    base?: I
  ): AddPostToPublicationResponse {
    return AddPostToPublicationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPostToPublicationResponse>, I>>(
    object: I
  ): AddPostToPublicationResponse {
    const message = createBaseAddPostToPublicationResponse();
    message.publication =
      object.publication !== undefined && object.publication !== null
        ? Publication.fromPartial(object.publication)
        : undefined;
    return message;
  },
};

function createBaseDeletePostFromPublicationRequest(): DeletePostFromPublicationRequest {
  return { editorUserId: 0, publicationId: 0, postId: '', postType: 0 };
}

export const DeletePostFromPublicationRequest = {
  fromJSON(object: any): DeletePostFromPublicationRequest {
    return {
      editorUserId: isSet(object.editorUserId) ? Number(object.editorUserId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: DeletePostFromPublicationRequest): unknown {
    const obj: any = {};
    message.editorUserId !== undefined && (obj.editorUserId = Math.round(message.editorUserId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePostFromPublicationRequest>, I>>(
    base?: I
  ): DeletePostFromPublicationRequest {
    return DeletePostFromPublicationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePostFromPublicationRequest>, I>>(
    object: I
  ): DeletePostFromPublicationRequest {
    const message = createBaseDeletePostFromPublicationRequest();
    message.editorUserId = object.editorUserId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseDeletePostFromPublicationResponse(): DeletePostFromPublicationResponse {
  return { success: false };
}

export const DeletePostFromPublicationResponse = {
  fromJSON(object: any): DeletePostFromPublicationResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: DeletePostFromPublicationResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePostFromPublicationResponse>, I>>(
    base?: I
  ): DeletePostFromPublicationResponse {
    return DeletePostFromPublicationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePostFromPublicationResponse>, I>>(
    object: I
  ): DeletePostFromPublicationResponse {
    const message = createBaseDeletePostFromPublicationResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseAddPostToThreadRequest(): AddPostToThreadRequest {
  return { userId: 0, parentPostId: '', post: undefined, postType: 0 };
}

export const AddPostToThreadRequest = {
  fromJSON(object: any): AddPostToThreadRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      parentPostId: isSet(object.parentPostId) ? String(object.parentPostId) : '',
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: AddPostToThreadRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.parentPostId !== undefined && (obj.parentPostId = message.parentPostId);
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPostToThreadRequest>, I>>(
    base?: I
  ): AddPostToThreadRequest {
    return AddPostToThreadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPostToThreadRequest>, I>>(
    object: I
  ): AddPostToThreadRequest {
    const message = createBaseAddPostToThreadRequest();
    message.userId = object.userId ?? 0;
    message.parentPostId = object.parentPostId ?? '';
    message.post =
      object.post !== undefined && object.post !== null ? Post.fromPartial(object.post) : undefined;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseAddPostToThreadResponse(): AddPostToThreadResponse {
  return { regularPost: undefined, sharedPost: undefined, pollPost: undefined };
}

export const AddPostToThreadResponse = {
  fromJSON(object: any): AddPostToThreadResponse {
    return {
      regularPost: isSet(object.regularPost) ? Post.fromJSON(object.regularPost) : undefined,
      sharedPost: isSet(object.sharedPost) ? SharedPost.fromJSON(object.sharedPost) : undefined,
      pollPost: isSet(object.pollPost) ? PollPost.fromJSON(object.pollPost) : undefined,
    };
  },

  toJSON(message: AddPostToThreadResponse): unknown {
    const obj: any = {};
    message.regularPost !== undefined &&
      (obj.regularPost = message.regularPost ? Post.toJSON(message.regularPost) : undefined);
    message.sharedPost !== undefined &&
      (obj.sharedPost = message.sharedPost ? SharedPost.toJSON(message.sharedPost) : undefined);
    message.pollPost !== undefined &&
      (obj.pollPost = message.pollPost ? PollPost.toJSON(message.pollPost) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AddPostToThreadResponse>, I>>(
    base?: I
  ): AddPostToThreadResponse {
    return AddPostToThreadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddPostToThreadResponse>, I>>(
    object: I
  ): AddPostToThreadResponse {
    const message = createBaseAddPostToThreadResponse();
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
    return message;
  },
};

function createBaseRemovePostFromThreadRequest(): RemovePostFromThreadRequest {
  return { userId: 0, parentPostId: '', participantPostId: '', postType: 0 };
}

export const RemovePostFromThreadRequest = {
  fromJSON(object: any): RemovePostFromThreadRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      parentPostId: isSet(object.parentPostId) ? String(object.parentPostId) : '',
      participantPostId: isSet(object.participantPostId) ? String(object.participantPostId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: RemovePostFromThreadRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.parentPostId !== undefined && (obj.parentPostId = message.parentPostId);
    message.participantPostId !== undefined && (obj.participantPostId = message.participantPostId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<RemovePostFromThreadRequest>, I>>(
    base?: I
  ): RemovePostFromThreadRequest {
    return RemovePostFromThreadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemovePostFromThreadRequest>, I>>(
    object: I
  ): RemovePostFromThreadRequest {
    const message = createBaseRemovePostFromThreadRequest();
    message.userId = object.userId ?? 0;
    message.parentPostId = object.parentPostId ?? '';
    message.participantPostId = object.participantPostId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseRemovePostFromThreadResponse(): RemovePostFromThreadResponse {
  return { success: false };
}

export const RemovePostFromThreadResponse = {
  fromJSON(object: any): RemovePostFromThreadResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: RemovePostFromThreadResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<RemovePostFromThreadResponse>, I>>(
    base?: I
  ): RemovePostFromThreadResponse {
    return RemovePostFromThreadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemovePostFromThreadResponse>, I>>(
    object: I
  ): RemovePostFromThreadResponse {
    const message = createBaseRemovePostFromThreadResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseGetPostThreadRequest(): GetPostThreadRequest {
  return { userId: 0, postId: '', postType: 0 };
}

export const GetPostThreadRequest = {
  fromJSON(object: any): GetPostThreadRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: GetPostThreadRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostThreadRequest>, I>>(base?: I): GetPostThreadRequest {
    return GetPostThreadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostThreadRequest>, I>>(
    object: I
  ): GetPostThreadRequest {
    const message = createBaseGetPostThreadRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseGetPostThreadResponse(): GetPostThreadResponse {
  return { posts: [] };
}

export const GetPostThreadResponse = {
  fromJSON(object: any): GetPostThreadResponse {
    return {
      posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetPostThreadResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostThreadResponse>, I>>(base?: I): GetPostThreadResponse {
    return GetPostThreadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostThreadResponse>, I>>(
    object: I
  ): GetPostThreadResponse {
    const message = createBaseGetPostThreadResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBookmarkPostRequest(): BookmarkPostRequest {
  return { userId: 0, postId: '' };
}

export const BookmarkPostRequest = {
  fromJSON(object: any): BookmarkPostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
    };
  },

  toJSON(message: BookmarkPostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  create<I extends Exact<DeepPartial<BookmarkPostRequest>, I>>(base?: I): BookmarkPostRequest {
    return BookmarkPostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BookmarkPostRequest>, I>>(
    object: I
  ): BookmarkPostRequest {
    const message = createBaseBookmarkPostRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    return message;
  },
};

function createBaseBookmarkPostResponse(): BookmarkPostResponse {
  return { bookmark: undefined };
}

export const BookmarkPostResponse = {
  fromJSON(object: any): BookmarkPostResponse {
    return {
      bookmark: isSet(object.bookmark) ? Bookmark.fromJSON(object.bookmark) : undefined,
    };
  },

  toJSON(message: BookmarkPostResponse): unknown {
    const obj: any = {};
    message.bookmark !== undefined &&
      (obj.bookmark = message.bookmark ? Bookmark.toJSON(message.bookmark) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BookmarkPostResponse>, I>>(base?: I): BookmarkPostResponse {
    return BookmarkPostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BookmarkPostResponse>, I>>(
    object: I
  ): BookmarkPostResponse {
    const message = createBaseBookmarkPostResponse();
    message.bookmark =
      object.bookmark !== undefined && object.bookmark !== null
        ? Bookmark.fromPartial(object.bookmark)
        : undefined;
    return message;
  },
};

function createBaseRemoveBookmarkedPostRequest(): RemoveBookmarkedPostRequest {
  return { userId: 0, postId: '', postType: 0 };
}

export const RemoveBookmarkedPostRequest = {
  fromJSON(object: any): RemoveBookmarkedPostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: RemoveBookmarkedPostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveBookmarkedPostRequest>, I>>(
    base?: I
  ): RemoveBookmarkedPostRequest {
    return RemoveBookmarkedPostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveBookmarkedPostRequest>, I>>(
    object: I
  ): RemoveBookmarkedPostRequest {
    const message = createBaseRemoveBookmarkedPostRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseRemoveBookmarkedPostResponse(): RemoveBookmarkedPostResponse {
  return { bookmark: undefined };
}

export const RemoveBookmarkedPostResponse = {
  fromJSON(object: any): RemoveBookmarkedPostResponse {
    return {
      bookmark: isSet(object.bookmark) ? Bookmark.fromJSON(object.bookmark) : undefined,
    };
  },

  toJSON(message: RemoveBookmarkedPostResponse): unknown {
    const obj: any = {};
    message.bookmark !== undefined &&
      (obj.bookmark = message.bookmark ? Bookmark.toJSON(message.bookmark) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveBookmarkedPostResponse>, I>>(
    base?: I
  ): RemoveBookmarkedPostResponse {
    return RemoveBookmarkedPostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveBookmarkedPostResponse>, I>>(
    object: I
  ): RemoveBookmarkedPostResponse {
    const message = createBaseRemoveBookmarkedPostResponse();
    message.bookmark =
      object.bookmark !== undefined && object.bookmark !== null
        ? Bookmark.fromPartial(object.bookmark)
        : undefined;
    return message;
  },
};

function createBaseBookmarkPublicationRequest(): BookmarkPublicationRequest {
  return { userId: 0, publicationId: 0 };
}

export const BookmarkPublicationRequest = {
  fromJSON(object: any): BookmarkPublicationRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
    };
  },

  toJSON(message: BookmarkPublicationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    return obj;
  },

  create<I extends Exact<DeepPartial<BookmarkPublicationRequest>, I>>(
    base?: I
  ): BookmarkPublicationRequest {
    return BookmarkPublicationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BookmarkPublicationRequest>, I>>(
    object: I
  ): BookmarkPublicationRequest {
    const message = createBaseBookmarkPublicationRequest();
    message.userId = object.userId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    return message;
  },
};

function createBaseBookmarkPublicationResponse(): BookmarkPublicationResponse {
  return { bookmark: undefined };
}

export const BookmarkPublicationResponse = {
  fromJSON(object: any): BookmarkPublicationResponse {
    return {
      bookmark: isSet(object.bookmark) ? Bookmark.fromJSON(object.bookmark) : undefined,
    };
  },

  toJSON(message: BookmarkPublicationResponse): unknown {
    const obj: any = {};
    message.bookmark !== undefined &&
      (obj.bookmark = message.bookmark ? Bookmark.toJSON(message.bookmark) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BookmarkPublicationResponse>, I>>(
    base?: I
  ): BookmarkPublicationResponse {
    return BookmarkPublicationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BookmarkPublicationResponse>, I>>(
    object: I
  ): BookmarkPublicationResponse {
    const message = createBaseBookmarkPublicationResponse();
    message.bookmark =
      object.bookmark !== undefined && object.bookmark !== null
        ? Bookmark.fromPartial(object.bookmark)
        : undefined;
    return message;
  },
};

function createBaseRemoveBookmarkedPublicationRequest(): RemoveBookmarkedPublicationRequest {
  return { userId: 0, publicationId: 0 };
}

export const RemoveBookmarkedPublicationRequest = {
  fromJSON(object: any): RemoveBookmarkedPublicationRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      publicationId: isSet(object.publicationId) ? Number(object.publicationId) : 0,
    };
  },

  toJSON(message: RemoveBookmarkedPublicationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.publicationId !== undefined && (obj.publicationId = Math.round(message.publicationId));
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveBookmarkedPublicationRequest>, I>>(
    base?: I
  ): RemoveBookmarkedPublicationRequest {
    return RemoveBookmarkedPublicationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveBookmarkedPublicationRequest>, I>>(
    object: I
  ): RemoveBookmarkedPublicationRequest {
    const message = createBaseRemoveBookmarkedPublicationRequest();
    message.userId = object.userId ?? 0;
    message.publicationId = object.publicationId ?? 0;
    return message;
  },
};

function createBaseRemoveBookmarkedPublicationResponse(): RemoveBookmarkedPublicationResponse {
  return { bookmark: undefined };
}

export const RemoveBookmarkedPublicationResponse = {
  fromJSON(object: any): RemoveBookmarkedPublicationResponse {
    return {
      bookmark: isSet(object.bookmark) ? Bookmark.fromJSON(object.bookmark) : undefined,
    };
  },

  toJSON(message: RemoveBookmarkedPublicationResponse): unknown {
    const obj: any = {};
    message.bookmark !== undefined &&
      (obj.bookmark = message.bookmark ? Bookmark.toJSON(message.bookmark) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveBookmarkedPublicationResponse>, I>>(
    base?: I
  ): RemoveBookmarkedPublicationResponse {
    return RemoveBookmarkedPublicationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveBookmarkedPublicationResponse>, I>>(
    object: I
  ): RemoveBookmarkedPublicationResponse {
    const message = createBaseRemoveBookmarkedPublicationResponse();
    message.bookmark =
      object.bookmark !== undefined && object.bookmark !== null
        ? Bookmark.fromPartial(object.bookmark)
        : undefined;
    return message;
  },
};

function createBaseGetFollowersRequest(): GetFollowersRequest {
  return { userId: 0, profileId: 0, limit: 0 };
}

export const GetFollowersRequest = {
  fromJSON(object: any): GetFollowersRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: GetFollowersRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFollowersRequest>, I>>(base?: I): GetFollowersRequest {
    return GetFollowersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetFollowersRequest>, I>>(
    object: I
  ): GetFollowersRequest {
    const message = createBaseGetFollowersRequest();
    message.userId = object.userId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseGetFollowersResponse(): GetFollowersResponse {
  return { users: [] };
}

export const GetFollowersResponse = {
  fromJSON(object: any): GetFollowersResponse {
    return {
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => UserProfile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetFollowersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => (e ? UserProfile.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFollowersResponse>, I>>(base?: I): GetFollowersResponse {
    return GetFollowersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetFollowersResponse>, I>>(
    object: I
  ): GetFollowersResponse {
    const message = createBaseGetFollowersResponse();
    message.users = object.users?.map((e) => UserProfile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetAccountsFollowingRequest(): GetAccountsFollowingRequest {
  return { userId: 0, profileId: 0, accountType: 0, limit: 0 };
}

export const GetAccountsFollowingRequest = {
  fromJSON(object: any): GetAccountsFollowingRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: GetAccountsFollowingRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAccountsFollowingRequest>, I>>(
    base?: I
  ): GetAccountsFollowingRequest {
    return GetAccountsFollowingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAccountsFollowingRequest>, I>>(
    object: I
  ): GetAccountsFollowingRequest {
    const message = createBaseGetAccountsFollowingRequest();
    message.userId = object.userId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.accountType = object.accountType ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseGetAccountsFollowingResponse(): GetAccountsFollowingResponse {
  return { users: [], communities: [] };
}

export const GetAccountsFollowingResponse = {
  fromJSON(object: any): GetAccountsFollowingResponse {
    return {
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => UserProfile.fromJSON(e))
        : [],
      communities: Array.isArray(object?.communities)
        ? object.communities.map((e: any) => CommunityProfile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAccountsFollowingResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => (e ? UserProfile.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    if (message.communities) {
      obj.communities = message.communities.map((e) =>
        e ? CommunityProfile.toJSON(e) : undefined
      );
    } else {
      obj.communities = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAccountsFollowingResponse>, I>>(
    base?: I
  ): GetAccountsFollowingResponse {
    return GetAccountsFollowingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAccountsFollowingResponse>, I>>(
    object: I
  ): GetAccountsFollowingResponse {
    const message = createBaseGetAccountsFollowingResponse();
    message.users = object.users?.map((e) => UserProfile.fromPartial(e)) || [];
    message.communities = object.communities?.map((e) => CommunityProfile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReactToPostRequest(): ReactToPostRequest {
  return { userId: 0, postId: '', accountType: 0, reaction: 0, postType: 0 };
}

export const ReactToPostRequest = {
  fromJSON(object: any): ReactToPostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
      reaction: isSet(object.reaction) ? reactionFromJSON(object.reaction) : 0,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: ReactToPostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    message.reaction !== undefined && (obj.reaction = reactionToJSON(message.reaction));
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactToPostRequest>, I>>(base?: I): ReactToPostRequest {
    return ReactToPostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactToPostRequest>, I>>(object: I): ReactToPostRequest {
    const message = createBaseReactToPostRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.accountType = object.accountType ?? 0;
    message.reaction = object.reaction ?? 0;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseReactToPostResponse(): ReactToPostResponse {
  return { regularPost: undefined, sharedPost: undefined, pollPost: undefined };
}

export const ReactToPostResponse = {
  fromJSON(object: any): ReactToPostResponse {
    return {
      regularPost: isSet(object.regularPost) ? Post.fromJSON(object.regularPost) : undefined,
      sharedPost: isSet(object.sharedPost) ? SharedPost.fromJSON(object.sharedPost) : undefined,
      pollPost: isSet(object.pollPost) ? PollPost.fromJSON(object.pollPost) : undefined,
    };
  },

  toJSON(message: ReactToPostResponse): unknown {
    const obj: any = {};
    message.regularPost !== undefined &&
      (obj.regularPost = message.regularPost ? Post.toJSON(message.regularPost) : undefined);
    message.sharedPost !== undefined &&
      (obj.sharedPost = message.sharedPost ? SharedPost.toJSON(message.sharedPost) : undefined);
    message.pollPost !== undefined &&
      (obj.pollPost = message.pollPost ? PollPost.toJSON(message.pollPost) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactToPostResponse>, I>>(base?: I): ReactToPostResponse {
    return ReactToPostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactToPostResponse>, I>>(
    object: I
  ): ReactToPostResponse {
    const message = createBaseReactToPostResponse();
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
    return message;
  },
};

function createBaseReactToCommentRequest(): ReactToCommentRequest {
  return {
    userId: 0,
    postId: '',
    commentId: '',
    accountType: 0,
    reaction: 0,
    postType: 0,
  };
}

export const ReactToCommentRequest = {
  fromJSON(object: any): ReactToCommentRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
      reaction: isSet(object.reaction) ? reactionFromJSON(object.reaction) : 0,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: ReactToCommentRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    message.reaction !== undefined && (obj.reaction = reactionToJSON(message.reaction));
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactToCommentRequest>, I>>(base?: I): ReactToCommentRequest {
    return ReactToCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactToCommentRequest>, I>>(
    object: I
  ): ReactToCommentRequest {
    const message = createBaseReactToCommentRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.accountType = object.accountType ?? 0;
    message.reaction = object.reaction ?? 0;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseReactToCommentResponse(): ReactToCommentResponse {
  return { comment: undefined };
}

export const ReactToCommentResponse = {
  fromJSON(object: any): ReactToCommentResponse {
    return {
      comment: isSet(object.comment) ? Comment.fromJSON(object.comment) : undefined,
    };
  },

  toJSON(message: ReactToCommentResponse): unknown {
    const obj: any = {};
    message.comment !== undefined &&
      (obj.comment = message.comment ? Comment.toJSON(message.comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactToCommentResponse>, I>>(
    base?: I
  ): ReactToCommentResponse {
    return ReactToCommentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactToCommentResponse>, I>>(
    object: I
  ): ReactToCommentResponse {
    const message = createBaseReactToCommentResponse();
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? Comment.fromPartial(object.comment)
        : undefined;
    return message;
  },
};

function createBaseReactToCommentReplyRequest(): ReactToCommentReplyRequest {
  return {
    userId: 0,
    postId: '',
    commentId: '',
    replyId: '',
    accountType: 0,
    reaction: 0,
    postType: 0,
  };
}

export const ReactToCommentReplyRequest = {
  fromJSON(object: any): ReactToCommentReplyRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      replyId: isSet(object.replyId) ? String(object.replyId) : '',
      accountType: isSet(object.accountType) ? accountTypeFromJSON(object.accountType) : 0,
      reaction: isSet(object.reaction) ? reactionFromJSON(object.reaction) : 0,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: ReactToCommentReplyRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.replyId !== undefined && (obj.replyId = message.replyId);
    message.accountType !== undefined && (obj.accountType = accountTypeToJSON(message.accountType));
    message.reaction !== undefined && (obj.reaction = reactionToJSON(message.reaction));
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactToCommentReplyRequest>, I>>(
    base?: I
  ): ReactToCommentReplyRequest {
    return ReactToCommentReplyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactToCommentReplyRequest>, I>>(
    object: I
  ): ReactToCommentReplyRequest {
    const message = createBaseReactToCommentReplyRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.replyId = object.replyId ?? '';
    message.accountType = object.accountType ?? 0;
    message.reaction = object.reaction ?? 0;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseReactToCommentReplyResponse(): ReactToCommentReplyResponse {
  return { reply: undefined };
}

export const ReactToCommentReplyResponse = {
  fromJSON(object: any): ReactToCommentReplyResponse {
    return {
      reply: isSet(object.reply) ? CommentReply.fromJSON(object.reply) : undefined,
    };
  },

  toJSON(message: ReactToCommentReplyResponse): unknown {
    const obj: any = {};
    message.reply !== undefined &&
      (obj.reply = message.reply ? CommentReply.toJSON(message.reply) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactToCommentReplyResponse>, I>>(
    base?: I
  ): ReactToCommentReplyResponse {
    return ReactToCommentReplyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReactToCommentReplyResponse>, I>>(
    object: I
  ): ReactToCommentReplyResponse {
    const message = createBaseReactToCommentReplyResponse();
    message.reply =
      object.reply !== undefined && object.reply !== null
        ? CommentReply.fromPartial(object.reply)
        : undefined;
    return message;
  },
};

function createBaseCreateCommentReplyRequest(): CreateCommentReplyRequest {
  return {
    userId: 0,
    postId: '',
    commentId: '',
    reply: undefined,
    postType: 0,
  };
}

export const CreateCommentReplyRequest = {
  fromJSON(object: any): CreateCommentReplyRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      reply: isSet(object.reply) ? CommentReply.fromJSON(object.reply) : undefined,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: CreateCommentReplyRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.reply !== undefined &&
      (obj.reply = message.reply ? CommentReply.toJSON(message.reply) : undefined);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommentReplyRequest>, I>>(
    base?: I
  ): CreateCommentReplyRequest {
    return CreateCommentReplyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentReplyRequest>, I>>(
    object: I
  ): CreateCommentReplyRequest {
    const message = createBaseCreateCommentReplyRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.reply =
      object.reply !== undefined && object.reply !== null
        ? CommentReply.fromPartial(object.reply)
        : undefined;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseCreateCommentReplyResponse(): CreateCommentReplyResponse {
  return { comment: undefined };
}

export const CreateCommentReplyResponse = {
  fromJSON(object: any): CreateCommentReplyResponse {
    return {
      comment: isSet(object.comment) ? Comment.fromJSON(object.comment) : undefined,
    };
  },

  toJSON(message: CreateCommentReplyResponse): unknown {
    const obj: any = {};
    message.comment !== undefined &&
      (obj.comment = message.comment ? Comment.toJSON(message.comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommentReplyResponse>, I>>(
    base?: I
  ): CreateCommentReplyResponse {
    return CreateCommentReplyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentReplyResponse>, I>>(
    object: I
  ): CreateCommentReplyResponse {
    const message = createBaseCreateCommentReplyResponse();
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? Comment.fromPartial(object.comment)
        : undefined;
    return message;
  },
};

function createBaseDeleteCommentReplyRequest(): DeleteCommentReplyRequest {
  return { userId: 0, postId: '', commentId: '', replyId: '', postType: 0 };
}

export const DeleteCommentReplyRequest = {
  fromJSON(object: any): DeleteCommentReplyRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      replyId: isSet(object.replyId) ? String(object.replyId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: DeleteCommentReplyRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.replyId !== undefined && (obj.replyId = message.replyId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommentReplyRequest>, I>>(
    base?: I
  ): DeleteCommentReplyRequest {
    return DeleteCommentReplyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentReplyRequest>, I>>(
    object: I
  ): DeleteCommentReplyRequest {
    const message = createBaseDeleteCommentReplyRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.replyId = object.replyId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseDeleteCommentReplyResponse(): DeleteCommentReplyResponse {
  return { comment: undefined };
}

export const DeleteCommentReplyResponse = {
  fromJSON(object: any): DeleteCommentReplyResponse {
    return {
      comment: isSet(object.comment) ? Comment.fromJSON(object.comment) : undefined,
    };
  },

  toJSON(message: DeleteCommentReplyResponse): unknown {
    const obj: any = {};
    message.comment !== undefined &&
      (obj.comment = message.comment ? Comment.toJSON(message.comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommentReplyResponse>, I>>(
    base?: I
  ): DeleteCommentReplyResponse {
    return DeleteCommentReplyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentReplyResponse>, I>>(
    object: I
  ): DeleteCommentReplyResponse {
    const message = createBaseDeleteCommentReplyResponse();
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? Comment.fromPartial(object.comment)
        : undefined;
    return message;
  },
};

function createBaseEditCommentReplyRequest(): EditCommentReplyRequest {
  return {
    userId: 0,
    postId: '',
    commentId: '',
    replyId: '',
    reply: undefined,
    postType: 0,
  };
}

export const EditCommentReplyRequest = {
  fromJSON(object: any): EditCommentReplyRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      replyId: isSet(object.replyId) ? String(object.replyId) : '',
      reply: isSet(object.reply) ? CommentReply.fromJSON(object.reply) : undefined,
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: EditCommentReplyRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.replyId !== undefined && (obj.replyId = message.replyId);
    message.reply !== undefined &&
      (obj.reply = message.reply ? CommentReply.toJSON(message.reply) : undefined);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<EditCommentReplyRequest>, I>>(
    base?: I
  ): EditCommentReplyRequest {
    return EditCommentReplyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditCommentReplyRequest>, I>>(
    object: I
  ): EditCommentReplyRequest {
    const message = createBaseEditCommentReplyRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.replyId = object.replyId ?? '';
    message.reply =
      object.reply !== undefined && object.reply !== null
        ? CommentReply.fromPartial(object.reply)
        : undefined;
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseEditCommentReplyResponse(): EditCommentReplyResponse {
  return { reply: undefined };
}

export const EditCommentReplyResponse = {
  fromJSON(object: any): EditCommentReplyResponse {
    return {
      reply: isSet(object.reply) ? CommentReply.fromJSON(object.reply) : undefined,
    };
  },

  toJSON(message: EditCommentReplyResponse): unknown {
    const obj: any = {};
    message.reply !== undefined &&
      (obj.reply = message.reply ? CommentReply.toJSON(message.reply) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EditCommentReplyResponse>, I>>(
    base?: I
  ): EditCommentReplyResponse {
    return EditCommentReplyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EditCommentReplyResponse>, I>>(
    object: I
  ): EditCommentReplyResponse {
    const message = createBaseEditCommentReplyResponse();
    message.reply =
      object.reply !== undefined && object.reply !== null
        ? CommentReply.fromPartial(object.reply)
        : undefined;
    return message;
  },
};

function createBaseGetCommentRepliesRequest(): GetCommentRepliesRequest {
  return { userId: 0, postId: '', commentId: '', postType: 0 };
}

export const GetCommentRepliesRequest = {
  fromJSON(object: any): GetCommentRepliesRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: GetCommentRepliesRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommentRepliesRequest>, I>>(
    base?: I
  ): GetCommentRepliesRequest {
    return GetCommentRepliesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommentRepliesRequest>, I>>(
    object: I
  ): GetCommentRepliesRequest {
    const message = createBaseGetCommentRepliesRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseGetCommentRepliesResponse(): GetCommentRepliesResponse {
  return { replies: [] };
}

export const GetCommentRepliesResponse = {
  fromJSON(object: any): GetCommentRepliesResponse {
    return {
      replies: Array.isArray(object?.replies)
        ? object.replies.map((e: any) => CommentReply.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCommentRepliesResponse): unknown {
    const obj: any = {};
    if (message.replies) {
      obj.replies = message.replies.map((e) => (e ? CommentReply.toJSON(e) : undefined));
    } else {
      obj.replies = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommentRepliesResponse>, I>>(
    base?: I
  ): GetCommentRepliesResponse {
    return GetCommentRepliesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommentRepliesResponse>, I>>(
    object: I
  ): GetCommentRepliesResponse {
    const message = createBaseGetCommentRepliesResponse();
    message.replies = object.replies?.map((e) => CommentReply.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReportCommentReplyRequest(): ReportCommentReplyRequest {
  return { userId: 0, postId: '', commentId: '', replyId: '', postType: 0 };
}

export const ReportCommentReplyRequest = {
  fromJSON(object: any): ReportCommentReplyRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      postId: isSet(object.postId) ? String(object.postId) : '',
      commentId: isSet(object.commentId) ? String(object.commentId) : '',
      replyId: isSet(object.replyId) ? String(object.replyId) : '',
      postType: isSet(object.postType) ? postTypeFromJSON(object.postType) : 0,
    };
  },

  toJSON(message: ReportCommentReplyRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.postId !== undefined && (obj.postId = message.postId);
    message.commentId !== undefined && (obj.commentId = message.commentId);
    message.replyId !== undefined && (obj.replyId = message.replyId);
    message.postType !== undefined && (obj.postType = postTypeToJSON(message.postType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportCommentReplyRequest>, I>>(
    base?: I
  ): ReportCommentReplyRequest {
    return ReportCommentReplyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReportCommentReplyRequest>, I>>(
    object: I
  ): ReportCommentReplyRequest {
    const message = createBaseReportCommentReplyRequest();
    message.userId = object.userId ?? 0;
    message.postId = object.postId ?? '';
    message.commentId = object.commentId ?? '';
    message.replyId = object.replyId ?? '';
    message.postType = object.postType ?? 0;
    return message;
  },
};

function createBaseReportCommentReplyResponse(): ReportCommentReplyResponse {
  return { reply: undefined };
}

export const ReportCommentReplyResponse = {
  fromJSON(object: any): ReportCommentReplyResponse {
    return {
      reply: isSet(object.reply) ? CommentReply.fromJSON(object.reply) : undefined,
    };
  },

  toJSON(message: ReportCommentReplyResponse): unknown {
    const obj: any = {};
    message.reply !== undefined &&
      (obj.reply = message.reply ? CommentReply.toJSON(message.reply) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ReportCommentReplyResponse>, I>>(
    base?: I
  ): ReportCommentReplyResponse {
    return ReportCommentReplyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReportCommentReplyResponse>, I>>(
    object: I
  ): ReportCommentReplyResponse {
    const message = createBaseReportCommentReplyResponse();
    message.reply =
      object.reply !== undefined && object.reply !== null
        ? CommentReply.fromPartial(object.reply)
        : undefined;
    return message;
  },
};

function createBaseSharePostRequest(): SharePostRequest {
  return { userId: 0, parentPostId: '', parentPostType: 0, content: '' };
}

export const SharePostRequest = {
  fromJSON(object: any): SharePostRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      parentPostId: isSet(object.parentPostId) ? String(object.parentPostId) : '',
      parentPostType: isSet(object.parentPostType) ? postTypeFromJSON(object.parentPostType) : 0,
      content: isSet(object.content) ? String(object.content) : '',
    };
  },

  toJSON(message: SharePostRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.parentPostId !== undefined && (obj.parentPostId = message.parentPostId);
    message.parentPostType !== undefined &&
      (obj.parentPostType = postTypeToJSON(message.parentPostType));
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<SharePostRequest>, I>>(base?: I): SharePostRequest {
    return SharePostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SharePostRequest>, I>>(object: I): SharePostRequest {
    const message = createBaseSharePostRequest();
    message.userId = object.userId ?? 0;
    message.parentPostId = object.parentPostId ?? '';
    message.parentPostType = object.parentPostType ?? 0;
    message.content = object.content ?? '';
    return message;
  },
};

function createBaseSharePostResponse(): SharePostResponse {
  return { success: false };
}

export const SharePostResponse = {
  fromJSON(object: any): SharePostResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: SharePostResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<SharePostResponse>, I>>(base?: I): SharePostResponse {
    return SharePostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SharePostResponse>, I>>(object: I): SharePostResponse {
    const message = createBaseSharePostResponse();
    message.success = object.success ?? false;
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
