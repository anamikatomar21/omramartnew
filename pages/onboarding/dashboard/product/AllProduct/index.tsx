import React, { useEffect, useState } from "react";

import { NextPage } from "next";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import DashboardLayout from "../../../../../components/Merchant/Layout";
import { useProducts } from "../../../../../networkAPI/queries";
import { useAppSelector } from "../../../../../redux/hooks";
import styles from "../../../../../styles/Merchant/allproduct.module.scss";

const fetchUsers = async () => {
  const res = await fetch("/api/user/upload_product");
  return res.json();
};

const AllProduct: NextPage = () => {
  const router = useRouter();
  const Data = [
    {
      name: "Amit",
      image: "",
      categories: "pharma & Drugs",
      price: 300,
      description: "Hello Babalu is Designer",
    },
    {
      name: "industrial Equipment",
      image: "",
      categories: "supplier",
      price: 1000,
      description: "metalic core with iron",
    },
    {
      name: "pharma",
      image: "",
      categories: "pharma & Drugs",
      price: 300,
      description: "Hello Babalu is Designer",
    },
    {
      name: "Food",
      image: "",
      categories: "Food & Agriculture",
      price: 300,
      description: "Hello hsd bhbsdhf ",
    },
    {
      name: "ghgddf hjgd",
      image: "",
      categories: "machinery",
      price: 300,
      description: "Hello Babalu is Designer",
    },
  ];
  const { error, user, isAuthenticated } = useAppSelector(
    (state) => state.user
  );
  console.log(user._id);
  console.log(isAuthenticated);
  const { data, status } = useProducts();
  const [merchantGetData, setMerchantGetData] = useState<any>();
  const data1 = useProducts();
  console.log(data?.data);
  console.log(merchantGetData);
  // const current_user=jwt_decode(user);
  // console.log(current_user)

  console.log(data1);
  console.log(Data);

  useEffect(() => {
    if (isAuthenticated) {
      setMerchantGetData(data);
      if (user.role === "Admin") {
        return;
      }

      // else{
      //     Router.push(`/`)

      // }
    } else {
      Router.push(`/`);
    }
  }, [user, isAuthenticated, data]);

  return (
    <DashboardLayout>
      <div className={"styles.Flex_Container"}>
        {merchantGetData?.data.map((item: any, index: number) => {
          console.log(item);
          if (user._id == item.auther_Id) {
            console.log(item);
            return (
              <div key={index} className={styles.Flex_Container}>
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                  }}
                >
                  <div className={styles.Image_Section}>
                    <Image
                      src={item.product_image1[0]}
                      width={300}
                      height={300}
                      alt=""
                    />
                  </div>

                  <div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Vendor name:</td>
                          <td>{item.vendors_name}.</td>
                        </tr>
                        <tr>
                          <td>Product Name</td>
                          <td>{item.product_name}</td>
                        </tr>
                        <tr>
                          <td>Bussiness Type</td>
                          <td>{item.TypesOf_Bussiness}</td>
                        </tr>
                        <tr>
                          <td>Category</td>
                          <td>{item.category}</td>
                        </tr>
                        <tr>
                          <td>price(per/piece)</td>
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
                  </div>
                  <br />

                  <div>
                    {/* <Link
                      href="/onboarding/dashboard/product/Upload_Product/edit"
                      className={styles.EmailbuttonSection}
                      style={{background:"blue"}}
                    >
                      EDIT 
                     
                    </Link> */}
                    <button
                      onClick={() =>
                        router.push(
                          `/onboarding/dashboard/product/Upload_Product/edit?id=${item._id}`
                        )
                      }
                      className={styles.EmailbuttonSection}
                      // style={{background:"blue",width:"50px"}}
                    >
                      EDIT
                    </button>
                  </div>
                </ul>
              </div>
            );
          }
        })}
      </div>
    </DashboardLayout>
  );
};

export default AllProduct;
