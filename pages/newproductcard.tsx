import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Merchant/newproductcard.module.scss";

const NewProductCard: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productcard}>
        <div className={styles.imgone}>
          <div className={styles.productimg}></div>
        </div>
        <div className={styles.producttext}>
          <h3>Software</h3>
          <p>Merchant Name:ABC PVT ltd</p>
        </div>
        <div className={styles.productcart}>
          <button type="submit">Buy Now</button>
        </div>
      </div>

      <div className={styles.productcard}>
        <div className={styles.imgtwo}>
          <div className={styles.productimg}></div>
        </div>
        <div className={styles.producttext}>
          <h3>Agriculture</h3>
          <p>Merchant Name:ABC PVT ltd</p>
        </div>
        <div className={styles.productcart}>
          <button type="submit">Buy Now</button>
        </div>
      </div>

      <div className={styles.productcard}>
        <div className={styles.imgthree}>
          <div className={styles.productimg}></div>
        </div>
        <div className={styles.producttext}>
          <h3>Computer</h3>
          <p>Merchant Name:ABC PVT ltd</p>
        </div>
        <div className={styles.productcart}>
          <button type="submit">Buy Now</button>
        </div>
      </div>

      <div className={styles.productcard}>
        <div className={styles.imgone}>
          <div className={styles.productimg}></div>
        </div>
        <div className={styles.producttext}>
          <h3>Software</h3>
          <p>Merchant Name:ABC PVT ltd</p>
        </div>
        <div className={styles.productcart}>
          <button type="submit">Buy Now</button>
        </div>
      </div>

      <div className={styles.productcard}>
        <div className={styles.imgtwo}>
          <div className={styles.productimg}></div>
        </div>
        <div className={styles.producttext}>
          <h3>Agriculture</h3>
          <p>Merchant Name:ABC PVT ltd</p>
        </div>
        <div className={styles.productcart}>
          <button type="submit">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;
