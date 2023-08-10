import { useCheckEmailExistsMutation } from "src/redux/mutations/check-email-exists";
import { useCheckUsernameExistsMutation } from "src/redux/mutations/check-username-exists";
import { useToast } from "./ui/use-toast";
import React from "react";
import { Tags } from "src/types/records/tags";
import { AvalailabeTagSet } from "src/constant/tags";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  CreateAccountRequest,
  UserRegistrationAccountDetails,
} from "src/types/request-response/create-account";
import { CheckUsernameExistsRequest } from "src/types/request-response/check-username-exists";
import { mixPanelClient } from "src/lib/mixpanel";
import { routes } from "src/constant/routes";
import { cn, randomIntFromInterval } from "src/lib/utils";
import { useCreateAccountMutation } from "src/redux/mutations/create-account";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { TermsAndConditions } from "./terms-and-conditions/terms-and-conditions";

// generate a set of avatar urls to choose from
const lowerbound = randomIntFromInterval(1, 100);
const upperbound = lowerbound + 15;
const avatarUrlSet: string[] = [];
for (let i = lowerbound; i < upperbound; i++) {
  avatarUrlSet.push(
    `https://d1cerqb4hl6cgb.cloudfront.net/user-profile-images/ToyFaces_Transparent_BG_${i}.png`
  );
}

/**
 * RegistrationForm is a React functional component for an authentication page with email and
 * password input fields, and options to authenticate a user into the application
 * @param {RegistrationFormProps} props
 * @returns
 */
const RegistrationForm: React.FC = () => {
  const [createUserAccount] = useCreateAccountMutation();
  const [checkIfEmailExists] = useCheckEmailExistsMutation();
  const [checkUsernameExists] = useCheckUsernameExistsMutation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [interest, setInterest] = React.useState<Tags[]>([]);
  const [selectedAvatar, setSelectedAvatar] = React.useState<string>("");
  const [termsApproved, setTermsApproved] = React.useState<boolean>(false);

  const onSelectTag = (tagName: string) => {
    const item = AvalailabeTagSet.find((tag) => {
      return tag.tagName === tagName;
    });

    if (item) {
      if (interest.includes(item)) {
        setInterest(
          interest.filter((interest) => {
            return interest !== item;
          })
        );
      } else {
        setInterest([...interest, item]);
      }
    }
  };

  /**
   * onSelectAvatar - sets the selected avatar
   * @param avatar
   */
  const onSelectAvatar = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  /**
   * checkBoxCallback - sets the terms approved
   */
  const checkBoxCallback = () => {
    setTermsApproved(true);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreateAccountRequest>({
    defaultValues: {
      account: {
        email: "",
        username: "",
        tags: [],
      },
      password: "",
      profileImage: "",
      communityIdsToFollow: [],
    },
  });

  /**
   * onSubmit - handles the submit of the form
   * @param req - the create account request
   * @returns
   * @throws
   */
  const onSubmit = async (req: CreateAccountRequest) => {
    try {
      // user must select an avatar
      if (selectedAvatar === "") {
        throw new Error("Please select an avatar");
      }

      // user must select atleast 3 interests
      if (interest.length < 3) {
        throw new Error("Please select atleast 3 interests");
      }

      // TODO: before we submit the payload to the backend we need to ensure the email and username does not already exist
      const email = req.account!.email.trim().toLocaleLowerCase();
      const username = req.account!.username.trim().toLocaleLowerCase();
      const password = req.password.trim();

      // call the backend and check if the email already exists
      // const emailExists = await checkEmailExists({ email: email }).unwrap();
      const res = await checkIfEmailExists({ email: email }).unwrap();
      if (res.exists) {
        throw new Error("Email already exists");
      }

      // call the backend and check if the username already exists
      const checkUsernameExistsRequest = new CheckUsernameExistsRequest({
        username: username,
      });
      const usernameExists = await checkUsernameExists(
        checkUsernameExistsRequest
      ).unwrap();
      if (usernameExists.exists) {
        throw new Error("Username already exists");
      }

      if (termsApproved === false) {
        throw new Error("Terms and conditions not approved");
      }

      const acct = new UserRegistrationAccountDetails({
        email: email,
        username: username,
        tags: interest,
      });

      const createAccountRequest = new CreateAccountRequest({
        account: acct,
        password: password,
        profileImage: selectedAvatar,
        communityIdsToFollow: req.communityIdsToFollow,
      });

      // call the backend and register the user
      const newAcct = await createUserAccount({
        body: createAccountRequest,
      }).unwrap();

      // increment a mixpanel registration event
      mixPanelClient.trackRegistrationEvent({
        userID: `${newAcct.userID}`,
        time: new Date().toDateString(),
      });

      toast({
        title:
          "Successfully created an account. Please check your inbox and verify your account ",
      });

      reset();

      // route the person to the authentication page
      navigate(routes.AUTHENTICATION);
    } catch (err) {
      // dispatch an error toast
      toast({
        title: `Failed to create an account. err: ${err}`,
      });
    }
  };

  return (
    <div className="my-6 bg-white rounded-xl py-8 shadow sm:rounded-2xl sm:px-10">
      <form className="space-y-3 form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register("account.email", {
            required: "Must provide a valid email",
          })}
          placeholder={"Email"}
          title="Email"
          className="border-0 shadow-none"
        />
        <Label color={"danger"} className="text-xs">
          {errors.account?.email?.message}
        </Label>
        <Input
          {...register("account.username", {
            required: true,
            minLength: {
              value: 10,
              message: "Username must be at least 10 characters long",
            },
          })}
          placeholder={"Username"}
          title="Username"
          className="border-0 shadow-none"
        />
        <Label color={"danger"} className="text-xs">
          {errors.account?.username?.message}
        </Label>
        <Input
          title={"Password"}
          placeholder={"Password"}
          step={""}
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters long",
            },
          })}
          className="border-0 shadow-none"
        />{" "}
        <Label color={"danger"} className="text-xs">
          {errors.password?.message}
        </Label>
        <div className="flex flex-col">
          <TagsSelector onSelectTags={onSelectTag} selectedTags={interest} />
          <AvatarSelector
            onSelectAvatar={onSelectAvatar}
            selectedAvatar={selectedAvatar}
          />
          <TermsAndConditions callback={checkBoxCallback} />
          <div className="flex pt-8 items-center justify-center">
            <Button
              type="submit"
              variant={"outline"}
              color="dark"
              className="bg-white border font-bold rounded-full w-full"
            >
              Create An Account
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const TagsSelector: React.FC<{
  onSelectTags: (tagName: string) => void;
  selectedTags: Tags[];
}> = ({ onSelectTags, selectedTags }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {" "}
          <Label color="dark" className="font-bold text-xs">
            <p className="text-xs font-semibold"> Pick 3 interests 😀</p>
          </Label>
        </AccordionTrigger>
        <AccordionContent>
          <div slot="content" className="py-2 flex flex-wrap gap-2">
            {AvalailabeTagSet.map((item, idx) => {
              return (
                <Button
                  onClick={() => onSelectTags(item.tagName)}
                  className={
                    selectedTags.includes(item)
                      ? "bg-black text-white font-bold"
                      : "bg-white text-blue-600 font-bold"
                  }
                  key={idx}
                >
                  <p className="text-xs font-semibold">{item.tagName}</p>
                </Button>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const AvatarSelector: React.FC<{
  onSelectAvatar: (avatar: string) => void;
  selectedAvatar: string;
}> = ({ onSelectAvatar, selectedAvatar }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {" "}
          <Label color="dark" className="font-bold text-xs">
            <p className="text-xs font-semibold"> Select an avatar 😀</p>
          </Label>
        </AccordionTrigger>
        <AccordionContent>
          <div
            slot="content"
            className="py-2 grid grid-cols-2 lg:grid-cols-3 gap-1"
          >
            {avatarUrlSet.map((avatarUrl, idx) => {
              return (
                <div
                  onClick={() => onSelectAvatar(avatarUrl)}
                  key={idx}
                  className="m-4"
                >
                  <Avatar>
                    <img
                      src={avatarUrl}
                      alt="avatar"
                      className={cn(
                        selectedAvatar === avatarUrl
                          ? "bg-white border border-blue-600"
                          : "bg-white ",
                        "m-2 object-cover w-full rounded-3xl md:h-auto md:w-16 md:rounded-none md:rounded-l-lg"
                      )}
                    />
                  </Avatar>
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export { RegistrationForm };
