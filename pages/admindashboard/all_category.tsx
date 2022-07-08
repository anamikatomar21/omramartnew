import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import AdminLayout from '../../components/Admin/AdminLayout';
import { useGetCategory } from '../../networkAPI/queries';
import styles from '../../styles/Merchant/dashcode.module.scss';

const Admin: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState<string>("");
    const dropdownRef = useRef<any>("");
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
    const { data, status } = useGetCategory();

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
            <h1>All Category List</h1>
            {data?.data.map((item: any, index: any) => {
              console.log(item.category_image);
              return (
                <div key={index} >
                  <div style={{display:"flex",gap:"50px",marginTop:"30px"}}>
                  <div className={styles.Image_Section}>
                    <Image
                      src={item.category_image[0]?item.category_image[0]:""}
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
                            <td>{item.category_name}</td>
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
  