import {

    useEffect,

    useState,

} from 'react';
import styles from '../styles/Merchant/updatedproductcard.module.scss';
import Image from 'next/image';

import type { NextPage } from 'next';

import { useRouter } from 'next/router';


import Link from 'next/link';



import UserLayout from '../components/User/Layout';

import { useLogin } from '../networkAPI/queries';

import React, { Component } from 'react';



const UpdatedProductCard: NextPage = () => {


    return (
<div > 
    <h1>Chemical & Detergent</h1>
        <div className={styles.container}>
<div className="background_section"></div>
            <div className={styles.productcard}>
                <div className={styles.backg}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Merchant Name:ABC PVT ltd</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">View More</button>
                </div>
            </div>
            <div className={styles.productcard}>
                <div className={styles.backg}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Merchant Name:ABC PVT ltd</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">View More</button>
                </div>
            </div>
            <div className={styles.productcard}>
                <div className={styles.backg}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Merchant Name:ABC PVT ltd</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">View More</button>
                </div>
            </div>
            <div className={styles.productcard}>
                <div className={styles.backg}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Merchant Name:ABC PVT ltd</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">View More</button>
                </div>
            </div>
            <div className={styles.productcard}>
                <div className={styles.backg}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Merchant Name:ABC PVT ltd</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">View More</button>
                </div>
            </div>
          
        </div>
        <h1>Chemical & Detergent</h1>
<div className={styles.container}>

<div className={styles.productcard1}>
    <div className={styles.backg2}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard1}>
    <div className={styles.backg2}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard1}>
    <div className={styles.backg2}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard1}>
    <div className={styles.backg2}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard1}>
    <div className={styles.backg2}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart}>
        <button type="submit">View More</button>
    </div>
</div>
</div>
<h1>Chemical & Detergent</h1>
<div className={styles.container}>

<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
</div>
</div>
    )

};



export default UpdatedProductCard;



