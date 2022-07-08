import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import UserLayout from "../components/User/Layout";
import { useGetCategory } from "../networkAPI/queries";
import styles from "../styles/Merchant/view.module.scss";

const AllCategory: NextPage = () => {
  const data2 = useGetCategory();
  const category_data = data2.data;

  return (
    <div>
      <div className={styles.Flex_Section}>
        <div className={styles.img_box}>Laundery Machine & Equipments</div>
        <div className={styles.img_box1}>Dryclean Machine & Equipment</div>
        <div className={styles.img_box2}>Laundry Bags</div>
        <div className={styles.img_box3}>Chemical & Detergent</div>
      </div>

      <div className={styles.Flex_Section}>
        <div className={styles.img_box4}>QR code printer</div>
        <div className={styles.img_box5}>Basket</div>
        <div className={styles.img_box6}>Hanger</div>
        <div className={styles.img_box7}></div>
      </div>
    </div>
  );
};

export default AllCategory;
