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
      
    
      return (
       
      );
    };
    
    export default Carousel;
    