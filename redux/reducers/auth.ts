import {
  LOGIN_STATE_FAILURE,
  LOGIN_STATE_REQUEST,
  LOGIN_STATE_SUCCESS,
  LOGOUT_SUCCESS,
  SET_SIGNUP_FAILURE,
  SET_SIGNUP_REQUEST,
  SET_SIGNUP_SUCCESS,
} from '../constants/auth';

interface ILoginState {
    loading: boolean;
    error: string | null;
    user: any | {};
    token: string | null;
    isAuthenticated: boolean;
}

const initialState = <ILoginState>{
    loading: false,
    error: null,
    user: {},
    token: null,
    isAuthenticated: false,
  };
  
  export const authReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case LOGIN_STATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                isAuthenticated: false,
            };
        case LOGIN_STATE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user.user,
                token: action.payload.token,
                isAuthenticated: true,
            };
        case LOGIN_STATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,   
                user: {},
                token: null,
                isAuthenticated: false,
            };
        case SET_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                isAuthenticated: false,
            };
        case SET_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
            };
        case SET_SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
                
            

        default:
            return state;

    }
  };
  