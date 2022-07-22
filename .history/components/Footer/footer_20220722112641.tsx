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

      <div className={styles.footerBoxSection}>
        <div className="row ">
          <div className={styles.bottom_box}>
            <Link href="">Top Categories : </Link>{" "}
            <Link href="">Laundery Machine & Equipments |</Link>
            <Link href="">Dryclean Machine & Equipment | </Link>
            <Link href="">Laundry Bags| </Link>
            <Link href="">Chemical & Detergent |</Link>
            <Link href="">QR code printer |</Link>
            <Link href="">Basket |</Link>
            <Link href="">Scanner |</Link>
            <Link href="">Hanger |</Link>
          </div>
        </div>
        <div className="row">
          <div className={styles.bottom_box}>
            <Link href="">Top Categories : </Link>{" "}
            <Link href="">Laundery Machine |</Link>
            <Link href="">Dryclean Machine| </Link>
            <Link href="">Laundry Bags </Link>
            <Link href="">Chemical & Detergent |</Link>
            <Link href="">QR code printer |</Link>
            <Link href="">Basket |</Link>
            <Link href="">Scanner |</Link>
            <Link href="">Hanger |</Link>
          </div>
        </div>
      </div>
      <div className={styles.Footer_Flex}>
        <div className={styles.footer_flexbox}>
      
          <ul>
            <li>    <p>Need Help?</p></li>
            <li>
              <p>elaundry support id available everyday</p>
            </li>
            <li>
              <p>
                E-Laundry “A Product of Omra Solutions.” The Perfect fit for any
                kind of Laundry and Dry-Clean Business.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.footer_flexbox1}>
          
          <ul>
            <li><p>Business Types</p></li>
            <li>
              <Link href="">Dry Cleaners</Link>
            </li>
            <li>
              <Link href="">Laubromats</Link>
            </li>
            <li>
              <Link href="">Shoe Cleaning</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_flexbox2}>
          <ul>
            <li>
              <p>Services</p>
            </li>
            <li>
              <Link href="">Single Store</Link>
            </li>
            <li>
              <Link href="">Multi Store</Link>
            </li>
            <li>
              <Link href="">Institutional Business</Link>
            </li>
            <li>
              <Link href="">Customized Solution</Link>
            </li>
            <li>
              <Link href="">Customer mobile application</Link>
            </li>
            <li>
              <Link href="">Website Development</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footer_flexbox3}>
         
          <ul>
            <li><p>Customer Care</p></li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Support And FAQ’s</Link>
            </li>
            <li>
              <Link href="">Refund Policy</Link>
            </li>
            <li>
              <Link href="">Return Policy</Link>
            </li>
            <li>
              <Link href="">Book Your Demo</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.Footer_Flexsection}>
        <div className={styles.footer_flexbox4}>
         <p>Get in Touch</p>

          <p>info@elaundr.co.in</p>
        </div>

        <div className={styles.footer_flexbox5}>
          <h3>Office Address</h3>
          <p>
            ADDRESS Office-1: E-Laundry A Product of OMRA Solutions Office No:
            103 & 105, D-20 Sector 63, Noida (UP)
          </p>

          <p>
            Office-2: E-Laundry A Product of OMRA Solutions F32, First Floor,
            Cosmos Square , Rustomjee Global City, Virar West , Maharashtra
            401303
          </p>
        </div>
      </div>
      <div className={styles.footer_background}>
        <hr />
        <h3>Elaundry © 2022. All rights reserved</h3>
      </div>
    </div>
  );
};

export default NewFooter;
