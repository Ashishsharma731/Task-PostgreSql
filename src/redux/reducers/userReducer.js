import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/userConstants";

const initialState = { token: localStorage.getItem("token") || null };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
            return { ...state };
        case USER_LOGIN_SUCCESS:
            return { ...state, token: action.payload.token, userId: action.payload.userId };
        case USER_LOGOUT:
            return { ...state, token: null };
        default:
            return state;
    }
};

export default userReducer;
