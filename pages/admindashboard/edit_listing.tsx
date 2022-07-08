import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// import styles from '../styles/Merchant/dashcode.module.scss';
import styles from '../../styles/Merchant/dashcode.module.scss';

const EditListing: NextPage = () => {
  return (
    <>
      <div className={styles.dashcodemain}>
        <div className={styles.navbarheader}>
          <div className={styles.brandlogo}>
            <div className={styles.logo}>
              <Image
                data-lazyloaded="1"
                src="/logo.png"
                height={50}
                width={60}
                alt="Logo Image"
                className={styles.imageLogo}
              />
            </div>
          </div>

          <div className={styles.navbarright}>
            <div className={styles.rightnav}>
              <ul className={styles.navlinks}>
              <li>
                {/* <input type="text" placeholder="Search.."/> */}
               <div><input type="text" placeholder="Search.." className='search-input' />
  <button type="submit" className='search-button'>Search
    {/* <i className="fa fa-search"></i> */}
    </button></div> 
  

              </li>
              <li>
              <i className="fas fa-user"></i><a href="#"> Vendor1</a>
                </li>
                <li>
                <i className="fas fa-user"></i><a href="#">Vendor1</a>
                </li>
                <li>
                <i className="fas fa-user"></i><a href="#">Buyer</a>
                </li>
                <li>
                <i className="fas fa-user"></i> <a href="#">Profile</a>
                </li>
                <li>
                <i className="fas fa-address-book"></i> <a href="#">Contact Us</a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>



        <div className={styles.layoutDrawer}>
          <div className={styles.layoutDrawer_nav}>

            <nav className={styles.sidebar} id="drawerAccordion">
              <ul>
                <li><Link href="/onboarding/dashboard/product/Upload_Product">upload Product</Link></li>
                <li><Link href="/onboarding/dashboard/product/AllProduct">All Listing</Link></li>
                <li><Link href="">Approved Listing</Link></li>
                <li><Link href="">Rejected Listing</Link></li>
                <li><Link href="">Delete Listing</Link></li>
                <li><Link href="">Edit  Listing</Link></li>
                <li><Link href="">Block Users</Link></li>
                <li><Link href="">Delete Account</Link></li>
               

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
            <main>
              <div className={` ${styles.mainsection} container-xl p-5`}>

                <h1>Medical Essential, Safety & Protective Clothing and Apparel</h1>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul>
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>

                <div className="container">
                  <div className="product-section">

                    <ul>
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>

              </div>

              <h1>Pharmaceutical Drug, Medicine, Medical Care & Consultation</h1>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>

                <div className="container">
                  <div className="product-section">

                    <ul>
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                
              <h1>Pharmaceutical Drug, Medicine, Medical Care & Consultation</h1>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                <h1>Pharmaceutical Drug, Medicine, Medical Care & Consultation</h1>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
                <div className="container">
                  <div className="product-section">

                    <ul >
                      <li><Link href="#"><b>Face Mask</b></Link></li>
                      <li><Link href="#">3 Ply Face Mask</Link></li>
                      <li><Link href="#">Disposable Face Mask</Link></li>
                      <li><Link href="#">N95 Respirator Mask</Link></li>
                      <li><Link href="#">Nose Masks</Link></li>

                    </ul>
                  </div>
                  <div className="product-section"><ul >
                    <li><Link href="#"><b>Face Mask</b></Link></li>
                    <li><Link href="#">3 Ply Face Mask</Link></li>
                    <li><Link href="#">Disposable Face Mask</Link></li>
                    <li><Link href="#">N95 Respirator Mask</Link></li>
                    <li><Link href="#">Nose Masks</Link></li>

                  </ul></div>

                </div>
              
            </main>




          </div>
        </div>


      </div>
      <div className={styles.footer}>
        <ul >
          <li><a href="#">About Us</a></li>
          <li><a href="#">Join Sales</a></li>
          <li><a href="#">Success Stories</a></li>
          <li><a href="#">Press Section</a></li>
          <li><a href="#">Advertise with Us</a></li>
          <li><a href="#">Jobs & Careers</a></li>
        </ul>
        <ul >
          <li><a href="#">Help</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Complaints</a></li>
          <li><a href="#">Customer Care</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Suppliers Tool Kit</a></li>
        </ul>
        <ul >
          <li><a href="#">About Us</a></li>
          <li><a href="#">Join Sales</a></li>
          <li><a href="#">Success Stories</a></li>
          <li><a href="#">Press Section</a></li>
          <li><a href="#">Advertise with Us</a></li>
          <li><a href="#">Jobs & Careers</a></li>
        </ul>
        <ul >
          <li><a href="#">Help</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#">Complaints</a></li>
          <li><a href="#">Customer Care</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Suppliers Tool Kit</a></li>
        </ul>
        <ul >
          <li><a href="#">About Us</a></li>
          <li><a href="#">Join Sales</a></li>
          <li><a href="#">Success Stories</a></li>
          <li><a href="#">Press Section</a></li>
          <li><a href="#">Advertise with Us</a></li>
          <li><a href="#">Jobs & Careers</a></li>
        </ul>
        
      </div>
      <hr/>
    </>
  );
};

export default EditListing