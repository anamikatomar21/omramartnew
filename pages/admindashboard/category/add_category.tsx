import React, {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import AdminLayout from '../../../components/Admin/AdminLayout';
import { useCategory } from '../../../networkAPI/queries';
import styles from '../../../styles/Merchant/addcategory.module.scss';

interface Person {
  name: string;
  age: number;
  count: number;
  "gift-wrap": "hello";
}

const Upload_Category: NextPage = () => {
  const formData = {
    name: "Amit",
    age: 25,
    count: 12,
  };
  const router= useRouter()


  

  
  const [category_name, setCategory_name] = useState<string>("");
  const [category_image, setCategory_image] = useState<any>();


  

  

console.log(category_name)
console.log(category_image)

  // const [product_name,setProduct_name] =useState<string>("")

  const { error, isLoading, data, mutate } = useCategory();
  console.log(data)

  const field_color = {
    color: "red",
  };

 

 

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      

      category_name,

      category_image,

      
     
    });
  };

  useEffect(() => {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || error.message);
    }

    if (data) {
      toast.success("upload Successfull");
      router.replace('/admindashboard/all_category')
    }
  }, [error, data,router]);
  

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
    <AdminLayout>
      <div className={styles.mov}>
        <h1
          style={{
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          Add Product Category{" "}
        </h1>

        <div className="box3">
        <form action="" onSubmit={handleLogin}  >
          <ul className="box345">
          
           

            <li>
              <label htmlFor="category_name" className="omra-lael">
                Category Name
              </label>
              <input type="text" name="category_name" id="category_name" onChange={(e) => setCategory_name(e.target.value)} />
            </li>

            <li>
             

              <label htmlFor="category_image" className="omra-lael">
                Category image
              </label>
              <input type="file" name="category_image" id="category_image" onChange={(e:any)=>setCategory_image(e.target.files[0])} />
            </li>


            <li style={{display:"flex",gap:"20px",marginTop:"20px"}}>
              {/* <input type="submit" className='Upload-Button' /> */}

              <button className={styles.Add_Button}>Add Category</button>
              {/* <button className="Upload-Button">Submit</button> */}
            
            </li>
           
          </ul>
          </form>
          <ul className="formstyle"></ul>
        </div>
      </div>
    </AdminLayout>
  );
};
export default Upload_Category;
