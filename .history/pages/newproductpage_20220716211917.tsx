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
      <Image
                src={"/omratrade/homebanner.png"}
                height={80}
                width={100}
                alt="productr image"
                className={styles.productimagesrc}
              />
      </div>
      <div className={styles.flex_box2}>eee</div>
    </div>
  );
};

export default NewProductPage;
