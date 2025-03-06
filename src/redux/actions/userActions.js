import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants";
import { registerUser, loginUser } from "../../api";
import {jwtDecode} from "jwt-decode";

export const register = (userData) => async (dispatch) => {
    try {
        const { data } = await registerUser(userData);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
        console.error(error.response.data);
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const { data } = await loginUser(userData);
        localStorage.setItem("token", data.token);
        const decodedToken = jwtDecode(data.token);
        const userId = decodedToken.userId;
        dispatch({ type: USER_LOGIN_SUCCESS, payload:{ token: data.token, userId } });
    } catch (error) {
        console.error(error.response.data);
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: USER_LOGOUT });
};
