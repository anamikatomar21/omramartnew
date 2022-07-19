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
      <section className="catlogsection">
        <div className="container">
          <div className="row outerbox column-8">
            <div className={` ${styles.img_box} col-md-3`}>
              Laundery Machine & Equipments
            </div>
            <div className={` ${styles.img_box1} col-md-3`}>
              Dryclean Machine & Equipment
            </div>
            <div className={` ${styles.img_box2} col-md-3`}>Laundry Bags</div>
            <div className={` ${styles.img_box3} col-md-3`}>
              Chemical & Detergent
            </div>
            <div className={` ${styles.img_box4} col-md-3`}>
              QR code printer
            </div>
            <div className={` ${styles.img_box5} col-md-3 `}>Basket</div>
            <div className={` ${styles.img_box6} col-md-3`}>Hanger</div>
            <div className={` ${styles.img_box7} col-md-3`}>Scanner</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCategory;
