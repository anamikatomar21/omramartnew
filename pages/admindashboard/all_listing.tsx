
import React from 'react';

import { NextPage } from 'next';
import Select from 'react-select';

interface Person {
  name: string;
  age: number;
  count: number;
  "gift-wrap": "hello";
}

const All_Listing: NextPage = () => {
  const formData = {
    name: "Amit",
    age: 25,
    count: 12,
  };

  const options = [
    { value: "Drugs & Pharma", label: "Drugs & Pharma" },
    { value: "Hospital & Diagnostics", label: "Hospital & Diagnostics" },
    { value: "Food & Agriculture", label: "Food & Agriculture" },
    { value: "Industrial Machinery", label: "Industrial Machinery" },
    { value: "Industrial Supplies", label: "Industrial Supplies" },
    { value: "Electronics & Electrical", label: "Electronics & Electrical" },
    { value: "Building & Construction", label: "Building & Construction"}
  ];

  function handleSubmit() {
    return "hello";
  }

  function handleChange() {
    return "helo";
  }
  return (
    <div className='mov'>
      <h1
        style={{
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        Welcome to Omra Mart{" "}
      </h1>
      
       <div className='box3'>
       <ul className="formstyle">
          
          <li><label htmlFor="" className="omra-lael">
            Product/Service Name
          </label>
          <input type="text" name="" id="" /></li>

          <li><label htmlFor="" className="omra-lael">
            Select Category
          </label>
          <Select options={options} />
          {/* <select   name="" id="" /> */}</li>

         <li> <label htmlFor="" className="omra-lael">
            product Image
          </label>
          <input type={"file"} name="image" /></li>

      <li>    <label htmlFor="" className="omra-lael">
            Price
          </label>
          <input type="number" name="" id="" /></li>

         <li> <label htmlFor="" className="omra-lael">
            {" "}
            Product Specifications
          </label>
          <textarea
            rows={4}
            cols={100}
            placeholder="add Product Specifications e.g lxbxh ,dimensions"
          /></li>

        <li> <input type="submit"  className='Upload-Button'/></li>
          </ul>
        </div>
       </div>
      
     
  );
};
export default All_Listing;
