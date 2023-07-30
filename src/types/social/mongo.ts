/* eslint-disable */

export enum MediaResize {
  MEDIA_RESIZE_UNSPECIFIED = 0,
  MEDIA_RESIZE_CLIP = 1,
  MEDIA_RESIZE_CROP = 2,
  MEDIA_RESIZE_SCALE = 3,
  UNRECOGNIZED = -1,
}

export function mediaResizeFromJSON(object: any): MediaResize {
  switch (object) {
    case 0:
    case 'MEDIA_RESIZE_UNSPECIFIED':
      return MediaResize.MEDIA_RESIZE_UNSPECIFIED;
    case 1:
    case 'MEDIA_RESIZE_CLIP':
      return MediaResize.MEDIA_RESIZE_CLIP;
    case 2:
    case 'MEDIA_RESIZE_CROP':
      return MediaResize.MEDIA_RESIZE_CROP;
    case 3:
    case 'MEDIA_RESIZE_SCALE':
      return MediaResize.MEDIA_RESIZE_SCALE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MediaResize.UNRECOGNIZED;
  }
}

export function mediaResizeToJSON(object: MediaResize): string {
  switch (object) {
    case MediaResize.MEDIA_RESIZE_UNSPECIFIED:
      return 'MEDIA_RESIZE_UNSPECIFIED';
    case MediaResize.MEDIA_RESIZE_CLIP:
      return 'MEDIA_RESIZE_CLIP';
    case MediaResize.MEDIA_RESIZE_CROP:
      return 'MEDIA_RESIZE_CROP';
    case MediaResize.MEDIA_RESIZE_SCALE:
      return 'MEDIA_RESIZE_SCALE';
    case MediaResize.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum MediaCrop {
  MEDIA_CROP_UNSPECIFIED = 0,
  MEDIA_CROP_TOP = 1,
  MEDIA_CROP_BOTTOM = 2,
  MEDIA_CROP_LEFT = 3,
  MEDIA_CROP_RIGHT = 4,
  MEDIA_CROP_CENTER = 5,
  UNRECOGNIZED = -1,
}

export function mediaCropFromJSON(object: any): MediaCrop {
  switch (object) {
    case 0:
    case 'MEDIA_CROP_UNSPECIFIED':
      return MediaCrop.MEDIA_CROP_UNSPECIFIED;
    case 1:
    case 'MEDIA_CROP_TOP':
      return MediaCrop.MEDIA_CROP_TOP;
    case 2:
    case 'MEDIA_CROP_BOTTOM':
      return MediaCrop.MEDIA_CROP_BOTTOM;
    case 3:
    case 'MEDIA_CROP_LEFT':
      return MediaCrop.MEDIA_CROP_LEFT;
    case 4:
    case 'MEDIA_CROP_RIGHT':
      return MediaCrop.MEDIA_CROP_RIGHT;
    case 5:
    case 'MEDIA_CROP_CENTER':
      return MediaCrop.MEDIA_CROP_CENTER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MediaCrop.UNRECOGNIZED;
  }
}

export function mediaCropToJSON(object: MediaCrop): string {
  switch (object) {
    case MediaCrop.MEDIA_CROP_UNSPECIFIED:
      return 'MEDIA_CROP_UNSPECIFIED';
    case MediaCrop.MEDIA_CROP_TOP:
      return 'MEDIA_CROP_TOP';
    case MediaCrop.MEDIA_CROP_BOTTOM:
      return 'MEDIA_CROP_BOTTOM';
    case MediaCrop.MEDIA_CROP_LEFT:
      return 'MEDIA_CROP_LEFT';
    case MediaCrop.MEDIA_CROP_RIGHT:
      return 'MEDIA_CROP_RIGHT';
    case MediaCrop.MEDIA_CROP_CENTER:
      return 'MEDIA_CROP_CENTER';
    case MediaCrop.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum MediaType {
  MEDIA_TYPE_UNSPECIFIED = 0,
  MEDIA_TYPE_IMAGE = 1,
  MEDIA_TYPE_VIDEO = 2,
  UNRECOGNIZED = -1,
}

export function mediaTypeFromJSON(object: any): MediaType {
  switch (object) {
    case 0:
    case 'MEDIA_TYPE_UNSPECIFIED':
      return MediaType.MEDIA_TYPE_UNSPECIFIED;
    case 1:
    case 'MEDIA_TYPE_IMAGE':
      return MediaType.MEDIA_TYPE_IMAGE;
    case 2:
    case 'MEDIA_TYPE_VIDEO':
      return MediaType.MEDIA_TYPE_VIDEO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MediaType.UNRECOGNIZED;
  }
}

export function mediaTypeToJSON(object: MediaType): string {
  switch (object) {
    case MediaType.MEDIA_TYPE_UNSPECIFIED:
      return 'MEDIA_TYPE_UNSPECIFIED';
    case MediaType.MEDIA_TYPE_IMAGE:
      return 'MEDIA_TYPE_IMAGE';
    case MediaType.MEDIA_TYPE_VIDEO:
      return 'MEDIA_TYPE_VIDEO';
    case MediaType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/** PostType defines the type of content present in a post */
export enum PostType {
  POST_TYPE_UNSPECIFIED = 0,
  POST_TYPE_POST = 1,
  POST_TYPE_REPOST = 2,
  POST_TYPE_QUESTION = 3,
  POST_TYPE_ACHIEVEMENT = 4,
  POST_TYPE_ANNOUNCEMENT = 5,
  POST_TYPE_POLL = 6,
  POST_TYPE_ARTICLE = 7,
  POST_TYPE_SHORT_STORY = 8,
  UNRECOGNIZED = -1,
}

export function postTypeFromJSON(object: any): PostType {
  switch (object) {
    case 0:
    case 'POST_TYPE_UNSPECIFIED':
      return PostType.POST_TYPE_UNSPECIFIED;
    case 1:
    case 'POST_TYPE_POST':
      return PostType.POST_TYPE_POST;
    case 2:
    case 'POST_TYPE_REPOST':
      return PostType.POST_TYPE_REPOST;
    case 3:
    case 'POST_TYPE_QUESTION':
      return PostType.POST_TYPE_QUESTION;
    case 4:
    case 'POST_TYPE_ACHIEVEMENT':
      return PostType.POST_TYPE_ACHIEVEMENT;
    case 5:
    case 'POST_TYPE_ANNOUNCEMENT':
      return PostType.POST_TYPE_ANNOUNCEMENT;
    case 6:
    case 'POST_TYPE_POLL':
      return PostType.POST_TYPE_POLL;
    case 7:
    case 'POST_TYPE_ARTICLE':
      return PostType.POST_TYPE_ARTICLE;
    case 8:
    case 'POST_TYPE_SHORT_STORY':
      return PostType.POST_TYPE_SHORT_STORY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PostType.UNRECOGNIZED;
  }
}

export function postTypeToJSON(object: PostType): string {
  switch (object) {
    case PostType.POST_TYPE_UNSPECIFIED:
      return 'POST_TYPE_UNSPECIFIED';
    case PostType.POST_TYPE_POST:
      return 'POST_TYPE_POST';
    case PostType.POST_TYPE_REPOST:
      return 'POST_TYPE_REPOST';
    case PostType.POST_TYPE_QUESTION:
      return 'POST_TYPE_QUESTION';
    case PostType.POST_TYPE_ACHIEVEMENT:
      return 'POST_TYPE_ACHIEVEMENT';
    case PostType.POST_TYPE_ANNOUNCEMENT:
      return 'POST_TYPE_ANNOUNCEMENT';
    case PostType.POST_TYPE_POLL:
      return 'POST_TYPE_POLL';
    case PostType.POST_TYPE_ARTICLE:
      return 'POST_TYPE_ARTICLE';
    case PostType.POST_TYPE_SHORT_STORY:
      return 'POST_TYPE_SHORT_STORY';
    case PostType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

/**
 * AccountType used to differ the type of profile an operation
 * is being performed against
 */
export enum AccountType {
  ACCOUNT_TYPE_UNSPECIFIED = 0,
  ACCOUNT_TYPE_USER = 1,
  ACCOUNT_TYPE_COMMUNITY = 2,
  UNRECOGNIZED = -1,
}

export function accountTypeFromJSON(object: any): AccountType {
  switch (object) {
    case 0:
    case 'ACCOUNT_TYPE_UNSPECIFIED':
      return AccountType.ACCOUNT_TYPE_UNSPECIFIED;
    case 1:
    case 'ACCOUNT_TYPE_USER':
      return AccountType.ACCOUNT_TYPE_USER;
    case 2:
    case 'ACCOUNT_TYPE_COMMUNITY':
      return AccountType.ACCOUNT_TYPE_COMMUNITY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AccountType.UNRECOGNIZED;
  }
}

export function accountTypeToJSON(object: AccountType): string {
  switch (object) {
    case AccountType.ACCOUNT_TYPE_UNSPECIFIED:
      return 'ACCOUNT_TYPE_UNSPECIFIED';
    case AccountType.ACCOUNT_TYPE_USER:
      return 'ACCOUNT_TYPE_USER';
    case AccountType.ACCOUNT_TYPE_COMMUNITY:
      return 'ACCOUNT_TYPE_COMMUNITY';
    case AccountType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum ThreadParticipantType {
  THREAD_PARTICIPANT_TYPE_UNSPECIFIED = 0,
  THREAD_PARTICIPANT_TYPE_PARENT = 1,
  THREAD_PARTICIPANT_TYPE_PARTICIPANT = 2,
  UNRECOGNIZED = -1,
}

export function threadParticipantTypeFromJSON(object: any): ThreadParticipantType {
  switch (object) {
    case 0:
    case 'THREAD_PARTICIPANT_TYPE_UNSPECIFIED':
      return ThreadParticipantType.THREAD_PARTICIPANT_TYPE_UNSPECIFIED;
    case 1:
    case 'THREAD_PARTICIPANT_TYPE_PARENT':
      return ThreadParticipantType.THREAD_PARTICIPANT_TYPE_PARENT;
    case 2:
    case 'THREAD_PARTICIPANT_TYPE_PARTICIPANT':
      return ThreadParticipantType.THREAD_PARTICIPANT_TYPE_PARTICIPANT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ThreadParticipantType.UNRECOGNIZED;
  }
}

export function threadParticipantTypeToJSON(object: ThreadParticipantType): string {
  switch (object) {
    case ThreadParticipantType.THREAD_PARTICIPANT_TYPE_UNSPECIFIED:
      return 'THREAD_PARTICIPANT_TYPE_UNSPECIFIED';
    case ThreadParticipantType.THREAD_PARTICIPANT_TYPE_PARENT:
      return 'THREAD_PARTICIPANT_TYPE_PARENT';
    case ThreadParticipantType.THREAD_PARTICIPANT_TYPE_PARTICIPANT:
      return 'THREAD_PARTICIPANT_TYPE_PARTICIPANT';
    case ThreadParticipantType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Reaction {
  REACTION_UNSPECIFIED = 0,
  REACTION_LIKE = 1,
  REACTION_LOVE = 2,
  REACTION_HAHA = 3,
  REACTION_WOW = 4,
  REACTION_SAD = 5,
  REACTION_ANGRY = 6,
  REACTION_DISLIKE = 7,
  UNRECOGNIZED = -1,
}

export function reactionFromJSON(object: any): Reaction {
  switch (object) {
    case 0:
    case 'REACTION_UNSPECIFIED':
      return Reaction.REACTION_UNSPECIFIED;
    case 1:
    case 'REACTION_LIKE':
      return Reaction.REACTION_LIKE;
    case 2:
    case 'REACTION_LOVE':
      return Reaction.REACTION_LOVE;
    case 3:
    case 'REACTION_HAHA':
      return Reaction.REACTION_HAHA;
    case 4:
    case 'REACTION_WOW':
      return Reaction.REACTION_WOW;
    case 5:
    case 'REACTION_SAD':
      return Reaction.REACTION_SAD;
    case 6:
    case 'REACTION_ANGRY':
      return Reaction.REACTION_ANGRY;
    case 7:
    case 'REACTION_DISLIKE':
      return Reaction.REACTION_DISLIKE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Reaction.UNRECOGNIZED;
  }
}

export function reactionToJSON(object: Reaction): string {
  switch (object) {
    case Reaction.REACTION_UNSPECIFIED:
      return 'REACTION_UNSPECIFIED';
    case Reaction.REACTION_LIKE:
      return 'REACTION_LIKE';
    case Reaction.REACTION_LOVE:
      return 'REACTION_LOVE';
    case Reaction.REACTION_HAHA:
      return 'REACTION_HAHA';
    case Reaction.REACTION_WOW:
      return 'REACTION_WOW';
    case Reaction.REACTION_SAD:
      return 'REACTION_SAD';
    case Reaction.REACTION_ANGRY:
      return 'REACTION_ANGRY';
    case Reaction.REACTION_DISLIKE:
      return 'REACTION_DISLIKE';
    case Reaction.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface ContentInsights {
  sentenceCount: number;
  wordCount: number;
  language: string;
  languageConfidence: number;
  entities: Entities[];
  sentiment: Sentiment | undefined;
}

export interface Entities {
  text: string;
  label: string;
}

export interface Sentiment {
  negative: number;
  neutral: number;
  positive: number;
  compound: number;
}

export interface MediaMetadata {
  id: string;
  resize: MediaResize;
  crop: MediaCrop;
  imageWidth: number;
  imageHeight: number;
  type: MediaType;
}

export interface Media {
  id: string;
  createdAt: string;
  link: string;
  metadata: MediaMetadata | undefined;
}

/**
 * Posts: Critical to activities and define the content sent over by users and
 * communities
 */
export interface Post {
  /**
   * Post ID
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt: string;
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 50 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions: string[];
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags: string[];
  /**
   * Media associated with the post
   * @gotag: bson:"media"
   */
  media: Media | undefined;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra: { [key: string]: string };
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments: Comment[];
  /**
   * ID of the user creating the post
   * @gotag: bson:"simfinyPlatformUserId"
   */
  simfinyPlatformUserId: number;
  /** @gotag: bson:"profileId" */
  profileId: number;
  /** @gotag: bson:"title" */
  title: string;
  /** @gotag: bson:"tags" */
  tags: string[];
  /**
   * The topic to which this post is currently associated to. For non-community
   * profiles, posts are not associated to any topic. However for the commmunity
   * case, posts are associated to topic
   * @gotag: bson:"topicName"
   */
  topicName: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername: string;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage: string;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   */
  affinityScore: number;
  /**
   * QualityScore is the quality of the given piece of content.
   * @gotag: bson:"qualityScore"
   */
  qualityScore: number;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap: { [key: number]: number };
  /** @gotag: bson:"insights" */
  insights: ContentInsights | undefined;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap: { [key: number]: number };
  /**
   * ReadingTime outlines the number of minutes it would take to read the
   * contents of this post
   * @gotag: bson:"readingTime"
   */
  readingTime: string;
  /**
   * BackgroundImageUrl signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   * @gotag: bson:"backgroundImageUrl"
   */
  backgroundImageUrl: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType: AccountType;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes: Note[];
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread: Thread | undefined;
  /**
   * thread participant posts are not sent to get stream to be part of the social graph.
   * posts that are the parent of their thread are sent to get stream to comprise the social graph
   * @gotag: bson:"threadParticipantType"
   */
  threadParticipantType: ThreadParticipantType;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap: { [key: number]: Reaction };
  /**
   * if the post is a question, this field will hold the response to the question by the ai
   * @gotag: bson:"aiGeneratedQuestionResponse"
   */
  aiGeneratedQuestionResponse: string;

  published: boolean;
}

export interface Post_ExtraEntry {
  key: string;
  value: string;
}

export interface Post_UserIdToAffinityScoreMapEntry {
  key: number;
  value: number;
}

export interface Post_UserIdToReportsMapEntry {
  key: number;
  value: number;
}

export interface Post_UserIdToReactionMapEntry {
  key: number;
  value: Reaction;
}

export interface PollPost {
  /**
   * Post ID
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt: string;
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 50 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions: string[];
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags: string[];
  /**
   * Media associated with the post
   * @gotag: bson:"media"
   */
  media: Media | undefined;
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra: { [key: string]: string };
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments: Comment[];
  /**
   * ID of the user creating the post
   * @gotag: bson:"simfinyPlatformUserId"
   */
  simfinyPlatformUserId: number;
  /**
   * ID of the profile creating the post
   * @gotag: bson:"profileId"
   */
  profileId: number;
  /**
   * Title of the post
   * @gotag: bson:"title"
   */
  title: string;
  /**
   * Tags associated with the post
   * @gotag: bson:"tags"
   */
  tags: string[];
  /**
   * The topic to which this post is currently associated to. For non-community
   * profiles, posts are not associated to any topic. However for the commmunity
   * case, posts are associated to topic
   * @gotag: bson:"topicName"
   */
  topicName: string;
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername: string;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage: string;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   */
  affinityScore: number;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   */
  qualityScore: number;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap: { [key: number]: number };
  /**
   * Insights is a map of all insights associated to a post
   * @gotag: bson:"insights"
   */
  insights: ContentInsights | undefined;
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap: { [key: number]: number };
  /**
   * BackgroundImageUrl signifies an image to associate to a post object.
   * Such urls are only associated when a post is an article or short story
   * @gotag: bson:"backgroundImageUrl"
   */
  backgroundImageUrl: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType: AccountType;
  /**
   * A hash map of user ids to poll responses left by users
   * @gotag: bson:"userIdToPollResponseMap"
   */
  userIdToPollResponsesMap: { [key: number]: PollResponse };
  /**
   * the set of options the poll witholds
   * @gotag: bson:"pollOptions"
   */
  pollOptions: string[];
  /**
   * the distribution of poll responses (in percentage form)
   * @gotag: bson:"pollDistribution"
   */
  pollDistribution: { [key: string]: number };
  /**
   * the end date of the given poll
   * @gotag: bson:"pollEndDate"
   */
  pollEndDate: Date | undefined;
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes: Note[];
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread: Thread | undefined;
  /**
   * thread participant posts are not sent to get stream to be part of the social graph.
   * posts that are the parent of their thread are sent to get stream to comprise the social graph
   * @gotag: bson:"threadParticipantType"
   */
  threadParticipantType: ThreadParticipantType;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap: { [key: number]: Reaction };
}

export interface PollPost_ExtraEntry {
  key: string;
  value: string;
}

export interface PollPost_UserIdToAffinityScoreMapEntry {
  key: number;
  value: number;
}

export interface PollPost_UserIdToReportsMapEntry {
  key: number;
  value: number;
}

export interface PollPost_UserIdToPollResponsesMapEntry {
  key: number;
  value: PollResponse | undefined;
}

export interface PollPost_PollDistributionEntry {
  key: string;
  value: number;
}

export interface PollPost_UserIdToReactionMapEntry {
  key: number;
  value: Reaction;
}

export interface PollResponse {
  /**
   * the id of the poll response
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * the user id who left the poll response
   * @gotag: bson:"userId"
   */
  userId: number;
  /**
   * the actual poll response left by the user
   * @gotag: bson:"responseValue"
   */
  responseValue: string;
  /**
   * the index of the given response
   * @gotag: bson:"responseIdx"
   */
  responseIdx: number;
}

/**
 * SharedPost: Posts reshared by other profiles
 * TODO: need to expose api endpoints to interact with shared posts
 */
export interface SharedPost {
  /**
   * RePost ID
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * Original Post ID
   * @gotag: bson:"originalPostId"
   */
  originalPostId: string;
  /**
   * The username of the original author
   * @gotag: bson:"originalAuthorUsername"
   */
  originalAuthorUsername: string;
  /**
   * Time post was created at
   * @gotag: bson:"createdAt"
   */
  createdAt: string;
  /**
   * Content is the content the post witholds
   * Content is a string of text that is at least 50 characters long
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Profiles mentioned in the post
   * @gotag: bson:"mentions"
   */
  mentions: string[];
  /**
   * Hashtags defined in the post
   * @gotag: bson:"hashtags"
   */
  hashtags: string[];
  /**
   * Blob of extra content tied to the post
   * @gotag: bson:"extra"
   */
  extra: { [key: string]: string };
  /**
   * Comments tied to the post
   * @gotag: bson:"comments"
   */
  comments: Comment[];
  /**
   * ID of the user resharing the post
   * @gotag: bson:"simfinyPlatformUserId"
   */
  simfinyPlatformUserId: number;
  /**
   * ID of the profile resharing the post
   * @gotag: bson:"profileId"
   */
  profileId: number;
  /**
   * Tags associated with the post
   * @gotag: bson:"tags"
   */
  tags: string[];
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername: string;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   */
  affinityScore: number;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   */
  qualityScore: number;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap: { [key: number]: number };
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap: { [key: number]: number };
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes: Note[];
  /**
   * a thread a is a continuation of posts associated to a singular post
   * @gotag: bson:"thread"
   */
  thread: Thread | undefined;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType: AccountType;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap: { [key: number]: Reaction };
  /**
   * PostType defines the intent of the post
   * @gotag: bson:"action"
   */
  action: PostType;
  /**
   * The profile Id of the user who owned the original post
   * @gotag: bson:"originalPostUserProfileId"
   */
  originalPostUserProfileId: number;
  /**
   * The simfiny wide user id of the profile who owned the original post
   * @gotag: bson:"originalPostUserSimfinyPlaformId"
   */
  originalPostUserSimfinyPlaformId: number;
  /**
   * originalPostType defines the intent of the post
   * @gotag: bson:"originalPostAction"
   */
  originalPostAction: PostType;
}

export interface SharedPost_ExtraEntry {
  key: string;
  value: string;
}

export interface SharedPost_UserIdToAffinityScoreMapEntry {
  key: number;
  value: number;
}

export interface SharedPost_UserIdToReportsMapEntry {
  key: number;
  value: number;
}

export interface SharedPost_UserIdToReactionMapEntry {
  key: number;
  value: Reaction;
}

export interface Thread {
  /**
   * Thread ID
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * a list of post ids associated to this thread
   * @gotag: bson:"postIds"
   */
  postIds: string[];
  /**
   * the id of the parent post
   * @gotag: bson:"parentPostId"
   */
  parentPostId: string;
  /** @gotag: bson:"createdAt" */
  createdAt: string;
  /** @gotag: bson:"updatedAt" */
  updatedAt: string;
}

/**
 * A note is a response a user can leave on another user's piece of content. Notes can
 * only be seen by the user who created the content (private) and should serve as some form of
 * intimate feedback protocol
 */
export interface Note {
  /**
   * Note ID
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * Platform wide ID of the user creating the note
   * @gotag: bson:"simfinyPlatformUserId"
   */
  simfinyPlatformUserId: number;
  /**
   * ID of either the user profile or the community profile creating the note
   * @gotag: bson:"profileId"
   */
  profileId: number;
  /**
   * Media payload tied to the note
   * @gotag: bson:"media"
   */
  media: Media | undefined;
  /**
   * Profiles mentioned in the note - NOTE: only the creator of the article whom this
   * note is attached to and the mentioned members will be notified. Additionally, this note
   * will only be viewable by those folks
   * @gotag: bson:"mentions"
   */
  mentions: string[];
  /**
   * Hashtags defined in the note
   * @gotag: bson:"hashtags"
   */
  hashtags: string[];
  /**
   * Time when the note was created
   * @gotag: bson:"createdAt"
   */
  createdAt: string;
  /**
   * Content defining the note
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType: AccountType;
}

export interface Comment {
  /**
   * Comment ID
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * Platform wide ID of the user creating the comment
   * @gotag: bson:"simfinyPlatformUserId"
   */
  simfinyPlatformUserId: number;
  /**
   * ID of either the user profile or the community profile creating the comment
   * @gotag: bson:"profileId"
   */
  profileId: number;
  /**
   * Media payload tied to the comment
   * @gotag: bson:"media"
   */
  media: Media | undefined;
  /**
   * Profiles mentioned in the comment
   * @gotag: bson:"mentions"
   */
  mentions: string[];
  /**
   * Hashtags defined in the comment
   * @gotag: bson:"hashtags"
   */
  hashtags: string[];
  /**
   * Time when the comment was created
   * @gotag: bson:"createdAt"
   */
  createdAt: string;
  /**
   * Content defining the comment
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Responses to a given comment
   * @gotag: bson:"replies"
   */
  replies: CommentReply[];
  /**
   * Blob of extra content tied to the comment
   * @gotag: bson:"extra"
   */
  extra: { [key: string]: string };
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername: string;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage: string;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   */
  affinityScore: number;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   */
  qualityScore: number;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap: { [key: number]: number };
  /**
   * ReportCount details the number of reports were associated with a post
   * A report is used as a signal to disclose the post's content are in
   * violation of platform rules
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap: { [key: number]: number };
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType: AccountType;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap: { [key: number]: Reaction };
  /**
   * the set of notes associated to this piece of content
   * @gotag: bson:"notes"
   */
  notes: Note[];
}

export interface Comment_ExtraEntry {
  key: string;
  value: string;
}

export interface Comment_UserIdToAffinityScoreMapEntry {
  key: number;
  value: number;
}

export interface Comment_UserIdToReportsMapEntry {
  key: number;
  value: number;
}

export interface Comment_UserIdToReactionMapEntry {
  key: number;
  value: Reaction;
}

export interface CommentReply {
  /**
   * Response ID
   * @gotag: bson:"_id,omitempty"
   */
  id: string;
  /**
   * ID of the user creating the comment response
   * @gotag: bson:"simfinyPlatformUserId"
   */
  simfinyPlatformUserId: number;
  /**
   * ID of either the user profile or the community profile creating the comment response
   * @gotag: bson:"profileId"
   */
  profileId: number;
  /**
   * Media payload associated to the response
   * @gotag: bson:"media"
   */
  media: Media | undefined;
  /**
   * Profiles mentioned in the comment
   * @gotag: bson:"mentions"
   */
  mentions: string[];
  /**
   * Hashtags defined in the comment
   * @gotag: bson:"hashtags"
   */
  hashtags: string[];
  /**
   * Time when the comment was created
   * @gotag: bson:"createdAt"
   */
  createdAt: string;
  /**
   * Content defining the comment
   * @gotag: bson:"content"
   */
  content: string;
  /**
   * Blob of extra content tied to the comment response
   * @gotag: bson:"extra"
   */
  extra: { [key: string]: string };
  /**
   * Username of the person making the comment
   * @gotag: bson:"authorUsername"
   */
  authorUsername: string;
  /**
   * Profile image of the person making this comment
   * @gotag: bson:"authorProfileImage"
   */
  authorProfileImage: string;
  /**
   * AffinityScore is the average rating users on the platform associate with a
   * piece of content. It is taken as the weighted average across all reactions
   * for the particular post
   * @gotag: bson:"affinityScore"
   */
  affinityScore: number;
  /**
   * QualityScore is the quality of the given piece of content.
   * It is taken as the weighted average across all reactions for the particular
   * post
   * @gotag: bson:"qualityScore"
   */
  qualityScore: number;
  /**
   * UserIDToAffinityScoreMap witholds a mapping of all user profiles who left
   * an affinity score
   * @gotag: bson:"userIdToAffinityScoreMap"
   */
  userIdToAffinityScoreMap: { [key: number]: number };
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType: AccountType;
  /**
   * a map of user ids to reactions left by users
   * @gotag: bson:"userIdToReactionMap"
   */
  userIdToReactionMap: { [key: number]: Reaction };
  /**
   * the report count for this comment reply
   * @gotag: bson:"userIdToReportsMap"
   */
  userIdToReportsMap: { [key: number]: number };
}

export interface CommentReply_ExtraEntry {
  key: string;
  value: string;
}

export interface CommentReply_UserIdToAffinityScoreMapEntry {
  key: number;
  value: number;
}

export interface CommentReply_UserIdToReactionMapEntry {
  key: number;
  value: Reaction;
}

export interface CommentReply_UserIdToReportsMapEntry {
  key: number;
  value: number;
}

function createBaseContentInsights(): ContentInsights {
  return {
    sentenceCount: 0,
    wordCount: 0,
    language: '',
    languageConfidence: 0,
    entities: [],
    sentiment: undefined,
  };
}

export const ContentInsights = {
  fromJSON(object: any): ContentInsights {
    return {
      sentenceCount: isSet(object.sentenceCount) ? Number(object.sentenceCount) : 0,
      wordCount: isSet(object.wordCount) ? Number(object.wordCount) : 0,
      language: isSet(object.language) ? String(object.language) : '',
      languageConfidence: isSet(object.languageConfidence) ? Number(object.languageConfidence) : 0,
      entities: Array.isArray(object?.entities)
        ? object.entities.map((e: any) => Entities.fromJSON(e))
        : [],
      sentiment: isSet(object.sentiment) ? Sentiment.fromJSON(object.sentiment) : undefined,
    };
  },

  toJSON(message: ContentInsights): unknown {
    const obj: any = {};
    message.sentenceCount !== undefined && (obj.sentenceCount = Math.round(message.sentenceCount));
    message.wordCount !== undefined && (obj.wordCount = Math.round(message.wordCount));
    message.language !== undefined && (obj.language = message.language);
    message.languageConfidence !== undefined &&
      (obj.languageConfidence = message.languageConfidence);
    if (message.entities) {
      obj.entities = message.entities.map((e) => (e ? Entities.toJSON(e) : undefined));
    } else {
      obj.entities = [];
    }
    message.sentiment !== undefined &&
      (obj.sentiment = message.sentiment ? Sentiment.toJSON(message.sentiment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentInsights>, I>>(base?: I): ContentInsights {
    return ContentInsights.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentInsights>, I>>(object: I): ContentInsights {
    const message = createBaseContentInsights();
    message.sentenceCount = object.sentenceCount ?? 0;
    message.wordCount = object.wordCount ?? 0;
    message.language = object.language ?? '';
    message.languageConfidence = object.languageConfidence ?? 0;
    message.entities = object.entities?.map((e) => Entities.fromPartial(e)) || [];
    message.sentiment =
      object.sentiment !== undefined && object.sentiment !== null
        ? Sentiment.fromPartial(object.sentiment)
        : undefined;
    return message;
  },
};

function createBaseEntities(): Entities {
  return { text: '', label: '' };
}

export const Entities = {
  fromJSON(object: any): Entities {
    return {
      text: isSet(object.text) ? String(object.text) : '',
      label: isSet(object.label) ? String(object.label) : '',
    };
  },

  toJSON(message: Entities): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  create<I extends Exact<DeepPartial<Entities>, I>>(base?: I): Entities {
    return Entities.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Entities>, I>>(object: I): Entities {
    const message = createBaseEntities();
    message.text = object.text ?? '';
    message.label = object.label ?? '';
    return message;
  },
};

function createBaseSentiment(): Sentiment {
  return { negative: 0, neutral: 0, positive: 0, compound: 0 };
}

export const Sentiment = {
  fromJSON(object: any): Sentiment {
    return {
      negative: isSet(object.negative) ? Number(object.negative) : 0,
      neutral: isSet(object.neutral) ? Number(object.neutral) : 0,
      positive: isSet(object.positive) ? Number(object.positive) : 0,
      compound: isSet(object.compound) ? Number(object.compound) : 0,
    };
  },

  toJSON(message: Sentiment): unknown {
    const obj: any = {};
    message.negative !== undefined && (obj.negative = message.negative);
    message.neutral !== undefined && (obj.neutral = message.neutral);
    message.positive !== undefined && (obj.positive = message.positive);
    message.compound !== undefined && (obj.compound = message.compound);
    return obj;
  },

  create<I extends Exact<DeepPartial<Sentiment>, I>>(base?: I): Sentiment {
    return Sentiment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Sentiment>, I>>(object: I): Sentiment {
    const message = createBaseSentiment();
    message.negative = object.negative ?? 0;
    message.neutral = object.neutral ?? 0;
    message.positive = object.positive ?? 0;
    message.compound = object.compound ?? 0;
    return message;
  },
};

function createBaseMediaMetadata(): MediaMetadata {
  return { id: '', resize: 0, crop: 0, imageWidth: 0, imageHeight: 0, type: 0 };
}

export const MediaMetadata = {
  fromJSON(object: any): MediaMetadata {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      resize: isSet(object.resize) ? mediaResizeFromJSON(object.resize) : 0,
      crop: isSet(object.crop) ? mediaCropFromJSON(object.crop) : 0,
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
      imageHeight: isSet(object.imageHeight) ? Number(object.imageHeight) : 0,
      type: isSet(object.type) ? mediaTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: MediaMetadata): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.resize !== undefined && (obj.resize = mediaResizeToJSON(message.resize));
    message.crop !== undefined && (obj.crop = mediaCropToJSON(message.crop));
    message.imageWidth !== undefined && (obj.imageWidth = Math.round(message.imageWidth));
    message.imageHeight !== undefined && (obj.imageHeight = Math.round(message.imageHeight));
    message.type !== undefined && (obj.type = mediaTypeToJSON(message.type));
    return obj;
  },

  create<I extends Exact<DeepPartial<MediaMetadata>, I>>(base?: I): MediaMetadata {
    return MediaMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MediaMetadata>, I>>(object: I): MediaMetadata {
    const message = createBaseMediaMetadata();
    message.id = object.id ?? '';
    message.resize = object.resize ?? 0;
    message.crop = object.crop ?? 0;
    message.imageWidth = object.imageWidth ?? 0;
    message.imageHeight = object.imageHeight ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseMedia(): Media {
  return { id: '', createdAt: '', link: '', metadata: undefined };
}

export const Media = {
  fromJSON(object: any): Media {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      link: isSet(object.link) ? String(object.link) : '',
      metadata: isSet(object.metadata) ? MediaMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: Media): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.link !== undefined && (obj.link = message.link);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? MediaMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Media>, I>>(base?: I): Media {
    return Media.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Media>, I>>(object: I): Media {
    const message = createBaseMedia();
    message.id = object.id ?? '';
    message.createdAt = object.createdAt ?? '';
    message.link = object.link ?? '';
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? MediaMetadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

function createBasePost(): Post {
  return {
    id: '',
    createdAt: '',
    action: 0,
    content: '',
    mentions: [],
    hashtags: [],
    media: undefined,
    extra: {},
    comments: [],
    simfinyPlatformUserId: 0,
    profileId: 0,
    title: '',
    tags: [],
    topicName: '',
    authorUsername: '',
    authorProfileImage: '',
    affinityScore: 0,
    qualityScore: 0,
    userIdToAffinityScoreMap: {},
    insights: undefined,
    userIdToReportsMap: {},
    readingTime: '',
    backgroundImageUrl: '',
    authorAccountType: 0,
    notes: [],
    thread: undefined,
    threadParticipantType: 0,
    userIdToReactionMap: {},
    aiGeneratedQuestionResponse: '',
    published: false,
  };
}

export const Post = {
  fromJSON(object: any): Post {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      action: isSet(object.action) ? postTypeFromJSON(object.action) : 0,
      content: isSet(object.content) ? String(object.content) : '',
      mentions: Array.isArray(object?.mentions) ? object.mentions.map((e: any) => String(e)) : [],
      hashtags: Array.isArray(object?.hashtags) ? object.hashtags.map((e: any) => String(e)) : [],
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      comments: Array.isArray(object?.comments)
        ? object.comments.map((e: any) => Comment.fromJSON(e))
        : [],
      simfinyPlatformUserId: isSet(object.simfinyPlatformUserId)
        ? Number(object.simfinyPlatformUserId)
        : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      title: isSet(object.title) ? String(object.title) : '',
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      topicName: isSet(object.topicName) ? String(object.topicName) : '',
      authorUsername: isSet(object.authorUsername) ? String(object.authorUsername) : '',
      authorProfileImage: isSet(object.authorProfileImage) ? String(object.authorProfileImage) : '',
      affinityScore: isSet(object.affinityScore) ? Number(object.affinityScore) : 0,
      qualityScore: isSet(object.qualityScore) ? Number(object.qualityScore) : 0,
      userIdToAffinityScoreMap: isObject(object.userIdToAffinityScoreMap)
        ? Object.entries(object.userIdToAffinityScoreMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      insights: isSet(object.insights) ? ContentInsights.fromJSON(object.insights) : undefined,
      userIdToReportsMap: isObject(object.userIdToReportsMap)
        ? Object.entries(object.userIdToReportsMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      readingTime: isSet(object.readingTime) ? String(object.readingTime) : '',
      backgroundImageUrl: isSet(object.backgroundImageUrl) ? String(object.backgroundImageUrl) : '',
      authorAccountType: isSet(object.authorAccountType)
        ? accountTypeFromJSON(object.authorAccountType)
        : 0,
      notes: Array.isArray(object?.notes) ? object.notes.map((e: any) => Note.fromJSON(e)) : [],
      thread: isSet(object.thread) ? Thread.fromJSON(object.thread) : undefined,
      threadParticipantType: isSet(object.threadParticipantType)
        ? threadParticipantTypeFromJSON(object.threadParticipantType)
        : 0,
      userIdToReactionMap: isObject(object.userIdToReactionMap)
        ? Object.entries(object.userIdToReactionMap).reduce<{
            [key: number]: Reaction;
          }>((acc, [key, value]) => {
            acc[Number(key)] = reactionFromJSON(value);
            return acc;
          }, {})
        : {},
      aiGeneratedQuestionResponse: isSet(object.aiGeneratedQuestionResponse)
        ? String(object.aiGeneratedQuestionResponse)
        : '',
        published: isSet(object.published) ? Boolean(object.published) : false,
    };
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.action !== undefined && (obj.action = postTypeToJSON(message.action));
    message.content !== undefined && (obj.content = message.content);
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) => e);
    } else {
      obj.mentions = [];
    }
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e);
    } else {
      obj.hashtags = [];
    }
    message.media !== undefined &&
      (obj.media = message.media ? Media.toJSON(message.media) : undefined);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    if (message.comments) {
      obj.comments = message.comments.map((e) => (e ? Comment.toJSON(e) : undefined));
    } else {
      obj.comments = [];
    }
    message.simfinyPlatformUserId !== undefined &&
      (obj.simfinyPlatformUserId = Math.round(message.simfinyPlatformUserId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    message.title !== undefined && (obj.title = message.title);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.topicName !== undefined && (obj.topicName = message.topicName);
    message.authorUsername !== undefined && (obj.authorUsername = message.authorUsername);
    message.authorProfileImage !== undefined &&
      (obj.authorProfileImage = message.authorProfileImage);
    message.affinityScore !== undefined && (obj.affinityScore = Math.round(message.affinityScore));
    message.qualityScore !== undefined && (obj.qualityScore = Math.round(message.qualityScore));
    obj.userIdToAffinityScoreMap = {};
    if (message.userIdToAffinityScoreMap) {
      Object.entries(message.userIdToAffinityScoreMap).forEach(([k, v]) => {
        obj.userIdToAffinityScoreMap[k] = Math.round(v);
      });
    }
    message.insights !== undefined &&
      (obj.insights = message.insights ? ContentInsights.toJSON(message.insights) : undefined);
    obj.userIdToReportsMap = {};
    if (message.userIdToReportsMap) {
      Object.entries(message.userIdToReportsMap).forEach(([k, v]) => {
        obj.userIdToReportsMap[k] = Math.round(v);
      });
    }
    message.readingTime !== undefined && (obj.readingTime = message.readingTime);
    message.backgroundImageUrl !== undefined &&
      (obj.backgroundImageUrl = message.backgroundImageUrl);
    message.authorAccountType !== undefined &&
      (obj.authorAccountType = accountTypeToJSON(message.authorAccountType));
    if (message.notes) {
      obj.notes = message.notes.map((e) => (e ? Note.toJSON(e) : undefined));
    } else {
      obj.notes = [];
    }
    message.thread !== undefined &&
      (obj.thread = message.thread ? Thread.toJSON(message.thread) : undefined);
    message.threadParticipantType !== undefined &&
      (obj.threadParticipantType = threadParticipantTypeToJSON(message.threadParticipantType));
    obj.userIdToReactionMap = {};
    if (message.userIdToReactionMap) {
      Object.entries(message.userIdToReactionMap).forEach(([k, v]) => {
        obj.userIdToReactionMap[k] = reactionToJSON(v);
      });
    }
    message.aiGeneratedQuestionResponse !== undefined &&
      (obj.aiGeneratedQuestionResponse = message.aiGeneratedQuestionResponse);
    return obj;
  },

  create<I extends Exact<DeepPartial<Post>, I>>(base?: I): Post {
    return Post.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Post>, I>>(object: I): Post {
    const message = createBasePost();
    message.id = object.id ?? '';
    message.createdAt = object.createdAt ?? '';
    message.action = object.action ?? 0;
    message.content = object.content ?? '';
    message.mentions = object.mentions?.map((e) => e) || [];
    message.hashtags = object.hashtags?.map((e) => e) || [];
    message.media =
      object.media !== undefined && object.media !== null
        ? Media.fromPartial(object.media)
        : undefined;
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.comments = object.comments?.map((e) => Comment.fromPartial(e)) || [];
    message.simfinyPlatformUserId = object.simfinyPlatformUserId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.title = object.title ?? '';
    message.tags = object.tags?.map((e) => e) || [];
    message.topicName = object.topicName ?? '';
    message.authorUsername = object.authorUsername ?? '';
    message.authorProfileImage = object.authorProfileImage ?? '';
    message.affinityScore = object.affinityScore ?? 0;
    message.qualityScore = object.qualityScore ?? 0;
    message.userIdToAffinityScoreMap = Object.entries(
      object.userIdToAffinityScoreMap ?? {}
    ).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.insights =
      object.insights !== undefined && object.insights !== null
        ? ContentInsights.fromPartial(object.insights)
        : undefined;
    message.userIdToReportsMap = Object.entries(object.userIdToReportsMap ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.readingTime = object.readingTime ?? '';
    message.backgroundImageUrl = object.backgroundImageUrl ?? '';
    message.authorAccountType = object.authorAccountType ?? 0;
    message.notes = object.notes?.map((e) => Note.fromPartial(e)) || [];
    message.thread =
      object.thread !== undefined && object.thread !== null
        ? Thread.fromPartial(object.thread)
        : undefined;
    message.threadParticipantType = object.threadParticipantType ?? 0;
    message.userIdToReactionMap = Object.entries(object.userIdToReactionMap ?? {}).reduce<{
      [key: number]: Reaction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = value as Reaction;
      }
      return acc;
    }, {});
    message.aiGeneratedQuestionResponse = object.aiGeneratedQuestionResponse ?? '';
    return message;
  },
};

function createBasePost_ExtraEntry(): Post_ExtraEntry {
  return { key: '', value: '' };
}

export const Post_ExtraEntry = {
  fromJSON(object: any): Post_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: Post_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Post_ExtraEntry>, I>>(base?: I): Post_ExtraEntry {
    return Post_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Post_ExtraEntry>, I>>(object: I): Post_ExtraEntry {
    const message = createBasePost_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBasePost_UserIdToAffinityScoreMapEntry(): Post_UserIdToAffinityScoreMapEntry {
  return { key: 0, value: 0 };
}

export const Post_UserIdToAffinityScoreMapEntry = {
  fromJSON(object: any): Post_UserIdToAffinityScoreMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Post_UserIdToAffinityScoreMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Post_UserIdToAffinityScoreMapEntry>, I>>(
    base?: I
  ): Post_UserIdToAffinityScoreMapEntry {
    return Post_UserIdToAffinityScoreMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Post_UserIdToAffinityScoreMapEntry>, I>>(
    object: I
  ): Post_UserIdToAffinityScoreMapEntry {
    const message = createBasePost_UserIdToAffinityScoreMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePost_UserIdToReportsMapEntry(): Post_UserIdToReportsMapEntry {
  return { key: 0, value: 0 };
}

export const Post_UserIdToReportsMapEntry = {
  fromJSON(object: any): Post_UserIdToReportsMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Post_UserIdToReportsMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Post_UserIdToReportsMapEntry>, I>>(
    base?: I
  ): Post_UserIdToReportsMapEntry {
    return Post_UserIdToReportsMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Post_UserIdToReportsMapEntry>, I>>(
    object: I
  ): Post_UserIdToReportsMapEntry {
    const message = createBasePost_UserIdToReportsMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePost_UserIdToReactionMapEntry(): Post_UserIdToReactionMapEntry {
  return { key: 0, value: 0 };
}

export const Post_UserIdToReactionMapEntry = {
  fromJSON(object: any): Post_UserIdToReactionMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? reactionFromJSON(object.value) : 0,
    };
  },

  toJSON(message: Post_UserIdToReactionMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = reactionToJSON(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Post_UserIdToReactionMapEntry>, I>>(
    base?: I
  ): Post_UserIdToReactionMapEntry {
    return Post_UserIdToReactionMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Post_UserIdToReactionMapEntry>, I>>(
    object: I
  ): Post_UserIdToReactionMapEntry {
    const message = createBasePost_UserIdToReactionMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePollPost(): PollPost {
  return {
    id: '',
    createdAt: '',
    action: 0,
    content: '',
    mentions: [],
    hashtags: [],
    media: undefined,
    extra: {},
    comments: [],
    simfinyPlatformUserId: 0,
    profileId: 0,
    title: '',
    tags: [],
    topicName: '',
    authorUsername: '',
    authorProfileImage: '',
    affinityScore: 0,
    qualityScore: 0,
    userIdToAffinityScoreMap: {},
    insights: undefined,
    userIdToReportsMap: {},
    backgroundImageUrl: '',
    authorAccountType: 0,
    userIdToPollResponsesMap: {},
    pollOptions: [],
    pollDistribution: {},
    pollEndDate: undefined,
    notes: [],
    thread: undefined,
    threadParticipantType: 0,
    userIdToReactionMap: {},
  };
}

export const PollPost = {
  fromJSON(object: any): PollPost {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      action: isSet(object.action) ? postTypeFromJSON(object.action) : 0,
      content: isSet(object.content) ? String(object.content) : '',
      mentions: Array.isArray(object?.mentions) ? object.mentions.map((e: any) => String(e)) : [],
      hashtags: Array.isArray(object?.hashtags) ? object.hashtags.map((e: any) => String(e)) : [],
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      comments: Array.isArray(object?.comments)
        ? object.comments.map((e: any) => Comment.fromJSON(e))
        : [],
      simfinyPlatformUserId: isSet(object.simfinyPlatformUserId)
        ? Number(object.simfinyPlatformUserId)
        : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      title: isSet(object.title) ? String(object.title) : '',
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      topicName: isSet(object.topicName) ? String(object.topicName) : '',
      authorUsername: isSet(object.authorUsername) ? String(object.authorUsername) : '',
      authorProfileImage: isSet(object.authorProfileImage) ? String(object.authorProfileImage) : '',
      affinityScore: isSet(object.affinityScore) ? Number(object.affinityScore) : 0,
      qualityScore: isSet(object.qualityScore) ? Number(object.qualityScore) : 0,
      userIdToAffinityScoreMap: isObject(object.userIdToAffinityScoreMap)
        ? Object.entries(object.userIdToAffinityScoreMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      insights: isSet(object.insights) ? ContentInsights.fromJSON(object.insights) : undefined,
      userIdToReportsMap: isObject(object.userIdToReportsMap)
        ? Object.entries(object.userIdToReportsMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      backgroundImageUrl: isSet(object.backgroundImageUrl) ? String(object.backgroundImageUrl) : '',
      authorAccountType: isSet(object.authorAccountType)
        ? accountTypeFromJSON(object.authorAccountType)
        : 0,
      userIdToPollResponsesMap: isObject(object.userIdToPollResponsesMap)
        ? Object.entries(object.userIdToPollResponsesMap).reduce<{
            [key: number]: PollResponse;
          }>((acc, [key, value]) => {
            acc[Number(key)] = PollResponse.fromJSON(value);
            return acc;
          }, {})
        : {},
      pollOptions: Array.isArray(object?.pollOptions)
        ? object.pollOptions.map((e: any) => String(e))
        : [],
      pollDistribution: isObject(object.pollDistribution)
        ? Object.entries(object.pollDistribution).reduce<{
            [key: string]: number;
          }>((acc, [key, value]) => {
            acc[key] = Number(value);
            return acc;
          }, {})
        : {},
      pollEndDate: object.pollEndDate,
      notes: Array.isArray(object?.notes) ? object.notes.map((e: any) => Note.fromJSON(e)) : [],
      thread: isSet(object.thread) ? Thread.fromJSON(object.thread) : undefined,
      threadParticipantType: isSet(object.threadParticipantType)
        ? threadParticipantTypeFromJSON(object.threadParticipantType)
        : 0,
      userIdToReactionMap: isObject(object.userIdToReactionMap)
        ? Object.entries(object.userIdToReactionMap).reduce<{
            [key: number]: Reaction;
          }>((acc, [key, value]) => {
            acc[Number(key)] = reactionFromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: PollPost): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.action !== undefined && (obj.action = postTypeToJSON(message.action));
    message.content !== undefined && (obj.content = message.content);
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) => e);
    } else {
      obj.mentions = [];
    }
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e);
    } else {
      obj.hashtags = [];
    }
    message.media !== undefined &&
      (obj.media = message.media ? Media.toJSON(message.media) : undefined);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    if (message.comments) {
      obj.comments = message.comments.map((e) => (e ? Comment.toJSON(e) : undefined));
    } else {
      obj.comments = [];
    }
    message.simfinyPlatformUserId !== undefined &&
      (obj.simfinyPlatformUserId = Math.round(message.simfinyPlatformUserId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    message.title !== undefined && (obj.title = message.title);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.topicName !== undefined && (obj.topicName = message.topicName);
    message.authorUsername !== undefined && (obj.authorUsername = message.authorUsername);
    message.authorProfileImage !== undefined &&
      (obj.authorProfileImage = message.authorProfileImage);
    message.affinityScore !== undefined && (obj.affinityScore = Math.round(message.affinityScore));
    message.qualityScore !== undefined && (obj.qualityScore = Math.round(message.qualityScore));
    obj.userIdToAffinityScoreMap = {};
    if (message.userIdToAffinityScoreMap) {
      Object.entries(message.userIdToAffinityScoreMap).forEach(([k, v]) => {
        obj.userIdToAffinityScoreMap[k] = Math.round(v);
      });
    }
    message.insights !== undefined &&
      (obj.insights = message.insights ? ContentInsights.toJSON(message.insights) : undefined);
    obj.userIdToReportsMap = {};
    if (message.userIdToReportsMap) {
      Object.entries(message.userIdToReportsMap).forEach(([k, v]) => {
        obj.userIdToReportsMap[k] = Math.round(v);
      });
    }
    message.backgroundImageUrl !== undefined &&
      (obj.backgroundImageUrl = message.backgroundImageUrl);
    message.authorAccountType !== undefined &&
      (obj.authorAccountType = accountTypeToJSON(message.authorAccountType));
    obj.userIdToPollResponsesMap = {};
    if (message.userIdToPollResponsesMap) {
      Object.entries(message.userIdToPollResponsesMap).forEach(([k, v]) => {
        obj.userIdToPollResponsesMap[k] = PollResponse.toJSON(v);
      });
    }
    if (message.pollOptions) {
      obj.pollOptions = message.pollOptions.map((e) => e);
    } else {
      obj.pollOptions = [];
    }
    obj.pollDistribution = {};
    if (message.pollDistribution) {
      Object.entries(message.pollDistribution).forEach(([k, v]) => {
        obj.pollDistribution[k] = v;
      });
    }
    message.pollEndDate !== undefined && (obj.pollEndDate = message.pollEndDate.toISOString());
    if (message.notes) {
      obj.notes = message.notes.map((e) => (e ? Note.toJSON(e) : undefined));
    } else {
      obj.notes = [];
    }
    message.thread !== undefined &&
      (obj.thread = message.thread ? Thread.toJSON(message.thread) : undefined);
    message.threadParticipantType !== undefined &&
      (obj.threadParticipantType = threadParticipantTypeToJSON(message.threadParticipantType));
    obj.userIdToReactionMap = {};
    if (message.userIdToReactionMap) {
      Object.entries(message.userIdToReactionMap).forEach(([k, v]) => {
        obj.userIdToReactionMap[k] = reactionToJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PollPost>, I>>(base?: I): PollPost {
    return PollPost.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollPost>, I>>(object: I): PollPost {
    const message = createBasePollPost();
    message.id = object.id ?? '';
    message.createdAt = object.createdAt ?? '';
    message.action = object.action ?? 0;
    message.content = object.content ?? '';
    message.mentions = object.mentions?.map((e) => e) || [];
    message.hashtags = object.hashtags?.map((e) => e) || [];
    message.media =
      object.media !== undefined && object.media !== null
        ? Media.fromPartial(object.media)
        : undefined;
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.comments = object.comments?.map((e) => Comment.fromPartial(e)) || [];
    message.simfinyPlatformUserId = object.simfinyPlatformUserId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.title = object.title ?? '';
    message.tags = object.tags?.map((e) => e) || [];
    message.topicName = object.topicName ?? '';
    message.authorUsername = object.authorUsername ?? '';
    message.authorProfileImage = object.authorProfileImage ?? '';
    message.affinityScore = object.affinityScore ?? 0;
    message.qualityScore = object.qualityScore ?? 0;
    message.userIdToAffinityScoreMap = Object.entries(
      object.userIdToAffinityScoreMap ?? {}
    ).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.insights =
      object.insights !== undefined && object.insights !== null
        ? ContentInsights.fromPartial(object.insights)
        : undefined;
    message.userIdToReportsMap = Object.entries(object.userIdToReportsMap ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.backgroundImageUrl = object.backgroundImageUrl ?? '';
    message.authorAccountType = object.authorAccountType ?? 0;
    message.userIdToPollResponsesMap = Object.entries(
      object.userIdToPollResponsesMap ?? {}
    ).reduce<{ [key: number]: PollResponse }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = PollResponse.fromPartial(value);
      }
      return acc;
    }, {});
    message.pollOptions = object.pollOptions?.map((e) => e) || [];
    message.pollDistribution = Object.entries(object.pollDistribution ?? {}).reduce<{
      [key: string]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    message.pollEndDate = object.pollEndDate ?? undefined;
    message.notes = object.notes?.map((e) => Note.fromPartial(e)) || [];
    message.thread =
      object.thread !== undefined && object.thread !== null
        ? Thread.fromPartial(object.thread)
        : undefined;
    message.threadParticipantType = object.threadParticipantType ?? 0;
    message.userIdToReactionMap = Object.entries(object.userIdToReactionMap ?? {}).reduce<{
      [key: number]: Reaction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = value as Reaction;
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePollPost_ExtraEntry(): PollPost_ExtraEntry {
  return { key: '', value: '' };
}

export const PollPost_ExtraEntry = {
  fromJSON(object: any): PollPost_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: PollPost_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<PollPost_ExtraEntry>, I>>(base?: I): PollPost_ExtraEntry {
    return PollPost_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollPost_ExtraEntry>, I>>(
    object: I
  ): PollPost_ExtraEntry {
    const message = createBasePollPost_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBasePollPost_UserIdToAffinityScoreMapEntry(): PollPost_UserIdToAffinityScoreMapEntry {
  return { key: 0, value: 0 };
}

export const PollPost_UserIdToAffinityScoreMapEntry = {
  fromJSON(object: any): PollPost_UserIdToAffinityScoreMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: PollPost_UserIdToAffinityScoreMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<PollPost_UserIdToAffinityScoreMapEntry>, I>>(
    base?: I
  ): PollPost_UserIdToAffinityScoreMapEntry {
    return PollPost_UserIdToAffinityScoreMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollPost_UserIdToAffinityScoreMapEntry>, I>>(
    object: I
  ): PollPost_UserIdToAffinityScoreMapEntry {
    const message = createBasePollPost_UserIdToAffinityScoreMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePollPost_UserIdToReportsMapEntry(): PollPost_UserIdToReportsMapEntry {
  return { key: 0, value: 0 };
}

export const PollPost_UserIdToReportsMapEntry = {
  fromJSON(object: any): PollPost_UserIdToReportsMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: PollPost_UserIdToReportsMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<PollPost_UserIdToReportsMapEntry>, I>>(
    base?: I
  ): PollPost_UserIdToReportsMapEntry {
    return PollPost_UserIdToReportsMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollPost_UserIdToReportsMapEntry>, I>>(
    object: I
  ): PollPost_UserIdToReportsMapEntry {
    const message = createBasePollPost_UserIdToReportsMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePollPost_UserIdToPollResponsesMapEntry(): PollPost_UserIdToPollResponsesMapEntry {
  return { key: 0, value: undefined };
}

export const PollPost_UserIdToPollResponsesMapEntry = {
  fromJSON(object: any): PollPost_UserIdToPollResponsesMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? PollResponse.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PollPost_UserIdToPollResponsesMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined &&
      (obj.value = message.value ? PollResponse.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PollPost_UserIdToPollResponsesMapEntry>, I>>(
    base?: I
  ): PollPost_UserIdToPollResponsesMapEntry {
    return PollPost_UserIdToPollResponsesMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollPost_UserIdToPollResponsesMapEntry>, I>>(
    object: I
  ): PollPost_UserIdToPollResponsesMapEntry {
    const message = createBasePollPost_UserIdToPollResponsesMapEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? PollResponse.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBasePollPost_PollDistributionEntry(): PollPost_PollDistributionEntry {
  return { key: '', value: 0 };
}

export const PollPost_PollDistributionEntry = {
  fromJSON(object: any): PollPost_PollDistributionEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: PollPost_PollDistributionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<PollPost_PollDistributionEntry>, I>>(
    base?: I
  ): PollPost_PollDistributionEntry {
    return PollPost_PollDistributionEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollPost_PollDistributionEntry>, I>>(
    object: I
  ): PollPost_PollDistributionEntry {
    const message = createBasePollPost_PollDistributionEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePollPost_UserIdToReactionMapEntry(): PollPost_UserIdToReactionMapEntry {
  return { key: 0, value: 0 };
}

export const PollPost_UserIdToReactionMapEntry = {
  fromJSON(object: any): PollPost_UserIdToReactionMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? reactionFromJSON(object.value) : 0,
    };
  },

  toJSON(message: PollPost_UserIdToReactionMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = reactionToJSON(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<PollPost_UserIdToReactionMapEntry>, I>>(
    base?: I
  ): PollPost_UserIdToReactionMapEntry {
    return PollPost_UserIdToReactionMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollPost_UserIdToReactionMapEntry>, I>>(
    object: I
  ): PollPost_UserIdToReactionMapEntry {
    const message = createBasePollPost_UserIdToReactionMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePollResponse(): PollResponse {
  return { id: '', userId: 0, responseValue: '', responseIdx: 0 };
}

export const PollResponse = {
  fromJSON(object: any): PollResponse {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      responseValue: isSet(object.responseValue) ? String(object.responseValue) : '',
      responseIdx: isSet(object.responseIdx) ? Number(object.responseIdx) : 0,
    };
  },

  toJSON(message: PollResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.responseValue !== undefined && (obj.responseValue = message.responseValue);
    message.responseIdx !== undefined && (obj.responseIdx = Math.round(message.responseIdx));
    return obj;
  },

  create<I extends Exact<DeepPartial<PollResponse>, I>>(base?: I): PollResponse {
    return PollResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PollResponse>, I>>(object: I): PollResponse {
    const message = createBasePollResponse();
    message.id = object.id ?? '';
    message.userId = object.userId ?? 0;
    message.responseValue = object.responseValue ?? '';
    message.responseIdx = object.responseIdx ?? 0;
    return message;
  },
};

function createBaseSharedPost(): SharedPost {
  return {
    id: '',
    originalPostId: '',
    originalAuthorUsername: '',
    createdAt: '',
    content: '',
    mentions: [],
    hashtags: [],
    extra: {},
    comments: [],
    simfinyPlatformUserId: 0,
    profileId: 0,
    tags: [],
    authorUsername: '',
    affinityScore: 0,
    qualityScore: 0,
    userIdToAffinityScoreMap: {},
    userIdToReportsMap: {},
    notes: [],
    thread: undefined,
    authorAccountType: 0,
    userIdToReactionMap: {},
    action: 0,
    originalPostUserProfileId: 0,
    originalPostUserSimfinyPlaformId: 0,
    originalPostAction: 0,
  };
}

export const SharedPost = {
  fromJSON(object: any): SharedPost {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      originalPostId: isSet(object.originalPostId) ? String(object.originalPostId) : '',
      originalAuthorUsername: isSet(object.originalAuthorUsername)
        ? String(object.originalAuthorUsername)
        : '',
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      content: isSet(object.content) ? String(object.content) : '',
      mentions: Array.isArray(object?.mentions) ? object.mentions.map((e: any) => String(e)) : [],
      hashtags: Array.isArray(object?.hashtags) ? object.hashtags.map((e: any) => String(e)) : [],
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      comments: Array.isArray(object?.comments)
        ? object.comments.map((e: any) => Comment.fromJSON(e))
        : [],
      simfinyPlatformUserId: isSet(object.simfinyPlatformUserId)
        ? Number(object.simfinyPlatformUserId)
        : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      authorUsername: isSet(object.authorUsername) ? String(object.authorUsername) : '',
      affinityScore: isSet(object.affinityScore) ? Number(object.affinityScore) : 0,
      qualityScore: isSet(object.qualityScore) ? Number(object.qualityScore) : 0,
      userIdToAffinityScoreMap: isObject(object.userIdToAffinityScoreMap)
        ? Object.entries(object.userIdToAffinityScoreMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      userIdToReportsMap: isObject(object.userIdToReportsMap)
        ? Object.entries(object.userIdToReportsMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      notes: Array.isArray(object?.notes) ? object.notes.map((e: any) => Note.fromJSON(e)) : [],
      thread: isSet(object.thread) ? Thread.fromJSON(object.thread) : undefined,
      authorAccountType: isSet(object.authorAccountType)
        ? accountTypeFromJSON(object.authorAccountType)
        : 0,
      userIdToReactionMap: isObject(object.userIdToReactionMap)
        ? Object.entries(object.userIdToReactionMap).reduce<{
            [key: number]: Reaction;
          }>((acc, [key, value]) => {
            acc[Number(key)] = reactionFromJSON(value);
            return acc;
          }, {})
        : {},
      action: isSet(object.action) ? postTypeFromJSON(object.action) : 0,
      originalPostUserProfileId: isSet(object.originalPostUserProfileId)
        ? Number(object.originalPostUserProfileId)
        : 0,
      originalPostUserSimfinyPlaformId: isSet(object.originalPostUserSimfinyPlaformId)
        ? Number(object.originalPostUserSimfinyPlaformId)
        : 0,
      originalPostAction: isSet(object.originalPostAction)
        ? postTypeFromJSON(object.originalPostAction)
        : 0,
    };
  },

  toJSON(message: SharedPost): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.originalPostId !== undefined && (obj.originalPostId = message.originalPostId);
    message.originalAuthorUsername !== undefined &&
      (obj.originalAuthorUsername = message.originalAuthorUsername);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.content !== undefined && (obj.content = message.content);
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) => e);
    } else {
      obj.mentions = [];
    }
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e);
    } else {
      obj.hashtags = [];
    }
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    if (message.comments) {
      obj.comments = message.comments.map((e) => (e ? Comment.toJSON(e) : undefined));
    } else {
      obj.comments = [];
    }
    message.simfinyPlatformUserId !== undefined &&
      (obj.simfinyPlatformUserId = Math.round(message.simfinyPlatformUserId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.authorUsername !== undefined && (obj.authorUsername = message.authorUsername);
    message.affinityScore !== undefined && (obj.affinityScore = Math.round(message.affinityScore));
    message.qualityScore !== undefined && (obj.qualityScore = Math.round(message.qualityScore));
    obj.userIdToAffinityScoreMap = {};
    if (message.userIdToAffinityScoreMap) {
      Object.entries(message.userIdToAffinityScoreMap).forEach(([k, v]) => {
        obj.userIdToAffinityScoreMap[k] = Math.round(v);
      });
    }
    obj.userIdToReportsMap = {};
    if (message.userIdToReportsMap) {
      Object.entries(message.userIdToReportsMap).forEach(([k, v]) => {
        obj.userIdToReportsMap[k] = Math.round(v);
      });
    }
    if (message.notes) {
      obj.notes = message.notes.map((e) => (e ? Note.toJSON(e) : undefined));
    } else {
      obj.notes = [];
    }
    message.thread !== undefined &&
      (obj.thread = message.thread ? Thread.toJSON(message.thread) : undefined);
    message.authorAccountType !== undefined &&
      (obj.authorAccountType = accountTypeToJSON(message.authorAccountType));
    obj.userIdToReactionMap = {};
    if (message.userIdToReactionMap) {
      Object.entries(message.userIdToReactionMap).forEach(([k, v]) => {
        obj.userIdToReactionMap[k] = reactionToJSON(v);
      });
    }
    message.action !== undefined && (obj.action = postTypeToJSON(message.action));
    message.originalPostUserProfileId !== undefined &&
      (obj.originalPostUserProfileId = Math.round(message.originalPostUserProfileId));
    message.originalPostUserSimfinyPlaformId !== undefined &&
      (obj.originalPostUserSimfinyPlaformId = Math.round(message.originalPostUserSimfinyPlaformId));
    message.originalPostAction !== undefined &&
      (obj.originalPostAction = postTypeToJSON(message.originalPostAction));
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedPost>, I>>(base?: I): SharedPost {
    return SharedPost.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SharedPost>, I>>(object: I): SharedPost {
    const message = createBaseSharedPost();
    message.id = object.id ?? '';
    message.originalPostId = object.originalPostId ?? '';
    message.originalAuthorUsername = object.originalAuthorUsername ?? '';
    message.createdAt = object.createdAt ?? '';
    message.content = object.content ?? '';
    message.mentions = object.mentions?.map((e) => e) || [];
    message.hashtags = object.hashtags?.map((e) => e) || [];
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.comments = object.comments?.map((e) => Comment.fromPartial(e)) || [];
    message.simfinyPlatformUserId = object.simfinyPlatformUserId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.authorUsername = object.authorUsername ?? '';
    message.affinityScore = object.affinityScore ?? 0;
    message.qualityScore = object.qualityScore ?? 0;
    message.userIdToAffinityScoreMap = Object.entries(
      object.userIdToAffinityScoreMap ?? {}
    ).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.userIdToReportsMap = Object.entries(object.userIdToReportsMap ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.notes = object.notes?.map((e) => Note.fromPartial(e)) || [];
    message.thread =
      object.thread !== undefined && object.thread !== null
        ? Thread.fromPartial(object.thread)
        : undefined;
    message.authorAccountType = object.authorAccountType ?? 0;
    message.userIdToReactionMap = Object.entries(object.userIdToReactionMap ?? {}).reduce<{
      [key: number]: Reaction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = value as Reaction;
      }
      return acc;
    }, {});
    message.action = object.action ?? 0;
    message.originalPostUserProfileId = object.originalPostUserProfileId ?? 0;
    message.originalPostUserSimfinyPlaformId = object.originalPostUserSimfinyPlaformId ?? 0;
    message.originalPostAction = object.originalPostAction ?? 0;
    return message;
  },
};

function createBaseSharedPost_ExtraEntry(): SharedPost_ExtraEntry {
  return { key: '', value: '' };
}

export const SharedPost_ExtraEntry = {
  fromJSON(object: any): SharedPost_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: SharedPost_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedPost_ExtraEntry>, I>>(base?: I): SharedPost_ExtraEntry {
    return SharedPost_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SharedPost_ExtraEntry>, I>>(
    object: I
  ): SharedPost_ExtraEntry {
    const message = createBaseSharedPost_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseSharedPost_UserIdToAffinityScoreMapEntry(): SharedPost_UserIdToAffinityScoreMapEntry {
  return { key: 0, value: 0 };
}

export const SharedPost_UserIdToAffinityScoreMapEntry = {
  fromJSON(object: any): SharedPost_UserIdToAffinityScoreMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: SharedPost_UserIdToAffinityScoreMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedPost_UserIdToAffinityScoreMapEntry>, I>>(
    base?: I
  ): SharedPost_UserIdToAffinityScoreMapEntry {
    return SharedPost_UserIdToAffinityScoreMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SharedPost_UserIdToAffinityScoreMapEntry>, I>>(
    object: I
  ): SharedPost_UserIdToAffinityScoreMapEntry {
    const message = createBaseSharedPost_UserIdToAffinityScoreMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSharedPost_UserIdToReportsMapEntry(): SharedPost_UserIdToReportsMapEntry {
  return { key: 0, value: 0 };
}

export const SharedPost_UserIdToReportsMapEntry = {
  fromJSON(object: any): SharedPost_UserIdToReportsMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: SharedPost_UserIdToReportsMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedPost_UserIdToReportsMapEntry>, I>>(
    base?: I
  ): SharedPost_UserIdToReportsMapEntry {
    return SharedPost_UserIdToReportsMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SharedPost_UserIdToReportsMapEntry>, I>>(
    object: I
  ): SharedPost_UserIdToReportsMapEntry {
    const message = createBaseSharedPost_UserIdToReportsMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSharedPost_UserIdToReactionMapEntry(): SharedPost_UserIdToReactionMapEntry {
  return { key: 0, value: 0 };
}

export const SharedPost_UserIdToReactionMapEntry = {
  fromJSON(object: any): SharedPost_UserIdToReactionMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? reactionFromJSON(object.value) : 0,
    };
  },

  toJSON(message: SharedPost_UserIdToReactionMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = reactionToJSON(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedPost_UserIdToReactionMapEntry>, I>>(
    base?: I
  ): SharedPost_UserIdToReactionMapEntry {
    return SharedPost_UserIdToReactionMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SharedPost_UserIdToReactionMapEntry>, I>>(
    object: I
  ): SharedPost_UserIdToReactionMapEntry {
    const message = createBaseSharedPost_UserIdToReactionMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseThread(): Thread {
  return {
    id: '',
    postIds: [],
    parentPostId: '',
    createdAt: '',
    updatedAt: '',
  };
}

export const Thread = {
  fromJSON(object: any): Thread {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      postIds: Array.isArray(object?.postIds) ? object.postIds.map((e: any) => String(e)) : [],
      parentPostId: isSet(object.parentPostId) ? String(object.parentPostId) : '',
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : '',
    };
  },

  toJSON(message: Thread): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.postIds) {
      obj.postIds = message.postIds.map((e) => e);
    } else {
      obj.postIds = [];
    }
    message.parentPostId !== undefined && (obj.parentPostId = message.parentPostId);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<Thread>, I>>(base?: I): Thread {
    return Thread.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Thread>, I>>(object: I): Thread {
    const message = createBaseThread();
    message.id = object.id ?? '';
    message.postIds = object.postIds?.map((e) => e) || [];
    message.parentPostId = object.parentPostId ?? '';
    message.createdAt = object.createdAt ?? '';
    message.updatedAt = object.updatedAt ?? '';
    return message;
  },
};

function createBaseNote(): Note {
  return {
    id: '',
    simfinyPlatformUserId: 0,
    profileId: 0,
    media: undefined,
    mentions: [],
    hashtags: [],
    createdAt: '',
    content: '',
    authorAccountType: 0,
  };
}

export const Note = {
  fromJSON(object: any): Note {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      simfinyPlatformUserId: isSet(object.simfinyPlatformUserId)
        ? Number(object.simfinyPlatformUserId)
        : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
      mentions: Array.isArray(object?.mentions) ? object.mentions.map((e: any) => String(e)) : [],
      hashtags: Array.isArray(object?.hashtags) ? object.hashtags.map((e: any) => String(e)) : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      content: isSet(object.content) ? String(object.content) : '',
      authorAccountType: isSet(object.authorAccountType)
        ? accountTypeFromJSON(object.authorAccountType)
        : 0,
    };
  },

  toJSON(message: Note): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.simfinyPlatformUserId !== undefined &&
      (obj.simfinyPlatformUserId = Math.round(message.simfinyPlatformUserId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    message.media !== undefined &&
      (obj.media = message.media ? Media.toJSON(message.media) : undefined);
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) => e);
    } else {
      obj.mentions = [];
    }
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e);
    } else {
      obj.hashtags = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.content !== undefined && (obj.content = message.content);
    message.authorAccountType !== undefined &&
      (obj.authorAccountType = accountTypeToJSON(message.authorAccountType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Note>, I>>(base?: I): Note {
    return Note.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Note>, I>>(object: I): Note {
    const message = createBaseNote();
    message.id = object.id ?? '';
    message.simfinyPlatformUserId = object.simfinyPlatformUserId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.media =
      object.media !== undefined && object.media !== null
        ? Media.fromPartial(object.media)
        : undefined;
    message.mentions = object.mentions?.map((e) => e) || [];
    message.hashtags = object.hashtags?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? '';
    message.content = object.content ?? '';
    message.authorAccountType = object.authorAccountType ?? 0;
    return message;
  },
};

function createBaseComment(): Comment {
  return {
    id: '',
    simfinyPlatformUserId: 0,
    profileId: 0,
    media: undefined,
    mentions: [],
    hashtags: [],
    createdAt: '',
    content: '',
    replies: [],
    extra: {},
    authorUsername: '',
    authorProfileImage: '',
    affinityScore: 0,
    qualityScore: 0,
    userIdToAffinityScoreMap: {},
    userIdToReportsMap: {},
    authorAccountType: 0,
    userIdToReactionMap: {},
    notes: [],
  };
}

export const Comment = {
  fromJSON(object: any): Comment {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      simfinyPlatformUserId: isSet(object.simfinyPlatformUserId)
        ? Number(object.simfinyPlatformUserId)
        : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
      mentions: Array.isArray(object?.mentions) ? object.mentions.map((e: any) => String(e)) : [],
      hashtags: Array.isArray(object?.hashtags) ? object.hashtags.map((e: any) => String(e)) : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      content: isSet(object.content) ? String(object.content) : '',
      replies: Array.isArray(object?.replies)
        ? object.replies.map((e: any) => CommentReply.fromJSON(e))
        : [],
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      authorUsername: isSet(object.authorUsername) ? String(object.authorUsername) : '',
      authorProfileImage: isSet(object.authorProfileImage) ? String(object.authorProfileImage) : '',
      affinityScore: isSet(object.affinityScore) ? Number(object.affinityScore) : 0,
      qualityScore: isSet(object.qualityScore) ? Number(object.qualityScore) : 0,
      userIdToAffinityScoreMap: isObject(object.userIdToAffinityScoreMap)
        ? Object.entries(object.userIdToAffinityScoreMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      userIdToReportsMap: isObject(object.userIdToReportsMap)
        ? Object.entries(object.userIdToReportsMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      authorAccountType: isSet(object.authorAccountType)
        ? accountTypeFromJSON(object.authorAccountType)
        : 0,
      userIdToReactionMap: isObject(object.userIdToReactionMap)
        ? Object.entries(object.userIdToReactionMap).reduce<{
            [key: number]: Reaction;
          }>((acc, [key, value]) => {
            acc[Number(key)] = reactionFromJSON(value);
            return acc;
          }, {})
        : {},
      notes: Array.isArray(object?.notes) ? object.notes.map((e: any) => Note.fromJSON(e)) : [],
    };
  },

  toJSON(message: Comment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.simfinyPlatformUserId !== undefined &&
      (obj.simfinyPlatformUserId = Math.round(message.simfinyPlatformUserId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    message.media !== undefined &&
      (obj.media = message.media ? Media.toJSON(message.media) : undefined);
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) => e);
    } else {
      obj.mentions = [];
    }
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e);
    } else {
      obj.hashtags = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.content !== undefined && (obj.content = message.content);
    if (message.replies) {
      obj.replies = message.replies.map((e) => (e ? CommentReply.toJSON(e) : undefined));
    } else {
      obj.replies = [];
    }
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    message.authorUsername !== undefined && (obj.authorUsername = message.authorUsername);
    message.authorProfileImage !== undefined &&
      (obj.authorProfileImage = message.authorProfileImage);
    message.affinityScore !== undefined && (obj.affinityScore = Math.round(message.affinityScore));
    message.qualityScore !== undefined && (obj.qualityScore = Math.round(message.qualityScore));
    obj.userIdToAffinityScoreMap = {};
    if (message.userIdToAffinityScoreMap) {
      Object.entries(message.userIdToAffinityScoreMap).forEach(([k, v]) => {
        obj.userIdToAffinityScoreMap[k] = Math.round(v);
      });
    }
    obj.userIdToReportsMap = {};
    if (message.userIdToReportsMap) {
      Object.entries(message.userIdToReportsMap).forEach(([k, v]) => {
        obj.userIdToReportsMap[k] = Math.round(v);
      });
    }
    message.authorAccountType !== undefined &&
      (obj.authorAccountType = accountTypeToJSON(message.authorAccountType));
    obj.userIdToReactionMap = {};
    if (message.userIdToReactionMap) {
      Object.entries(message.userIdToReactionMap).forEach(([k, v]) => {
        obj.userIdToReactionMap[k] = reactionToJSON(v);
      });
    }
    if (message.notes) {
      obj.notes = message.notes.map((e) => (e ? Note.toJSON(e) : undefined));
    } else {
      obj.notes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Comment>, I>>(base?: I): Comment {
    return Comment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Comment>, I>>(object: I): Comment {
    const message = createBaseComment();
    message.id = object.id ?? '';
    message.simfinyPlatformUserId = object.simfinyPlatformUserId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.media =
      object.media !== undefined && object.media !== null
        ? Media.fromPartial(object.media)
        : undefined;
    message.mentions = object.mentions?.map((e) => e) || [];
    message.hashtags = object.hashtags?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? '';
    message.content = object.content ?? '';
    message.replies = object.replies?.map((e) => CommentReply.fromPartial(e)) || [];
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
    message.affinityScore = object.affinityScore ?? 0;
    message.qualityScore = object.qualityScore ?? 0;
    message.userIdToAffinityScoreMap = Object.entries(
      object.userIdToAffinityScoreMap ?? {}
    ).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.userIdToReportsMap = Object.entries(object.userIdToReportsMap ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.authorAccountType = object.authorAccountType ?? 0;
    message.userIdToReactionMap = Object.entries(object.userIdToReactionMap ?? {}).reduce<{
      [key: number]: Reaction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = value as Reaction;
      }
      return acc;
    }, {});
    message.notes = object.notes?.map((e) => Note.fromPartial(e)) || [];
    return message;
  },
};

function createBaseComment_ExtraEntry(): Comment_ExtraEntry {
  return { key: '', value: '' };
}

export const Comment_ExtraEntry = {
  fromJSON(object: any): Comment_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: Comment_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Comment_ExtraEntry>, I>>(base?: I): Comment_ExtraEntry {
    return Comment_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Comment_ExtraEntry>, I>>(object: I): Comment_ExtraEntry {
    const message = createBaseComment_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseComment_UserIdToAffinityScoreMapEntry(): Comment_UserIdToAffinityScoreMapEntry {
  return { key: 0, value: 0 };
}

export const Comment_UserIdToAffinityScoreMapEntry = {
  fromJSON(object: any): Comment_UserIdToAffinityScoreMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Comment_UserIdToAffinityScoreMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Comment_UserIdToAffinityScoreMapEntry>, I>>(
    base?: I
  ): Comment_UserIdToAffinityScoreMapEntry {
    return Comment_UserIdToAffinityScoreMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Comment_UserIdToAffinityScoreMapEntry>, I>>(
    object: I
  ): Comment_UserIdToAffinityScoreMapEntry {
    const message = createBaseComment_UserIdToAffinityScoreMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseComment_UserIdToReportsMapEntry(): Comment_UserIdToReportsMapEntry {
  return { key: 0, value: 0 };
}

export const Comment_UserIdToReportsMapEntry = {
  fromJSON(object: any): Comment_UserIdToReportsMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Comment_UserIdToReportsMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Comment_UserIdToReportsMapEntry>, I>>(
    base?: I
  ): Comment_UserIdToReportsMapEntry {
    return Comment_UserIdToReportsMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Comment_UserIdToReportsMapEntry>, I>>(
    object: I
  ): Comment_UserIdToReportsMapEntry {
    const message = createBaseComment_UserIdToReportsMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseComment_UserIdToReactionMapEntry(): Comment_UserIdToReactionMapEntry {
  return { key: 0, value: 0 };
}

export const Comment_UserIdToReactionMapEntry = {
  fromJSON(object: any): Comment_UserIdToReactionMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? reactionFromJSON(object.value) : 0,
    };
  },

  toJSON(message: Comment_UserIdToReactionMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = reactionToJSON(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<Comment_UserIdToReactionMapEntry>, I>>(
    base?: I
  ): Comment_UserIdToReactionMapEntry {
    return Comment_UserIdToReactionMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Comment_UserIdToReactionMapEntry>, I>>(
    object: I
  ): Comment_UserIdToReactionMapEntry {
    const message = createBaseComment_UserIdToReactionMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCommentReply(): CommentReply {
  return {
    id: '',
    simfinyPlatformUserId: 0,
    profileId: 0,
    media: undefined,
    mentions: [],
    hashtags: [],
    createdAt: '',
    content: '',
    extra: {},
    authorUsername: '',
    authorProfileImage: '',
    affinityScore: 0,
    qualityScore: 0,
    userIdToAffinityScoreMap: {},
    authorAccountType: 0,
    userIdToReactionMap: {},
    userIdToReportsMap: {},
  };
}

export const CommentReply = {
  fromJSON(object: any): CommentReply {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      simfinyPlatformUserId: isSet(object.simfinyPlatformUserId)
        ? Number(object.simfinyPlatformUserId)
        : 0,
      profileId: isSet(object.profileId) ? Number(object.profileId) : 0,
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
      mentions: Array.isArray(object?.mentions) ? object.mentions.map((e: any) => String(e)) : [],
      hashtags: Array.isArray(object?.hashtags) ? object.hashtags.map((e: any) => String(e)) : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      content: isSet(object.content) ? String(object.content) : '',
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
          }, {})
        : {},
      authorUsername: isSet(object.authorUsername) ? String(object.authorUsername) : '',
      authorProfileImage: isSet(object.authorProfileImage) ? String(object.authorProfileImage) : '',
      affinityScore: isSet(object.affinityScore) ? Number(object.affinityScore) : 0,
      qualityScore: isSet(object.qualityScore) ? Number(object.qualityScore) : 0,
      userIdToAffinityScoreMap: isObject(object.userIdToAffinityScoreMap)
        ? Object.entries(object.userIdToAffinityScoreMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
      authorAccountType: isSet(object.authorAccountType)
        ? accountTypeFromJSON(object.authorAccountType)
        : 0,
      userIdToReactionMap: isObject(object.userIdToReactionMap)
        ? Object.entries(object.userIdToReactionMap).reduce<{
            [key: number]: Reaction;
          }>((acc, [key, value]) => {
            acc[Number(key)] = reactionFromJSON(value);
            return acc;
          }, {})
        : {},
      userIdToReportsMap: isObject(object.userIdToReportsMap)
        ? Object.entries(object.userIdToReportsMap).reduce<{
            [key: number]: number;
          }>((acc, [key, value]) => {
            acc[Number(key)] = Number(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: CommentReply): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.simfinyPlatformUserId !== undefined &&
      (obj.simfinyPlatformUserId = Math.round(message.simfinyPlatformUserId));
    message.profileId !== undefined && (obj.profileId = Math.round(message.profileId));
    message.media !== undefined &&
      (obj.media = message.media ? Media.toJSON(message.media) : undefined);
    if (message.mentions) {
      obj.mentions = message.mentions.map((e) => e);
    } else {
      obj.mentions = [];
    }
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e);
    } else {
      obj.hashtags = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
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
    message.affinityScore !== undefined && (obj.affinityScore = Math.round(message.affinityScore));
    message.qualityScore !== undefined && (obj.qualityScore = Math.round(message.qualityScore));
    obj.userIdToAffinityScoreMap = {};
    if (message.userIdToAffinityScoreMap) {
      Object.entries(message.userIdToAffinityScoreMap).forEach(([k, v]) => {
        obj.userIdToAffinityScoreMap[k] = Math.round(v);
      });
    }
    message.authorAccountType !== undefined &&
      (obj.authorAccountType = accountTypeToJSON(message.authorAccountType));
    obj.userIdToReactionMap = {};
    if (message.userIdToReactionMap) {
      Object.entries(message.userIdToReactionMap).forEach(([k, v]) => {
        obj.userIdToReactionMap[k] = reactionToJSON(v);
      });
    }
    obj.userIdToReportsMap = {};
    if (message.userIdToReportsMap) {
      Object.entries(message.userIdToReportsMap).forEach(([k, v]) => {
        obj.userIdToReportsMap[k] = Math.round(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommentReply>, I>>(base?: I): CommentReply {
    return CommentReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommentReply>, I>>(object: I): CommentReply {
    const message = createBaseCommentReply();
    message.id = object.id ?? '';
    message.simfinyPlatformUserId = object.simfinyPlatformUserId ?? 0;
    message.profileId = object.profileId ?? 0;
    message.media =
      object.media !== undefined && object.media !== null
        ? Media.fromPartial(object.media)
        : undefined;
    message.mentions = object.mentions?.map((e) => e) || [];
    message.hashtags = object.hashtags?.map((e) => e) || [];
    message.createdAt = object.createdAt ?? '';
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
    message.affinityScore = object.affinityScore ?? 0;
    message.qualityScore = object.qualityScore ?? 0;
    message.userIdToAffinityScoreMap = Object.entries(
      object.userIdToAffinityScoreMap ?? {}
    ).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.authorAccountType = object.authorAccountType ?? 0;
    message.userIdToReactionMap = Object.entries(object.userIdToReactionMap ?? {}).reduce<{
      [key: number]: Reaction;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = value as Reaction;
      }
      return acc;
    }, {});
    message.userIdToReportsMap = Object.entries(object.userIdToReportsMap ?? {}).reduce<{
      [key: number]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCommentReply_ExtraEntry(): CommentReply_ExtraEntry {
  return { key: '', value: '' };
}

export const CommentReply_ExtraEntry = {
  fromJSON(object: any): CommentReply_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? String(object.value) : '',
    };
  },

  toJSON(message: CommentReply_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CommentReply_ExtraEntry>, I>>(
    base?: I
  ): CommentReply_ExtraEntry {
    return CommentReply_ExtraEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommentReply_ExtraEntry>, I>>(
    object: I
  ): CommentReply_ExtraEntry {
    const message = createBaseCommentReply_ExtraEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseCommentReply_UserIdToAffinityScoreMapEntry(): CommentReply_UserIdToAffinityScoreMapEntry {
  return { key: 0, value: 0 };
}

export const CommentReply_UserIdToAffinityScoreMapEntry = {
  fromJSON(object: any): CommentReply_UserIdToAffinityScoreMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CommentReply_UserIdToAffinityScoreMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<CommentReply_UserIdToAffinityScoreMapEntry>, I>>(
    base?: I
  ): CommentReply_UserIdToAffinityScoreMapEntry {
    return CommentReply_UserIdToAffinityScoreMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommentReply_UserIdToAffinityScoreMapEntry>, I>>(
    object: I
  ): CommentReply_UserIdToAffinityScoreMapEntry {
    const message = createBaseCommentReply_UserIdToAffinityScoreMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCommentReply_UserIdToReactionMapEntry(): CommentReply_UserIdToReactionMapEntry {
  return { key: 0, value: 0 };
}

export const CommentReply_UserIdToReactionMapEntry = {
  fromJSON(object: any): CommentReply_UserIdToReactionMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? reactionFromJSON(object.value) : 0,
    };
  },

  toJSON(message: CommentReply_UserIdToReactionMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = reactionToJSON(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<CommentReply_UserIdToReactionMapEntry>, I>>(
    base?: I
  ): CommentReply_UserIdToReactionMapEntry {
    return CommentReply_UserIdToReactionMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommentReply_UserIdToReactionMapEntry>, I>>(
    object: I
  ): CommentReply_UserIdToReactionMapEntry {
    const message = createBaseCommentReply_UserIdToReactionMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCommentReply_UserIdToReportsMapEntry(): CommentReply_UserIdToReportsMapEntry {
  return { key: 0, value: 0 };
}

export const CommentReply_UserIdToReportsMapEntry = {
  fromJSON(object: any): CommentReply_UserIdToReportsMapEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CommentReply_UserIdToReportsMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<CommentReply_UserIdToReportsMapEntry>, I>>(
    base?: I
  ): CommentReply_UserIdToReportsMapEntry {
    return CommentReply_UserIdToReportsMapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommentReply_UserIdToReportsMapEntry>, I>>(
    object: I
  ): CommentReply_UserIdToReportsMapEntry {
    const message = createBaseCommentReply_UserIdToReportsMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
