import React, {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import {
  Col,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';

import DashboardLayout from '../../../../../components/Merchant/Layout';
import {
  useGetCategory,
  userProduct,
} from '../../../../../networkAPI/queries';
import { useAppSelector } from '../../../../../redux/hooks';
import styles from '../../../../../styles/Merchant/uploadproduct.module.scss';

// interface Person {

//   name: string;

//   age: number;

//   count: number;

//   "gift-wrap": "hello";

// }
interface SpecificationsBox {
  atribute: string;
  Values: string;
}

const Upload_Product: NextPage = () => {
  const {
    error: err,
    user,
    isAuthenticated,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      if (user.role === "Admin") {
        return;
      }
      // else{
      //     Router.push(`/`)

      // }
    } else {
      Router.push(`/`);
    }
  }, [user, isAuthenticated]);

  const [additionalSpecification, setadditionalSpecification] = useState<any>([
    {
      atribute: "",
      Values: "",
    },
  ]);

  const [Vendor_Id, setVendor_Id] = useState<string>("");
  const [isApproved, setisApproved] = useState<boolean>(false);

  const [vendors_name, setVendors_name] = useState<string>("");

  const [product_name, setProduct_name] = useState<string>("");

  const [product_description, setProduct_description] = useState<string>("");

  const [product_image1, setProduct_image1] = useState<any>("");
  const [product_image2, setProduct_image2] = useState<any>("");
  const [product_image3, setProduct_image3] = useState<any>("");
  const [product_image4, setProduct_image4] = useState<any>("");
  const [product_image5, setProduct_image5] = useState<any>("");

  const [category, setCategory] = useState<string>("");
  const [sub_category, setSub_Categoery] = useState<string>("");

  const [price, setPrice] = useState<string>("0");

  const [product_Specification, setProduct_Specification] =
    useState<string>("");

  const [videos, setVideos] = useState<string>("");

  const [auther_Id, setAuthorId] = useState<string>("");

  const [TypesOf_Bussiness, setTypesOf_Bussiness] = useState<string>("");

  const [manufacturer_phone_no, setManufacturer_phone_no] =
    useState<string>("");

  const [manufacturer_address, setManufacturer_address] = useState<string>("");

  const [brand, setBrand] = useState<string>("");

  const [capacity, setCapacity] = useState<string>("");

  const [model_no, setModel_no] = useState<string>("");

  const [product_image1Preview, setProduct_image1Preview] = useState<any>("");
  const [product_image2Preview, setProduct_image2Preview] = useState<any>("");
  const [product_image3Preview, setProduct_image3Preview] = useState<any>("");
  const [product_image4Preview, setProduct_image4Preview] = useState<any>("");
  const [product_image5Preview, setProduct_image5Preview] = useState<any>("");

  // const [product_name,setProduct_name] =useState<string>("")
  const router = useRouter();

  const { error, isLoading, data, mutate } = userProduct();
  console.log(data);

  const field_color = {
    color: "red",
  };

  const handleInputChange = (e: any, index: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...additionalSpecification];
    list[index][name] = value;
    setadditionalSpecification(list);
    console.log({ additionalSpecification: list });
  };
  console.log(additionalSpecification);

  const handleRemoveClick = (e: any, index: any) => {
    e.preventDefault();

    const list = [...additionalSpecification];
    list.splice(index, 1);
    setadditionalSpecification(list);
  };

  const handleAddClick = (e: any) => {
    e.preventDefault();
    setadditionalSpecification([
      ...additionalSpecification,
      { atribute: "", Values: "" },
    ]);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      Vendor_Id,

      auther_Id,

      vendors_name,

      product_name,
      isApproved,

      TypesOf_Bussiness,

      manufacturer_phone_no,

      manufacturer_address,

      brand,

      product_image1,
      product_image2,
      product_image3,
      product_image4,
      product_image5,

      category,
      sub_category,

      price,
      additionalSpecification,

      product_Specification,

      product_description,

      capacity,

      model_no,

      videos,
    });
  };

  const data2 = useGetCategory();
  console.log(data2);
  const category_data = data2.data;
  console.log(data2.data);

  useEffect(() => {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || error.message);
    }

    if (data) {
      toast.success("upload Successfull");
      router.push("/onboarding/dashboard/product/AllProduct");
    }
  }, [error, data, router]);

  // const [email, setEmail] = useState<string>("");

  // const [password, setPassword] = useState<string>("");

  // const { error, mutate, data, isLoading } = useLogin();

  // const options = [

  //   { value: "Drugs & Pharma", label: "Drugs & Pharma" },

  //   { value: "Hospital & Diagnostics", label: "Hospital & Diagnostics" },

  //   { value: "Food & Agriculture", label: "Food & Agriculture" },

  //   { value: "Industrial Machinery", label: "Industrial Machinery" },

  //   { value: "Industrial Supplies", label: "Industrial Supplies" },

  //   { value: "Electronics & Electrical", label: "Electronics & Electrical" },

  //   { value: "Building & Construction", label: "Building & Construction" }

  // ];

  console.log(additionalSpecification);

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
    // create the preview

    if (product_image1) {
      const objectUrl = URL.createObjectURL(product_image1);
      setProduct_image1Preview(objectUrl);
    }

    if (product_image2) {
      const objectUrl2 = URL.createObjectURL(product_image2);
      setProduct_image2Preview(objectUrl2);
    }
    if (product_image3) {
      const objectUrl3 = URL.createObjectURL(product_image3);
      setProduct_image3Preview(objectUrl3);
    }
    if (product_image4) {
      const objectUrl4 = URL.createObjectURL(product_image4);
      setProduct_image4Preview(objectUrl4);
    }
    if (product_image5) {
      const objectUrl5 = URL.createObjectURL(product_image5);
      setProduct_image5Preview(objectUrl5);
    }

    console.log({ "PRODUCT IMAGE 1": product_image1 });
    console.log("PRODUCT IMAGE 2", product_image2);

    // return () => {URL.revokeObjectURL(objectUrl);
    //   URL.revokeObjectURL(objectUrl2);}
  }, [
    product_image1,
    product_image2,
    product_image3,
    product_image4,
    product_image5,
  ]);

  return (
    <DashboardLayout>
      <div className={styles.mov}>
        <h1>Welcome to ABC PVT LTD </h1>

        <ul className={styles.box345}>
          <li>
            <div className={styles.prevpic}>
              <div>
                {product_image1Preview && (
                  <Image
                    src={product_image1Preview}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {product_image2Preview && (
                  <Image
                    src={product_image2Preview}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {product_image3Preview && (
                  <Image
                    src={product_image3Preview}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {product_image4Preview && (
                  <Image
                    src={product_image4Preview}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {product_image5Preview && (
                  <Image
                    src={product_image5Preview}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
            </div>
          </li>

          <form onSubmit={handleLogin}>
            <li>
              <label htmlFor="product_image" className={styles.Omra_Lael}>
                Product Image
              </label>
              <div className={styles.row}>
                <div className="col-md-4">
                  {/* <img src={product_image1} width={200} height={200} alt="sd" /> */}
                  <input
                    type="file"
                    name="product_image"
                    onChange={(e: any) => setProduct_image1(e.target.files[0])}
                  />
                </div>

                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image2"
                    onChange={(e: any) => setProduct_image2(e.target.files[0])}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image3"
                    onChange={(e: any) => setProduct_image3(e.target.files[0])}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image4"
                    onChange={(e: any) => setProduct_image4(e.target.files[0])}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image5"
                    onChange={(e: any) => setProduct_image5(e.target.files[0])}
                  />
                </div>

                <div className="col-md-4">
                  <input type="link" placeholder="Youtube Link" />
                </div>
              </div>
            </li>
            <li>
              <label htmlFor="productname" className={styles.Omra_Lael}>
                Product Name
              </label>

              <input
                type="text"
                name="productname"
                id="productname"
                required
                onChange={(e) => setProduct_name(e.target.value)}
              />
            </li>

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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {category_data?.data.map((item: any, index: any) => {
                  console.log(category);
                  return (
                    <>
                      <option key={index} value={item.category_name}>
                        {item.category_name}
                      </option>
                     
                    </>
                  );
                })}
              </select>
            </li>

            {/* <li>
              <label htmlFor="bussiness_type" className={styles.Omra_Lael}>
                Business Type
              </label>

              <select
                className={styles.dropdown}
                name="bussiness_type"
                value={TypesOf_Bussiness}
                onChange={(e) => setTypesOf_Bussiness(e.target.value)}
              >
                {options1.map((option: any, index: any) => {
                  return(
                    <option key={index} value={option.value}>
                    {option.label}
                  </option>
                  )
                })}
              </select>
            </li> */}

            {/* <li><label htmlFor="brand" className={styles.Omra_Lael} >

              Brand

            </label>

              <input type="text" name="brand" id="brand" onChange={(e) => setCategory(e.target.value)} /></li> */}

            <li>
              <label htmlFor="brand_name" className={styles.Omra_Lael}>
                Brand
              </label>

              <input
                type="text"
                name="brand_name"
                id="brand_name"
                placeholder=" "
                onChange={(e) => setBrand(e.target.value)}
              />

              {/* <input type="text" name="" id="" placeholder="Phone no" />

              <input type="text" name="" id="" placeholder="Address " /> */}
            </li>

            {/* <li>

                <label htmlFor="phone_no" className={styles.Omra_Lael} >

                  Mobile no

                </label>

                <input type="tel" name="phone_no" id="phone_no" placeholder="Phone no. " onChange={(e) => setBrand(e.target.value)} /></li> */}

            {/* <li>

                <label htmlFor="address"  className={styles.Omra_Lael} >

                  Manufacture Address

                </label>

                <input type="text" name="address" id="address" placeholder="Address " onChange={(e) => setManufacturer_address(e.target.value)} /></li> */}

            {/* <li> <label htmlFor="image" className={styles.Omra_Lael} >

                Product Image

              </label>

                <input type={"file"} name="image" onChange={(e: any) => setProduct_image1(e.target?.files[0])} /></li> */}

            <li className="qtyproduct">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="price" className={styles.Omra_Lael}>
                    Product Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="box-input-section"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="" className={styles.Omra_Lael}>
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
              <label htmlFor="description" className={styles.Omra_Lael}>
                Description
              </label>
              <textarea
                rows={9}
                cols={200}
                id="description"
                name="description"
                placeholder="Other Product Specifications "
                onChange={(e) => setProduct_description(e.target.value)}
              />
            </li>

            <h4> Product Specifications</h4>
            <li>
              <label htmlFor="specification" className={styles.Omra_Lael}>
                Specification
              </label>
              <textarea
                rows={9}
                cols={200}
                id="specification"
                name="specification"
                placeholder="Other Product Specifications "
                onChange={(e) => setProduct_Specification(e.target.value)}
              />
            </li>

            <li>
              {" "}
              <label htmlFor="" className={styles.Omra_Lael}>
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
              <label htmlFor="capacity" className={styles.Omra_Lael}>
                Capacity
              </label>
              <input
                type="text"
                name="capacity"
                id="capacity"
                placeholder=""
                className="box-input-textarea"
                onChange={(e) => setCapacity(e.target.value)}
              />
            </li>

            <li>
              {" "}
              <label htmlFor="model_no" className={styles.Omra_Lael}>
                Model No.
              </label>
              <input
                type="text"
                name="model_no"
                id="model_no"
                placeholder=" "
                className="box-input-textarea"
                onChange={(e) => setModel_no(e.target.value)}
              />
            </li>

            {/* <li> */}

            {/* <h4> Additional  Specifications</h4> */}
            {/* <hr/> */}

            {/* </li> */}

            <li className="qtyproduct">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="price" className={styles.Omra_Lael}>
                    Minimum Quantity
                  </label>

                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="box-input-section"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="" className={styles.Omra_Lael}></label>

                  <input
                    type="number"
                    name=""
                    id=""
                    className="box-input-section"
                    placeholder="Enter Unit"
                  />
                </div>
              </div>
            </li>

            <li>
              {" "}
              <label htmlFor="model_no" className={styles.Omra_Lael}>
                Production Capacity
              </label>
              <input
                type="text"
                name="model_no"
                id="model_no"
                placeholder=" "
                className="box-input-textarea"
                onChange={(e) => setModel_no(e.target.value)}
              />
            </li>

            <li>
              {" "}
              <label htmlFor="model_no" className={styles.Omra_Lael}>
                Production code
              </label>
              <input
                type="text"
                name="model_no"
                id="model_no"
                placeholder=" "
                className="box-input-textarea"
                onChange={(e) => setModel_no(e.target.value)}
              />
            </li>

            <li>
              {" "}
              <label htmlFor="model_no" className={styles.Omra_Lael}>
                Delivery Time
              </label>
              <input
                type="text"
                name="model_no"
                id="model_no"
                placeholder=" "
                className="box-input-textarea"
                onChange={(e) => setModel_no(e.target.value)}
              />
            </li>

            <h4> Additional Specifications</h4>
            {additionalSpecification.map((y: any, i: any) => {
              console.log({ attr: y.atribute, values: y.Values });
              return (
                // eslint-disable-next-line react/jsx-key
                <div style={{ display: "flex" }}>
                  <Row key={i}>
                    <Col md="4">
                      <FormGroup>
                        
                        <Input
                          className="inputValuesAttibute"
                          id="atribute"
                          placeholder="Add Atributes"
                          name="atribute"
                          type="text"
                          value={y.atribute}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        
                        <Input
                          className="inputValuesForm"
                          id="Values"
                          placeholder="Add Value"
                          type="text"
                          style={field_color}
                          name="Values"
                          value={y.Values}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </FormGroup>
                    </Col>

                    <Col md="4">
                      <div className="btn-box mt-4">
                        {additionalSpecification.length !== 1 && (
                          <a
                            href=""
                            className="inputValueCancel"
                            onClick={(e) => handleRemoveClick(e, i)}
                          >
                            X
                          </a>
                        )}
                        {additionalSpecification.length - 1 === i && (
                          <a
                            href=""
                            className="btn btn-warning mt-2"
                            onClick={handleAddClick}
                          >
                            <div className="inputValueAddMore"> + ADD MORE</div>
                          </a>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}

            <li className={styles.bottonstyle}>
              {/* <div className={styles.bottonstyle1}>
                {" "}
                <input
                  type="submit"
                  className={styles.UploadButton}
                  value="Add Product"
                  onClick={(e) => alert("uploaded")}
                />
              </div> */}

              <div className={styles.bottonstyle1}>
                {" "}
                <input
                  type="submit"
                  className={styles.UploadButton}
                  onClick={(e) => alert("uploaded")}
                />
              </div>
            </li>
          </form>
        </ul>

        <ul className="formstyle"></ul>
      </div>
    </DashboardLayout>
  );
};

export default Upload_Product;
