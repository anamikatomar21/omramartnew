import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { NextPage } from 'next';
import Router from 'next/router';
import { useAppSelector } from 'redux/hooks';

import AdminLayout from '../../components/Admin/AdminLayout';
import { useProducts } from '../../networkAPI/queries';
import styles from '../../styles/Merchant/dashcode.module.scss';

const All_merchant: NextPage = () =>{
  const { error:err, user, isAuthenticated } = useAppSelector(
    (state) => state.user
  );

    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState<string>("");
    const dropdownRef = useRef<any>("");
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
    const { data, status } = useProducts();
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
    <div>
           <AdminLayout>
        <div className={styles.layoutDrawer}>
          <div className={styles.layoutDrawer_content}>
            {/* <main>
              <h1 className="admin-section">
                Welcome to Super Admin Dashboard
              </h1> */}

            {data?.data.map((item:any, index:any) => {
                console.log(item)
              return (
                <div className="reporttable" key={index}>
                    <div>

                    </div>
                  <table
                    className="table"
                 
                  >
                      <th>Sr no:</th>

                      <th>Merchant Id:</th>
                      <th>Merchant Name:</th>
                      <th>Product Name:</th>
                      <th>Types of bussiness</th>
                      <th>Joining  On:</th>
                      
                      <tbody>
                      <tr key={index}>
                      
                      {/* <td>ABC pvt lt.</td> */}
                      <td>{index}</td>
                      <td>{item.Vendor_Id}</td>
                      <td>{item.vendors_name}</td>
                      <td>{item.product_name}</td>
                      <td>{item.TypesOf_Bussiness}</td>
                      <td>{item.createdAt.slice(0,10)}</td>
                    </tr>
                    <tr>
                      
                     
                     
                    </tr>
                    <tr>
                      
                      {/* <td>Facemask</td> */}
                    
                    </tr>

                    </tbody>
{/*                    
                    <tr>
                      <td>Product Image</td>
                      <td>
                       
                         <img src={item.product_image1[0]} width="100px" height="100px"/>
                      </td>
                    </tr> */}
                  
                    {/* <tr><button type="button" className='approve-button'>Approve</button>  
                <button type="button" className='reject-button'>Decline</button></tr> */}
                  </table>

                  
                </div>
              );
            })}
          </div>
        </div>
      </AdminLayout>
    </div>
  )
}
export default All_merchant
