import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';

// import styles from '../../../styles/Merchant/dashcode.module.scss';
import styles from '../../styles/Merchant/dashcode.module.scss';

// import styles from "../../styles/Merchant/layout.module.scss";

const MerchantSidebar: NextPage = () => {
  return (
    <div className={styles.dashcodemain}>
     


        <div className={styles.layoutDrawer}>
          <div className={styles.layoutDrawer_nav}>

            <nav className={styles.sidebar} id="drawerAccordion">
              <ul>
                <li><Link href="/onboarding/dashboard/product/Upload_Product">Upload Product</Link></li>
                <li><Link href="/onboarding/dashboard/product/AllProduct">All Product</Link></li>
                <li><Link href="/onboarding/dashboard/product/AllProduct">All Product</Link></li>
               

                {/* <li><a href="">Overview</a></li>
    <li><a href="">Overview</a></li>
    <li><a href="">Overview</a></li>
    <li><a href="">Overview</a></li>
    <li><a href="">Overview</a></li>
    <li><a href="">Overview</a></li>
    <li><a href="">Overview</a></li> */}
              </ul>
            </nav>

          </div>
          <div className={styles.layoutDrawer_content}>
           

          </div>
        </div>


      </div>
   
  );
};

export default MerchantSidebar;
