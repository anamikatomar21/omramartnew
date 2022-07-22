import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import editSlice from 'context/editslice';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAppSelector } from 'redux/hooks';
import { RootState } from 'redux/store';
import { useUpdateMerchantProduct, usePublicProduct, useGetCategory, } from 'networkAPI/queries';


type E = React.ChangeEvent<HTMLInputElement>

const useEdit = () => {
    // GLOBAL STATE
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
            router.push(`/`);
        }
    }, [user, isAuthenticated, router]);

    const { actions: { inputField }, initialState, reducer } = editSlice;
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const previousData = ShowData?.data.find(
        (updateData: any) => updateData._id === _Id
    )


    console.log(previousData);

    // INITIALIZE VALUES
    React.useEffect(() => {
        dispatch(inputField('name', previousData?.product_name));
        dispatch(inputField('category', previousData?.category));
        dispatch(inputField('brand', previousData?.brand));
        dispatch(inputField('price', previousData?.price));
        dispatch(inputField('quantity', previousData?.brand));
        dispatch(inputField('productDescription', previousData?.product_description));
        dispatch(inputField('productSpecification', previousData?.product_Specification));
        dispatch(inputField('capacity', previousData?.capacity));
        dispatch(inputField('modelNumber', previousData?.model_no));
        // dispatch(inputField('productCode', previousData?.brand));
        // dispatch(inputField('deliveryTime', previousData?.brand));

    }, [inputField, previousData?.brand, previousData?.capacity, previousData?.category, previousData?.model_no, previousData?.price, previousData?.product_Specification, previousData?.product_description, previousData?.product_name]);


    const [additionalSpecification, setAdditionalSpecification] = useState<any>([
        {
            atribute: "",
            Values: "",
        },
    ]);


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

    const handleUpdateProduct = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isConfirm = window.confirm("Are you sure to update this product");
        if (isConfirm) {
            mutate({
                product_name: state.name,
                TypesOf_Bussiness: state.typesOfBussiness,
                manufacturer_phone_no: state.manufacturerPhone,
                manufacturer_address: state.manufacturerAddress,
                brand: state.brand,
                product_image1: state.image[0] as any,
                product_image2: state.image1[0] as any,
                product_image3: state.image2[0] as any,
                product_image4: state.image3[0] as any,
                product_image5: state.image4[0] as any,
                category: state.category,
                sub_category: state.subCategory,
                price: state.price,
                additionalSpecification: state.additionalSpecification as any,
                product_Specification: state.productSpecification,
                product_description: state.productDescription,
                capacity: state.capacity,
                model_no: state.modelNumber,
                id: _Id as string,
                // LATER
                Vendor_Id: "",
                auther_Id: "",
                vendors_name: "",
                isApproved: false,
                videos: "",
            });
        }
    }, [_Id, mutate, state.additionalSpecification, state.brand, state.capacity, state.category, state.image, state.image1, state.image2, state.image3, state.image4, state.manufacturerAddress, state.manufacturerPhone, state.modelNumber, state.name, state.price, state.productDescription, state.productSpecification, state.subCategory, state.typesOfBussiness])




    console.log(state.name);
    useEffect(() => {
        if (error instanceof AxiosError) {
            toast.error(error?.response?.data?.message || error.message);
        }
        if (data) {
            toast.success("upload Successfull");
            router.push("/onboarding/dashboard/product/AllProduct");
        }
    }, [error, data, router]);



    const onChangeTextField = React.useCallback(
        (event: E) => {
            dispatch(inputField(event.target.name, event.target.value));
        },
        [inputField]
    );
    const onChangeImage = React.useCallback(
        (event: E) => {
            if (event.target) {
                const file = event.target.files
                if (file) {
                    // const objectURL = URL.createObjectURL(file[0])
                    // console.log(objectURL);
                    dispatch(inputField(event.target.name, file));
                }
            }
        },
        [inputField]
    );

    return {
        state,
        onChangeTextField,
        additionalSpecification,
        handleInputChange,
        handleRemoveClick,
        handleAddClick,
        handleUpdateProduct,
        onChangeImage
    }

}
export default useEdit;




// const {
//     Merchant_Address,
//     SubTypeOf_bussiness,
//     TypesOf_Bussiness,
//     brand,
//     capacity,
//     category,
//     manufacturer_address,
//     manufacturer_phone_no,
//     price,
//     product_image,
//     product_image1,
//     product_description,
//     product_image2,
//     product_image3,
//     product_image4,
//     product_image5,
//     product_Specification,
//     product_name,
//     sub_category,
// } = state;


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
// Return Values


const dummy = {
    "isApproved": false,
    "_id": "62d79a5608372452c74bbe69",
    "Vendor_Id": "dddddddddddds32",
    "auther_Id": "62cd47c5a29f6fece41d354e",
    "vendors_name": "Sahil mishra",
    "TypesOf_Bussiness": "Retailer",
    "SubTypeOf_bussiness": "dfdsf",
    "Merchant_Address": "sdf",
    "product_name": "NEERAJ KUMAR",
    "manufacturer_phone_no": "undefined",
    "manufacturer_address": "undefined",
    "brand": "undefined",
    "product_image": [],
    "category": "Chemical & Detergent ",
    "sub_category": "undefined",
    "product_image1": [],
    "product_image2": [],
    "product_image3": [],
    "product_image4": [],
    "product_image5": [],
    "price": "undefined",
    "product_Specification": "undefined",
    "additionalSpecification": [
        {
            "atribute": "",
            "Values": ""
        }
    ],
    "product_description": "undefined",
    "capacity": "undefined",
    "model_no": "undefined",
    "isDeclined": false,
    "createdAt": "2022-07-20T06:01:58.536Z",
    "updatedAt": "2022-07-21T15:00:39.360Z",
    "__v": 0
}