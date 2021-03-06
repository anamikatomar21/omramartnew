import {
  useEffect,
  useRef,
  useState,
} from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { usePublicProduct } from '../networkAPI/queries';
import styles from '../styles/Merchant/productpreview.module.scss';

const Test3: NextPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<string>("");
  const dropdownRef = useRef<any>("");
  const [related_product_merchant, setRelated_product_merchant] =
    useState<string>("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const { data, status } = usePublicProduct();
  console.log(data);
  //   {data,error,isLoading} = useGetProductById(id)

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
        setRelated_product_merchant(item.vendors_name);
      }
    });
  }, [Product_id, data]);
  console.log(related_product_merchant);

  return (
    <div>
      <div className={styles.Section_Box}>
        {data?.data.map((item: any) => {
          console.log(item.product_name == Product_id);
          if (item._id == Product_id) {
            return (
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.slider}>
                    <div className={styles.product}>
                      <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/ omratrade/chair1.png"
                        }
                        width={150}
                        height={150}
                        alt=""
                      />
                      <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/ omratrade/chair1.png"
                        }
                        width={150}
                        height={150}
                        alt=""
                      />
                      <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/ omratrade/chair1.png"
                        }
                        width={150}
                        height={150}
                        alt=""
                      />
                      <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/ omratrade/chair1.png"
                        }
                        width={150}
                        height={150}
                        alt=""
                      />
                    </div>
                    <div className={styles.preview}>
                      <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/ omratrade/chair1.png"
                        }
                        width={1400}
                        height={1500}
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
                      Merchant: {item.vendors_name}
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
                        {/* <tr>

                                       <td > Brand</td>
                                       <td > Mezonite </td>
                                   </tr>
                                   <tr>

                                       <td > Brand</td>
                                       <td > Mezonite </td>
                                   </tr> */}
                        {/* <tr>

                                       <td > Brand</td>
                                       <td > Mezonite </td>
                                   </tr> */}
                        {/* <tr>

                                       <td > Brand</td>
                                       <td > Mezonite </td>
                                   </tr> */}
                        <tr>
                          <td> Usage/Application </td>
                          <td> {item.category} </td>
                        </tr>
                        <tr>
                          <td> Capacity</td>
                          <td> {item.capacity}</td>
                        </tr>
                        <tr>
                          <td> Dimension</td>

                          <td> {item.product_Specification} </td>
                        </tr>
                        <tr>
                          <td>manufacturer_address</td>

                          <td> {item.manufacturer_address}</td>
                        </tr>
                        <tr>
                          <td>manufacturer_phone_no</td>

                          <td> {item.manufacturer_phone_no}</td>
                        </tr>

                        <tr>
                          <td>model_no</td>

                          <td> {item.model_no}</td>
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
                  </div>
                </div>

                <div className={styles.col}>
                  <div className={styles.content}>
                    <h2>Check delivery options ?</h2>
                    <div className={styles.pincodestyle}>
                      <div>
                        <input
                          type="text"
                          className={styles.pincodeinput}
                          placeholder="Your Pincode"
                        />
                      </div>
                      <div>
                        <a href="" className={styles.check_button_box2}>
                          Check
                        </a>
                      </div>
                    </div>

                    <p>Shipping charge applicable as per serviceability</p>

                    <h3>
                      <a href="#">Victor Imports</a>
                    </h3>
                    <p>Noida,India</p>

                    <p>GST- 27AAMFV3839L1ZF</p>

                    <p>Want to buy even more quantity?</p>
                    {/* <button type='submit'  > */}
                    <a className="emailbutton3" href="#popup1">
                      Get Bulk Quote
                    </a>
                    {/* </button> */}
                    {/* <button type='submit' className='emailbutton1'><a href="#">CALL BACK REQUEST</a></button> */}

                    {/* </div> */}

                    <a href="#C4"> View More Sellers</a>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className="related">
          <div className="container">
            <div className="row">
              <div className="marg">
                <h2 id="C4">Similar Products</h2>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            {data?.data.map((item2: any) => {
              if (item2.vendors_name == related_product_merchant) {
                console.log(item2);
                return (
                  <div className=" ">
                    <div className={styles.columns}>
                      <div className={styles.items}>
                       
                        <Image
                          src={
                            item2.product_image1[0]
                              ? item2.product_image1[0]
                              : "/omratrade/chair2.png"
                          }
                          width={800}
                          height={600}
                          priority
                          alt=""
                        />
                         <h2>{item2.product_name}</h2>
                        <div className={styles.details}>
                          <p className={styles.product_desc}>{item2.product_description} </p>
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
                );
              }
            })}

            
            {/* <div className={styles.columns}>
              <div className={styles.items}>
                <Image
                  src="/omratrade/chair2.png"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className={styles.details}>
                  <p>Lorem ipsum dolor ipsum </p>
                  <div className={styles.rating}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>

                  {/* <p>USD $110.00</p> */}
                {/* </div>
              </div>
            </div>
            <div className={styles.columns}>
              <div className={styles.items}>
                <Image
                  src="/omratrade/chair2.png"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className={styles.details}>
                  <p>Printed Straight Kurta</p>
                  <div className={styles.rating}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>

                
                </div>
              </div>
            </div> */} 
          </div>
        </div>
      </div>

      <div>
        {/* <h1>Popup/Modal Windows without JavaScript</h1> */}

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

                  <li>
                    <button type="submit" className="submit_button_box">
                      <a href="#">SEND INQUIRY</a>
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
              <a className={styles.close} href="#">
                &times;
              </a>
              <div className={styles.content1}>
                <h3>PRODUCT SPECIFICATIONS</h3>
                <table className={` table fulltable ${styles.Table_Width}`}>
                  <tbody>
                    <tr>
                      <td> Brand</td>
                      <td> Mezonite </td>
                    </tr>

                    <tr>
                      <td> Usage/Application </td>
                      <td> Industrial </td>
                    </tr>
                    <tr>
                      <td> Country of origin</td>
                      <td> India</td>
                    </tr>
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

        {/* <div id="popup2" className={styles.overlay}>
                       <a className={styles.cancel} href="#"></a>
                       <div className={styles.popup}>
                           <h2>What the what?</h2>
                           <div className={styles.content1}>
                               <p>Click outside the popup to close.</p>
                           </div>
                       </div>
                   </div> */}
      </div>
      </div>
  );
};

export default Test3;
