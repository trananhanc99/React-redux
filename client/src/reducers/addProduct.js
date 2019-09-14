
const initialState = {
    product : [],
    addItems: [],
    total: 2,
}
const addProduct = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_POST":
            return {
                ...state, 
                product: action.data
            }
        case "ADD_PRODUCT":
            const addedItem = state.product.find(item=> item._id === action.id)
            const existed_item= state.addItems.find(item=> action.id === item._id)
            if(existed_item)
            {
                addedItem.quantity += 1 
                addedItem.sunPro = Number(addedItem.quantity)* Number(addedItem.princeProduct)
                return{
                    ...state,
                    total: Number(state.total) + Number(addedItem.princeProduct)
                    }
            }
            else{
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = Number(state.total) + Number(addedItem.princeProduct);
                return{
                    ...state,
                    addItems: [...state.addItems, addedItem],
                    total : newTotal
                }
                
            }
        case "REMOVE_PRODUCT": 
            let itemToRemove= state.product.find(item=> action.id === item._id)
            let new_items = state.addItems.filter(item=> action.id !== item._id)
            console.log(new_items);
            // calculating the total
            let newTotal = state.total - (Number(itemToRemove.princeProduct) * itemToRemove.quantity )
            return{
                ...state,
                addItems: new_items,
                total: newTotal
            }
        case "ADD_QUANTITY":
                let addQuantitu= state.product.find(item=> item._id === action.id)
                addQuantitu.quantity += 1 
                addQuantitu.sunPro = Number(addQuantitu.princeProduct) * Number(addQuantitu.quantity);
                let newTotaled = Number(state.total) + Number(addQuantitu.princeProduct);
                return{
                    ...state,
                    total: newTotaled
                }
        case "SUB_QUANTITY":
            let subItem = state.product.find(item=> item._id === action.id)
            //if the qt == 0 then it should be removed
            if(subItem.quantity === 1){
                let new_items = state.addItems.filter(item=>item._id !== action.id)
                let newTotal = state.total - Number(subItem.princeProduct);
                return{
                    ...state,
                    addItems: new_items,
                    total: newTotal
                }
            }
            else {
                subItem.quantity -= 1;
                subItem.sunPro = Number(subItem.princeProduct) * Number(subItem.quantity);
                let newTotaled = Number(state.total) - Number(subItem.princeProduct);
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