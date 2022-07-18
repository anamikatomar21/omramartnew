import { useCallback, useEffect, useState } from "react";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Merchant/newproductpage.module.scss";
import ProductCard from "../components/ProductCard";
const NewProductPage: NextPage = () => {
  return (
    <div>
      <div className={styles.main}>
        {/* leftside starts*/}
        <div className={styles.coloum_box}>
        <div >
          <Image
            src={"/omratrade/homebanner.png"}
            height={400}
            width={400}
            alt="productr image"
            className={styles.productimagesrc}
          />
        </div>
        <div className=styles.coloum_box1}>
          <div className="">
            <Image
              src={"/omratrade/homebanner.png"}
              height={80}
              width={100}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className="">
            <Image
              src={"/omratrade/homebanner.png"}
              height={80}
              width={100}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className="">
            <Image
              src={"/omratrade/homebanner.png"}
              height={80}
              width={100}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className="">
            <Image
              src={"/omratrade/homebanner.png"}
              height={80}
              width={100}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className="">
            <Image
              src={"/omratrade/homebanner.png"}
              height={80}
              width={100}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          </div>
        </div>
        {/* leftside ends*/}
        {/* rightside starts*/}
        <div>
          <div>
            <h1>
              Business Name:{" "}
              <span className={styles.content_color}>Anamika Enterprises</span>{" "}
            </h1>
            <h2>Noida, India,GST- 27AAMFV3839L1ZF</h2>
            <h1>Voltas1.5 Ton 3 Star Non-Inverter Split AC (2019, White)</h1>
            <h3>Brand: Voltas</h3>
            <p>4.5/5 1037 rating & 249 reviews</p>
          </div>
          <div className={styles.text_box}>
            <p>Genuine Products</p>
            <p>10 Days Return Policy</p>
            <p>sold by: komal</p>
          </div>
          <h1 className={styles.content_color}>Product Specifications</h1>
          <div>
            <table className={styles.table_box}>
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>Brand</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>Brand</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>Brand</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>Brand</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>Brand</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>Brand</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>Brand</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* rightside ends*/}
        </div>
      </div>
    </div>
  );
};

export default NewProductPage;
