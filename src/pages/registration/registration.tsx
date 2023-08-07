import { Input } from "@mantine/core";
import { Link } from "react-router-dom";
import { Logo } from "src/components/Logo";
import { UserAuthForm } from "src/components/Registeration-Login/login-form";
import { buttonVariants } from "src/components/ui/button";
import { Layout } from "src/layouts/layout";
import { cn } from "src/lib/utils";

/**
 * Registration page component for creating a new user account.
 * Allows users to create an account by providing their email and password.
 */
export default function RegistrationPage() {
  // const [createUserAccount] = useCreateAccountMutation();
  // const [checkIfEmailExists] = useCheckEmailExistsMutation();
  // const [checkUsernameExists] = useCheckUsernameExistsMutation();
  // const [toast, setToast] = React.useState<React.ReactElement>(<div />);
  // const [interest, setInterest] = React.useState<Tags[]>([]);
  // const [selectedAvatar, setSelectedAvatar] = React.useState<string>('');
  // const [termsAndConditionsApproved, setTermsAndConditionsApproved] =
  //   React.useState<boolean>(false);

  // const onSelectAvatar = (avatar: string) => {
  //   setSelectedAvatar(avatar);
  // };

  // const onSubmit = async (req: CreateUserRequest) => {
  //   try {
  //     // user must select an avatar
  //     if (selectedAvatar === '') {
  //       throw new Error('Please select an avatar');
  //     }

  //     // user must select atleast 3 interests
  //     if (interest.length < 3) {
  //       throw new Error('Please select atleast 3 interests');
  //     }

  //     // TODO: before we submit the payload to the backend we need to ensure the email and username does not already exist
  //     const email = req.account!.email.trim().toLocaleLowerCase();
  //     const username = req.account!.username.trim().toLocaleLowerCase();
  //     const password = req.password.trim();

  //     // call the backend and check if the email already exists
  //     // const emailExists = await checkEmailExists({ email: email }).unwrap();
  //     const res = await checkIfEmailExists({ email: email }).unwrap();
  //     if (res.exists) {
  //       throw new Error('Email already exists');
  //     }

  //     // call the backend and check if the username already exists
  //     const usernameExists = await checkUsernameExists({ username: username }).unwrap();
  //     if (usernameExists.exists) {
  //       throw new Error('Username already exists');
  //     }

  //     if (termsAndConditionsApproved === false) {
  //       throw new Error('Terms and conditions not approved');
  //     }

  //     const acct = UserAccount.create({
  //       email: email,
  //       username: username,
  //       tags: interest,
  //     });

  //     const formattedRequest = CreateUserRequest.create({
  //       account: acct,
  //       password: password,
  //       profileImage: selectedAvatar,
  //       communityIdsToFollow: req.communityIdsToFollow,
  //     });

  //     // call the backend and register the user
  //     const newAcct = await createUserAccount({ body: formattedRequest }).unwrap();

  //     // increment a mixpanel registration event
  //     mixPanelClient.trackRegistrationEvent({
  //       userID: `${newAcct.userID}`,
  //       time: new Date().toDateString(),
  //     });

  //     // dispatch a toast
  //     setToast(
  //       <NotificationToast
  //         message={
  //           'Successfully created an account. Please check your inbox and verify your account '
  //         }
  //         isError={false}
  //         position={'bottom'}
  //       />
  //     );

  //     reset();

  //     // route the person to the authentication page
  //     history.push(routes.AUTHENTICATION);
  //   } catch (err) {
  //     // dispatch an error toast
  //     setToast(
  //       <NotificationToast
  //         key={new Date().getTime()}
  //         message={err!.toString()}
  //         isError={true}
  //         position={'bottom'}
  //         duration={300}
  //       />
  //     );
  //   }
  // };

  return (
    <>
    {/* <div className="my-6 mx-auto bg-white rounded-xl py-8 px-4 shadow sm:rounded-2xl sm:px-10">
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
</div> */}

    </>
  );
}
