import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "components/Footer/footer";
import { usePublicProduct } from "networkAPI/queries";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick";
import styles from "styles/Merchant/newproductpage.module.scss";

import CompanyDescription from "../../components/CompanyDescription";
import TopHeader from "../topheader";

const NewProductPage: NextPage = () => {
  const router = useRouter();
  const { data, status } = usePublicProduct();

  const currentProduct = data?.data.find(
    (d: any) => d?._id === router?.query?.id
  );

  const [ProductImage, setProductImage] = useState(
    currentProduct?.product_image1[0] || "/"
  );

  const onImageSelect = (source: string | undefined) => {
    setProductImage(source);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  console.log(currentProduct);

  const [userMobileNumber, setuserMobileNumber] = useState();

  const onChangeNumber = (e: any) => {
    setuserMobileNumber(e.target.value);
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
                  src={ProductImage || currentProduct?.product_image1[0] || "/"}
                  height={300}
                  width={400}
                  alt="productr image"
                  className=""
                />
              </div>
              <div className={styles.smallimage}>
                <Image
                  src={currentProduct?.product_image1[0] || "/"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                  onClick={() =>
                    onImageSelect(currentProduct?.product_image1[0])
                  }
                />
                <Image
                  src={currentProduct?.product_image1[0] || "/"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                  onClick={() =>
                    onImageSelect(currentProduct?.product_image1[0])
                  }
                />
                <Image
                  src={currentProduct?.product_image2[0] || "/"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                  onClick={() =>
                    onImageSelect(currentProduct?.product_image2[0])
                  }
                />

                <Image
                  src={currentProduct?.product_image3[0] || "/"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                  onClick={() =>
                    onImageSelect(currentProduct?.product_image3[0])
                  }
                />

                <Image
                  src={currentProduct?.product_image4[0] || "/"}
                  height={120}
                  width={120}
                  alt="productr image"
                  className={styles.productimagesrc1}
                  onClick={() =>
                    onImageSelect(currentProduct?.product_image4[0])
                  }
                />
              </div>
            </div>
            <div id="popup1" className={styles.overlay}>
              <div className={styles.popup}>
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
              <h3>{currentProduct?.Merchant_Address}</h3>
              <h1>{currentProduct?.product_name}</h1>
              <h3>Brand:{currentProduct?.brand}</h3>

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
                <h1 className={styles.span_box1}>Product Specifications</h1>
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
              </div>
              <div className={styles.seemorestyles}>
                <a href="#C1">View more</a>
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

            {/* Right section ends */}
          </div>
        </div>

        <div className={styles.company_info}>
          <h1 className={styles.span_box1}>Company Information</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            praesentium dolores, accusamus laborum error perspiciatis iure
            pariatur expedita sequi odit minus architecto ducimus quod voluptate
            dignissimos optio quia dolorem numquam!Lorem Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            <a href="#"> See More Sellers</a>
          </p>
        </div>
        {/* Product Specification starts*/}

        <div className={styles.tableflex_box}>
          <div className={styles.displaytable1}>
            <h1 id="C1">
              {" "}
              <span className={styles.span_box1}>Technical Details</span>
            </h1>
            <table className={styles.Table_Width}>
              <tbody>
                <tr>
                  <td>Product Dimensions </td>
                  <td>5.9 x 4.4 x 2 cm; 40 Grams</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Product Dimensions </td>
                  <td>5.9 x 4.4 x 2 cm; 40 Grams</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Product Dimensions </td>
                  <td>5.9 x 4.4 x 2 cm; 40 Grams</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.displaytable2}>
            <h1 className={styles.span_box1}>Additional Information</h1>
            <table className={styles.Table_Width}>
              <tbody>
                <tr>
                  <td>Product Dimensions </td>
                  <td>5.9 x 4.4 x 2 cm; 40 Grams</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Product Dimensions </td>
                  <td>5.9 x 4.4 x 2 cm; 40 Grams</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Manufacturer </td>
                  <td> Building A1, Red Box Creative Park</td>
                </tr>
                <tr>
                  <td>Models</td>
                  <td>Bassbuds Pixel</td>
                </tr>
                <tr>
                  <td>Product Dimensions </td>
                  <td>5.9 x 4.4 x 2 cm; 40 Grams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
 {/* Similar Product Slider Starts  */}

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
      <div>
        <CompanyDescription />
      </div>
      <Footer />
    </div>
  );
};

export default NewProductPage;
