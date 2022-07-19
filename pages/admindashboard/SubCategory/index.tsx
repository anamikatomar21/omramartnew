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
import {
  useGetCategory,
  useGetSubCategory,
} from '../../../networkAPI/queries';

const Admin: NextPage = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [select, setSelect] = useState<string>("");
      const [category_id, setCategory_id]= useState<string>("")
      const dropdownRef = useRef<any>("");
    
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
      const {error:err,user,isAuthenticated} = useAppSelector((state)=> state.user)
      const { data, status } = useGetSubCategory();
      const {data: category_data,status:status1} =useGetCategory()
  
  //     const allData=data?.data
  //     console.log(allData)
  //     const arr1 = [];
  // for (let i = allData.length - 1; i >= 0; i--) {
  //     arr1.push(allData[i]);
  // }
  
  // console.log(arr1)
     
    
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

      useEffect(()=>{
        category_data?.data.map((item:any)=>{
          
          setCategory_id(item.category_name)
        })

      },[category_data,category_id])
    
    
      return (
        <>
          <AdminLayout>
            <div className={"styles.Flex_Container"} style={{marginLeft:"400px"}}>
              <h1>All Category List</h1>
            
               
                  <div  >
                    <div style={{display:"flex",gap:"50px",marginTop:"30px"}}>
                   {/* <div className={styles.Image_Section}>
                      <Image
                        src={item.sub_category_image[0]?item.sub_category_image[0]:"/omratrade/homebanner.png"}
                        alt=""
                        width="300px"
                        height="200px"
                      />
                    </div>  */}
                    <div>
                      <div className="reporttable">
                      <table className="table">
                        <tr>
                          <th>Sr No:</th>
                          <th>category Name:</th>
                         
                        </tr>
                          <tbody>
                          {category_data?.data.map((item: any, index: any) => {
                          

return (
                            <tr key={index}>
                              <td>{index}.</td>
                              <td>{item.category_name}</td>
                              <tr>
                            <th>Sr No:</th>
                            <th>Suncategory Name</th>
                            <th>Image</th>
                          </tr>
                              {data?.data.filter((item3:any)=>item._id==item3.category_Id).map((item2:any,i:any)=>


                              {
                                console.log(item2)
                                console.log(item)
                                
                                
                                return(

                              

                           
                              <tr key={i}>
                                <td>{i}.</td>
                                <td>{item2.sub_category_name}</td>
                                <td>{item2.sub_category_image}
                                <div >
                      <Image
                        src={item2.sub_category_image[0]?item2.sub_category_image[0]:"/omratrade/homebanner.png"}
                        alt=""
                        width="300px"
                        height="200px"
                      />
                    </div>  </td>

                              </tr>
                                )
                              })}
                                 
                              
                            </tr>
                               );
                              })}
                            
                           
                            
                          </tbody>
                          
                        </table>
    
                        
                      </div>
                    </div>
                    </div>
                  </div>
             
            </div>
          </AdminLayout>
        </>
      );
    };
    
    export default Admin;