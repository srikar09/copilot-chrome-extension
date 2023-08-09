class MixPanelEvents {
    /*
          number of newly acquired user (or registered users) is the headline for total volume of traffic. 
          Although it is often a vanity metric, sometimes it can be useful at very early stages to gauge size.
          However, at later stages, number of active users (below) would be a better measure for the
          size of your network because it measures your effective user base
      */
    public REGISTRATION_EVENT = 'registration';
    // login event is a good indicator of the number of active users
    public LOGIN_EVENT = 'login';
    // post creation event is a good indicator of the number of active users
    public POST_CREATION_EVENT = 'post_created';
    public COMMENT_CREATION_EVENT = 'comment_created';
    public ARTICLE_CREATION_EVENT = 'article_created';
    public COMMUNITY_CREATION_EVENT = 'community_created';
    public COMMENT_ENGAGEMENT_EVENT = 'comment_engagement';
    public POST_ENGAGEMENT_EVENT = 'post_engagement';
    public COMMUNITY_ENGAGEMENT_EVENT = 'community_engagement';
    public ARTICLE_ENGAGEMENT_EVENT = 'article_engagement';
    public TOPIC_CREATION_EVENT = 'topic_creation_event';
  
    public ACCOUNT_LINK_EVENT = 'account_linked';
  }
  
  export const eventNames = new MixPanelEvents();
  