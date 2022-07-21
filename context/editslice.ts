
const actionTypes = {
    TYPESOF_BUSSINESS: "TYPESOF_BUSSINESS",
    SUBTYPEOF_BUSSINESS: "SUBTYPEOF_BUSSINESS",
    MERCHANT_ADDRESS: "MERCHANT_ADDRESS",
    PRODUCT_NAME: "PRODUCT_NAME",
    MANUFACTURER_PHONE_NO: "MANUFACTURER_PHONE_NO",
    MANUFACTURER_ADDRESS: "MANUFACTURER_ADDRESS",
    BRAND: "BRAND",
    PRODUCT_IMAGE: "PRODUCT_IMAGE",
    CATEGORY: "CATEGORY",
    SUB_CATEGORY: "SUB_CATEGORY",
    PRODUCT_IMAGE1: "PRODUCT_IMAGE1",
    PRODUCT_IMAGE2: "PRODUCT_IMAGE2",
    PRODUCT_IMAGE3: "PRODUCT_IMAGE3",
    PRODUCT_IMAGE4: "PRODUCT_IMAGE4",
    PRODUCT_IMAGE5: "PRODUCT_IMAGE5",
    PRICE: "PRICE",
    PRODUCT_SPECIFICATION: "PRODUCT_SPECIFICATION",
    ADDITIONALSPECIFICATION: "ADDITIONALSPECIFICATION",
    PRODUCT_DESCRIPTION: "PRODUCT_DESCRIPTION",
    CAPACITY: "CAPACITY",
    MODEL_NO: "MODEL_NO",

}

const { ADDITIONALSPECIFICATION, BRAND, CAPACITY, CATEGORY, MANUFACTURER_ADDRESS, MANUFACTURER_PHONE_NO, MERCHANT_ADDRESS, MODEL_NO, PRICE, PRODUCT_DESCRIPTION, PRODUCT_IMAGE, PRODUCT_IMAGE1, PRODUCT_IMAGE2, PRODUCT_IMAGE3, PRODUCT_IMAGE4, PRODUCT_IMAGE5, PRODUCT_NAME, PRODUCT_SPECIFICATION, SUBTYPEOF_BUSSINESS, SUB_CATEGORY, TYPESOF_BUSSINESS, } = actionTypes


const init = {
    TypesOf_Bussiness: "",
    SubTypeOf_bussiness: "",
    Merchant_Address: "",
    product_name: "",
    manufacturer_phone_no: "",
    manufacturer_address: "",
    brand: "",
    product_image: [],
    category: "",
    sub_category: "",
    product_image1: [],
    product_image2: [],
    product_image3: [],
    product_image4: [],
    product_image5: [],
    price: "",
    product_Specification: "",
    additionalSpecification: [],
    product_description: "",
    capacity: "",
    model_no: "",
};


interface ActionTypes {
    type: string;
    payload: any;
    [key: string]: any;
}
interface StateType {
    TypesOf_Bussiness: string;
    SubTypeOf_bussiness: string;
    Merchant_Address: string;
    product_name: string;
    manufacturer_phone_no: string;
    manufacturer_address: string;
    brand: string;
    product_image: any[];
    category: string;
    sub_category: string;
    product_image1: any[];
    product_image2: any[];
    product_image3: any[];
    product_image4: any[];
    product_image5: any[];
    price: string;
    product_Specification: string;
    additionalSpecification: any[];
    product_description: string;
    capacity: string;
    model_no: string;
}
const editSlice = {
    initialState: init as StateType,
    reducer: (state: StateType, action: ActionTypes) => {
        switch (action.type) {
            case TYPESOF_BUSSINESS:
                return {
                    ...state,
                    TypesOf_Bussiness: action.payload,
                };
            case SUBTYPEOF_BUSSINESS:
                return {
                    ...state,
                    SubTypeOf_bussiness: action.payload,
                };
            case MERCHANT_ADDRESS:
                return {
                    ...state,
                    Merchant_Address: action.payload,
                };
            case PRODUCT_NAME:
                return {
                    ...state,
                    product_name: action.payload,
                };
            case MANUFACTURER_PHONE_NO:
                return {
                    ...state,
                    manufacturer_phone_no: action.payload,
                };
            case MANUFACTURER_ADDRESS:
                return {
                    ...state,
                    manufacturer_address: action.payload,
                };
            case BRAND:
                return {
                    ...state,
                    brand: action.payload,
                };
            case PRODUCT_IMAGE:
                return {
                    ...state,
                    product_image: action.payload,
                };
            case CATEGORY:
                return {
                    ...state,
                    category: action.payload,
                };
            case SUB_CATEGORY:
                return {
                    ...state,
                    sub_category: action.payload,
                };
            case PRODUCT_IMAGE1:
                return {
                    ...state,
                    product_image1: action.payload,
                };
            case PRODUCT_IMAGE2:
                return {
                    ...state,
                    product_image2: action.payload,
                };
            case PRODUCT_IMAGE3:
                return {
                    ...state,
                    product_image3: action.payload,
                };
            case PRODUCT_IMAGE4:
                return {
                    ...state,
                    product_image4: action.payload,
                };
            case PRODUCT_IMAGE5:
                return {
                    ...state,
                    product_image5: action.payload,
                };
            case PRICE:
                return {
                    ...state,
                    price: action.payload,
                };
            case PRODUCT_SPECIFICATION:
                return {
                    ...state,
                    product_Specification: action.payload,
                };
            case ADDITIONALSPECIFICATION:
                return {
                    ...state,
                    additionalSpecification: action.payload,
                };
            case PRODUCT_DESCRIPTION:
                return {
                    ...state,
                    product_description: action.payload,
                };
            case CAPACITY:
                return {
                    ...state,
                    capacity: action.payload,
                };
            case MODEL_NO:
                return {
                    ...state,
                    model_no: action.payload,
                };
            default:
                return state;
        }
    },

    actions: {
        TypesOf_Bussiness: (payload: any) => ({ type: TYPESOF_BUSSINESS, payload: payload }),
        SubTypeOf_bussiness: (payload: any) =>
            ({ type: SUBTYPEOF_BUSSINESS, payload: payload }),
        Merchant_Address: (payload: any) =>
            ({ type: MERCHANT_ADDRESS, payload: payload }),
        product_name: (payload: any) =>
            ({ type: PRODUCT_NAME, payload: payload }),
        manufacturer_phone_no: (payload: any) =>
            ({ type: MANUFACTURER_PHONE_NO, payload: payload }),
        manufacturer_address: (payload: any) =>
            ({ type: MANUFACTURER_ADDRESS, payload: payload }),
        brand: (payload: any) =>
            ({ type: BRAND, payload: payload }),
        product_image: (payload: any) =>
            ({ type: PRODUCT_IMAGE, payload: payload }),
        category: (payload: any) =>
            ({ type: CATEGORY, payload: payload }),
        sub_category: (payload: any) =>
            ({ type: SUB_CATEGORY, payload: payload }),
        product_image1: (payload: any) =>
            ({ type: PRODUCT_IMAGE1, payload: payload }),
        product_image2: (payload: any) =>
            ({ type: PRODUCT_IMAGE2, payload: payload }),
        product_image3: (payload: any) =>
            ({ type: PRODUCT_IMAGE3, payload: payload }),
        product_image4: (payload: any) =>
            ({ type: PRODUCT_IMAGE4, payload: payload }),
        product_image5: (payload: any) =>
            ({ type: PRODUCT_IMAGE5, payload: payload }),
        price: (payload: any) =>
            ({ type: PRICE, payload: payload }),
        product_Specification: (payload: any) =>
            ({ type: PRODUCT_SPECIFICATION, payload: payload }),
        additionalSpecification: (payload: any) =>
            ({ type: ADDITIONALSPECIFICATION, payload: payload }),
        product_description: (payload: any) =>
            ({ type: PRODUCT_DESCRIPTION, payload: payload }),
        capacity: (payload: any) =>
            ({ type: CAPACITY, payload: payload }),
        model_no: (payload: any) =>
            ({ type: MODEL_NO, payload: payload }),

    },
};

export default editSlice;


