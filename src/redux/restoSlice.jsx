
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     //EJEMPLOS
//   menus: [],

}

export const defaultSlice = createSlice({
  name: "default",
  initialState,
  reducers: {

         //EJEMPLOS
    // agregarPlato: (state, action) => {
    //   const cart = current(state.cart)
    //   const id = action.payload.dish
    //   const indexOfEl = cart.findIndex((e) => e.dish === id)
    //   if (indexOfEl > -1) {
    //     state.cart[indexOfEl] = {
    //       ...cart[indexOfEl],
    //       quantity: cart[indexOfEl].quantity + 1,
    //     }
    //     window.localStorage.setItem("cart", JSON.stringify(state.cart))
    //     return
    //   }
    //   state.cart.push(action.payload)
    //   window.localStorage.setItem("cart", JSON.stringify(state.cart))
    // },

    // removeDish: (state, action) => {
    //   const cart = current(state.cart)
    //   const id = action.payload.dish
    //   const indexOfEl = cart.findIndex((e) => e.dish === id)
    //   if (indexOfEl > -1) {
    //     if (cart[indexOfEl].quantity > 1)
    //       state.cart[indexOfEl] = {
    //         ...cart[indexOfEl],
    //         quantity: cart[indexOfEl].quantity - 1,
    //       }
    //     else
    //       state.cart = cart.filter((dish) => dish.dish !== action.payload.dish)

    //     window.localStorage.setItem("cart", JSON.stringify(state.cart))
    //     return
    //   }
    // },


  },

  extraReducers: (builder) => {

 //EJEMPLOS
    // builder.addCase(fetchMenus.fulfilled, (state, action) => {
    //   state.menus = action.payload
    // })
    
  },
})

export const {
     //EJEMPLOS
//   agregarPlato,
 
} = defaultSlice.actions

export default defaultSlice.reducer