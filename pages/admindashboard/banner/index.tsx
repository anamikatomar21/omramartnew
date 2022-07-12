import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import AdminLayout from '../../../components/Admin/AdminLayout';
import { useGetBanner } from '../../../networkAPI/queries';
import styles from '../../../styles/Merchant/dashcode.module.scss';

const Admin: NextPage = () => {
      const router =useRouter()
      const [isOpen, setIsOpen] = useState(false);
      const [select, setSelect] = useState<string>("");
      const dropdownRef = useRef<any>("");
    
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
      const { data, status } = useGetBanner();
  
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
    
      return (
        <>
          <AdminLayout>
            <div className={"styles.Flex_Container"} style={{marginLeft:"400px"}}>
              <h1>All Banner List</h1>
              {data?.data.map((item: any, index: any) => {
                console.log(item.banner_image1[0]);
                return (
                  <div key={index} >
                    <div style={{display:"flex",gap:"50px",marginTop:"30px"}}>
                    <div className={styles.Image_Section}>
                      <Image
                        src={item.banner_image1[0]?item.banner_image1[0]:""}
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
                              <td>Category Name</td>
                              <td>{item.banner_name}</td>
                            </tr>
                            <tr>
                              <td>Category Name</td>
                              <td>{item.banner_image1[0]}</td>
                            </tr>
                            <tr>
                              <td>Category Name</td>
                              <td>{item.banner_image2[0]}</td>
                            </tr>
                            <tr>
                              <td>Category Name</td>
                              <td>{item.banner_image3[0]}</td>
                            </tr>
                            <tr>
                              <td>Category Name</td>
                              <td>{item.banner_image4[0]}</td>
                            </tr>
                            
                           
                            
                          </tbody>
                          
                        </table>
                        <div>
                          <button onClick={() => router.push(`/admindashboard/banner/edit?_Id=${item._id}`)}>Update</button>
                        </div>
    
                        
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
    