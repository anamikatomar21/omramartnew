import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import AdminLayout from '../../components/Admin/AdminLayout';
import Popup from '../../components/popup';
import {
  useDeclinedProduct,
  usePublicProduct,
  useUpdateProduct,
} from '../../networkAPI/queries';
import styles from '../../styles/Merchant/dashcode.module.scss';

const Admin: NextPage = () => {
  const [isApproved, setisApproved] = useState<boolean>(false);
  const [isDeclined, setIsDeclined] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const router = useRouter();

  const dropdownRef = useRef<any>(null);
  const [select, setSelect] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const togglePopup = (index: number) => {
    const temp = [...isOpen];
    temp[index] = !temp[index];
    setIsOpen(temp);
  };

  console.log({ isOpen });

  console.log("POPUP STATE", isOpen);

  const getData = usePublicProduct();
  console.log(getData);
  console.log(getData.data?.data);
  const test = getData.data;

  const { error, isLoading, data, mutate, isSuccess } = useUpdateProduct();

  const {
    error: err,
    isLoading: Loading,
    data: data1,
    mutate: mutate1,
    isSuccess: isSuccess1,
  } = useDeclinedProduct();

  useEffect(() => {
    for (let i = 0; i <= test?.data.length; i++) {
      setIsOpen([...isOpen, false]);
    }
  }, [test]);

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

  const handleApproved = (item: any) => {
    console.log(item)
    mutate({
      id: item._id,

      isApproved:true
    });
    router.reload()
  };
  console.log("testttttting",isApproved)
  console.log("trsees",data)
  const handleDeclined = (item: any) => {

    mutate1({
      id: item._id,

      isDeclined: true,
      status,
    });
    
  };

  useEffect(() => {
    if (isOpen) {
      setIsDeclined(true);
    }

    setStatus(select);
  }, [isOpen, select]);

  useEffect(() => {
    setisApproved(true);
  }, []);

  useEffect(() => {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || error.message);
    }

    if (isSuccess==true) {
      setisApproved(true)
      toast.success("product Approved successfully");
      router.reload()
    }
  }, [error, data,router,isSuccess]);

/// for declined
  useEffect(() => {
    if (err instanceof AxiosError) {
      toast.error(err?.response?.data?.message || err.message);
    }

    if (isSuccess1==true) {
      toast.success("Declined  Successfull");
      router.reload()
    }
  }, [err, data1,router,isSuccess1]);

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
            if (item.isApproved == false) {
              return (
                <div>
                  <div
                    key={index}
                    style={{ marginLeft: "150px", padding: "auto" }}
                  >
                    <div style={{ display: "flex", gap: "50px" }}>
                      <div className={styles.Image_Section}>
                        <Image
                          src={item?.product_image1[0]|| "/"}
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
                                <td>Product Category</td>
                                <td>{item.category}</td>
                              </tr>
                              <tr>
                                <td>Product Price(per/unit)</td>
                                <td>{item.price}</td>
                              </tr>
                              <tr>
                                <td>Product Specifications</td>

                                <td>{item.product_Specification}</td>
                              </tr>

                              <tr>
                                <td>Product Description</td>
                                <td>
                                  <p>{item.product_description}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <div className={styles.AprovalStyle}>
                            <div>
                              <button
                                type="button"
                                className="approve-button"
                                onClick={() => handleApproved(item)}
                              >
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
                                  {isOpen[index] ? "Cancel" : "Decline"}
                                </button>
                                {isOpen[index] && (
                                  <Popup
                                    content={
                                      <>
                                        <div className={styles.FormButton}>
                                          <form
                                            onSubmit={() =>
                                              handleDeclined(item)
                                            }
                                          >
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
