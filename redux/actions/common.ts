import * as actionTypes from "../constants/common";

export const getUserDetails = () => async (dispatch: any) => {
  try {
    dispatch({ type: actionTypes.SET_USER_DATA });
    dispatch({
      user: {
        name: "John Doe",
        email: "jhondoe@gmail.com",
        phone: "1234567890",
        type: "entrepreneur",
      },
    });
  } catch (err) {
    dispatch({
      type: actionTypes.SET_USER_DATA_FAILURE,
      payload: "Something went wrong. Please try again after some time.",
    });
  }
};
