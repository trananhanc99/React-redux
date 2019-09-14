import * as type from "constants/index.js";
const axios = require('axios');

    //Api
const ApiShowData = 'http://localhost:8090/showdata'

export const addProduct = (id) => {
    return {
        type: type.ADD_PRODUCT,
        id 
    }
}
// Remove
export const removeProduct = (id) => {
    return {
        type: type.REMOVE_PRODUCT,
        id 
    }
}
// Add quantity
export const addQuantityProduct = (id) => {
    return {
        type: type.ADD_QUANTITY,
        id 
    }
}
export const subQuantityProduct = (id) => {
    return {
        type: type.SUB_QUANTITY,
        id 
    }
}


export const fetchPosts = (data) => {
    return {
      type: type.FETCH_POST,
      data
    }
  };

export const fetchAllPosts = () => {
    return (dispatch) => {
      return axios.get(ApiShowData)
        .then(response => {
          dispatch(fetchPosts(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};


export const compareData = (user, pass) => {
    return {
        type: type.COMPARE_DATA,
        user,
        pass
    }
}