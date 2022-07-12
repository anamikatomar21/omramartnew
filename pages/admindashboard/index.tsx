import React, { useEffect } from "react";

import { NextPage } from "next";
import Router, { useRouter } from "next/router";
import styles from "../../styles/Merchant/admin.module.scss";
import AdminLayout from "../../components/Admin/AdminLayout";
import { useAppSelector } from "../../redux/hooks";

const DashBoard2: NextPage = () => {
  const { error, user, isAuthenticated } = useAppSelector(
    (state) => state.user
  );

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

  const router = useRouter();
  return (
    <>
      {/* <div className='headersection'><Header /></div>
<div className='minsection'>
<div className='leftsidebar'><MerchantSidebar /></div>
<div className='rightsidebar'><MerchantSidebar /></div>

</div> */}
      <AdminLayout>
        <div>
          <h1 className={styles.heading_box}>
            {" "}
            Welcome to your SuperAdmin Dashboard
          </h1>
        </div>

        <div className={styles.flex_box}>
          <div className={styles.flex_box1}>
            <h1>Total Merchant</h1>{" "}
          </div>
          <div className={styles.flex_box2}>
            <h1> All Approved Listing</h1>{" "}
          </div>
          <div className={styles.flex_box3}>
            <h1>Pending Listing</h1>{" "}
          </div>
        </div>

        {/* <Footer /> */}
      </AdminLayout>
    </>
  );
};
export default DashBoard2;
