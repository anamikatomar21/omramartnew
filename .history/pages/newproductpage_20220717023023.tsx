import { useCallback, useEffect, useState } from "react";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Merchant/newproductpage.module.scss";
import ProductCard from "../components/ProductCard";
import CompanyDescription from '../components/CompanyDescription';
import Footer from '../components/Footer/footer';
const NewProductPage: NextPage = () => {
  return (
    <div>
    <div>
   
      <div>
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
                height={120}
                width={120}
                alt="productr image"
                className={styles.productimagesrc}
              />
              <Image
                src={"/omratrade/homebanner.png"}
                height={120}
                width={120}
                alt="productr image"
                className={styles.productimagesrc}
              />
              <Image
                src={"/omratrade/homebanner.png"}
                height={120}
                width={120}
                alt="productr image"
                className={styles.productimagesrc}
              />
              <Image
                src={"/omratrade/homebanner.png"}
                height={120}
                width={120}
                alt="productr image"
                className={styles.productimagesrc}
              />
              <Image
                src={"/omratrade/homebanner.png"}
                height={120}
                width={120}
                alt="productr image"
                className={styles.productimagesrc}
              />
            </div>
            <div>
              <h1>Company Information</h1>

              <p>
                <b>Split AC with non-inverter compressor:</b> 100% Copper
                Condenser with extended lifespan to ensure that the air
                conditioner is protected in all weather conditions
              </p>
              <p>
                <b>Split AC with non-inverter compressor:</b> 100% Copper
                Condenser with extended lifespan to ensure that the air
                conditioner
              </p>
              <p>
                <b>Split AC with non-inverter compressor:</b> 100% Copper
                Condenser with extended lifespan
              </p>
              <p>
                <b>Split AC with non-inverter compressor:</b> 100% Copper
                Condenser with extended lifespan to ensure that the air
                conditioner is protected in all weather conditions
              </p>
              <p>
                <b>Split AC with non-inverter compressor:</b> 100% Copper
                Condenser with extended lifespan to ensure that the air
                conditioner is protected in all weather conditions
              </p>
            </div>

            <span className={styles.botton5}>
              <div>
                <a className={styles.ButtonSection1} href="#popup2">
                  Call to Connect
                </a>
              </div>
              <div>
                <a className={styles.ButtonSection2} href="#popup1">
                  For Enquiry
                </a>
              </div>
            </span>
          </div>

          {/* Right section starts */}
          <div className={styles.flex_box2}>
            <h1>
              Business Name:{" "}
              <span className={styles.span_box}>Komal Enterprise</span>{" "}
            </h1>
            <h3>Noida, India,GST -2589DHYJ4894745</h3>
            <h1>
              Voltas 1 Ton 3 Star Split Inverter Air Conditioner (123VCAZR)
            </h1>
            <h3>Brand:Voltas</h3>
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

            <div className={styles.table_box}>
              <hr />
              <h1 className={styles.span_box}>Product Specifications</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Brand</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Capacity</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Annual Energy Consumptions</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Annual Energy Consumptions</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Annual Energy Consumptions</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Capacity</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Annual Energy Consumptions</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Voltas</td>
                  </tr>
                  <tr>
                    <td>Specifications</td>
                    <td>
                      High Ambient Operation upto 50c, Good sleep off
                      timer,pm2.5 filter, dust,filter, self diagonis, air
                      purifications filter, dehumidifier, fast cooling
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right section ends */}
        </div>
      </div>
      <div className={styles.background_section}>
        <h1>SIMILAR PRODUCT WITH OTHER MERCHANTS</h1>
        <div className={styles.flex_container}>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={120}
              width={120}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>

        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={120}
              width={120}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.background_section}>
        <h1>SIMILAR PRODUCT WITH OTHER MERCHANTS</h1>
        <div className={styles.flex_container}>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>

        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.background_section}>
        <h1>SIMILAR PRODUCT WITH OTHER MERCHANTS</h1>
        <div className={styles.flex_container}>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>

        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        <div className={styles.cardproduct}>
          <div className={styles.productimg}>
            <Image
              src={"/omratrade/homebanner.png"}
              height={250}
              width={300}
              alt="productr image"
              className={styles.productimagesrc}
            />
          </div>
          <div className={styles.productcontent}>
            <h4>hhhh</h4>
            <p>hhhhhhhhhhhhhh</p>
          </div>
          <div className={styles.productcartbtn}>
            <button type="submit">View More</button>
          </div>
        </div>
        </div>
      </div>
    </div>
      <div>
      <CompanyDescription />
    </div>
    <Footer /></div>
  );
};

export default NewProductPage;
