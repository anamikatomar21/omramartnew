import {
    useCallback,
    useEffect,
    useState,
  } from 'react';
  
  import type { NextPage } from 'next';
  import Head from 'next/head';
  import Link from 'next/link';

  import styles from '../styles/Merchant/carousel.module.scss';
  
  const Carousel: NextPage = () => {
      
    
      return (
       <div>
        import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;




       </div>
      );
    };
    
    export default Carousel;
    