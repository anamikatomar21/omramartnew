import React, {
  useRef,
  useState,
} from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import AdminLayout from '../../components/Admin/AdminLayout';
import {
  useDeclinedProduct,
  usePublicProduct,
  useUpdateProduct,
} from '../../networkAPI/queries';
import styles from '../../styles/Merchant/dashcode.module.scss';

const Rejected_Product: NextPage = () => {
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

  // useEffect(() => {
  //   if (!isOpen) return;

  //   function handleOutsideClick(event: any) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen([false]);
  //       setSelect("");
  //     }
  //   }
  //   window.addEventListener("click", handleOutsideClick);
  //   return () => window.removeEventListener("click", handleOutsideClick);
  // }, [isOpen]);

  console.log("POPUP STATE", isOpen);
  // const getData = usePublicProduct();
  // const getData = usePublicProduct();
  const { data:getData, status:status1 } = usePublicProduct();
  console.log(getData);
 
  const test = getData
  console.log(test)
  // console.log(data?.data.length);
  const { error, isLoading, data, mutate, isSuccess } = useUpdateProduct();

  const {
    error: err,
    isLoading: Loading,
    data: data1,
    mutate: mutate1,
    isSuccess: isSuccess1,
  } = useDeclinedProduct();

  // useEffect(() => {
  //   for (let i = 0; i <= test?.data.length; i++) {
  //     setIsOpen([...isOpen, false]);
  //   }
  // }, [test]);

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
        Rejected Product List
          </h1>
          {test?.data.map((item: any, index: any) => {
            console.log(item);
            if (item.isDeclined == true) {
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
                                <td>Product Category</td>
                                <td>{item.category}</td>
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

export default Rejected_Product;
