import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Merchant/newfooter.module.scss";

const NewFooter: NextPage = () => {
  return (
    <div className={styles.footerBox}>
      <div className={styles.footertop}>
        <div className="col-md-12">
          <ul className={styles.footertoplist}>
            <li>
              <Image
                src="/omratrade/el.png"
                width={170}
                height={79}
                alt="sliderbanner"
                className={styles.facemask}
              />
            </li>
            <li>
              <div className={styles.formsect}>
                <p className={styles.text}>
                  Get exclusive sneak peak to new launches & early access to
                  offers.
                </p>
                <input type="email" className={styles.inputfooter} />
                <button className={styles.emailbuttonfooter}>Submit</button>
                <div className={styles.subm}>SIGN UP FOR EMAIL SAVINGS</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer section starts */}
      <div className={styles.footerBoxSection}>

<div>

  <ul>
 <li><Link href="">Top Categories : </Link></li> 
            <Link href="">Laundery Machine & Equipments |</Link></li>
            <Link href="">Dryclean Machine & Equipment | </Link></li>
            <Link href="">Laundry Bags| </Link></li>
            <Link href="">Chemical & Detergent |</Link></li>
            <Link href="">QR code printer |</Link></li>
            <Link href="">Basket |</Link></li>
            <Link href="">Scanner |</Link></li>
            <Link href="">Hanger |</Link></li>
  </ul>
</div>
<div></div>
<div></div>
<div></div>

      </div>
    </div>
  );
};

export default NewFooter;
