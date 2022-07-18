import { useCallback, useEffect, useState } from "react";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Merchant/newproductpage.module.scss";
import ProductCard from "../components/ProductCard";
const NewProductPage: NextPage = () => {
  return (
    <div className={styles.flex_box}>
      <div className={styles.flex_box1}>
        <div className={styles.flex_box3}>
          <Image
            src={"/omratrade/homebanner.png"}
            height={300}
            width={400}
            alt="productr image"
            className=""
          />
        </div>
        <div className={styles.smallimage}>
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
        </div>
        <div>
          <h1>Company Information</h1>

         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
        </div>
      </div>

      {/* Right section starts */}
      <div className={styles.flex_box2}>
        <h1>
          Business Name: <span>Komal Enterprise</span>{" "}
        </h1>
        <h4>Noida, India,GST -2589DHYJ4894745</h4>
        <h1>Voltas 1 Ton 3 Star Split Inverter Air Conditioner (123VCAZR)</h1>
        <h4>Brand:Voltas</h4>
        <div className={styles.rating}>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>

        <div className={styles.grey_box}>

          <div>Genuine Products</div>
          <div>Made in India</div>
        </div>
      </div>

        {/* Right section ends */}
    </div>
  );
};

export default NewProductPage;
