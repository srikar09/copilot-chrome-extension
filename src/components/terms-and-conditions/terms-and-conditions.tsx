import React, { useRef } from "react";
import { AcceptableUsePolicy } from "./terms-and-conditions-acceptable-use-policy";
import { PrivacyPolicy } from "./terms-and-conditions-privacy-policy";
import { UserAgreementPolicy } from "./terms-and-conditions-use-policy";
import { TermsAndConditionsOverview } from "./terms-and-conditions-overview";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "src/lib/utils";

enum TermType {
  PrivacyPolicy,
  AcceptableUsePolicy,
  UserAgreement,
  Overview,
}

interface TermsAndConditionsProps {
  callback?: () => void;
  disableCheckbox?: boolean;
  title?: string;
  className?: string;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = (props) => {
  const { callback, disableCheckbox, title, className } = props;
  const [openTermsAndConditions, setOpenTermsAndConditions] =
    React.useState<boolean>(false);
  const [termType, setTermType] = React.useState<TermType>(TermType.Overview);
  return (
    <>
      <Sheet>
        <div className="flex flex-row gap-2 py-5">
          {(disableCheckbox === false || disableCheckbox === undefined) && (
            <div className="col-2">
              <Checkbox
                onClick={() => {
                  if (callback !== undefined) {
                    callback();
                  }
                }}
              />
            </div>
          )}
          <div
            className="col-10"
            style={{
              color: "#3880ff",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
            onClick={() => setOpenTermsAndConditions(!openTermsAndConditions)}
          >
            <SheetTrigger className={cn("text-sm font-bold", className)}>
              {title !== undefined
                ? title
                : "I agree to the terms and conditions "}
            </SheetTrigger>
          </div>
        </div>
        <SheetContent className="min-w-[300px] lg:min-w-[600px]">
          <ScrollArea className="h-full w-full rounded-md  p-4">
            <SheetHeader>
              <SheetTitle className="flex justify-center items-center">
                Melodiy Terms & Conditions
              </SheetTitle>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row flex-wrap gap-2">
                  <Button onClick={() => setTermType(TermType.Overview)}>
                    Terms
                  </Button>
                  <Button onClick={() => setTermType(TermType.PrivacyPolicy)}>
                    Privacy
                  </Button>
                  <Button onClick={() => setTermType(TermType.UserAgreement)}>
                    Agreement
                  </Button>
                  <Button
                    onClick={() => setTermType(TermType.AcceptableUsePolicy)}
                  >
                    Acceptable-Use
                  </Button>
                </div>
                <div className="row">
                  <div style={{ fontSize: "10px", padding: "10px" }}>
                    {termType === TermType.Overview && (
                      <TermsAndConditionsOverview />
                    )}
                    {termType == TermType.AcceptableUsePolicy && (
                      <AcceptableUsePolicy />
                    )}
                    {termType == TermType.PrivacyPolicy && <PrivacyPolicy />}
                    {termType == TermType.UserAgreement && (
                      <UserAgreementPolicy />
                    )}
                  </div>
                </div>
              </div>
            </SheetHeader>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

const TermsAndConditionSheet: React.FC<{
  open: boolean;
}> = ({ open }) => {
  const [termType, setTermType] = React.useState<TermType>(TermType.Overview);
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <div className="modal">
            <div className="modal-header">
              <h2>Terms & Conditions</h2>
            </div>
            <div className="modal-content">
              <div className="grid">
                <div className="row">
                  <button onClick={() => setTermType(TermType.Overview)}>
                    Terms
                  </button>
                  <button onClick={() => setTermType(TermType.PrivacyPolicy)}>
                    Privacy
                  </button>
                  <button onClick={() => setTermType(TermType.UserAgreement)}>
                    Agreement
                  </button>
                  <button
                    onClick={() => setTermType(TermType.AcceptableUsePolicy)}
                  >
                    Acceptable-Use
                  </button>
                </div>
                <div className="row">
                  <div style={{ fontSize: "10px", padding: "10px" }}>
                    {termType === TermType.Overview && (
                      <TermsAndConditionsOverview />
                    )}
                    {termType == TermType.AcceptableUsePolicy && (
                      <AcceptableUsePolicy />
                    )}
                    {termType == TermType.PrivacyPolicy && <PrivacyPolicy />}
                    {termType == TermType.UserAgreement && (
                      <UserAgreementPolicy />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { TermsAndConditions };
