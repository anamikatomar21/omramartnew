import { useCallback, useEffect, useState } from "react";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Merchant/Header.module.scss';

const TopHeader: NextPage = () => {
  return (
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
          <Link href="/login">Sign in</Link>
        </li>
        <li></li>
      </ul>
    </div>
    India First laundry & Dry Clean Market Place

    
  </div>
  );
};

export default TopHeader;


