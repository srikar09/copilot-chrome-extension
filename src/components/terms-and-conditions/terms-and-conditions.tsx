  import React, { useRef } from 'react';
  import { AcceptableUsePolicy } from './terms-and-conditions-acceptable-use-policy';
  import { PrivacyPolicy } from './terms-and-conditions-privacy-policy';
  import { UserAgreementPolicy } from './terms-and-conditions-use-policy';
  import { TermsAndConditionsOverview } from './terms-and-conditions-overview';
  
  enum TermType {
    PrivacyPolicy,
    AcceptableUsePolicy,
    UserAgreement,
    Overview,
  }
  
  interface TermsAndConditionsProps {
    callback: () => void;
  }
  
  const TermsAndConditions: React.FC<TermsAndConditionsProps> = (props) => {
    const { callback } = props;
    const [openTermsAndConditions, setOpenTermsAndConditions] = React.useState<boolean>(false);
    const [currentTermType, setCurrentTermType] = React.useState<TermType>(TermType.Overview);  
    return (
        <>
        <div className="grid">
          <div className="row">
            <div
              className="col-10"
              style={{
                color: '#3880ff',
                fontWeight: 'bold',
                fontStyle: 'italic',
              }}
              onClick={() => setOpenTermsAndConditions(!openTermsAndConditions)}
            >
              <p className="text-sm font-bold">I agree to the terms and conditions</p>
            </div>
            <div className="col-2">
              <input type="checkbox" onClick={() => callback()} />
            </div>
          </div>
        </div>
      
        {openTermsAndConditions && (
          <div className="modal">
            <div className="modal-header">
              <h2>Terms & Conditions</h2>
            </div>
            <div className="modal-content">
              <div className="grid">
                <div className="row">
                  <button onClick={() => setCurrentTermType(TermType.Overview)}>Terms</button>
                  <button onClick={() => setCurrentTermType(TermType.PrivacyPolicy)}>Privacy</button>
                  <button onClick={() => setCurrentTermType(TermType.UserAgreement)}>Agreement</button>
                  <button onClick={() => setCurrentTermType(TermType.AcceptableUsePolicy)}>Acceptable-Use</button>
                </div>
                <div className="row">
                  <div style={{fontSize: '10px', padding: '10px'}}>
                    {currentTermType === TermType.Overview && <TermsAndConditionsOverview />}
                    {currentTermType == TermType.AcceptableUsePolicy && <AcceptableUsePolicy />}
                    {currentTermType == TermType.PrivacyPolicy && <PrivacyPolicy />}
                    {currentTermType == TermType.UserAgreement && <UserAgreementPolicy />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
      
    );
  };
  
  export { TermsAndConditions };
  