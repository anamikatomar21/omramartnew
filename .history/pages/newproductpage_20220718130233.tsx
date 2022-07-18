import { useCallback, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Merchant/newproductpage.module.scss";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "components/Footer/footer";
import TopHeader from "./topheader";
// import TopHeader from '../components/Admin/TopHeader';
import {} from "./";
const NewProductPage: NextPage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },

      items: 5,
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 5,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },

      items: 3,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },

      items: 1,
    },
  };

  return (
    <div>
      <TopHeader />

      <div className={styles.container_width}>
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
                  className={styles.productimagesrc1}
                />
                <Image
                  src={"/omratrade/homebanner.png"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                />
                <Image
                  src={"/omratrade/homebanner.png"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                />
                <Image
                  src={"/omratrade/homebanner.png"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                />
                <Image
                  src={"/omratrade/homebanner.png"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
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
                  <a
                    className={styles.ButtonSection1}
                    //  href="#popup2"
                    href="tel:9015756558"
                  >
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
            <div id="popup1" className={styles.overlay}>
              <div className={styles.popup}>
                {/* <h2>Info box</h2> */}

                <a className={styles.close} href="#">
                  &times;
                </a>

                <div className={styles.content1}>
                  <p className={styles.Font}>Tell us about your requirement</p>

                  <form className={styles.FormWidth}>
                    <ul>
                      <li>
                        <textarea
                          className={styles.TextareaSection}
                          rows={3}
                          cols={70}
                          placeholder="Please include product name, order quantity, usage, special requests if any in your inquiry."
                        />
                      </li>

                      <li className={styles.checkboxstyle}>
                        <div>
                          <input type="checkbox" className={styles.check} />
                        </div>

                        <div>
                          <span className={styles.SpanClass}>
                            Send this inquiry to other Suppliers of similar
                            products(?)
                          </span>
                        </div>
                      </li>

                      <li className={styles.ModalSection}>
                        {/* <label htmlFor="category" className={styles.FontHeight}>



                    EMAIL ID

                </label> */}

                        <div>
                          <input
                            type="email"
                            className={styles.Input}
                            placeholder="EMAIL ID "
                          />
                        </div>

                        <div>
                          {" "}
                          <input
                            type="tel"
                            className={styles.Input}
                            placeholder="Phone number "
                          />
                        </div>
                      </li>
                      <li className={styles.checkboxstyle}>
                        <div>
                          <input type="checkbox" className={styles.check} />
                        </div>

                        <div>
                          <span className={styles.SpanClass}>
                            I agree to{" "}
                            <a href="#" className={styles.TermsColor}>
                              terms and conditions
                            </a>
                          </span>
                        </div>
                      </li>

                      <li>
                        <button type="submit" className="submit_button_box">
                          <a href="#">SEND INQUIRY</a>
                        </button>
                      </li>
                    </ul>

                    <div className="buttonmodel"></div>
                  </form>
                </div>
              </div>
            </div>
            <div id="popup2" className={styles.overlay}>
              <div className={styles.popup2}>
                {/* <h2>Info box</h2> */}
                <a className={styles.close} href="#">
                  &times;
                </a>
                <div className={styles.content1}>
                  <p className={styles.Font}>View Number</p>

                  <form className={styles.FormWidth}>
                    <ul>
                      <div className={styles.DisplayFlex}>
                        <li>
                          <input type="checkbox" />
                          <span>I want to Buy</span>
                        </li>

                        {/* <li>
                        <input type="radio" name="radio" />
                        <span>I want to Sell</span>
                      </li> */}
                      </div>

                      <li>
                        <p> Mobile No. *</p>
                        <input type="text" className={styles.NumberInput} />
                      </li>

                      <li>
                        <button type="submit" className={styles.NumberButton}>
                          <a href="#">View Number Now</a>
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
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
              {/* <div className={styles.rating}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div> */}

              <div className={styles.grey_box}>
                <div>
                  <span>
                    <Image
                      src={"/omratrade/quality.png"}
                      height={20}
                      width={20}
                      alt=" india"
                    />{" "}
                    Genuine Products
                  </span>{" "}
                </div>
                <div>
                  {" "}
                  <Image
                    src={"/omratrade/india.png"}
                    height={20}
                    width={20}
                    alt=" india"
                  />
                  Made in India
                </div>
              </div>

              <div className={styles.table_box}>
                <hr />
                <h1 className={styles.span_box}>Product Specifications</h1>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Genuine Products</div>
                  <div>Made in India</div>
                </div>
                <div className={styles.div_box}>
                  <div>Special Features</div>
                  <div>
                    High Ambient Operation upto 50c, Good sleep off timer,pm2.5
                    filter, dust,filter, self diagonis, air purifications
                    filter, dehumidifier, fast cooling
                  </div>
                </div>
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
      <Footer />
    </div>
  );
};

export default NewProductPage;
