import React, { useEffect, useRef, useState } from "react";

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  useGetBussinessDetails,
  usePublicProduct,
  useSendEmail,
} from "../networkAPI/queries";
import styles from "../styles/Merchant/productpreview.module.scss";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Test3: NextPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [image, setImage] = useState("");

  const dropdownRef = useRef<any>("");
  const [related_product_merchant, setRelated_product_merchant] =
    useState<string>("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const { data, status } = usePublicProduct();
  const { data: dataMail, mutate } = useSendEmail();
  console.log(data);
  const {
    data: bussinessData,
    error: err,
    isLoading: loading,
  } = useGetBussinessDetails();
  console.log(bussinessData);

  const mailData = dataMail as any;

  const achorRef = React.useRef<HTMLAnchorElement>(null);

  const handleEmailSend = () => {
    // For Close MOdel
    const achorElm = achorRef.current;
    const merchant = data?.data.find((item: any) => item._id == Product_id);
    mutate({ merchantId: merchant.auther_Id, email, phoneNumber, description });
    delay(200).then(() => {
      if (achorElm) {
        achorElm.href = "#";
        achorElm.click();
      }
    });
  };

  useEffect(() => {
    if (!isOpen) return;
    function handleOutsideClick(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelect("");
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);
  const Product_id = router.query.id;
  console.log(Product_id);
  useEffect(() => {
    data?.data.map((item: any) => {
      if (item._id == Product_id) {
        setRelated_product_merchant(item.category);
      }
    });
  }, [Product_id, data]);
  console.log(related_product_merchant);

  return (
    <div>
      <div className={styles.Section_Box}>
        {data?.data.map((item: any) => {
          if (item._id == Product_id) {
            return (
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.slider}>
                    <div className={styles.product}>
                      {[1, 2, 3, 4, 5].map((index) => {
                        if (!item[`product_image${index}`][0]) return null;
                        return (
                          <>
                            <Image
                              src={
                                item[`product_image${index}`][0]
                                  ? item[`product_image${index}`][0]
                                  : "/ omratrade/chair1.png"
                              }
                              width={150}
                              height={150}
                              alt=""
                              onClick={() =>
                                setImage(
                                  item[`product_image${index}`][0]
                                    ? item[`product_image${index}`][0]
                                    : "/ omratrade/chair1.png"
                                )
                              }
                            />
                          </>
                        );
                      })}
                    </div>
                    <div className={styles.preview}>
                      <Image
                        src={
                          image
                            ? image
                            : item.product_image1[0]
                            ? item.product_image1[0]
                            : "/ omratrade/chair1.png"
                        }
                        width={1000}
                        height={1200}
                        priority
                        id="imagebox"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.content}>
                    <p className={styles.brand}>
                      Business Name: {" " + item.SubTypeOf_bussiness}
                    </p>
                    <h2>{item.product_name}</h2>
                    <div className={styles.ratingnew}>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    {/* <p className={styles.price}>Brand: Varanga</p> */}
                    <p>
                      <input type="number" className={styles.InputSection} />{" "}
                      :Quantity{" "}
                    </p>
                    <h3>PRODUCT SPECIFICATIONS</h3>
                    <table className={` table fulltable ${styles.TableWidth}`}>
                      <tbody>
                        <tr>
                          <td> Brand</td>
                          <td> {item.brand} </td>
                        </tr>

                        <tr>
                          <td> Usage/Application </td>
                          <td> {item.category} </td>
                        </tr>
                        <tr>
                          <td> Capacity</td>
                          <td> {item.capacity}</td>
                        </tr>
                        {item.product_Specification ? (
                          <tr>
                            <td> Dimension</td>

                            <td> {item.product_Specification} </td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {item.manufacturer_address ? (
                          <tr>
                            <td>manufacturer_address</td>

                            <td> {item.manufacturer_address}</td>
                          </tr>
                        ) : (
                          ""
                        )}

                        {item.manufacturer_phone_no ? (
                          <tr>
                            <td> Dimension</td>
                            <td> {item.product_Specification} </td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {item.manufacturer_address ? (
                          <tr>
                            <td>manufacturer_address</td>

                            <td> {item.manufacturer_address}</td>
                          </tr>
                        ) : (
                          ""
                        )}

                        {item.manufacturer_phone_no ? (
                          <tr>
                            <td>manufacturer_phone_no</td>

                            <td> {item.manufacturer_phone_no}</td>
                          </tr>
                        ) : (
                          ""
                        )}

                        <tr>
                          <td>model_no</td>

                          <td> {item.model_no}</td>
                        </tr>
                        <tr>
                          <td>Mobile:</td>
                          <td>{item.mobile}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.seemorestyles}>
                      <a href="#popup3">View more</a>
                    </div>

                    <span className={styles.botton5}>
                      <div>
                        <a className={styles.ButtonSection1} href="#popup2">
                          Call to Connect
                        </a>
                      </div>
                      <div>
                        <a className="ButtonSection" href="#popup1">
                          For Enquiry
                        </a>
                      </div>
                    </span>

                    {/* </div> */}
                    <h3>PRODUCT INFORMATION</h3>
                    <p>
                      {item.product_description}
                      <a href="#">Read more..</a>
                    </p>

                    <h3>COMPANY INFORMATION</h3>
                    <p>
                      {item.product_description}
                      <a href="#">Read more..</a>
                    </p>
                  </div>
                </div>

                <div className={styles.col}>
                  <div className={styles.content}>
                    <h3>
                      <a href="#">{item.SubTypeOf_bussiness}</a>
                    </h3>
                    <p>{item.Merchant_Address}</p>

                    <p>Want to buy even more quantity?</p>

                    <a className="emailbutton3" href="#popup1">
                      Get Bulk Quote
                    </a>

                    <a href="#C4"> View More Sellers</a>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className="related containerr ">
          <div className="container">
            <div className="row">
              <div className="marg">
                <h2 id="C4">Similar Products</h2>
              </div>
            </div>
          </div>

          {/* // */}
          <div className="reouterproduct">
            {data?.data.map((item2: any) => {
              if (item2.category == related_product_merchant) {
                console.log(item2);
                return (
                  <div className="relproduct">
                    <div className="columns">
                      <div className="left_product_section">
                        <div className="items">
                          <Image
                            src={
                              item2.product_image1[0]
                                ? item2.product_image1[0]
                                : "/omratrade/chair2.png"
                            }
                            width={250}
                            height={250}
                            priority
                            alt=""
                          />
                          <h2>{item2.product_name}</h2>
                          <div className="details">
                            <p className="product_desc">
                              {item2.product_description}
                            </p>
                            <div className={styles.rating}>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-half-o"></i>
                            </div>

                            {/* <p>USD $120.00</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div>
        {/* <h1>Popup/Modal Windows without JavaScript</h1> */}

        <div id="popup1" className={styles.overlay}>
          <div className={styles.popup}>
            {/* <h2>Info box</h2> */}
            <a className={styles.close} ref={achorRef} href="#">
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
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
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
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="EMAIL ID "
                      />
                    </div>
                    <div>
                      {" "}
                      <input
                        type="tel"
                        className={styles.Input}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        placeholder="Phone number "
                      />
                    </div>
                  </li>

                  {/* <li> */}

                  {/* <label htmlFor="category" className={styles.FontHeight} >

                                               Phone number

                                               </label> */}
                  {/* 
                                               <input type="text" className={styles.Input} placeholder="Phone number " /> */}

                  {/* </li>  */}

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

                  {/* <li>
                                           <input type="checkbox" />

                                           <span className={styles.SpanClass}>I agree to <a href="#" className={styles.TermsColor}>terms and conditions</a></span>



                                       </li> */}
                  <li>{mailData?.message}</li>
                  <li>
                    <button
                      type="button"
                      className="submit_button_box"
                      onClick={handleEmailSend}
                    >
                      <a>SEND INQUIRY</a>
                    </button>
                  </li>
                </ul>
                <div className="buttonmodel">
                  {/* <button type='submit' className='emailbutton-section'> EMAIL </button>  */}
                  {/* 

                                       <button type='submit' className='call_back_button'><a href="#">CALL BACK REQUEST</a></button>
                                       <a href="whatsapp://send?text=Hello World!&phone=+917017342584" className='whatsapp-icon'>

                                           <Image src="/omratrade/whatsapp.png" width={500} height={500} alt="" className='whatsapp-icon' /></a>
                                       <a href="whatsapp://send?text=Hello World!&phone=+917017342584" className='whatsapp-icon'>

                                           <Image src="/omratrade/email.png" width={500} height={500} alt="" className='whatsapp-icon' /></a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
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

          <div id="popup2" className={styles.overlay}>
            <a className={styles.cancel} href="#"></a>
            <div className={styles.popup2}>
              <h2>What the what?</h2>
              <div className={styles.content1}>
                <p>Click outside the popup to close.</p>
              </div>
            </div>
          </div>

          <div id="popup3" className={styles.overlay}>
            <div className={styles.popup}>
              {/* <h2>Info box</h2> */}
              <a className={styles.close} href="">
                &times;
              </a>
              <div className={styles.content1}>
                <h3>PRODUCT SPECIFICATIONS </h3>
                <table className={` table fulltable ${styles.Table_Width}`}>
                  <tbody>
                    {data?.data.map((item: any) => {
                      console.log(item.product_name == Product_id);
                      if (item._id == Product_id) {
                        console.log(item.additionalSpecification);
                        return (
                          <div>
                            {item.additionalSpecification.map(
                              (item: any, i: any) => {
                                return (
                                  <tr key={i}>
                                    <td> {item.atribute}</td>
                                    <td>{item.Values} </td>
                                  </tr>
                                );
                              }
                            )}
                          </div>
                        );
                      }
                    })}

                    {/* <tr>
                      <td> Usage/Application </td>
                      <td> Industrial </td>
                    </tr>
                    <tr>
                      <td> Country of origin</td>
                      <td> India</td>
                    </tr> */}
                    <tr>
                      <td> Installation Type</td>

                      <td> Do It Yourself </td>
                    </tr>
                    <tr>
                      <td>Leatherette</td>

                      <td> Dimensions LxWxH</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test3;
function id(id: any): { data: any; status: any } {
  throw new Error("Function not implemented.");
}
