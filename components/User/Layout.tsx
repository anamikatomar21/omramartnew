// import React from 'react';

// import styles from '../../styles/Merchant/layout.module.scss';
// import Header from './Header';

// // }
// type DashboardLayoutProps = {
//   children: React.ReactNode,
// };

// export default function UserLayout({ children }: DashboardLayoutProps) {
//   return (
//    <div className={styles.mmainlayout}>
//       <Header />
//       <div className={styles.mainlayout}>

//       {/* <MerchantSidebar /> */}
//         <main>{children}</main>
//       </div>
      
//       {/* <Footer /> */}
//       </div>
      
//   );
// }

import React from 'react';

import styles from '../../styles/Merchant/layout.module.scss';
import Header from './Header';

// }
type DashboardLayoutProps = {
  children: React.ReactNode,
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

