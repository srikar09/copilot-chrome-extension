import {
  ActionableInsight,
  Link,
  StripeSubscription,
} from "melodiy-component-library";
import { RefinedLink } from "../financials/message_financial_service";

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
        stripeSubscriptions: new StripeSubscription(data?.stripeSubscriptions),
        link: data?.link?.map((link) => new Link(link)),
        actionableInsights: data?.actionableInsights?.map(
          (insight) => new ActionableInsight(insight)
        ),
      });
  }
}

class RefinedFinancialProfile {
  /** id */
  userFinancialProfileID = 0;
  /** the user id tied to the profile */
  userId = 0;
  stripeCustomerId = "";
  /** the stripe subscriptions the user profile actively maintains */
  stripeSubscriptions: StripeSubscription | undefined;
  /** a user profile can have many links (connected institutions) of which finanical accounts are tied to (checking, savings, etc) */
  link: RefinedLink[] = [];
  actionableInsights: ActionableInsight[] = [];

  constructor(data?: Partial<FinancialProfile>) {
    if (data)
      Object.assign(this, {
        ...data,
        stripeSubscriptions: new StripeSubscription(data?.stripeSubscriptions),
        link: data?.link?.map((link) => new Link(link)),
        actionableInsights: data?.actionableInsights?.map(
          (insight) => new ActionableInsight(insight)
        ),
      });
  }
}

export { FinancialProfile, RefinedFinancialProfile };
