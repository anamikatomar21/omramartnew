import React from "react";

import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { handleLogout } from "redux/actions/auth";
import { useAppDispatch } from "redux/hooks";
import styles from "styles/Merchant/Header.module.scss";

const Header: NextPage = () => {
  const [, , removeCookie] = useCookies(["jwt"]);
  // const [, dispatch] = useStateValue();
  // const history = useHistory();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const Logout = () => {
    dispatch(handleLogout());
    router.push("/index1");
  };
  return (
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
          <input
            type="text"
            placeholder="Search.."
            className={styles.searchinput}
          />
          <button type="submit" className={styles.searchinput1}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className={styles.navbarright}>
        <div className={styles.rightnav}>
          <ul className={styles.navlinks}>
            <li></li>
            <li>
              <i className="fas fa-user"></i>
              <a href="#">Buyer</a>
            </li>
           
            <li>
              {/* <i className="fas fa-user"></i>  */}
              <span className={styles.profile}>Profile
              
              </span>
              <div className={styles.dropdown}>
                <ul>
                  <li>Company ID</li>
                  <li>Edit Company Details</li>
                  <li>Business Details</li>
                </ul>
              </div>
            </li>

            <li>
              <div onClick={Logout}>Logout</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
