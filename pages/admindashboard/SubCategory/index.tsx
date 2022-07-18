import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import { useAppSelector } from 'redux/hooks';

import AdminLayout from '../../../components/Admin/AdminLayout';
import { useGetSubCategory } from '../../../networkAPI/queries';
import styles from '../../../styles/Merchant/dashcode.module.scss';

const Admin: NextPage = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [select, setSelect] = useState<string>("");
      const dropdownRef = useRef<any>("");
    
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
      const {error:err,user,isAuthenticated} = useAppSelector((state)=> state.user)
      const { data, status } = useGetSubCategory();
  
  //     const allData=data?.data
  //     console.log(allData)
  //     const arr1 = [];
  // for (let i = allData.length - 1; i >= 0; i--) {
  //     arr1.push(allData[i]);
  // }
  
  // console.log(arr1)
      console.log(data);
    
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

      useEffect(() => {
        if (isAuthenticated) {
          if (user.role === "SuperAdmin") {
            return;
          } else {
            Router.push(`/`);
          }
        } else {
          Router.push(`/`);
        }
      }, [user, isAuthenticated]);
    
      return (
        <>
          <AdminLayout>
            <div className={"styles.Flex_Container"} style={{marginLeft:"400px"}}>
              <h1>All Category List</h1>
              {data?.data.map((item: any, index: any) => {
                console.log(item.category_image);
                return (
                  <div key={index} >
                    <div style={{display:"flex",gap:"50px",marginTop:"30px"}}>
                   <div className={styles.Image_Section}>
                      <Image
                        src={item.sub_category_image[0]?item.sub_category_image[0]:"/omratrade/homebanner.png"}
                        alt=""
                        width="300px"
                        height="200px"
                      />
                    </div> 
                    <div>
                      <div className="reporttable">
                      <table className="table">
                          <tbody>
                            <tr>
                              <td>{index+1}.</td>
                              
                              <td>{item.category_name}</td>
                              <tr>
                                <th>Name:</th>
                                
                              </tr>
                              <tr>
                                
                                <td>{item.sub_category_name}</td>
                               
                               
                              </tr>
                            </tr>
                            
                           
                            
                          </tbody>
                          
                        </table>
    
                        
                      </div>
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AdminLayout>
        </>
      );
    };
    
    export default Admin;
    