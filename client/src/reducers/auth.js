import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  USER_DELTED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAILED:
    case AUTH_ERROR:
    case LOGIN_FAILED:
    case LOGOUT:
    case USER_DELTED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: null,
      };
    default:
      return state;
  }
}
