import React, {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import DashboardLayout from 'components/Merchant/Layout';
import editSlice from 'context/editslice';
import {
  useGetCategory,
  usePublicProduct,
  useUpdateMerchantProduct,
} from 'networkAPI/queries';
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
import { useAppSelector } from 'redux/hooks';
import { RootState } from 'redux/store';
import styles from 'styles/Merchant/uploadproduct.module.scss';

const Upload_Product: NextPage = () => {
  const _user = (state: RootState) => state.user;
  const { user, isAuthenticated } = useAppSelector(_user);
  const router = useRouter();
  const _Id = router.query.id;

  const { error, data, mutate } = useUpdateMerchantProduct();
  const { data: ShowData } = usePublicProduct();

  // CHECKING USER
  useEffect(() => {
    if (isAuthenticated) {
      if (user.role === "Admin") {
        return;
      }
    } else {
      Router.push(`/`);
    }
  }, [user, isAuthenticated]);

  const { actions, initialState, reducer } = editSlice;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const [previousData, setpd] = useState<any>({});

  React.useEffect(() => {
    const previousData = ShowData?.data.find(
      (updateData: any) => updateData._id === _Id
    );
    setpd(previousData);
  }, [ShowData?.data, _Id]);

  console.log({ previousData });
  React.useEffect(() => {
    dispatch(actions.TypesOf_Bussiness(previousData?.TypesOf_Bussiness));
    dispatch(actions.SubTypeOf_bussiness(previousData?.SubTypeOf_bussiness));
    dispatch(actions.Merchant_Address(previousData?.Merchant_Address));
    dispatch(actions.product_name(previousData?.product_name));
    dispatch(
      actions.manufacturer_phone_no(previousData?.manufacturer_phone_no)
    );
    dispatch(actions.manufacturer_address(previousData?.manufacturer_address));
    dispatch(actions.brand(previousData?.brand));
    dispatch(actions.product_image(previousData?.product_image));
    dispatch(actions.category(previousData?.category));
    dispatch(actions.sub_category(previousData?.sub_category));
    dispatch(actions.product_image1(previousData?.product_image1));
    dispatch(actions.product_image2(previousData?.product_image2));
    dispatch(actions.product_image3(previousData?.product_image3));
    dispatch(actions.product_image4(previousData?.product_image4));
    dispatch(actions.product_image5(previousData?.product_image5));
    dispatch(actions.price(previousData?.price));
    dispatch(
      actions.product_Specification(previousData?.product_Specification)
    );
    dispatch(
      actions.additionalSpecification(previousData?.additionalSpecification)
    );
    dispatch(actions.product_description(previousData?.product_description));
    dispatch(actions.capacity(previousData?.capacity));
    dispatch(actions.model_no(previousData?.model_no));
  }, [
    actions,
    previousData?.Merchant_Address,
    previousData?.SubTypeOf_bussiness,
    previousData?.TypesOf_Bussiness,
    previousData?.additionalSpecification,
    previousData?.brand,
    previousData?.capacity,
    previousData?.category,
    previousData?.manufacturer_address,
    previousData?.manufacturer_phone_no,
    previousData?.model_no,
    previousData?.price,
    previousData?.product_Specification,
    previousData?.product_description,
    previousData?.product_image,
    previousData?.product_image1,
    previousData?.product_image2,
    previousData?.product_image3,
    previousData?.product_image4,
    previousData?.product_image5,
    previousData?.product_name,
    previousData?.sub_category,
  ]);

  const [additionalSpecification, setAdditionalSpecification] = useState<any>([
    {
      atribute: "",
      Values: "",
    },
  ]);

  const {
    Merchant_Address,
    SubTypeOf_bussiness,
    TypesOf_Bussiness,
    brand,
    capacity,
    category,
    manufacturer_address,
    manufacturer_phone_no,
    price,
    product_image,
    product_image1,
    product_description,
    product_image2,
    product_image3,
    product_image4,
    product_image5,
    product_Specification,
    product_name,
    sub_category,
  } = state;

  const [model_no, setModel_no] = useState<string>(previousData?.model_no);

  const [product_image1Preview, setProduct_image1Preview] = useState<any>("");
  const [product_image2Preview, setProduct_image2Preview] = useState<any>("");
  const [product_image3Preview, setProduct_image3Preview] = useState<any>("");
  const [product_image4Preview, setProduct_image4Preview] = useState<any>("");
  const [product_image5Preview, setProduct_image5Preview] = useState<any>("");

  const field_color = {
    color: "red",
  };

  const handleInputChange = (e: any, index: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...additionalSpecification];
    list[index][name] = value;
    setAdditionalSpecification(list);
  };

  const handleRemoveClick = (e: any, index: any) => {
    e.preventDefault();

    const list = [...additionalSpecification];
    list.splice(index, 1);
    setAdditionalSpecification(list);
  };

  const handleAddClick = (e: any) => {
    e.preventDefault();
    setAdditionalSpecification([
      ...additionalSpecification,
      { atribute: "", Values: "" },
    ]);
  };

  const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isConfirm = window.confirm("Are you sure to update this product");
    if (isConfirm) {
      mutate({
        product_name,

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
        id: _Id as string,
        // LATER
        Vendor_Id: "",
        auther_Id: "",
        vendors_name: "",
        isApproved: false,
        videos: "",
      });
    }
  };

  const data2 = useGetCategory();
  const category_data = data2.data;
  useEffect(() => {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || error.message);
    }

    if (data) {
      toast.success("upload Successfull");
      router.push("/onboarding/dashboard/product/AllProduct");
    }
  }, [error, data, router]);

  // useEffect(() => {
  //   // create the preview

  //   if (product_image1) {
  //     const objectUrl = URL.createObjectURL(product_image1);
  //     setProduct_image1Preview(objectUrl);
  //   }

  //   if (product_image2) {
  //     const objectUrl2 = URL.createObjectURL(product_image2);
  //     setProduct_image2Preview(objectUrl2);
  //   }
  //   if (product_image3) {
  //     const objectUrl3 = URL.createObjectURL(product_image3);
  //     setProduct_image3Preview(objectUrl3);
  //   }
  //   if (product_image4) {
  //     const objectUrl4 = URL.createObjectURL(product_image4);
  //     setProduct_image4Preview(objectUrl4);
  //   }
  //   if (product_image5) {
  //     const objectUrl5 = URL.createObjectURL(product_image5);
  //     setProduct_image5Preview(objectUrl5);
  //   }
  // }, [
  //   product_image1,
  //   product_image2,
  //   product_image3,
  //   product_image4,
  //   product_image5,
  // ]);

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
          <form onSubmit={handleUpdateProduct}>
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
                    onChange={(e: any) =>
                      actions.product_image1(e.target.files[0])
                    }
                  />
                </div>

                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image2"
                    onChange={(e: any) =>
                      actions.product_image2(e.target.files[0])
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image3"
                    onChange={(e: any) =>
                      actions.product_image3(e.target.files[0])
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image4"
                    onChange={(e: any) =>
                      actions.product_image4(e.target.files[0])
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    name="product_image5"
                    onChange={(e: any) =>
                      actions.product_image5(e.target.files[0])
                    }
                  />
                </div>
                <div className="col-md-4">
                  <input type="link" placeholder="Youtube Link" />
                </div>
              </div>
            </li>
            <InputWithLabel
              label="Product Name *"
              type="text"
              name="productname"
              id="productname"
              value={product_name}
              required
              onChange={(e) => actions.product_name(e.target.value)}
            />
            {/*  CATEGORY */}
            <li>
              <label htmlFor="category" className={styles.Omra_Lael}>
                Product Category *
              </label>
              <select
                name="category"
                className={styles.dropdown}
                value={category}
                required
                onChange={(e) => actions.category(e.target.value)}
              >
                <option value="">Select Category</option>
                {category_data?.data.map((item: any, index: any) => {
                  return (
                    <option key={index} value={item.category_name}>
                      {item.category_name}
                    </option>
                  );
                })}
              </select>
            </li>
            {/* BRAND NAME */}
            <InputWithLabel
              label="Brand"
              type="text"
              name="brand_name"
              id="brand_name"
              value={brand}
              placeholder=" "
              onChange={(e) => actions.brand(e.target.value)}
            />
            {/* PRICE */}
            {/* <li className="qtyproduct">
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
                    value={price}
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
            </li> */}
            <InputWithLabel
              label="Price"
              type="number"
              name="price"
              id="price"
              className="box-input-section"
              value={price}
              onChange={(e) => actions.price(e.target.value)}
            />
            <InputWithLabel
              label="Quantity"
              type="text"
              name="brand_name"
              id="brand_name"
              value={brand}
              placeholder=" "
            />
            <TextAreaWithLabel
              label="Description"
              rows={9}
              cols={200}
              id="description"
              name="description"
              placeholder="Other Product Specifications "
              value={product_description}
              onChange={(e) => actions.product_description(e.target.value)}
            />
            <h4> Product Specifications</h4>
            <TextAreaWithLabel
              label="Specifications"
              rows={9}
              cols={200}
              id="specification"
              name="specification"
              placeholder="Other Product Specifications "
              value={product_Specification}
              onChange={(e) => actions.product_Specification(e.target.value)}
            />
            <InputWithLabel
              label="Capacity"
              type="text"
              name="capacity"
              id="capacity"
              placeholder=""
              className="box-input-textarea"
              value={capacity}
              onChange={(e) => actions.capacity(e.target.value)}
            />
            {/* <li>
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
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </li> */}
            <InputWithLabel
              label=" Model No."
              type="text"
              name="model_no"
              id="model_no"
              placeholder=" "
              className="box-input-textarea"
              value={model_no}
              onChange={(e) => setModel_no(e.target.value)}
            />

            <InputWithLabel
              label="Product code"
              type="text"
              name="model_no"
              id="model_no"
              placeholder=" "
              className="box-input-textarea"
              onChange={(e) => actions.model_no(e.target.value)}
            />
            <InputWithLabel
              label="Delivery Time"
              type="text"
              name="model_no"
              id="model_no"
              placeholder=" "
              className="box-input-textarea"
            />

            <h4> Additional Specifications</h4>
            {additionalSpecification.map((PreviewData: any, index: any) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <Row key={index}>
                    <Col md="4">
                      <FormGroup>
                        <Input
                          className="inputValuesAttibute"
                          id="atribute"
                          placeholder="Add Atributes"
                          name="atribute"
                          type="text"
                          value={PreviewData.atribute}
                          onChange={(e) => handleInputChange(e, index)}
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
                          value={PreviewData.Values}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      </FormGroup>
                    </Col>

                    <Col md="4">
                      <div className="btn-box mt-4">
                        {additionalSpecification.length !== 1 && (
                          <a
                            href=""
                            className="inputValueCancel"
                            onClick={(e) => handleRemoveClick(e, index)}
                          >
                            ⨉
                          </a>
                        )}
                        {additionalSpecification.length - 1 === index && (
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
              <div className={styles.bottonstyle1}>
                <input type="submit" className={styles.UploadButton} />
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

interface InputWithLabelProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}
const InputWithLabel = (props: InputWithLabelProps) => {
  return (
    <li>
      <label htmlFor={props.id} className={styles.Omra_Lael}>
        {props.label}
      </label>
      <input {...props} />
    </li>
  );
};
interface TextAreaWithLabelProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
}
const TextAreaWithLabel = (props: TextAreaWithLabelProps) => {
  return (
    <li>
      <label htmlFor={props.id} className={styles.Omra_Lael}>
        {props.label}
      </label>
      <textarea {...props}></textarea>
    </li>
  );
};
