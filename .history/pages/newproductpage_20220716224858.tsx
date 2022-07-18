import { useCallback, useEffect, useState } from "react";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Merchant/newproductpage.module.scss";
import ProductCard from "../components/ProductCard";
const NewProductPage: NextPage = () => {
  return (
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
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
          <Image
            src={"/omratrade/homebanner.png"}
            height={80}
            width={80}
            alt="productr image"
            className={styles.productimagesrc}
          />
        </div>
        <div>
          <h1>Company Information</h1>

         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
         <p><b>Split AC with non-inverter compressor:</b> 100% Copper Condenser with extended lifespan to ensure that the air conditioner is protected in all weather conditions</p> 
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
      </div>

      {/* Right section starts */}
      <div className={styles.flex_box2}>
        <h1>
          Business Name: <span>Komal Enterprise</span>{" "}
        </h1>
        <h4>Noida, India,GST -2589DHYJ4894745</h4>
        <h1>Voltas 1 Ton 3 Star Split Inverter Air Conditioner (123VCAZR)</h1>
        <h4>Brand:Voltas</h4>
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
      </div>

        {/* Right section ends */}
    </div>
  );
};

export default NewProductPage;
