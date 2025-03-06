import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
    user: userReducer,
    items: itemReducer,
});

export default rootReducer;
