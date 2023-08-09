import { DeepPartial, Exact, isSet } from "../request-response/utils";

/** Tags: represents metadata tags associated to an account */
export interface Tags {
  /** tag id */
  id: number;
  /**
   * name of tag
   * validations:
   * - cannot be empty
   * - must be at least 3 characters long
   */
  tagName: string;
  /**
   * description of tag
   * validations:
   * - cannot be empty
   * - must be at least 10 characters long
   */
  tagDescription: string;
  /**
   * metadata associated with tag
   * validations:
   * - must provide between 1 and 10 metadata tags
   */
  metadata: string[];
}

function createBaseTags(): Tags {
  return { id: 0, tagName: '', tagDescription: '', metadata: [] };
}

export const Tags = {
  fromJSON(object: any): Tags {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      tagName: isSet(object.tagName) ? String(object.tagName) : '',
      tagDescription: isSet(object.tagDescription) ? String(object.tagDescription) : '',
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Tags): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.tagName !== undefined && (obj.tagName = message.tagName);
    message.tagDescription !== undefined && (obj.tagDescription = message.tagDescription);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e);
    } else {
      obj.metadata = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tags>, I>>(base?: I): Tags {
    return Tags.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Tags>, I>>(object: I): Tags {
    const message = createBaseTags();
    message.id = object.id ?? 0;
    message.tagName = object.tagName ?? '';
    message.tagDescription = object.tagDescription ?? '';
    message.metadata = object.metadata?.map((e) => e) || [];
    return message;
  },
};


export const TAGS: Tags[] = [
  Tags.create({
    tagName: 'Savings: tips and tricks',
    tagDescription: 'For those interested in tips to help them save a little extra each month',
    metadata: ['savings', 'tips', 'tricks'],
  }),
  Tags.create({
    tagName: 'Spending: fun till those bills are due ',
    tagDescription: 'For those interested in reducing their spending',
    metadata: ['spending', 'bills'],
  }),
  Tags.create({
    tagName: 'Budgeting: easier said than done !',
    tagDescription: 'For those interested in better budgeting',
    metadata: ['budgeting'],
  }),
  Tags.create({
    tagName: 'Loans',
    tagDescription: 'For those interested in managing their loan balance',
    metadata: ['loans', 'debt'],
  }),
  Tags.create({
    tagName: 'Student Loans :(',
    tagDescription: 'For those interested in reducing student loans',
    metadata: ['student loans', 'debt'],
  }),
  Tags.create({
    tagName: 'Mortgages and other boring stuff',
    tagDescription: 'For those interested in mortgages',
    metadata: ['mortgage loans', 'debt'],
  }),
  Tags.create({
    tagName: 'Taxes and other fun stuff ',
    tagDescription: 'For those interested in managing taxes',
    metadata: ['taxes', 'money'],
  }),
  Tags.create({
    tagName: 'Careers',
    tagDescription: 'For those interested in growing their career',
    metadata: ['career'],
  }),
  Tags.create({
    tagName: 'Consumer Loans',
    tagDescription: 'For those interested in diminishing their consumer loans',
    metadata: ['consumer loans', 'loans'],
  }),
  Tags.create({
    tagName: 'Investing',
    tagDescription: 'For those interested in investing',
    metadata: ['consumer loans', 'investing'],
  }),
  Tags.create({
    tagName: 'Young Savers',
    tagDescription: 'For those interested in saving',
    metadata: ['saving'],
  }),
  Tags.create({
    tagName: 'Women in finance',
    tagDescription: 'For women in finance',
    metadata: ['women', 'finance'],
  }),
];