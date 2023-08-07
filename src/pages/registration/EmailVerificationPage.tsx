import React, { useEffect } from 'react';
import { useAppSelector } from "src/redux/store/hooks";
import { selectCurrentUserAccount } from 'src/redux/slice/authentication/AuthenticationSelector';
import { useGetUpdatedUserProfileQuery } from 'src/redux/queries/profile/GetUpdatedUserAccount';
import { useState } from 'react';
import { toast } from "src/components/ui/use-toast";
import { createStyles, rem } from '@mantine/core';
import { routes } from '../../constant/routes';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import HappyToast from 'src/components/Toast/HappyToast';
import ToastWarning from 'src/components/Toast/ToastWarning';

const useStyles = createStyles((theme: any) => ({
    wrapper: {
      position: 'relative',
      boxSizing: 'border-box',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      padding: '5px',
    },
  
    inner: {
      position: 'relative',
      paddingTop: rem(200),
      paddingBottom: rem(120),
  
      [theme.fn.smallerThan('sm')]: {
        paddingBottom: rem(80),
        paddingTop: rem(80),
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(62),
      fontWeight: 900,
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(30),
        lineHeight: 1.2,
      },
    },
  
    description: {
      marginTop: theme.spacing.xl,
      fontSize: rem(50),
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(18),
      },
    },
  
    controls: {
      marginTop: `calc(${theme.spacing.xl} * 2)`,
  
      [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xl,
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    control: {
      height: rem(54),
      paddingLeft: rem(38),
      paddingRight: rem(38),
  
      [theme.fn.smallerThan('sm')]: {
        height: rem(54),
        paddingLeft: rem(18),
        paddingRight: rem(18),
        flex: 1,
      },
    },
  
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
}));

const GradientText = styled.span`
  background: linear-gradient(to right, blue, cyan);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export const EmailVerificationPage:React.FC = () => {
    const [toast, setToast] = useState<React.ReactElement | null>(); 
    const [emailVerified, setEmailVerified] = useState(false);
    const {email, userAccountID}  = useAppSelector(selectCurrentUserAccount);
    const { classes } = useStyles();
    const history = useNavigate();

    const{ data: response,
        isLoading,
        error,refetch} = useGetUpdatedUserProfileQuery({userId: Number(userAccountID)});
    
    useEffect(() => {       
            if(response){
                let {account} = response;
                if(account?.isEmailVerified){
                    setEmailVerified(true)
                }
                else{
                    setToast( <HappyToast 
                        show={true} 
                        message={"Email verified!"}
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
    }, [response])

    if(emailVerified){
        history(`${routes.ONBOARDING}`);
        return (
           <div></div>
        )
    }
    else{
        return (
            <div
            id="main"
            style={{
              paddingTop: 'var(--ion-safe-area-top)',
            }}
          >
            {toast}
            <header className="no-border">
              <div></div>
            </header>
            <main>
              <div className={classes.wrapper}>
                <div className={classes.inner}>
                  <h1 className={classes.title}>
                    Melodiy - Helping You{' '}
                    <GradientText>
                        Unlock the Power of Financial Freedom
                    </GradientText>
                  </h1>
                  <p className={`${classes.description} dimmed`}>
                    Before you proceed - please verify your email account! An email should be sent to  <span className="text-blue-600 font-bold">{email}</span>. Verify your email and come back to finish your onboarding flow!
                  </p>
                  <div className={classes.controls}>
                    <button className="outline font-bold rounded" onClick={ ()=>  refetch() }> I have verified my email</button>
                  </div>
                </div>
              </div>
            </main>
          </div>          
        )
    }

} 

