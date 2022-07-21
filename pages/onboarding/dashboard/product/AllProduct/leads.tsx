import React, {
  useEffect,
  useState,
} from 'react';

import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';

import DashboardLayout from '../../../../../components/Merchant/Layout';
import {
  useBuyerQuery,
  useProducts,
} from '../../../../../networkAPI/queries';
import { useAppSelector } from '../../../../../redux/hooks';
import styles from '../../../../../styles/Merchant/allproduct.module.scss';

const fetchUsers = async () => {
        const res = await fetch("/api/user/upload_product");
        return res.json();
      };
      
      const CustomerQuery: NextPage = () => {
        const router = useRouter();
      
        const { error, user, isAuthenticated } = useAppSelector(
          (state) => state.user
        );
       
        const { data, status } = useProducts();
        const {data:QueryData} = useBuyerQuery()
        const [merchantGetData, setMerchantGetData] = useState<any>();
        const data1 = useProducts();
        
        
        
      
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
              {QueryData?.data.map((item: any, index: any) => {
                 console.log(item);
                
               
                if (user._id == item.merchant_Id) {
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
                        {/* <div className={styles.Image_Section}>
                          
                            
                              <Image
                              src={item.product_image1[0]||item.product_image2[0]||item.product_image3[0]||item.product_image4[0]||item.product_image5[0]||"/omratrade/homebanner.png"
                              }
                              width={300}
                              height={300}
                              alt=""
                            />
      
                           
                         
                        </div> */}
      
                        <div>
                          <table className="table" key={index}>
                            <tbody >
                                <tr>
                                    <td>Sr No:</td>
                                    <td>{index+1}.</td>
                                </tr>
                              <tr>
                               
                                <td>Product_Id:</td>
                                <td>{item.product_Id}.</td>
                              </tr>
                              <tr>
                                <td>Product Email</td>
                                <td>{item.buyer_Email}</td>
                              </tr>
                              <tr>
                                <td>Contact No:</td>
                                <td>{item.buyer_Mob}</td>
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
      
      export default CustomerQuery;
      