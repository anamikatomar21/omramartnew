// import React from 'react';

// import { NextPage } from 'next';
// import Image from 'next/image';
// import Link from 'next/link';

// import styles from '../../styles/Merchant/Header.module.scss';

// const Header: NextPage = () => {
//     return(

//         <div className={styles.navbarheader}>
//         <div className={styles.brandlogo}>
//           <div className={styles.logo}>
//             <Image
//               data-lazyloaded="1"
//               src="/omratrade/el.png"
//               height={50}
//               width={60}
//               alt="Logo Image"
//               className={styles.imageLogo}
//             />
//           </div>
//         </div>

// <div className={styles.searchbox}>
// <div className={styles.searchinnerbox}>
//     <input type="text" placeholder="Search.." className={styles.searchinput} />

//                 <button type="submit" className={styles.searchinput1}><i className="fa fa-search"></i></button>
//               </div>
// </div>

//         <div className={styles.navbarright}>
//           <div className={styles.rightnav}>
//             <ul className={styles.navlinks}>
//               <li>

//               </li>
//               {/* <i className="far fa-bell bell-icon"></i> */}
//               <li>
//                 <i className="fas fa-user"></i><Link href='/index1'>Login</Link>
//               </li>
//               {/* <li>
//                 <i className="fas fa-user"></i><a href="#">Buyer</a>
//               </li>
//               <li>
//                 <i className="fas fa-user"></i> <a href="#">Profile</a>
//               </li>
//               <li>
//                 <i className="fas fa-address-book"></i> <a href="#">Contact Us</a>
//               </li> */}

//             </ul>
//           </div>
//         </div>
//       </div>

//     )
// }
// export default Header;

import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Merchant/Header.module.scss';

const Header: NextPage = () => {
  return (
    // <div className={styles.navbarheader}>
    <div>
      <div className={styles.flex_box}>
        <div>
          <Image
            data-lazyloaded="1"
            src="/omratrade/el.png"
            height={100}
            width={200}
            alt="Logo Image"
            className={styles.imageLogo}
          />
        </div>

        <ul className={styles.flex_box1}>
          <li className={styles.button_box1}>
            <span className={styles.phone_icon}>
              {" "}
              <i className="fa fa-phone"></i>{" "}
            </span>

            <span>9876357367</span>
          </li>
          <li className={styles.button_box}>
            <i className="fas fa-user"></i>
            <Link href="/index1">Sign in</Link>
          </li>
          <li></li>
        </ul>
      </div>

      <div className={styles.flex_section}>
        <h1 className={styles.heading_section}>
          India First Laundry/Dry Cleaning Marketplace
        </h1>
      </div>
     

         




      <div className={styles.searchbar}>
        <div className={styles.citylist}>
          <span className={styles.map_icon}>
            <i className="fa fa-map-marker"></i> 
          </span>
          <input
              type="text"
              placeholder="All Cities"
              className={styles.cityinputt}
            />
            <ul className={styles.city_list}>
  <li>Agra</li>
  <li>Delhi</li>
  <li>Mumbai</li>
  <li>Banglore</li>
  <li>Pune</li>
 
</ul>
        </div>
        <div className={styles.searchbox}>
        <input
            type="text"
            placeholder="What are you looking for..."
            className={styles.input_sectionn}
          />
          <button type="submit" className={styles.input_section1r}>
            <i className="fa fa-search"></i>Search
          </button>
        </div>


      </div>

      <div className=""></div>
    </div>
  );
};
export default Header;
