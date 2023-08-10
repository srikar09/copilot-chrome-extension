import {
  StripeSubscription,
  Link,
  ActionableInsight,
} from "../financials/message_financial_service";

class FinancialProfile {
  /** id */
  userFinancialProfileID = 0;
  /** the user id tied to the profile */
  userId = 0;
  stripeCustomerId = "";
  /** the stripe subscriptions the user profile actively maintains */
  stripeSubscriptions: StripeSubscription | undefined;
  /** a user profile can have many links (connected institutions) of which finanical accounts are tied to (checking, savings, etc) */
  link: Link[] = [];
  actionableInsights: ActionableInsight[] = [];

  constructor(data?: Partial<FinancialProfile>) {
    if (data)
      Object.assign(this, {
        ...data,
        stripeSubscriptions: StripeSubscription.create(
          data?.stripeSubscriptions
        ),
        link: data?.link?.map((link) => Link.create(link)),
        actionableInsights: data?.actionableInsights?.map((insight) =>
          ActionableInsight.create(insight)
        ),
      });
  }
}

export { FinancialProfile };
