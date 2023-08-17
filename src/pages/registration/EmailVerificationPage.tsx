import React, { useEffect } from 'react';
import { useAppSelector } from "src/redux/store/hooks";
import { selectCurrentUserAccount } from 'src/redux/slice/authentication/AuthenticationSelector';
import { useGetUpdatedUserProfileQuery } from 'src/redux/queries/profile/GetUpdatedUserAccount';
import { useState } from 'react';
import { routes } from '../../constant/routes';
import { useNavigate } from 'react-router';
import HappyToast from 'src/components/happy-toast';
import ToastWarning from 'src/components/warning-toast';
import { Logo } from "src/components/Logo";
import { persistentStorage } from "src/lib/persistent-storage";
import { constants } from "src/constant/constants";

export const EmailVerificationPage:React.FC = () => {
    const [toast, setToast] = useState<React.ReactElement | null>(); 
    const [emailVerified, setEmailVerified] = useState(false);
    const {email, userAccountID}  = useAppSelector(selectCurrentUserAccount);
    const history = useNavigate();

    const{ data: response,
        isLoading,
        error,refetch, } = useGetUpdatedUserProfileQuery({userId: Number(userAccountID)});

    useEffect(() => {       
            if(response){
                let {account} = response;
                if(account?.isEmailVerified){
                    setEmailVerified(true)
                    setToast( <HappyToast 
                        show={true} 
                        message={"Email verified!"}
                        autoHideDuration={3000}
                      />)
                      persistentStorage.setItem(
                        constants.USER_ACCOUNT_KEY,
                        account
                      );
                } 
                else {
                    setToast( <ToastWarning 
                        show={true} 
                        message={"Email not verified"}
                        autoHideDuration={3000}
                    />)
                }
            }
            else if(error){ // send an error message
                setToast( <ToastWarning 
                    show={true} 
                    message={"Email not verified"}
                    autoHideDuration={3000}
                />)
            }
    }, [response, error, isLoading])

    if(emailVerified){
        history(`${routes.CONNECT_BANK_ACCOUNT}`);
        return (
           <div></div>
        )
    }
    else{
        return (
            <>
            {toast} 
    <div className="p-10 lg:p-20">
      <Logo />
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 lg:py-16 lg:px-6 ">
          <div className="text-gray-500 sm:text-lg my-3">
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
                            Verify your email 
                        </h2>
                    </div>
                    <div>
                        <button className="outline font-bold rounded mt-2" onClick={ ()=>  refetch() }> I have verified my email ! </button>
                    </div>
                </div>
            </div>
            <p className='font-light text-xl text-gray-700 dark:text-gray-200 mb-4'>To verify, simply click on the link we have sent to your email address. If you do not see an email, check your spam folder! After you have verified your email, please click the button above</p>
            <div className="grid gap-6 lg:grid-cols-1 dark:border-gray-700 sm:grid-cols-2">
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Security First
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-200">
                  Verifying your email ensures that your account is secure and that its really you joining our community.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Smooth Experience
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-200">
                  A verified email ensures a seamless experience, especially if you ever need to recover your account or change settings.
                  </p>
                </div>
              </div>
              <div className="flex">
              </div>
            </div>
          </div>
          <img
            className=" mx-auto mb-4 sm:flex border rounded-2xl"
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="table professor illustration"
          />
      </section>
    </div>       
            </>
            
        )
    }

} 