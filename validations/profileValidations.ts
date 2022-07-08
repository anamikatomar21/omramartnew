import * as Yup from 'yup';

export const messageMe1Validations = Yup.object().shape({
  Merchant_Name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),

    Merchant_Address: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(200, "Name must be less than 50 characters")
    .required("Required"),

    TypesOf_Bussiness: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(200, "Name must be less than 50 characters")
    .required("Required"),



    SubTypeOf_bussiness: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 50 characters")
    ,
   

    Merchant_Designation: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name must be less than 50 characters")
    .required("Required"),

    Year_of_establishment: Yup.string()
    .min(4, "Name must be at least 3 characters")
    .max(5, "Name must be less than 50 characters")
    .required("Required"),

    GST_No: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),

    PAN_No:Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),

   

 

  
});


export const companyProfileValidationSchema = Yup.object().shape({
  company_Name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),

    description: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(500, "Name must be less than 50 characters")
    .required("Required"),

});