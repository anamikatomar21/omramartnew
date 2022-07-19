import React, {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAppSelector } from 'redux/hooks';

import AdminLayout from '../../../components/Admin/AdminLayout';
import { useBanner } from '../../../networkAPI/queries';
import styles from '../../../styles/Merchant/addcategory.module.scss';

const Upload_Banner: NextPage = () => {

  const router = useRouter();
  const { error:err, user, isAuthenticated } = useAppSelector(
    (state) => state.user
  );


  const [banner_name, setBanner_name] = useState<string>("");
  const [type ,setType] = useState<string>("")
  const [banner_image1, setBanner_image1] = useState<any>("");
  const [banner_image2, setBanner_image2] = useState<any>("");
  const [banner_image3, setBanner_image3] = useState<any>("");
  const [banner_image4, setBanner_image4] = useState<any>("");

   

  // const [product_name,setProduct_name] =useState<string>("")

  const { error, isLoading, data, mutate } = useBanner();
  console.log(data);



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

  const options = [
    { value: "advertize",  label: "advertize" },
    { value: "advertize2", label: "advertize2" },
    { value: "advertize3", label: "advertize3" },
    { value: "advertize4", label: "advertize4" },
    { value: "advertize5", label: "advertize5" },
    { value: "advertize6", label: "advertize6" },
    { value: "advertize7", label: "advertize7" }
  ];



  function handleSubmit() {
    return "hello";
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
          Add Product Banners{" "}
        </h1>

        <div className="box3">
          <form action="" onSubmit={handleLogin}>
            <ul className="box345">
              {/* <li>
                <label htmlFor="banner_name" className="omra-lael">
                  Banner Name
                </label>
                <input
                  type="text"
                  name="banner_name"
                  id="banner_name"
                  onChange={(e) => setBanner_name(e.target.value)}
                />
              </li> */}
              <li>
                <label htmlFor="banner_type" className="omra-lael">
                  Banner Type
                </label>
                {/* <input
                  type="text"
                  name="banner_type"
                  id="banner_type"
                  onChange={(e) => setType(e.target.value)}
                /> */}
                  <select
                style={{
                  maxHeight: "100px",
                }}
                name="type"
                className={styles.dropdown}
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {options.map((item: any, index: any) => {
                  console.log(type);
                  return (
                    <>
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                     
                    </>
                  );
                })}
              </select>
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
