import React, { useEffect } from "react";

import { NextPage } from "next";
import Router, { useRouter } from "next/router";

import DashboardLayout from "../../../components/Merchant/Layout";
import { useAppSelector } from "../../../redux/hooks";
import styles from "../../../styles/Merchant/dashboard.module.scss";

const DashBoard: NextPage = () => {
  const { error, user, isAuthenticated } = useAppSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      if (user.role === "Admin") {
        return;
      }
      // else{
      //     Router.push(`/`)

      // }
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
      <DashboardLayout>
        <div>
          <h1 className={styles.heading_box}>
            {" "}
            Welcome to your Admin dashboard
          </h1>
        </div>

        <div className={styles.flex_box}>
          {/* <div className={styles.flex_box1}><h1>Total Merchant</h1> </div> */}
          <div className={styles.flex_box2}>
            <h1> Approved Listing</h1>{" "}
          </div>
          <div className={styles.flex_box3}>
            <h1>Pending Listing</h1>{" "}
          </div>
        </div>

        {/* <Footer /> */}
      </DashboardLayout>
    </>
  );
};
export default DashBoard;
