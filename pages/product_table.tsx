import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const ProductTable: NextPage = () => {
  return (
    <div>
      <table>
        <tbody>
          <th>PRODUCT INFORMATION</th>
          <tr>
            <td>BRAND</td>
            <td>Daikan</td>
          </tr>
          <tr>
            <td>MODEL</td>
            <td>2WTT</td>
          </tr>
          <tr>
            <td>CAPACITY</td>
            <td>CAPACITY</td>
          </tr>
          <tr>
            <td>ANNUAL ENERGY CONSUPTION</td>
            <td>CAPACITY</td>
          </tr>
          <tr>
            <td>NOISE LEVEL</td>
            <td>CAPACITY</td>
          </tr>
          <tr>
            <td>PART NUMBER</td>
            <td>CAPACITY</td>
          </tr>
          <tr>
            <td>UNIT NO.</td>
            <td>CAPACITY</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
