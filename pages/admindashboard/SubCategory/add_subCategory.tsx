import React, {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import AdminLayout from 'components/Admin/AdminLayout';
import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAppSelector } from 'redux/hooks';

import {
  useGetCategory,
  useSubCategory,
} from '../../../networkAPI/queries';
import styles from '../../../styles/Merchant/addcategory.module.scss';

interface Person {
    name: string;
    age: number;
    count: number;
    "gift-wrap": "hello";
  }
  
  const Upload_SubCategory: NextPage = () => {
    const formData = {
      name: "Amit",
      age: 25,
      count: 12,
    };
    const router= useRouter()
    const { error:err, user, isAuthenticated } = useAppSelector(
      (state) => state.user
    );
  
  
  
    
    const [category_Id, setCategory_Id] = useState<string>("");
    const [category_name, setCategory_name] = useState<string>("");
 
  
    const [sub_category_name, setSub_category_name] = useState<string>("");
    const [sub_category_image, setSub_category_image] = useState<any>();
  
  
    
  
    
  
  console.log(category_name)
 
  
    // const [product_name,setProduct_name] =useState<string>("")
  
    const { error, isLoading, data, mutate } = useSubCategory();
    const { error:err1, isLoading:Loading, data:category_data } = useGetCategory();
    console.log(data)
  
    const field_color = {
      color: "red",
    };
  
    console.log(category_data)
   
  
   
  
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      mutate({
        
        category_Id,
        category_name,
       
        sub_category_name,
        sub_category_image,
  
        
       
      });
    };



    console.log(sub_category_image)
  
    useEffect(() => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message || error.message);
      }
  
      if (data) {
        toast.success("upload Successfull");
        router.replace('/admindashboard/SubCategory')
      }
    }, [error, data,router]);

    useEffect(()=>{
      category_data?.data.filter((item:any)=>{
        console.log(item)

        item.category_name==category_name?setCategory_Id(item._id):""

      })

    },[category_name,category_data])
    
  
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

    useEffect(() => {
      if (isAuthenticated) {
        if (user.role === "SuperAdmin") {
          return;
        } else {
          Router.push(`/`);
        }
      } else {
        Router.push(`/`);
      }
    }, [user, isAuthenticated]);
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
              <label htmlFor="category" className={styles.Omra_Lael}>
                Product Category
              </label>

              {/* <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              /> */}

              <select
                style={{
                  maxHeight: "100px",
                }}
                name="category"
                className={styles.dropdown}
                value={category_name}
                onChange={(e) => setCategory_name(e.target.value)}
              >
                <option value="">Select Category</option>
                {category_data?.data.map((item: any, index: any) => {
                  console.log(category_name);
                  // if(category_name){
                  //   setCategory_Id(item.category_Id)
                  // }
                  return (
                    <>
                      <option key={index} value={item.category_name}>
                        {item.category_name}
                      </option>
                      {/* <option key={index} value={item.category_name}>
                        {item.category_name}
                      </option> */}
                      {/* <option key={index} value={item.category_name}>
                        {item.category_name}
                      </option>
                      <option key={index} value={item.category_name}>
                        {item.category_name}
                      </option>
                      <option key={index} value={item.category_name}>
                        {item.category_name}
                      </option> */}
                    </>
                  );
                })}
              </select>
            </li>


              <li>
                <label htmlFor="category_name" className="omra-lael">
                  Sub Category Name
                </label>
                <input type="text" name="category_name" id="category_name" onChange={(e) => setSub_category_name(e.target.value)} />
              </li>
  
  
              <li>
               
  
                <label htmlFor="category_image1" className="omra-lael">
                  Sub Category image
                </label>
                <input type="file" name="category_image1" id="category_image1" onChange={(e:any)=>setSub_category_image(e.target.files[0])} />
              </li>
  
  
              <li style={{display:"flex",gap:"20px",marginTop:"20px"}}>
                {/* <input type="submit" className='Upload-Button' /> */}
  
                <button className={styles.Add_Button} >Add SubCategory</button>
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
  export default Upload_SubCategory;
  