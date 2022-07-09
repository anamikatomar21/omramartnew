import React, {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import AdminLayout from '../../../components/Admin/AdminLayout';
import { useBanner } from '../../../networkAPI/queries';
import styles from '../../../styles/Merchant/addcategory.module.scss';

interface Person {
  name: string;
  age: number;
  count: number;
  "gift-wrap": "hello";
}

const Upload_Banner: NextPage = () => {
  const formData = {
    name: "Amit",
    age: 25,
    count: 12,
  };
  const router = useRouter();

  const [banner_name, setBanner_name] = useState<string>("");
  const [type ,setType] = useState<string>("")
  const [banner_image1, setBanner_image1] = useState<any>("");
  const [banner_image2, setBanner_image2] = useState<any>("");
  const [banner_image3, setBanner_image3] = useState<any>("");
  const [banner_image4, setBanner_image4] = useState<any>("");

    console.log({"bananner name":banner_name})
    console.log({"bannner images":banner_image1})
    console.log(banner_image2)

  // const [product_name,setProduct_name] =useState<string>("")

  const { error, isLoading, data, mutate } = useBanner();
  console.log(data);

  const field_color = {
    color: "red",
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      banner_name,
      type,
      banner_image1,
      banner_image2,
      banner_image3,
      banner_image4,
      
    });
  };

  useEffect(() => {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || error.message);
    }

    if (data) {
      toast.success("upload Successfull");
      router.replace("/admindashboard/banner");
    }
  }, [error, data, router]);

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
          Add Product Banners{" "}
        </h1>

        <div className="box3">
          <form action="" onSubmit={handleLogin}>
            <ul className="box345">
              <li>
                <label htmlFor="banner_name" className="omra-lael">
                  Banner Name
                </label>
                <input
                  type="text"
                  name="banner_name"
                  id="banner_name"
                  onChange={(e) => setBanner_name(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor="banner_type" className="omra-lael">
                  Banner Type
                </label>
                <input
                  type="text"
                  name="banner_type"
                  id="banner_type"
                  onChange={(e) => setType(e.target.value)}
                />
              </li>

              <li>
                <label htmlFor="banner_image" className="omra-lael">
                  Banner image1
                </label>
                <input
                  type="file"
                  name="banner_image"
                  id="banner_image"
                  onChange={(e: any) => setBanner_image1(e.target.files[0])}
                />
              </li>
              <li>
                <label htmlFor="banner_image2" className="omra-lael">
                  Banner image2
                </label>
                <input
                  type="file"
                  name="banner_image2"
                  id="banner_image2"
                  onChange={(e: any) => setBanner_image2(e.target.files[0])}
                />
              </li>
              <li>
                <label htmlFor="banner_image3" className="omra-lael">
                  Banner image3
                </label>
                <input
                  type="file"
                  name="banner_image3"
                  id="banner_image3"
                  onChange={(e: any) => setBanner_image3(e.target.files[0])}
                />
              </li>
              <li>
                <label htmlFor="banner_image4" className="omra-lael">
                  Banner image4
                </label>
                <input
                  type="file"
                  name="banner_image4"
                  id="banner_image4"
                  onChange={(e: any) => setBanner_image4(e.target.files[0])}
                />
              </li>

              <li style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                {/* <input type="submit" className='Upload-Button' /> */}

                <button className={styles.Add_Button}>Add Banners</button>
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
export default Upload_Banner;
