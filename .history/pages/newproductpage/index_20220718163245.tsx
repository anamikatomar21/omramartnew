import { useCallback, useEffect, useState } from "react";
// import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/Merchant/newproductpage.module.scss";
import CompanyDescription from "../../components/CompanyDescription";
import Footer from "components/Footer/footer";
import TopHeader from "../topheader";
import { useRouter } from "next/router";
import { usePublicProduct } from "networkAPI/queries";
// import TopHeader from '../components/Admin/TopHeader';

const NewProductPage: NextPage = () => {
  const { data, status } = usePublicProduct();



  const currentProduct = data?.data.find((d) => d?._id );

  const isSame=data?.data.find((w)=>w._id===router?.query?.id)
  console.log(isSame);
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  // console.log(router.query.id)

  const [userMobileNumber, setuserMobileNumber] = useState();

  const onChangeNumber = (e: any) => {
    setuserMobileNumber(e.target.value);
  };

  const callToConnect = `http://www.apiconnecto.com/UniProUser/Click-2-Call-API.aspx?UserId=${router.query.id}&pwd=pwd2020&AgentNum=xxxxxxxxxx&CustomerNum=${userMobileNumber}&CampId=15823`;

  // const onSubmitMobileNumber=React.useCallback(async ()=>{
  //   try {
  //     const req=await fetch(callToConnect,{
  //       method:'POST',
  //     })
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },[])

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
                    href="#popup2"
                    // href="tel:9015756558"
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
                        <input
                          onChange={onChangeNumber}
                          type="text"
                          className={styles.NumberInput}
                        />
                      </li>

                      <li>
                        <button type="submit" className={styles.NumberButton}>
                          {/* <a href="#">View Number Now</a> */}
                          <a href="#">Submit </a>
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
                <span className={styles.span_box}>
                  {currentProduct?.vendors_name}
                </span>{" "}
              </h1>
              <h3>
              {currentProduct?.Merchant_Address}
                </h3>
              <h1>
               {currentProduct?.product_name}
              </h1>
              <h3>Brand:{currentProduct?.brand}</h3>
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
                  <div>Brand</div>
                  <div>Daikin</div>
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
            <Slider {...settings}>
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
            </Slider>
          </div>
        </div>

        <div className={styles.background_section}>
          <h1>OTHER PRODUCT WITH SAME MERCHANTS</h1>
          <div className={styles.flex_container}>
            <Slider {...settings}>
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
            </Slider>
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

const dummy = {
  _id: "62d53b6208372452c74bba50",
  Vendor_Id: "xyz321654xdgxhx",
  auther_Id: "62d52b6408372452c74bb99f",
  vendors_name: "Latest Labeling and Solutions",
  TypesOf_Bussiness: "Manufacturer",
  SubTypeOf_bussiness: "Latest Labeling and Solutions",
  Merchant_Address:
    "C-9 First Floor, Near- SDMC Primary School Rampura, Harinagar,New Delhi-110064",
  product_name:
    "105x300 meters,WAX thermal transfer ribbon for printer TSC, ZEBRA, CITZEN, THOSIBA, SATO etc.",
  manufacturer_phone_no: "",
  manufacturer_address: "",
  brand: "",
  product_image: [],
  category: "QR code printer",
  sub_category: "",
  product_image1: [
    "https://merchantapi.elaundry.co.in/product-image/product_image1_1658141538708.jpg",
  ],
  product_image2: [],
  product_image3: [],
  product_image4: [],
  product_image5: [],
  price: "0",
  product_Specification: "",
  additionalSpecification: [""],
  product_description: "",
  capacity: "",
  model_no: "",
  isApproved: false,
  isDeclined: false,
  createdAt: "2022-07-18T10:52:18.740Z",
  updatedAt: "2022-07-18T10:52:18.740Z",
  __v: 0,
};
