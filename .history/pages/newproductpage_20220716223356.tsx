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

         <p></p> 
Multiple Operating modes like auto mode, fan mode, dry mode and sleep mode for specialized needs
Warranty: 1 year product and 5 years on compressor. For claiming warranty, A) Go to 'Your orders' section, B) select the product, C) Click on Get product support and D) schedule an appointment. No need to call anyone and wait in a queue. Hassle free process. Paperless Experience with complete visibility on every step of your warranty claim
During installation, in case there is requirement for pipe extension to connect indoor & outdoor unit, kindly ask the technician to do a gas refill for effective cooling
Four Stage Filtration System with micro dust anti-bacterial filters to keep out both visible & invisible dust & other pollutants, making the air healthier to breathe
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
