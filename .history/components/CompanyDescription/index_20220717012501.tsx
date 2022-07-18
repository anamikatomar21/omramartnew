import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";


import styles from "../../styles/Merchant/companydescription.module.scss";

const CompanyDescription: NextPage = () => {
  return (
  

    <div className={styles.Flex_Section}>
    <div>
      <h3>  Lorem ipsum dolor sit amet consectetur </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        praesentium dolores, accusamus laborum error perspiciatis iure
        pariatur expedita sequi odit minus architecto ducimus quod voluptate
        dignissimos optio quia dolorem numquam!Lorem Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Veritatis praesentium dolores,
        accusamus laborum error perspiciatis iure pariatur expedita sequi odit
        minus architecto ducimus quod voluptate dignissimos optio quia dolorem
        numquam!Lorem
      </p>
    
      <h3>  Lorem ipsum dolor sit amet consectetur </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        praesentium dolores, accusamus laborum error perspiciatis iure
        pariatur expedita sequi odit minus architecto ducimus quod voluptate
        dignissimos optio quia dolorem numquam!Lorem Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Veritatis praesentium dolores,
        accusamus laborum error perspiciatis iure pariatur expedita sequi odit
        minus architecto ducimus quod voluptate dignissimos optio quia dolorem
        numquam!Lorem
      </p>
    </div>
    <div>
    <h3>  Lorem ipsum dolor sit amet consectetur </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        praesentium dolores, accusamus laborum error perspiciatis iure
        pariatur expedita sequi odit minus architecto ducimus quod voluptate
        dignissimos optio quia dolorem numquam!Lorem Lorem ipsum dolor sit
        amet consectetur adipisicing elit. 
      </p>
    
      <h3>  Lorem ipsum dolor sit amet consectetur </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        praesentium dolores, accusamus laborum error perspiciatis iure
        pariatur expedita sequi odit minus architecto ducimus quod voluptate
        dignissimos optio quia dolorem numquam!Lorem Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Veritatis praesentium dolores,
        accusamus laborum error perspiciatis iure pariatur expedita sequi odit
        minus architecto ducimus quod voluptate dignissimos optio quia dolorem
        numquam!Lorem
      </p>
    </div>
  </div>
  );
};

export default CompanyDescription;
