import MDEditor from '@uiw/react-md-editor';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div>
        <div className="p-2 text-sm" data-color-mode="light">
          <MDEditor.Markdown
            source={`
# Privacy Policy

Protecting your private information is our priority. This Statement of Privacy applies to simfiny, and
simfiny LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless
otherwise noted, all references to simfiny LLC include https://simfiny.app and simfiny. The simfiny
application is a budgeting and expense planning application. By using the simfiny application, you
consent to the data practices described in this statement.

## Collection of your Personal Information

In order to better provide you with products and services offered, simfiny may collect personally
identifiable information, such as your:

- First and Last Name
- E-mail Address

If you purchase simfiny's products and services, we collect billing and credit card information. This
information is used to complete the purchase transaction.

We do not collect any personal information about you unless you voluntarily provide it to us.
However, you may be required to provide certain personal information to us when you elect to use
certain products or services. These may include: (a) registering for an account; (b) signing up for
special offers from selected third parties; (c) sending us an email message; (d) submitting your
credit card or other payment information when ordering and purchasing products and services. To wit,
we will use your information for, but not limited to, communicating with you in relation to services
and/or products you have requested from us. We also may gather additional personal or non-personal
information in the future.

## Use of your Personal Information

simfiny collects and uses your personal information to operate and deliver the services you have
requested.

simfiny may also use your personally identifiable information to inform you of other products or
services available from simfiny and its affiliates.

## Sharing Information with Third Parties

simfiny does not sell, rent or lease its customer lists to third parties.

simfiny may share data with trusted partners to help perform statistical analysis, send you email, or
provide customer support. All such third parties are prohibited from using your personal information
except to provide these services to simfiny, and they are required to maintain the confidentiality of
your information.

simfiny may disclose your personal information, without notice, if required to do so by law or in the
good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply
with legal process served on simfiny or the site; (b) protect and defend the rights or property of
simfiny; and/or (c) act under exigent circumstances to protect the personal safety of users of
simfiny, or the public.

## Right to Deletion

Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:

- Delete your personal information from our records; and
- Direct any service providers to delete your personal information from their records.

Please note that we may not be able to comply with requests to delete your personal information if
it is necessary to:

- Complete the transaction for which the personal information was collected, fulfill the
  terms of a written warranty or product recall conducted in accordance with federal
  law, provide a good or service requested by you, or reasonably anticipated within the
  context of our ongoing business relationship with you, or otherwise perform a contract
  between you and us;
- Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal
  activity; or prosecute those responsible for that activity;
- Debug to identify and repair errors that impair existing intended functionality;
- Exercise free speech, ensure the right of another consumer to exercise his or her right
  of free speech, or exercise another right provided for by law;
- Comply with the California Electronic Communications Privacy Act;
- Engage in public or peer-reviewed scientific, historical, or statistical research in the
  public interest that adheres to all other applicable ethics and privacy laws, when our
  deletion of the information is likely to render impossible or seriously impair the
  achievement of such research, provided we have obtained your informed consent;
- Enable solely internal uses that are reasonably aligned with your expectations based on
  your relationship with us;
- Comply with an existing legal obligation; or
- Otherwise use your personal information, internally, in a lawful manner that is
  compatible with the context in which you provided the information.

## Children Under Thirteen

simfiny does not knowingly collect personally identifiable information from children under the age
of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for
permission to use this application.

## Disconnecting your simfiny Account from Third Party Websites

You will be able to connect your simfiny account to third party accounts. **BY CONNECTING
YOUR simfiny ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU
ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE
CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN
ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES).**

**IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY
IDENTIFYING INFORMATION, TO BE SHARED IN THIS MANNER, DO NOT USE**

THIS FEATURE. You may disconnect your account from a third party account at any time.
User's connect simfiny to their bank account's via a third party service called Plaid. You can
disconnect your bank account from simfiny in the "View Bank Accounts" menu. Alternatively, you
can revoke simfiny's access to your bank account information by going to https://my.plaid.com/

## E-mail Communications

From time to time, simfiny may contact you via email for the purpose of providing announcements,
promotional offers, alerts, confirmations, surveys, and/or other general communication.

If you would like to stop receiving marketing or promotional communications via email from
simfiny, you may opt out of such communications by clicking the "unsubscribe" button in the footer
or body of the emails. Or by reaching out to support@simfiny.app.

## External Data Storage Sites

We may store your data on servers provided by third party hosting vendors with whom we have
contracted.

## Changes to this Statement

simfiny reserves the right to change this Privacy Policy from time to time. We will notify you about
significant changes in the way we treat personal information by sending a notice to the primary
email address specified in your account, by placing a prominent notice on our application, and/or
by updating any privacy information. Your continued use of the application and/or Services
available after such modifications will constitute your: (a) acknowledgment of the modified Privacy
Policy; and (b) agreement to abide and be bound by that Policy.

## Contact Information

simfiny welcomes your questions or comments regarding this Statement of Privacy. If you believe
that simfiny has not adhered to this Statement, please contact simfiny at:

Email Address:
support@simfiny.app

Telephone number:
651 - 243 - 0035

Effective as of September 12, 2022
`}
          />
        </div>
      </div>
    </>
  );
};

export { PrivacyPolicy };
