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

const Home: NextPage = () => {
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
      <div className="">
        <Toaster position="bottom-center" />
        {/* <UserLayout> */}
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
  
          <section className={styles.SectionBox}>
      <div className={styles.imgBx}>
        <img src="/omratrade/omra.png" width={200} height={200}  alt="girl"/>
      </div>
  
      <div className={styles.contentBx}>
        <div className={styles.formBx}>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div >
              <span>Email id</span>   
              <input className={styles.InputBox} type="email" name=""
               onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div >
              <span>Password</span> 
              <input className={styles.InputBox} type="password" name=""
             
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div>
                <span>Password</span>
                <div className={styles.passwordbox}>
                  <input
                    className={styles.InputBox}
                    type={showPassword?'text':"password"}
                    name=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div  className={` ${styles.passwordshowicon} ${styles.passwordshow} `}>
               
                  </div>
                  <div onClick={showPasswordHandler} className={` ${styles.passwordhideicon} ${styles.passwordshow} `}>
                    {
                      showPassword ?   <Image
                      src="/eye-slash-solid.svg"
                      width={20}
                      height={20}
                      className={styles.passwordhideiconn}
                    ></Image>
                      :<Image
                      src="/eye-solid.svg"
                      width={20}
                      height={20}
                      className={styles.passwordshowiconn}
                    ></Image>
                     
                    }
                 


                  </div>
                </div>
              </div>
        
  
            <div >
  
              <input type="submit" value="Login" name="" className ={styles.buttonsection} onClick={()=>{alert("Login")}}/>
            </div>
    */}
            <div>
              <p>Do not  have an account?<Link href="/sign_up">Sign up</Link></p>
              {/* <p><Link  href="/sign_up"><a>Register?</a></Link></p> */}
            </div>
          </form>
          
        </div>
      </div>
  
    </section>
        {/* </UserLayout> */}
      </div>
    );
  };
  
  export default Home;
  