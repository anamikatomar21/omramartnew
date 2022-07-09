import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import AdminLayout from '../../components/Admin/AdminLayout';
import Popup from '../../components/popup';
import {
  usePublicProduct,
  useUpdateProduct,
} from '../../networkAPI/queries';
import styles from '../../styles/Merchant/dashcode.module.scss';

const Admin: NextPage = () => {
  const [isApproved, setisApproved] = useState<boolean>(false);

  const router = useRouter();

  const dropdownRef = useRef<any>(null);
  const [select, setSelect] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  

  const togglePopup = (index:number) => {
    const temp  =  [...isOpen]
    temp[index] = !temp[index]
    setIsOpen(temp)
  };

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen([false]);
        setSelect("");
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);
  console.log("POPUP STATE", isOpen);
  // const getData = usePublicProduct();
  const getData = usePublicProduct();
  console.log(getData);
  console.log(getData.data?.data);
  const test = getData.data;
  // console.log(data?.data.length);
  const { error, isLoading, data, mutate, isSuccess } = useUpdateProduct();


  useEffect(()=>{

    for(let i =0 ; i <= test?.data.length ; i++){
      setIsOpen([...isOpen,false])
    }

  },[test])

  // useEffect(() => {
  //   if (!isOpen) return;
  //   function handleOutsideClick(event: any) {
  //     if (!dropdownRef.current && dropdownRef.current.contains(event.target)) {
  //       return
  //     }
  //     setSelect("");
  //     setIsOpen(false);
  //   }
  //   window.addEventListener("mousedown", handleOutsideClick);
  //   return () => window.removeEventListener("mousedown", handleOutsideClick);
  // }, [isOpen]);

  const handleLogin = (item: any) => {
    mutate({
      id: item._id,

      isApproved: true,
    });
    router.reload();
  };

  console.log(isApproved);
  useEffect(() => {
    setisApproved(true);
  }, []);

  // useEffect(() => {
  //   if (error instanceof AxiosError) {
  //     toast.error(error?.response?.data?.message || error.message);
  //   }

  //   if (isSuccess==true) {
  //     toast.success("update Successfull");
  //     router.reload()
  //   }
  // }, [error, data,router,isSuccess]);

  return (
    <>
      <AdminLayout>
        <div className={"styles.Flex_Container"} ref={dropdownRef}>
          <h1
            style={{
              marginLeft: "150px",
              padding: "auto",
              alignItems: "center",
              textAlign: "center",
              color: "#002b6b",
            }}
          >
            Waiting for Approval
          </h1>
          {test?.data.map((item: any, index: any) => {
            console.log(item);
            if (item.isApproved == false) {
              console.log(item);

              return (
                <div>
                  <div
                    key={index}
                    style={{ marginLeft: "150px", padding: "auto" }}
                  >
                    <div style={{ display: "flex", gap: "50px" }}>
                      <div className={styles.Image_Section}>
                        <Image
                          src={item.product_image1[0]}
                          alt=""
                          width="300px"
                          height="100px"
                        />
                      </div>
                      <div ref={dropdownRef}>
                        <div className="reporttable">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Company</td>
                                <td>{item.vendors_name}</td>
                              </tr>
                              <tr>
                                <td>Product Name</td>
                                <td>{item.product_name}</td>
                              </tr>
                              <tr>
                                <td>Product Price(per/unit)</td>
                                <td>{item.price}</td>
                              </tr>
                              <tr>
                                <td>Product Specifications</td>
                                {/* <td>Thickness in microns</td> */}
                                <td>{item.product_Specification}</td>
                              </tr>
                              {/* <tr>
                  <td>Product Image</td>
                  <td>
                    <img
                      src="https://m.media-amazon.com/images/I/61+ilDgVVwS._UL1500_.jpg"
                      alt="facemask"
                      className="facemask"
                    />
                  </td>
                </tr> */}
                              <tr>
                                <td>Product Description</td>
                                <td>
                                  <p>{item.product_description}</p>
                                </td>
                                {/* <td>UK</td> */}
                              </tr>
                            </tbody>
                            {/* <tr><button type="button" className='approve-button'>Approve</button>  
                <button type="button" className='reject-button'>Decline</button></tr> */}
                          </table>

                          <div className={styles.AprovalStyle}>
                            <div>
                            <button type="button" className="approve-button" onClick={()=>handleLogin(item)}>
                          Approve
                        </button>
                            </div>

                            <span>
                              <div
                                ref={dropdownRef}
                                style={{
                                  position: "relative",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <button
                                  type="button"
                                  className="reject-button"
                                  onClick={() => togglePopup(index)}
                                >
                                  Decline
                                </button>
                                {isOpen[index] && (
                                  <Popup
                                    content={
                                      <>
                                        <div className={styles.FormButton}>
                                          <form>
                                            {/* <label htmlFor="" className={styles.CancelButton}>Reason of Rejection</label> */}
                                            {/* <textarea cols={50} rows={4} /> */}

                                            {/* <select >
                          <option value="domain" >Reason of Rejection</option>
                            <option value="domain" >Mismatch Domain Details</option>
                            <option value="domain" >Picture quality mismatch</option>
                            <option value="domain">Wrong Specification</option>
                            <option value="domain">Mislabelling of Products</option>
                            <option value="domain" onClick={decline}><a href="#">Others</a></option>
                          </select> */}

                                            <select
                                              name="cars"
                                              id="cars"
                                              onChange={(e) =>
                                                setSelect(e.target.value)
                                              }
                                            >
                                              <option value="reason_of_rejection">
                                                Reason of Rejection{" "}
                                              </option>
                                              <option value="saab">
                                                Mismatch Domain Details
                                              </option>
                                              <option value="mercedes">
                                                Picture quality mismatch
                                              </option>
                                              <option value="audi">
                                                Wrong Specification
                                              </option>
                                              <option value="domain">
                                                Mislabelling of Products
                                              </option>
                                              <option value="others">
                                                Others
                                              </option>
                                            </select>
                                            <textarea
                                              id="mytext"
                                              style={{
                                                display:
                                                  select == "others"
                                                    ? "block"
                                                    : "none",
                                              }}
                                              placeholder="Other reason"
                                              rows={3}
                                              cols={22}
                                            />
                                            <span>
                                              {" "}
                                              <button
                                                className={
                                                  styles.CheckboxButton
                                                }
                                              >
                                                Submit
                                              </button>
                                            </span>
                                          </form>

                                          {/* <textarea className=""cols={30} rows={4} />  */}
                                        </div>
                                      </>
                                    }
                                    handleClose={togglePopup}
                                  />
                                )}
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </AdminLayout>
    </>
  );
};

export default Admin;
