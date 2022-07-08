import axios from './axios';
import {
  Authentication,
  UserDetail,
  UserProduct,
  userProductForUpdate,
  userProfile,
} from './types';

export const login = (email: string, password: string): Promise<string> =>
  axios
    .post<Authentication>("/api/login", { email, password })
    .then((response) => response.data.token);

export const register = (
  email: string,
  password: string,
  role: string
): Promise<string> =>
  axios
    .post<Authentication>("/api/signup", { email, password, role })
    .then((response) => response.data.token);

export const UserDetails = (
  Merchant_Name: string,
  Merchant_Address: string,
  TypesOf_Bussiness: string,
  SubTypeOf_bussiness: string,
  Merchant_Designation: string,
  Year_of_establishment: string,
  GST_No: string,
  PAN_No: string
): Promise<Object> =>
  axios
    .patch<UserDetail>("/api/user/details", {
      Merchant_Name,
      Merchant_Address,
      TypesOf_Bussiness,
      SubTypeOf_bussiness,
      Merchant_Designation,
      Year_of_establishment,
      GST_No,
      PAN_No,
    })
    .then((response) => response.data);

export const companyProfle = (
  company_Name: string,
  description: string
): Promise<Object> =>
  axios
    .patch<userProfile>("/api/user/companyprofile", {
      company_Name,
      description,
    })
    .then((response) => response.data);

export const sellProduct = (
  Vendor_Id: string,
  auther_Id: string,
  vendors_name: string,
  product_name: string,
  TypesOf_Bussiness: string,
  manufacturer_phone_no: string,
  manufacturer_address: string,
  brand: string,
  product_image1: Blob,
  category: string,
  price: string,
  product_Specification: string,
  inputList:any,
  product_description: string,
  capacity: string,
  model_no: string,
  videos: string
): Promise<Object> => {
  const formData = new FormData();
  formData.append("Vendor_Id", Vendor_Id);
  formData.append("auther_Id", auther_Id);
  formData.append("vendors_name", vendors_name);
  formData.append("product_name", product_name);
  formData.append("TypesOf_Bussiness", TypesOf_Bussiness);
  formData.append("manufacturer_phone_no", manufacturer_phone_no);
  formData.append("manufacturer_address", manufacturer_address);
  formData.append("brand", brand);
  formData.append("product_image1", product_image1);
  formData.append("category", category);
  formData.append("price", price);
  formData.append("product_Specification", product_Specification);
  formData.append("inputList",inputList);
  formData.append("product_description", product_description);
  formData.append("capacity", capacity);
  formData.append("model_no", model_no);
  formData.append("videos", videos);

  return axios
    .post<UserProduct>("/api/user/upload_product", formData)
    .then((response) => response.data);
};

// for update product
export const updateProduct = (
  isApproved: boolean,
  id:string
  
): Promise<Object> =>
  axios
    .patch<userProductForUpdate>(`/api/user/update_product/${id}`, {
      isApproved      
    })
    .then((response) => response.data);




// axios.get<UserProduct>("/api/user/upload_product",{

// })
// .then(
//   (response)=> response.data
// )
export const getProducts = () => axios.get<any>("/api/user/get_products");
export const getCompnyProfile =() => axios.get<any>("/api/user/companyprofile")
export const getBussinessDetails =() => axios.get<any>("/api/user/details")

export const getPublicProduct = () => axios.get<any>('/api/get_products')
export const getApprovalProduct = () => axios.get<any>('/api/get_products_count')

export const getProductById= (id:string): Promise<any> =>
  axios
    .get<any>(`api/user/get_product/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });











    export const Category = (
      category_name:string,
    
      category_image: Blob
      
    ): Promise<Object> => {
      const formData = new FormData();
      formData.append("category_name", category_name);
     
      formData.append("category_image", category_image);
      
    
      return axios
        .post<UserProduct>("/api/category/upload", formData)
        .then((response) => response.data);
    };

    export const getCategory = () => axios.get<any>("/api/category/get_category");