import {
  SET_USER_DATA,
  SET_USER_DATA_FAILURE,
  SET_USER_DATA_SUCCESS,
} from "../constants/common";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case SET_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
