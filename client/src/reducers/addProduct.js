// import uniqid from "uniqid";
const initialState = {
    product : [],
    addItems: [],
    total: 2
}
const addProduct = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_POST": 
            return {...state,
                product: action.data}
        case "ADD_PRODUCT":
            let addedItem = state.product.find(item=> item.id === action.id)
            // Kiểm tra xem có sản phẩm trong Data ko
            let existed_item= state.addItems.find(item=> action.id === item.id)
            // Kiểm tra trong cart xem đã có hàng chưa.
            if(existed_item)
            {
                addedItem.quantity += 1 
                addedItem.sunPro = Number(addedItem.quantity)* Number(addedItem.price)
                return{
                    ...state,
                    total: Number(state.total) + Number(addedItem.price)
                    }
            }
            else{
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = Number(state.total) + Number(addedItem.price);
                return{
                    ...state,
                    addItems: [...state.addItems, addedItem],
                    total : newTotal
                }
                
            }
        case "REMOVE_PRODUCT": 
            let itemToRemove= state.product.find(item=> action.id === item.id)
            let new_items = state.addItems.filter(item=> action.id !== item.id)
            console.log(new_items);
            // calculating the total
            let newTotal = state.total - (Number(itemToRemove.price) * itemToRemove.quantity )
            return{
                ...state,
                addItems: new_items,
                total: newTotal
            }
        case "ADD_QUANTITY":
                let addQuantitu= state.product.find(item=> item.id === action.id)
                addQuantitu.quantity += 1 
                addQuantitu.sunPro = Number(addQuantitu.price) * Number(addQuantitu.quantity);
                let newTotaled = Number(state.total) + Number(addQuantitu.price);
                return{
                    ...state,
                    total: newTotaled
                }
        case "SUB_QUANTITY":
            let subItem = state.product.find(item=> item.id === action.id)
            //if the qt == 0 then it should be removed
            if(subItem.quantity === 1){
                let new_items = state.addItems.filter(item=>item.id !== action.id)
                let newTotal = state.total - Number(subItem.price);
                return{
                    ...state,
                    addItems: new_items,
                    total: newTotal
                }
            }
            else {
                subItem.quantity -= 1;
                subItem.sunPro = Number(subItem.price) * Number(subItem.quantity);
                let newTotaled = Number(state.total) - Number(subItem.price);
                return{
                    ...state,
                    total: newTotaled
                }
            }
        default:
            return state;
    }
}

export default addProduct;