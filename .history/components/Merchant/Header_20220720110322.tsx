import React from "react";

import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { handleLogout } from "redux/actions/auth";
import { useAppDispatch } from "redux/hooks";
import styles from "styles/Merchant/Header.module.scss";
import { useOnClickOutside } from "usehooks-ts";

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

  const [dropdown, setDropdown] = React.useState(false);
  const dropdownRef = React.useRef<HTMLLIElement>(null);
  useOnClickOutside(dropdownRef, () => setDropdown(false));

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

            <li ref={dropdownRef}>
              {/* <i className="fas fa-user"></i>  */}
              <span
                onClick={() => setDropdown(!dropdown)}
                className={styles.profile}
              >
                Profile
              </span>
              <div
                style={{
                  opacity: dropdown ? 1 : 0,
                }}
                className={styles.dropdown}
              >
                <ul>
                  <Link href='#'>
                  <li>Company ID</li>
                  </Link>
                  <Link href='#'>
                  <li>Edit Company Details</li>
                  </Link>
                  <Link href='#'>
                  <li>Business Details</li>
                  </Link>
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
