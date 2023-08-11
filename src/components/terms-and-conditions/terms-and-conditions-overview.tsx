import React from 'react';

const TermsAndConditionsOverview: React.FC = (props) => {
  return (
    <div>
    <div className="overflow-auto rounded-xl p-2">
        <h4 className="text-md font-bold">
            Welcome to Melodiy. These terms and conditions govern your use of the app, and by
            using the app, you accept these Terms in full
        </h4>
        <ul>
            <li>
            <span style={{color: 'black', fontSize: '12px', padding: '10px'}}>
                    1. Account Information: To use the app, you must create an account with a valid email
                    address and a secure password. You must provide accurate, current, and complete
                    information about yourself, and you are responsible for keeping your account
                    information up to date.
                </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
                    2. User Conduct: You must use the app in a responsible and lawful manner. You are
                    solely responsible for the content that you post on the app, and you must not post any
                    content that is hateful, sexual, abusive, defamatory, discriminatory, or otherwise
                    inappropriate. You must not engage in any activity that could harm or disrupt the app
                    or its users. Posting inappropriate content can result in the termination of your
                    account.
                </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
                    2. User Conduct: You must use the app in a responsible and lawful manner. You are
                    solely responsible for the content that you post on the app, and you must not post any
                    content that is hateful, sexual, abusive, defamatory, discriminatory, or otherwise
                    inappropriate. You must not engage in any activity that could harm or disrupt the app
                    or its users. Posting inappropriate content can result in the termination of your
                    account.
                </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
                3. Personal Information: We take the privacy of our users very seriously. We will
                collect, use, and disclose your personal information in accordance with our privacy
                policy, which is available on the app.
                </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              4. Intellectual Property: The app and its content,   including but not limited to text,
              images, graphics, software, and trademarks, are the property of the app or its
              licensors. You may not use any of the content for any commercial purpose without our
              prior written consent.
                </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              6. No Warranty: The app is provided as is and without any warranty, express or
              implied. We do not warrant that the app will be error-free or uninterrupted, or that
              any defects in the app will be corrected. We do not guarantee that the information
              provided in the app is accurate, complete, or up to date.

                </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              7. Limitation of Liability: To the fullest extent permitted by law, we will not be
              liable for any damages arising out of or in connection with your use of the app. This
              includes, but is not limited to, direct, indirect, incidental, punitive, and
              consequential damages.
                </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              8. Indemnification: You agree to indemnify and hold us harmless from any claims,
              damages, or expenses arising out of your use of the app, your violation of these
              Terms, or your violation of any rights of another person.
            </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              9. Modifications: We reserve the right to modify these Terms at any time, without
              notice. Your continued use of the app after any changes to these Terms constitutes
              your acceptance of the changes.
            </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              10. Termination: We may terminate your access to the app at any time, without notice,
              for any reason, including your violation of these Terms. You may also terminate your
              account at any time by contacting us.
            </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              11. Governing Law: These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction where the app is registered.
            </span>
            </li>
            <li>
            <span style={{color: 'dark', fontSize: '12px', padding: '10px'}}>
              12. Entire Agreement: These Terms constitute the entire agreement between you and the
              app regarding your use of the app, and they supersede any prior agreements between you
            </span>
            </li>
        </ul>
    </div>
  </div>
  );
};

export { TermsAndConditionsOverview };
