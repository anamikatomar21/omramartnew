import {

    useEffect,

    useState,

} from 'react';
import styles from '../styles/Merchant/productcard.module.scss';
import Image from 'next/image';

import type { NextPage } from 'next';

import { useRouter } from 'next/router';


import Link from 'next/link';



import UserLayout from '../components/User/Layout';

import { useLogin } from '../networkAPI/queries';

import React, { Component } from 'react';



const Product_Card: NextPage = () => {


    return (

        <div className={styles.container}>

            <div className={styles.productcard}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">Buy Now</button>
                </div>
            </div>

            <div className={styles.productcard}>
                <div className={styles.imgtwo}>
                    <div className={styles.productimg}>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Agriculture</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">Buy Now</button>
                </div>
            </div>

            <div className={styles.productcard}>
                <div className={styles.imgthree}>
                    <div className={styles.productimg}>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Computer</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">Buy Now</button>
                </div>
            </div>


            <div className={styles.productcard}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">Buy Now</button>
                </div>
            </div>

            <div className={styles.productcard}>
                <div className={styles.imgtwo}>
                    <div className={styles.productimg}>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Agriculture</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">Buy Now</button>
                </div>
            </div>



        </div>



    )

};



export default Product_Card;



