import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { cn, logEvent, logExit, logSuccess } from "src/lib/utils";
import { useAppSelector } from "src/redux/store/hooks";
import React from "react";
import { routes } from "src/constant/routes";
import { useLinkTokenMutation } from "src/redux/mutations/initiate-link-token-exchange";
import {
  selectCurrentUserID,
  selectCurrentUserAccount,
} from "src/redux/slice/authentication/AuthenticationSelector";
import {
  PlaidExchangeTokenRequest,
  PlaidInitiateTokenUpdateRequest,
} from "src/types/financials/request_response_financial_service";
import { useNavigate } from "react-router";
import {
  PlaidLinkOptions,
  usePlaidLink,
  PlaidLinkError,
  PlaidLinkOnExitMetadata,
  PlaidLinkOnEventMetadata,
  PlaidLinkStableEvent,
  PlaidLinkOnSuccessMetadata,
} from "react-plaid-link";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { usePlaidExchangePublicTokenMutation } from "src/redux/mutations/plaid-exchange-public-token-mutation";
import { Button } from "./ui/button";
import { useUpdateLinkTokenMutation } from "src/redux/mutations/update-link-token";

/**
 *  This component enables us to connect a new bank account through plaid
 *
 * @param props
 * @returns
 */
const ConnectPlaidAccountButton: React.FC<{
  title: string;
  className?: string;
  linkId?: number | null;
  generatedToken?: string;
}> = (props) => {
  const { title, className, linkId, generatedToken } = props;
  const isOAuthRedirect = window.location.href.includes("?oauth_state_id=");
  const [currentToken, setCurrentToken] = useState<string>("");
  const currentUserId = useAppSelector(selectCurrentUserID);
  const [plaidExchangeToken] = usePlaidExchangePublicTokenMutation();
  const { toast } = useToast();

  const [error, setError] = React.useState<string>("");
  const currentAccount = useAppSelector(selectCurrentUserAccount);
  const [getLinkToken] = useLinkTokenMutation();
  const [updateLinkToken] = useUpdateLinkTokenMutation();

  const history = useNavigate();

  const createLinkToken = async () => {
    if (linkId === null || linkId === undefined) {
      const req = {
        userId: Number(currentAccount.userAccountID),
        fullName: currentAccount.username,
        email: currentAccount.email,
        phoneNumber: "",
      };

      const response = await getLinkToken(req).unwrap();
      setCurrentToken(response.linkToken);
      // store link_token temporarily in case of OAuth redirect
      localStorage.setItem("link_token", response.linkToken);
    } else {
      // here we are to update the link hence no need to go through token exchange
      const request: PlaidInitiateTokenUpdateRequest = {
        userId: Number(currentUserId),
        linkId: linkId,
      };

      const response = await updateLinkToken(request).unwrap();
      setCurrentToken(response.linkToken);
      // store link_token temporarily in case of OAuth redirect
      localStorage.setItem("link_token", response.linkToken);
    }
  };

  // generate a link_token when component mounts
  React.useEffect(() => {
    // do not generate a new token if page is handling an OAuth redirect.
    // instead setLinkToken to previously generated token from localStorage
    // https://plaid.com/docs/link/oauth/#reinitializing-link
    if (isOAuthRedirect) {
      const cachedToken = localStorage.getItem("link_token");
      setCurrentToken(cachedToken !== null ? cachedToken : "");
      return;
    }

    // check for cached linked okent
    const cachedToken = localStorage.getItem("link_token");
    if (
      cachedToken === null ||
      cachedToken === undefined ||
      cachedToken === ""
    ) {
      createLinkToken();
    } else {
      setCurrentToken(cachedToken);
    }
  }, []);

  const onSuccess = async (
    publicToken: string,
    metadata: PlaidLinkOnSuccessMetadata
  ) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow
    logSuccess(metadata, Number(currentUserId));
    if (linkId != null) {
      // link token was successfully updated
      // update mode: no need to exchange public token
      console.log(linkId);
    } else {
      // call to Plaid api endpoint: /item/public_token/exchange in order to obtain access_token which is then stored with the created item
      try {
        const request: PlaidExchangeTokenRequest = {
          publicToken: publicToken,
          userId: Number(currentUserId),
          institutionId: metadata.institution?.institution_id ?? "",
          institutionName: metadata.institution?.name ?? "",
        };
        // call mutation to exchange public token for access token
        const response = await plaidExchangeToken(request).unwrap();
        toast({
          title: "Successfully connected bank account",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });

        // wipe link token from cache on success
        localStorage.removeItem("link_token");

        // push to the payment slide
        history(`${routes.PAY_FOR_SUBSCRIPTION}`);
      } catch (error) {
        toast({
          title: `Failed to connect bank account. Please try again later. err: ${error}`,
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }
    }
  };

  const onExit = async (
    error: PlaidLinkError | null,
    metadata: PlaidLinkOnExitMetadata
  ) => {
    // log and save error and metatdata
    logExit(error, metadata, Number(currentUserId));

    if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
      // regenerate the link token
      await createLinkToken();
    }
    if (error != null) {
      setError(error.display_message || error.error_message);
    }
    // to handle other error codes, see https://plaid.com/docs/errors/
  };

  const onEvent = async (
    eventName: PlaidLinkStableEvent | string,
    metadata: PlaidLinkOnEventMetadata
  ) => {
    // handle errors in the event end-user does not exit with onExit function error enabled.
    if (eventName === "ERROR" && metadata.error_code != null) {
      setError(metadata.error_code);
    }

    logEvent(eventName, metadata);
  };

  const config: PlaidLinkOptions = {
    // token must be the same token used for the first initialization of Link
    token: currentToken,
    onSuccess,
    onEvent,
    onExit,
  };
  if (isOAuthRedirect) {
    // receivedRedirectUri must include the query params
    config.receivedRedirectUri = window.location.href;
  }

  const {
    open,
    ready,
    // error,
    // exit
  } = usePlaidLink(config);

  React.useEffect(() => {
    // If OAuth redirect, instantly open link when it is ready instead of
    // making user click the button
    if (isOAuthRedirect && ready) {
      open();
    }
  }, [ready, open, isOAuthRedirect, currentToken]);

  return isOAuthRedirect ? (
    <></>
  ) : (
    <Button
      className={cn(
        "m-2 font-bold text-md flex flex-row gap-2 rounded-2xl",
        className
      )}
      onClick={() => open()}
    >
      <PlusCircle className="w-6 h-6" />
      {title}
    </Button>
  );
};

export { ConnectPlaidAccountButton };
