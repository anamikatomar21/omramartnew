import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import UserLayout from "../components/User/Layout";
import { handleSignupState } from "../redux/actions/auth";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styles from "../styles/Merchant/smallbanner.module.scss";

const SmallBanner: NextPage = () => {
  return (
  

<div className={styles.Flex_Section}>
<div className={styles.smallbanner1}>Chemical & Detergent</div>
<div className={styles.smallbanner2}>Chemical & Detergent</div>
<div className={styles.smallbanner3}>Chemical & Detergent</div>
</div>
  );
};

export default SmallBanner;
