import React from "react";

import { NextPage } from "next";
import Image from "next/image";
import Select from "react-select";

import DashboardLayout from "../../../../components/Merchant/Layout";

interface Person {
  name: string;
  age: number;
  count: number;
  "gift-wrap": "hello";
}

const Upload_Product: NextPage = () => {
  const formData = {
    name: "Amit",
    age: 25,
    count: 12,
  };

  // const options = [
  //   { value: "Drugs & Pharma", label: "Drugs & Pharma" },
  //   { value: "Hospital & Diagnostics", label: "Hospital & Diagnostics" },
  //   { value: "Food & Agriculture", label: "Food & Agriculture" },
  //   { value: "Industrial Machinery", label: "Industrial Machinery" },
  //   { value: "Industrial Supplies", label: "Industrial Supplies" },
  //   { value: "Electronics & Electrical", label: "Electronics & Electrical" },
  //   { value: "Building & Construction", label: "Building & Construction" }
  // ];

  const options1 = [
    { value: "Wholesaler", label: "Wholesaler" },
    { value: "Manufacturer", label: "Manufacturer" },
    { value: "Retailer", label: "Retailer" },
  ];

  function handleSubmit() {
    return "hello";
  }

  function handleChange() {
    return "helo";
  }
  return (
    <DashboardLayout>
      <div className="mov">
        <h1
          style={{
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          Welcome to Omra Mart{" "}
        </h1>

        <div className="box3">
          <ul className="box345">
            <li>
              <div className="imagepre">
                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src="https://m.media-amazon.com/images/I/61+ilDgVVwS._UL1500_.jpg"
                      alt="facemask"
                      className="facemask"
                    />
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="https://m.media-amazon.com/images/I/61+ilDgVVwS._UL1500_.jpg"
                      alt="facemask"
                      className="facemask"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="row">
                <div className="col-md-4">
                  <input type="file" />
                </div>
                <div className="col-md-4">
                  <input type="file" />
                </div>
                <div className="col-md-4">
                  <input type="text" placeholder="YouTube Link" />
                </div>
              </div>
            </li>

            <li>
              <label htmlFor="" className="omra-lael">
                Product Name
              </label>
              <input type="text" name="" id="" />
            </li>
            <li>
              <label htmlFor="" className="omra-lael">
                Product Category
              </label>
              <input type="text" name="" id="" />
            </li>

            <li>
              <label htmlFor="" className="omra-lael">
                Business Type
              </label>
              <Select options={options1} />
            </li>

            <li>
              <label htmlFor="" className="omra-lael">
                Brand
              </label>
              <input type="text" name="" id="" />
            </li>

            <li>
              <label htmlFor="" className="omra-lael">
                Manufacture Details
              </label>
              <input type="text" name="" id="" placeholder="Name " />
            </li>
            <li>
              <input type="tel" name="" id="" placeholder="Phone no. " />
            </li>
            <li>
              <input type="text" name="" id="" placeholder="Address " />
            </li>

            {/* <li> <label htmlFor="" className="omra-lael">
            Product Image
          </label>
            <input type={"file"} name="image" /></li> */}

            <li className="qtyproduct">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="" className="omra-lael">
                    Product Price
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="box-input-section"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="" className="omra-lael">
                    Qty
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="box-input-section"
                  />
                </div>
              </div>
            </li>

            <li>
              <label htmlFor="" className="omra-lael">
                Description
              </label>
              <textarea
                rows={9}
                cols={200}
                placeholder="Other Product Specifications e.g lxbxh ,dimensions"
              />
            </li>

            <li>
              {" "}
              <label htmlFor="" className="omra-lael">
                Product Specifications
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Length :l x b x h "
                className="box-input-textarea2"
              />
            </li>
            <li>
              {" "}
              <label htmlFor="" className="omra-lael">
                Unit Size
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="box-input-textarea"
              />
            </li>
            <li>
              {" "}
              <label htmlFor="" className="omra-lael">
                Capacity
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="box-input-textarea"
              />
            </li>

            <li>
              {" "}
              <label htmlFor="" className="omra-lael">
                Model No.
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=" "
                className="box-input-textarea"
              />
            </li>

            <li>
              {/* <input type="submit" className='Upload-Button' /> */}

              <button className="Upload-Button">Add Product</button>
              <button className="Upload-Button">Submit</button>
              {/* <input type="submit" className='Upload-Button' /> */}
            </li>
          </ul>

          <ul className="formstyle"></ul>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Upload_Product;
