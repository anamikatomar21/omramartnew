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

      <div className={styles.sliderBox}></div>
<div className={styles.sliderBox}></div>

</div>
    )

};



export default SliderBox;


