import * as Yup from 'yup';

export const messageMe1Validations = Yup.object().shape({
  Merchant_Name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(200, "Name must be less than 50 characters")
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
    .max(200, "Name must be less than 50 characters")
    ,
   

    Merchant_Designation: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(200, "Name must be less than 50 characters")
    .required("Required"),

    Year_of_establishment: Yup.string()
    // .positive().integer()
    .min(4, "Year must be 4- digit")
    .max(4, "Year must be 4- digit")
    
    .required("Required"),

    GST_No: Yup.string()
    .matches(
      /^([a-zA-Z0-9 _-]+)$/,
      "enter Alpha Numneric value"
     
    )
    .min(15, "GST must be  15 Alpha Numneric value")
    .max(15, "GST must be 15 Alpha Numneric value")
    .required("Required"),

    PAN_No:Yup.string()
    .matches(
      /^([a-zA-Z0-9 _-]+)$/,
      "enter Alpha Numneric value"
     
    )
    .min(10, "PAN must be  10 Alpha Numneric value")
    .max(10, "PAN must be 10 Alpha Numneric value")
    

   

 

  
});


export const companyProfileValidationSchema = Yup.object().shape({
  company_Name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Required"),

    description: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(500, "Name must be less than 500 characters")
    .required("Required"),

});