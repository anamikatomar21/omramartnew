import React from "react";
import Header from "./Header";
import styles from "styles/Merchant/layout.module.scss";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function UserLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.mmainlayout}>
      <Header />
      <div className={styles.mainlayout}>
        {/* <MerchantSidebar /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
