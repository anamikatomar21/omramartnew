import React from 'react';

import DashboardLayout from 'components/Merchant/Layout';
import { useGetCategory } from 'networkAPI/queries';
import { NextPage } from 'next';
import Image from 'next/image';
import {
  Col,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';
import styles from 'styles/Merchant/uploadproduct.module.scss';

import useEdit from './useedit';

interface InputWithLabelProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}
interface SelectWithLabelProps
  extends React.ComponentPropsWithoutRef<"select"> {
  label: string;
  data: {
    name: any;
    value: any;
  }[];
}
interface TextAreaWithLabelProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
}

const Upload_Product: NextPage = () => {
  const {
    state,
    onChangeTextField,
    additionalSpecification,
    handleAddClick,
    handleInputChange,
    handleRemoveClick,
    handleUpdateProduct,
    onChangeImage,
  } = useEdit();

  const { data: catData } = useGetCategory();

  const field_color = {
    color: "red",
  };

  return (
    <DashboardLayout>
      <div className={styles.mov}>
        <h1>Welcome to ABC PVT LTD </h1>
        <ul className={styles.box345}>
          <li>
            <div className={styles.prevpic}>
              <div>
                {state.image[0] && (
                  <Image
                    src={URL.createObjectURL(state.image[0])}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {state.image1[0] && (
                  <Image
                    src={URL.createObjectURL(state.image1[0])}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {state.image2[0] && (
                  <Image
                    src={URL.createObjectURL(state.image2[0])}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {state.image3[0] && (
                  <Image
                    src={URL.createObjectURL(state.image3[0])}
                    className={styles.imagestyle2}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div>
                {state.image4[0] && (
                  <Image
                    src={URL.createObjectURL(state.image4[0])}
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
                  <input type="file" name="image" onChange={onChangeImage} />
                </div>
                <div className="col-md-4">
                  <input type="file" name="image1" onChange={onChangeImage} />
                </div>
                <div className="col-md-4">
                  <input type="file" name="image2" onChange={onChangeImage} />
                </div>
                <div className="col-md-4">
                  <input type="file" name="image3" onChange={onChangeImage} />
                </div>
                <div className="col-md-4">
                  <input type="file" name="image4" onChange={onChangeImage} />
                </div>
                {/* YOUTUBE LINK */}
                <div className="col-md-4">
                  <input type="link" placeholder="Youtube Link" />
                </div>
              </div>
            </li>
            <InputWithLabel
              label="Product Name *"
              type="text"
              name="name"
              id="productname"
              required
              value={state.name}
              onChange={onChangeTextField}
            />
            {/*  CATEGORY */}
            <li>
              <SelectWithLabel
                label={"Product Category *"}
                data={catData?.data?.map((d: { category_name: any }) => {
                  return {
                    name: d?.category_name,
                    value: d?.category_name,
                  };
                })}
                name="category"
                className={styles.dropdown}
                value={state.category}
                required
                onChange={onChangeTextField as any}
              />
            </li>
            {/* BRAND NAME */}
            <InputWithLabel
              label="Brand"
              type="text"
              name="brand"
              id="brandname"
              placeholder=" "
              value={state.brand}
              onChange={onChangeTextField}
            />
            {/* PRICE */}
            <InputWithLabel
              label="Price"
              type="number"
              name="price"
              id="price"
              className="box-input-section"
              value={state.price}
              onChange={onChangeTextField}
            />
            <InputWithLabel
              label="Quantity"
              type="text"
              name="quantity"
              id="brand_name"
              placeholder=" "
            />
            <TextAreaWithLabel
              label="Description"
              rows={9}
              cols={200}
              id="description"
              name="productDescription"
              placeholder="Other Product Specifications "
              value={state.productDescription}
              onChange={onChangeTextField as any}
            />
            <h4> Product Specifications</h4>
            <TextAreaWithLabel
              label="Specifications"
              rows={9}
              cols={200}
              id="specification"
              name="productSpecification"
              placeholder="Other Product Specifications "
              value={state.productSpecification}
              onChange={onChangeTextField as any}
            />
            <InputWithLabel
              label="Capacity"
              type="text"
              name="capacity"
              id="Product Capacity"
              placeholder=""
              className="box-input-textarea"
              value={state.capacity}
              onChange={onChangeTextField}
            />
            <InputWithLabel
              label="Model No."
              type="text"
              name="modelNumber"
              id="model_no"
              placeholder=" "
              className="box-input-textarea"
              value={state.modelNumber}
              onChange={onChangeTextField}
            />

            <InputWithLabel
              label="Product code"
              type="text"
              name="productCode"
              id="model_no"
              placeholder=" "
              className="box-input-textarea"
              value={state.productCode}
              onChange={onChangeTextField}
            />
            <InputWithLabel
              label="Delivery Time"
              type="text"
              name="deliveryTime"
              id="model_no"
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
const SelectWithLabel = (props: SelectWithLabelProps) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id} className={styles.Omra_Lael}>
        {props.label}
      </label>
      <select {...props}>
        <option disabled>Select Category</option>
        {props?.data?.map((item: any, index: any) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

const data = [
  {
    id: "",
    type: "text",
    label: "Delivery Time",
    name: "Delivery Time",
  },
];
