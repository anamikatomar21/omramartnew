import {
    useCallback,
    useEffect,
    useState,
  } from 'react';
  
  import type { NextPage } from 'next';
  import Head from 'next/head';
  import Link from 'next/link';
  import Router, { useRouter } from 'next/router';
  import toast, { Toaster } from 'react-hot-toast';
  
  import { useGetCompanyProfile } from '../networkAPI/queries';
  import { handleLoginState } from '../redux/actions/auth';
  import {
    useAppDispatch,
    useAppSelector,
  } from '../redux/hooks';
  import styles from '../styles/Merchant/login.module.scss';
  
  const Carousel: NextPage = () => {
      const router = useRouter();
      const dispatch = useAppDispatch();
     
      const [email, setEmail] = useState<string>("");
      const [password, setPassword] = useState<string>("");
    
      const { error,user, isAuthenticated,loading} = useAppSelector((state) => state.user);
      const {data:data,error:err}=useGetCompanyProfile()
      console.log(data)
    
      const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleLoginState({email, password}));
        
      };
      console.log({user:user});
      useEffect(() => {
        if (error) {
          toast.error(error);
        }
        
        if (isAuthenticated) {
          toast.success("You 'are Logged in");
         
  
        
      console.log({user:user})
          if (user) {
            switch (user?.role) {
              case "Admin":
                if(user.isRegistered) {
                  Router.push(`/onboarding/dashboard`)
  
                }else{
                  Router.push(`/onboarding/profile`)
  
                }
                
                break;
    
              case "SuperAdmin":
                Router.push(`/admindashboard`)
                break;
              // case "User":
              //   router.push(`/`)
              //   break;
    
              default:
                Router.push(`/`)
                break;
            }
          }
        }
        
          // router.push(`/onboarding/profile`)
        
      }, [error, user, isAuthenticated]);
  
      const [showPassword, setshowPassword] = useState(false)
  
    const showPasswordHandler=useCallback(()=>{
  setshowPassword(!showPassword)
    },[showPassword])
    
      return (
       
      );
    };
    
    export default Carousel;
    