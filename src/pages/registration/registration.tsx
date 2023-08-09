import { Input } from "@mantine/core";
import { cn, randomIntFromInterval } from "src/lib/utils";
import { Button } from "../../components/ui/button";
import Text from "src/components/Text/Text";
import { TermsAndConditions } from "src/components/terms-and-conditions/terms-and-conditions";
import { TAGS, Tags } from "src/types/records/tags"

import { useState } from "react";
import { useCheckEmailExistsMutation } from "src/redux/mutations/CheckEmailExistsMutation";
import { useCheckUsernameExistsMutation } from "src/redux/mutations/CheckUsernameExistsMutation";
import { useCreateAccountMutation } from "src/redux/mutations/CreateUserAccountMutation";
import { CreateUserRequest } from "src/types/request-response/create-user";
import { UserAccount } from "src/types/records/user-account";
import { mixPanelClient } from "src/lib/mixpanel";
import HappyToast from "src/components/Toast/HappyToast";
import ToastWarning from "src/components/Toast/ToastWarning";
import { routes } from "src/constant/routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/**
 * Registration page component for creating a new user account.
 * Allows users to create an account by providing their email and password.
 */
// generate a set of avatar urls to choose from
const lowerbound = randomIntFromInterval(1, 100);
const upperbound = lowerbound + 20;
const avatarUrlSet: string[] = [];
for (let i = lowerbound; i < upperbound; i++) {
  avatarUrlSet.push(
    `https://d1cerqb4hl6cgb.cloudfront.net/user-profile-images/ToyFaces_Transparent_BG_${i}.png`
  );
}

export default function RegistrationPage() {
  const [createUserAccount] = useCreateAccountMutation();
  const [checkIfEmailExists] = useCheckEmailExistsMutation();
  const [checkUsernameExists] = useCheckUsernameExistsMutation();
  const [toast, setToast] = useState(<div />);
  const [interest, setInterest] = useState<Tags[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const history = useNavigate();
  const [termsAndConditionsApproved, setTermsAndConditionsApproved] =
    useState<boolean>(false);
    
    const onSelect = (tagName: string) => {
      const item = TAGS.find((tag) => {
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

  const onSelectAvatar = (avatar: string) => {
    setSelectedAvatar(avatar);
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreateUserRequest>({
    defaultValues: {
      account: {
        email: '',
        username: '',
        tags: [],
      },
      password: '',
      profileImage: '',
      communityIdsToFollow: [],
    },
  });
  
  const checkBoxCallback = () => {
    setTermsAndConditionsApproved(true);
  };

  const onSubmit = async (req: CreateUserRequest) => {
    try {
      // user must select an avatar
      if (selectedAvatar === '') {
        throw new Error('Please select an avatar');
      }

      // user must select atleast 3 interests
      if (interest.length < 3) {
        throw new Error('Please select atleast 3 interests');
      }

      // TODO: before we submit the payload to the backend we need to ensure the email and username does not already exist
      const email = req.account!.email.trim().toLocaleLowerCase();
      const username = req.account!.username.trim().toLocaleLowerCase();
      const password = req.password.trim();

      // call the backend and check if the email already exists
      // const emailExists = await checkEmailExists({ email: email }).unwrap();
      const res = await checkIfEmailExists({ email: email }).unwrap();
      if (res.exists) {
        throw new Error('Email already exists');
      }

      // call the backend and check if the username already exists
      const usernameExists = await checkUsernameExists({ username: username }).unwrap();
      if (usernameExists.exists) {
        throw new Error('Username already exists');
      }

      if (termsAndConditionsApproved === false) {
        throw new Error('Terms and conditions not approved');
      }

      const acct = UserAccount.create({
        email: email,
        username: username,
        tags: interest,
      });

      const formattedRequest = CreateUserRequest.create({
        account: acct,
        password: password,
        profileImage: selectedAvatar,
        communityIdsToFollow: req.communityIdsToFollow,
      });

      // call the backend and register the user
      const newAcct = await createUserAccount({ body: formattedRequest }).unwrap();

      // increment a mixpanel registration event
      mixPanelClient.trackRegistrationEvent({
        userID: `${newAcct.userID}`,
        time: new Date().toDateString(),
      });

      // dispatch a toast
      setToast( <HappyToast 
        show={true} 
        message={" Successfully created an account. Please check your inbox and verify your account! "}
        autoHideDuration={3000}
      />)

      reset();

      // route the person to the authentication page
      history(`${routes.AUTHENTICATION}`);
    } catch (err) {
      // dispatch an error toast
      setToast(
        <ToastWarning
          show={true} 
          message={" Unsuccessfully created an account. Please try again. Check to make sure the email and account name is unique "}
          autoHideDuration={3000}
        />
      );
    }
  };
  
  return (
    <>
    <div className="my-6 mx-auto bg-white rounded-xl py-8 px-4 shadow sm:rounded-2xl sm:px-10">
  <form className="space-y-3 form" onSubmit={handleSubmit(onSubmit)}>
    <Input
      type="email"
      {...register('account.email', { required: 'Must provide a valid email' })}
      placeholder={'Email'}
      title="Email"
      className="border-0 shadow-none"
    />
    <Text color={'danger'} size={'tiny'}>
      {errors.account?.email?.message}
    </Text>
    <Input
      {...register('account.username', {
        required: true,
        minLength: {
          value: 10,
          message: 'Username must be at least 10 characters long',
        },
      })}
      placeholder={'Username'}
      title="Username"
      className="border-0 shadow-none"
    />
    <Text color={'danger'} size={'tiny'}>
      {errors.account?.username?.message}
    </Text>
    <Input
      title={'Password'}
      placeholder={'Password'}
      step={''}
      type="password"
      {...register('password', {
        required: true,
        minLength: {
          value: 10,
          message: 'Password must be at least 10 characters long',
        },
      })}
      className="border-0 shadow-none"
    />
    <Text color={'danger'} size={'tiny'}>
      {errors.password?.message}
    </Text>
    <div className="flex flex-col">
      <div>
        <div color="light">
          <Text color="dark" size="tiny" className="font-bold text-xs">
            <p className="text-xs font-semibold"> Pick 3 interests</p>
          </Text>
        </div>
        <div className="py-2 flex flex-wrap gap-2">
          {TAGS.map((item, idx) => {
            return (
              <Button
                onClick={() => onSelect(item.tagName)}
                className={
                  interest.includes(item)
                    ? 'bg-black text-white font-bold'
                    : 'bg-white text-blue-600 font-bold'
                }
                key={idx}
              >
                <p className="text-xs font-semibold">{item.tagName}</p>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <div>
        <div color="light">
          <Text color="dark" size="tiny" className="font-bold text-xs">
            <p className="text-xs font-semibold"> Select an avatar 😀</p>
          </Text>
        </div>
        <div className="py-2 grid grid-cols-3 gap-1">
          {avatarUrlSet.map((avatarUrl, idx) => {
            return (
              <div onClick={() => onSelectAvatar(avatarUrl)} key={idx} className="m-4">
                <div>
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    className={cn(
                      selectedAvatar === avatarUrl
                        ? 'bg-white border border-blue-600'
                        : 'bg-white ',
                      'm-2 object-cover w-full rounded-3xl md:h-auto md:w-16 md:rounded-none md:rounded-l-lg'
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <TermsAndConditions callback={checkBoxCallback} />
    <div className="flex py-1 items-center justify-center">
      <Button
        type="submit"
        variant={'outline'}
        color="dark"
        className="bg-white border font-bold rounded-full w-full"
      >
        Create An Account
      </Button>
    </div>
  </form>
</div>

    </>
  );
}

