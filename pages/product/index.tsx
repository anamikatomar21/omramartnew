import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';

import Footer from 'components/Footer/footer';
import {
  useGetCategory,
  usePublicProduct,
} from 'networkAPI/queries';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from 'styles/Merchant/newproductpage.module.scss';

import CompanyDescription from '../../components/CompanyDescription';
import TopHeader from '../topheader';

const NewProductPage: NextPage = () => {
  const router = useRouter();
  const { data, status } = usePublicProduct();

  const { data: category_data, status: status1 } = useGetCategory();

  console.log(
    category_data?.data.map((item: any) => {
      item.category_name;
    })
  );

  const currentProduct = data?.data.find(
    (d: any) => d?._id === router?.query?.id
  );
  const currentCategory = data?.data.find(
    (currentData: any) => currentData?.category === router?.query?.category
  );
  const currentMerchant = data?.data.find(
    (currentData: any) => currentData?.auther_Id === router?.query?.merchant
  );
  console.log(currentCategory);

  const [ProductImage, setProductImage] = useState(
    currentProduct ? currentProduct.product_image1[0] : "/" || "/"
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
                <h1 className={styles.span_box}>Product Specifications</h1>
                <div className={styles.div_box}>
                  <div>Brand:</div>
                  <div>{currentProduct?.brand}</div>
                </div>
                <div className={styles.div_box}>
                  <div>Specification:</div>
                  <div>{currentProduct?.product_Specification}</div>
                </div>
                <div className={styles.div_box}>
                  <div>Capacity:</div>
                  <div>{currentProduct?.capacity}</div>
                </div>
                <div className={styles.div_box}>
                  <div>Model No:</div>
                  <div>{currentProduct?.model_no}</div>
                </div>
                {currentProduct?.additionalSpecification.map(
                  (item: any, index: any) => {
                    console.log(currentProduct);
                    return (
                      <div className={styles.div_box} key={index}>
                        <div>{item.atribute}</div>
                        <div>{item.Values}</div>
                      </div>
                    );
                  }
                )}

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
            {data?.data.map((item: any, index: any) => {
              console.log(item);

              if (item?.category === router?.query?.category && index < 10) {
                console.log("hellobababb", item);

                return (
                  <div className={styles.cardproduct} key={index}>
                    <div className={styles.productimg}>
                      <Image
                        src={item?.product_image1[0] || "/"}
                        height={250}
                        width={300}
                        alt="productr image"
                        className={styles.productimagesrc}
                      />
                    </div>

                    <div className={styles.productcontent}>
                      <h4>Product Name:{item?.product_name}</h4>
                      <p>Merchant Name:{item?.vendors_name}</p>
                    </div>

                    <div className={styles.productcartbtn}>
                      <button type="submit">View More</button>
                    </div>
                  </div>
                );
              }
            })}

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
          <h1>OTHER PRODUCT WITH SAME MERCHANTS</h1>
          <div className={styles.flex_container}>
            {data?.data.map((item: any, index: any) => {
              console.log(item);

              if (item?.auther_Id === router?.query?.merchant && index < 10) {
                console.log("hellobababb", item);

                return (
                  <div className={styles.cardproduct} key={index}>
                    <div className={styles.productimg}>
                      <Image
                        src={item.product_image1[0] || "/"}
                        height={250}
                        width={300}
                        alt="productr image"
                        className={styles.productimagesrc}
                      />
                    </div>

                    <div className={styles.productcontent}>
                      <h4>Product Name:{item.product_name}</h4>
                      <p>merchant Name:{item.vendors_name}</p>
                    </div>

                    <div className={styles.productcartbtn}>
                      <button type="submit">View More</button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className={styles.background_section}>
          <h1>OTHER PRODUCT WITH SAME MERCHANTS</h1>
          <div className={styles.flex_container}>
            {data?.data.map((item: any, index: any) => {
              console.log(item);

              if (item?.auther_Id === router?.query?.merchant && index < 10) {
                console.log("hellobababb", item);

                return (
                  <div className={styles.cardproduct} key={index}>
                    <div className={styles.productimg}>
                      <Image
                        src={item.product_image1[0] || "/"}
                        height={250}
                        width={300}
                        alt="productr image"
                        className={styles.productimagesrc}
                      />
                    </div>

                    <div className={styles.productcontent}>
                      <h4>Product Name:{item.product_name}</h4>
                      <p>merchant Name:{item.vendors_name}</p>
                    </div>

                    <div className={styles.productcartbtn}>
                      <button type="submit">View More</button>
                    </div>
                  </div>
                );
              }
            })}
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
