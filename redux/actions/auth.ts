import { AxiosResponse } from 'axios';
import jwt_decode from 'jwt-decode';

import axios from '../../networkAPI/axios';
import * as actionTypes from '../constants/auth';

interface IAuthState {
    email: string;
    password: string;
}

const decodeJwt = async (token:string) => {
    try {
      const decoded = await jwt_decode(token);
      return decoded;
    } catch (err) {
      return err;
    }
  };

export const handleLoginState = (payload:IAuthState) => async (dispatch: any) => {

  try {
    dispatch({ type: actionTypes.LOGIN_STATE_REQUEST });

    await axios.post(`/api/login`, payload).then(async (res:AxiosResponse) => {
    if(res.data.success){
      dispatch({ type: actionTypes.LOGIN_STATE_SUCCESS, payload: {token:res.data.token , user: await decodeJwt(res.data.token)} });
    }else{
      dispatch({ type: actionTypes.LOGIN_STATE_FAILURE, payload: res.data.message });
    }
    })

  } catch (err) {
    dispatch({
      type: actionTypes.LOGIN_STATE_FAILURE,
      payload: "Something went wrong. Please try again after some time.",
    });
  }
};


export const handleLogout = () =>  (dispatch: any) => {
    localStorage.removeItem("businessDetails")
    localStorage.removeItem("companyProfile")
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
}



export const handleSignupState = (payload:any) => async (dispatch: any) => {

    try {
      dispatch({ type: actionTypes.SET_SIGNUP_REQUEST });
  
      await axios.post(`/api/signup`, payload).then(async (res:AxiosResponse
        ) => {
      if(res.data.success){
        dispatch({ type: actionTypes.SET_SIGNUP_SUCCESS, payload: {token:res.data.token , user: res.data.token} });
      }else{
        dispatch({ type: actionTypes.SET_SIGNUP_FAILURE, payload: res.data.message });
      }
      })
  
    } catch (err) {
      dispatch({
        type: actionTypes.SET_SIGNUP_FAILURE,
        payload: "Something went wrong. Please try again after some time.",
      });
    }
  };
