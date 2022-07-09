import React, {
  useEffect,
  useState,
} from 'react';

import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import AdminLayout from '../../components/Admin/AdminLayout';
import {
  useGetCompanyProfile,
  useGetMerchantDetails,
} from '../../networkAPI/queries';
import {
  useAppDispatch,
  useAppSelector,
} from '../../redux/hooks';
import styles from '../../styles/Merchant/dashcode.module.scss';

const Merchant_Credentials_Details: NextPage = () =>{
  

 
        const router = useRouter();
        const dispatch = useAppDispatch();
       
        const [email, setEmail] = useState<string>("");
        const [password, setPassword] = useState<string>("");
      
        const { error,user, isAuthenticated,loading} = useAppSelector((state) => state.user);
        const {data:data,error:err}=useGetCompanyProfile()
        console.log(data)
        const merchantData =useGetMerchantDetails()
        const merchantlist = merchantData?.data?.data.user
        console.log(merchantData?.data?.data.user)
       
      
       
        console.log({"user":user});
        useEffect(() => {
          if (error) {
            toast.error(error);
          }
          
          if (isAuthenticated) {
            toast.success("You 'are Logged in");
           
    
          
        console.log({user:user})
            if (user) {
              switch (user?.role) {
                case "Admin":
                  if(user.isRegistered) {
                    Router.push(`/onboarding/dashboard`)
    
                  }else{
                    Router.push(`/onboarding/profile`)
    
                  }
                  
                  break;
      
                case "SuperAdmin":
                  Router.push(`/admindashboard/users`)
                  break;
                // case "User":
                //   router.push(`/`)
                //   break;
      
                default:
                  Router.push(`/`)
                  break;
              }
            }
          }
          
            // router.push(`/onboarding/profile`)
          
        }, [error, user, isAuthenticated]);
    return (
      <div>
             <AdminLayout>
          <div className={styles.layoutDrawer}>
            <div className={styles.layoutDrawer_content}>
              {/* <main>
                <h1 className="admin-section">
                  Welcome to Super Admin Dashboard
                </h1> */}
  
              {merchantlist?.map((item:any, index:any) => {
                  console.log(item)
                return ( 
                  <div className="reporttable" key={index} >
                      <div>
  
                      </div>
                    <table
                      className="table"
                      style={{marginTop:"40px"}}
                   
                    >
                        <th>Sr no:</th>
  
                        <th>Merchant Id:</th>
                        <th>Merchant Name:</th>
                        <th>username:</th>
                        <th>password</th>
                        <th>Joining  On:</th>
                        
                        <tbody>
                        <tr  >
                        
                        {/* <td>ABC pvt lt.</td> */}
                        <td>{index+1}.</td>
                        <td>{item.Vendor_Id}</td>
                        <td>{item.vendors_name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
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
  export default Merchant_Credentials_Details
  