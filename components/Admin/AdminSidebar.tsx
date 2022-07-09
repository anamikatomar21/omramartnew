import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';

// import styles from '../../../styles/Merchant/dashcode.module.scss';
import styles from '../../styles/Merchant/dashcode.module.scss';

const AdminSidebar: NextPage = () => {
    return(
      <div className={styles.dashcodemain}>
     


      <div className={styles.layoutDrawer}>
        <div className={styles.layoutDrawer_nav}>

          <nav className={styles.sidebar} id="drawerAccordion">
            <ul>

            <li><Link href="/admindashboard/all_merchant">All Merchant</Link></li>
              <li><Link href="/admindashboard/users">Merchants Credentials</Link></li>
              <li><Link href="/admindashboard/add_category">Add Category</Link></li>
              <li><Link href="/admindashboard/all_category">All Category</Link></li>
              <li><Link href="/admindashboard/banner/add_banners">Add Banner</Link></li>
              <li><Link href="/admindashboard/banner">All Banner</Link></li>
              <li><Link href="/admindashboard/approved_listing">Seller Products</Link></li>
              <li><Link href="/admindashboard/index">Approved Listing</Link></li>
              <li><Link href="">Edit Listing</Link></li>
              <li><Link href="">Deleted Listing</Link></li>
              <li><Link href="">Reject Listing</Link></li>
              <li><Link href="">Block User</Link></li>
       

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

            
       
    )
}


export default AdminSidebar