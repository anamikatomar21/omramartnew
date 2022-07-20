import React from "react";

import Header from "./Header";
import MerchantSidebar from "./Sidebar";

// }
type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    //  <div className={styles.mmainlayout}>
    //     <Header />
    //     <div className={styles.mainlayout}>

    //     {/* <MerchantSidebar /> */}
    //       <main>{children}</main>
    //     </div>

    //     {/* <Footer /> */}
    //     </div>
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <div className="row">
          <div className="col-6" style={{ marginTop: "0px" }}>
            <MerchantSidebar />
          </div>
        </div>

        <main style={{ width: "100%", marginTop: "-50px", marginLeft: "0px" }}>
          <section>{children}</section>
        </main>
      </div>
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
