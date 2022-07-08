import React from 'react';

import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Footer from './Footer';
import styles from '../../styles/Merchant/dashcode.module.scss';

// }
type AdminLayoutProps = {
  children: React.ReactNode,
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
     <AdminHeader />
    <div style={{ display: "flex"  }}>
    <div className="row">
      <div className="col-6" style={{marginTop:"0px"}}>
        <AdminSidebar />
      </div>
     
    </div>
    <main className={styles.AdminContainer}>
      <section>{children}</section>
    </main>
    

   
  </div>
  <Footer />
    </>
   
      
  );
}
// const Layout({ children }):DashboardLayoutProps {
//   return (
//     <>

// <div className='headersection'><Header /></div>
// <div className='minsection'>
// <div className='leftsidebar'><MerchantSidebar /></div>
// <div className='rightsidebar'>({ children })</div>
// </div>


      
      
//       <Footer />
//     </>
//   )
// }

