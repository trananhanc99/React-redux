// import uniqid from "uniqid";
const initialState = {
    product : [
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}      
      ],
    addItems: [],
    total: 2
}



const addProduct = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_POST": 
            return action.data;
        default:
            return state;
    }
}

export default addProduct;