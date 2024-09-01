
import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
name:"cart",
initialState:{
    cart:[]
},
reducers:{
    addToCart(state,action){
        state.cart=[...state.cart,action.payload]
    },

    removeCart(state,action){
        const newCart=state.cart.filter((item)=>{
            console.log(item.id);
            if(item.id!==action.payload){
                return item;
            }
        })

        state.cart=newCart;
    }

}
});

export default cartSlice;
export const cartSliceAction=cartSlice.actions;

