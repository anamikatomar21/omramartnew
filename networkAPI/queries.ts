import {
  useMutation,
  useQuery,
} from 'react-query';

import {
  Category,
  companyProfle,
  getApprovalProduct,
  getBussinessDetails,
  getCategory,
  getCompnyProfile,
  getProductById,
  getProducts,
  getPublicProduct,
  login,
  register,
  sellProduct,
  updateProduct,
  UserDetails,
} from './api';
import {
  Login,
  productCategory,
  Register,
  UserDetail,
  UserProduct,
  userProductForUpdate,
  userProfile,
} from './types';

export const useLogin = ()=> useMutation(
    ({ email, password }:Login): Promise<Object> =>
      login(email, password)
  );

export const useRegister = ()=> useMutation(
    ({ email, password ,role}:Register): Promise<Object> =>
      register(email, password,role)
  );
export const useUserDetails = () => useMutation(
  ({ Merchant_Name, Merchant_Address,TypesOf_Bussiness,SubTypeOf_bussiness,Merchant_Designation,Year_of_establishment,GST_No,PAN_No }:UserDetail): Promise<Object> =>
  UserDetails(Merchant_Name, Merchant_Address,TypesOf_Bussiness,SubTypeOf_bussiness,Merchant_Designation,Year_of_establishment,GST_No,PAN_No)
);


export const useCompanyProfile = () => useMutation(
  ({company_Name,description}:userProfile):Promise<Object> => 
  companyProfle(company_Name, description)

)

// eslint-disable-next-line react-hooks/rules-of-hooks
export const userProduct = () => useMutation(
  ({
    Vendor_Id,
      auther_Id,
      vendors_name,
    product_name,
    TypesOf_Bussiness,
    manufacturer_phone_no,
    manufacturer_address,
    brand,
    product_image1,
  
    category,

    price,
    product_Specification,
    inputList,
    product_description,
    capacity,
    model_no,
    videos
  }:UserProduct):Promise<Object> => 
  sellProduct(
    Vendor_Id,
    auther_Id,
    vendors_name,
  product_name,
  TypesOf_Bussiness,
  manufacturer_phone_no,
  manufacturer_address,
  brand,
  product_image1,

  category,
  price,
  product_Specification,
  inputList,
  product_description,
  capacity,
  model_no,
  videos
  )

)

export const useUpdateProduct = () => useMutation(
  ({ isApproved ,id}:userProductForUpdate): Promise<Object> =>
  updateProduct(isApproved,id)
);


export const useCategory = () => useMutation(
  ({
    category_name,
    category_image
  
    

    
  }:productCategory):Promise<Object> => 
  Category(
    
 
  category_name,
  category_image

  
 
  )

)

export const useProducts = () => useQuery("products",getProducts);
export const useGetCompanyProfile =() => useQuery("companyprofile",getCompnyProfile)
export const useGetBussinessDetails = () => useQuery("getBussinessDetails", getBussinessDetails)
export const usePublicProduct = () => useQuery("product",getPublicProduct)
export const useProductForApproval = () => useQuery("product",getApprovalProduct)
export const useGetCategory = () => useQuery("category",getCategory)
export const useGetProductById= (id:string) =>
  useQuery("myself", (): Promise<any> => getProductById(id));