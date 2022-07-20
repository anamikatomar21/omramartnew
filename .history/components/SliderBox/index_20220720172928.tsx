import {

    useEffect,

    useState,

} from 'react';
import styles from '../../styles/Merchant/sliderbox.module.scss';
import Image from 'next/image';

import type { NextPage } from 'next';

import { useRouter } from 'next/router';


import Link from 'next/link';







import React, { Component } from 'react';



const SliderBox: NextPage = () => {


    return (
<div className={styles.Flex_Section}>
<div>
    <Image
    src="/omratrade/sliderbanner.png"
    width={6800} height={400} alt="facemask"
    className="facemask"
  />
  </div>
  <div>
  <Image
  src="/omratrade/sliderbanner2.png"
  width={700} height={400} alt="facemask"
  className="facemask"
/>
</div>
</div>
    )

};



export default SliderBox;


