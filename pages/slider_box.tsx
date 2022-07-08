import {

    useEffect,

    useState,

} from 'react';
import styles from '../styles/Merchant/sliderbox.module.scss';
import Image from 'next/image';

import type { NextPage } from 'next';

import { useRouter } from 'next/router';


import Link from 'next/link';



import UserLayout from '../components/User/Layout';

import { useLogin } from '../networkAPI/queries';

import React, { Component } from 'react';



const SliderBox: NextPage = () => {


    return (
<div className={styles.Flex_Section}>
<div>
    <Image
    src="/omratrade/sliderbanner.png"
    width={600} height={300} alt="facemask"
    className="facemask"
  />
  </div>
  <div>
  <Image
  src="/omratrade/sliderbanner.png"
  width={600} height={300} alt="facemask"
  className="facemask"
/>
</div>
</div>
    )

};



export default SliderBox;


