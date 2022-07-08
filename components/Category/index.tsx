import React from 'react'
import styles from "../../styles/Merchant/view.module.scss";
function Category() {
  return (
    <div>
    <h1>All Category</h1>
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
    </div>
  )
}

export default Category