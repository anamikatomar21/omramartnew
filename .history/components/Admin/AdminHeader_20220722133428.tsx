import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useProductForApproval } from '../../networkAPI/queries';
import { handleLogout } from '../../redux/actions/auth';
import { useAppDispatch } from '../../redux/hooks';
import styles from '../../styles/Merchant/Header.module.scss';

const AdminHeader: NextPage = () => {
  const { data, status } = useProductForApproval();
  console.log(data)
  const dispatch= useAppDispatch()
  const router = useRouter()
  
  const Logout = () => {
    
    dispatch(handleLogout())
    router.push("/login");
  };
  
  const countData=data?.data.map((item:any)=> {
    item.isApproved==false?item.length:0
  });
  console.log({"countData":countData})
    return(
        

        <div className={styles.navbarheader}>
        <div className={styles.brandlogo}>
          <div className={styles.logo}>
            <Image
              data-lazyloaded="1"
              src="/logo.png"
              height={50}
              width={60}
              alt="Logo Image"
              className={styles.imageLogo}
            />
          </div>
        </div>



<div className={styles.searchbox}>
<div className={styles.searchinnerbox}> 
    <input type="text" placeholder="Search.." className={styles.searchinput} />
                
                <button type="submit" className={styles.searchinput1}><i className="fa fa-search"></i></button>
              </div>
</div>


        <div className={styles.navbarright}>
          <div className={styles.rightnav}>
            <ul className={styles.navlinks}>
              <li>
               
                


              </li>
              <i className="far fa-bell bell-icon"></i><span style={{color:"red",fontSize:"30px",fontFamily:"sans-serif",marginLeft:"-50px"}}>{data?.data.length}</span>

              {/* <li>
                <i className="fas fa-user"></i><Link href="#">Seller</Link>
              </li>
              <li>
                <i className="fas fa-user"></i><Link href="#">Buyer</Link>
              </li>
              <li>
                <i className="fas fa-user"></i> <Link href="#">Profile</Link>
              </li>
              <li>
                <i className="fas fa-address-book"></i> <Link href="#">Contact Us</Link>
              </li> */}
              <li>
                 <div onClick={Logout}>Logout</div>
              </li>

            </ul>
          </div>
        </div>
      </div>
       
    )
}
export default AdminHeader;

