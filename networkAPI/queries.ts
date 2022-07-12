import {
  useMutation,
  useQuery,
} from 'react-query';

import {
  bannersImages,
  Category,
  companyProfle,
  getApprovalProduct,
  getBannerImages,
  getBussinessDetails,
  getCategory,
  getCompnyProfile,
  getHomeCategory,
  getMerchantCredentials,
  getProductById,
  getProducts,
  getProductsBycategory,
  getPublicProduct,
  login,
  register,
  sellProduct,
  sendEmail,
  updateBannerImage,
  updateCategory,
  updateDeclineProduct,
  updateProduct,
  UserDetails,
} from './api';
import {
  bannerImages,
  bannerImagesUpdate,
  Login,
  productCategory,
  Register,
  updateCategoryType,
  UserDetail,
  UserProduct,
  userProductForDeclined,
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
    product_image2,
    product_image3,
    product_image4,
    product_image5,
  
    category,
    sub_category,

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
  product_image2,
  product_image3,
  product_image4,
  product_image5,

  category,
  sub_category,
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

export const useDeclinedProduct = () => useMutation(
  ({ isDeclined,status ,id}:userProductForDeclined): Promise<Object> =>
  updateDeclineProduct(isDeclined,status,id)
);



export const useCategory = () => useMutation(
  ({
    category_name,
    category_image 
  }:productCategory):Promise<Object> => 
  Category(
  category_name,
  category_image
))

export const useUpdateCategory = () => useMutation(
  ({ 
    category_name,
    category_image ,
    id
  }:updateCategoryType): Promise<Object> =>
  updateCategory(
    category_name,
    category_image ,
    id)
);

export const useBanner = () => useMutation(
  ({
    banner_name,
    type,
    banner_image1,
    banner_image2,
    banner_image3,
    banner_image4,
  }:bannerImages):Promise<Object> => 
  bannersImages(
    banner_name,
    type,
    banner_image1,
    banner_image2,
    banner_image3,
    banner_image4,
))

export const useUpdateBanner = () => useMutation(
  ({  banner_image1,
    banner_image2,
    banner_image3,
    banner_image4,
    id}:bannerImagesUpdate): Promise<Object> =>
  updateBannerImage(
    banner_image1,
    banner_image2,
    banner_image3,
    banner_image4,
    id)
);
export const useProductsByCategory = (category:string) => useQuery(["products",category],()=>getProductsBycategory(category));
export const useProducts = () => useQuery("products",getProducts);
export const useGetCompanyProfile =() => useQuery("companyprofile",getCompnyProfile)
export const useGetBussinessDetails = () => useQuery("getBussinessDetails", getBussinessDetails)
export const useGetMerchantDetails  = () => useQuery("getUser", getMerchantCredentials)
export const usePublicProduct = () => useQuery("product",getPublicProduct)
export const useProductForApproval = () => useQuery("product",getApprovalProduct)
export const useGetCategory = () => useQuery("category",getCategory)
export const useGetHomeCategory = () => useQuery("category",getHomeCategory)
export const useGetProductById= (id:string) =>
  useQuery("myself", (): Promise<any> => getProductById(id));

export const useGetBanner = () =>useQuery('banner',getBannerImages)

export const useSendEmail = () => useMutation(({merchantId,email,phoneNumber,description}:any)=>
      sendEmail({merchantId,email,phoneNumber,description})
)

// product filter
// vendor filter