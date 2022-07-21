import {
  useMutation,
  useQuery,
} from 'react-query';

import {
  bannersImages,
  Category,
  companyProfle,
  CustomerQuery,
  getApprovalProduct,
  getBannerImages,
  getBussinessDetails,
  getbussinessDetaisById,
  getBuyerQuery,
  getCategory,
  getCompnyProfile,
  getHomeCategory,
  getMerchantCredentials,
  getProductById,
  getProducts,
  getProductsBycategory,
  getPublicProduct,
  getSubCategory,
  login,
  register,
  sellProduct,
  sendEmail,
  subCategory,
  updateBannerImage,
  updateCategory,
  updateDeclineProduct,
  updateProduct,
  updateSellerProduct,
  updatesubCategory,
  UserDetails,
} from './api';
import {
  bannerImages,
  bannerImagesUpdate,
  CustomerQueryType,
  Login,
  productCategory,
  productSubCategory,
  productUpdateSubCategoryType,
  Register,
  updateCategoryType,
  UserDetail,
  UserProduct,
  userProductForDeclined,
  userProductForUpdate,
  UserProductType,
  userProfile,
} from './types';

export const useLogin = () =>
  useMutation(
    ({ email, password }: Login): Promise<Object> => login(email, password)
  );

export const useRegister = () =>
  useMutation(
    ({ email, password, role }: Register): Promise<Object> =>
      register(email, password, role)
  );
export const useUserDetails = () =>
  useMutation(
    ({
      Merchant_Name,
      Merchant_Address,
      TypesOf_Bussiness,
      SubTypeOf_bussiness,
      Merchant_Designation,
      Year_of_establishment,
      GST_No,
      PAN_No,
    }: UserDetail): Promise<Object> =>
      UserDetails(
        Merchant_Name,
        Merchant_Address,
        TypesOf_Bussiness,
        SubTypeOf_bussiness,
        Merchant_Designation,
        Year_of_establishment,
        GST_No,
        PAN_No
      )
  );

export const useCompanyProfile = () =>
  useMutation(
    ({ company_Name, description }: userProfile): Promise<Object> =>
      companyProfle(company_Name, description)
  );

// eslint-disable-next-line react-hooks/rules-of-hooks
export const userProduct = () =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useMutation(
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
      additionalSpecification,
      product_description,
      capacity,
      model_no,
      videos,
    }: UserProduct): Promise<Object> =>
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
        additionalSpecification,
        product_description,
        capacity,
        model_no,
        videos
      )
  );
// for Update Product By Merchant
export const useUpdateMerchantProduct = () =>
  useMutation(
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
      additionalSpecification,
      product_description,
      capacity,
      model_no,
      videos,
      id,
    }: UserProductType): Promise<Object> =>
      updateSellerProduct(
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
        additionalSpecification,
        product_description,
        capacity,
        model_no,
        videos,
        id
      )
  );
/// for Product Approval
export const useApprovedProduct = () =>
  useMutation(
    ({ isApproved, id }: userProductForUpdate): Promise<Object> =>
      updateProduct(isApproved, id)
  );

export const useDeclinedProduct = () =>
  useMutation(
    ({ isDeclined, status, id }: userProductForDeclined): Promise<Object> =>
      updateDeclineProduct(isDeclined, status, id)
  );

export const useCategory = () =>
  useMutation(
    ({ category_name, category_image }: productCategory): Promise<Object> =>
      Category(category_name, category_image)
  );

export const useUpdateCategory = () =>
  useMutation(
    ({
      category_name,
      category_image,
      id,
    }: updateCategoryType): Promise<Object> =>
      updateCategory(category_name, category_image, id)
  );

// SubCategory ============================
export const useSubCategory = () =>
  useMutation(
    ({
      category_Id,
      category_name,

      sub_category_name,
      sub_category_image,
    }: productSubCategory): Promise<Object> =>
      subCategory(
        category_Id,
        category_name,

        sub_category_name,
        sub_category_image
      )
  );

export const useUpdateSubCategory = () =>
  useMutation(
    ({
      category_Id,
      category_name,

      sub_category_name,
      sub_category_image,
      id,
    }: productUpdateSubCategoryType): Promise<Object> =>
      updatesubCategory(
        category_Id,
        category_name,
        sub_category_name,
        sub_category_image,
        id
      )
  );

export const useBanner = () =>
  useMutation(
    ({
      banner_name,
      type,
      banner_image1,
      banner_image2,
      banner_image3,
      banner_image4,
    }: bannerImages): Promise<Object> =>
      bannersImages(
        banner_name,
        type,
        banner_image1,
        banner_image2,
        banner_image3,
        banner_image4
      )
  );

export const useUpdateBanner = () => useMutation(
  ({ banner_image1,
    banner_image2,
    banner_image3,
    banner_image4,
    id }: bannerImagesUpdate): Promise<Object> =>
    updateBannerImage(
      banner_image1,
      banner_image2,
      banner_image3,
      banner_image4,
      id)
);


//  customer Query

export const useCustomerQuery = () => useMutation(
  ({
    merchant_Id,
    product_Id,
    buyer_Email,
    buyer_Mob


  }: CustomerQueryType): Promise<Object> =>
    CustomerQuery(
      merchant_Id,
      product_Id,
      buyer_Email,
      buyer_Mob
    ))

export const useBuyerQuery = () => useQuery("buyerQuery", getBuyerQuery)
export const useProductsByCategory = (category: string) => useQuery(["products", category], () => getProductsBycategory(category));
export const useProducts = () => useQuery("products", getProducts);
export const useGetCompanyProfile = () => useQuery("companyprofile", getCompnyProfile)
export const useGetBussinessDetails = () => useQuery("getBussinessDetails", getBussinessDetails)
export const useGetMerchantDetails = () => useQuery("getUser", getMerchantCredentials)
export const usePublicProduct = () => useQuery("product", getPublicProduct)
export const useProductForApproval = () => useQuery("product", getApprovalProduct)
export const useGetCategory = () => useQuery("category", getCategory)
export const useGetSubCategory = () => useQuery("subcategory", getSubCategory)
export const useGetHomeCategory = () => useQuery("category", getHomeCategory)
export const useGetProductById = (id: string) =>
  useQuery("myself", (): Promise<any> => getProductById(id));

export const useGetBussinessById = (id: string) =>
  useQuery("myself1", (): Promise<any> => getbussinessDetaisById(id));

export const useGetBanner = () => useQuery("banner", getBannerImages);

export const useSendEmail = () =>
  useMutation(({ merchantId, email, phoneNumber, description }: any) =>
    sendEmail({ merchantId, email, phoneNumber, description })
  );

// product filter
// vendor filter
