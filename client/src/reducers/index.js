import {combineReducers} from "redux";
import Product from "reducers/addProduct"
import compareUser from "reducers/loginUser"
const myReducers = combineReducers({
    Product,
    compareUser
});
export default myReducers;