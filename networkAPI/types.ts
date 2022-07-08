export interface Authentication {
    token:string
}
export type Login = {
    email: string;
    password: string;
    
  };

  export type Register = {
    email: string;
    password: string;
    role:string;
  };



export type UserDetail = {
    Merchant_Name: string;
    Merchant_Address: string;
    TypesOf_Bussiness:string;
    SubTypeOf_bussiness:string;
    Merchant_Designation:string;
    Year_of_establishment:string;
    GST_No:string;
    PAN_No:string;
};

export type userProfile = {
    company_Name: string;
    description:string
}

export type UserProduct = {
    Vendor_Id: string;
    auther_Id: string;
    vendors_name:string;
   
    
    product_name:string;
    TypesOf_Bussiness:string;
    manufacturer_phone_no:string;
    manufacturer_address:string;
    brand:string;
    inputList:any;
    isApproved:boolean;
    
    product_image1:Blob;
    category:string;
    price:string;
    product_Specification:string;
    product_description:string;
    capacity:string;
    model_no:string;
    videos:string;
};
export type userProductForUpdate={
    isApproved:boolean;
    id:string
}

export type productCategory={
    category_name:string,
    category_image:Blob


}