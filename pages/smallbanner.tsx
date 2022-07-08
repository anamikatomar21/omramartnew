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
<div>
    <Image
    src="/omratrade/sliderbanner33.png"
    width={400} height={200} alt="sliderbanner"
    className="facemask"
  />
  </div>
  <div>
  <Image
  src="/omratrade/banner333.png"
  width={400} height={200} alt="sliderbanner"
  className="facemask"
/>
</div>
<div>
  <Image
  src="/omratrade/sliderbanner3333.png"
  width={400} height={200} alt="sliderbanner"
  className="facemask"
/>
</div>
</div>
  );
};

export default SmallBanner;
