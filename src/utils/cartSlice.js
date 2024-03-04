import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // state and items used in the fn below are form initialState: {items: []}
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    // don't need action in this case
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //state = []; this doesn't work
      // console.log(state); // This won't let you see state object in console instead
      // console.log(current(state)) along with the import
      state.items.length = 0; // instead use this
      // return { items: [] }; // this will also work
      // RTK says either mutate the existing state or return a new state
    },
  },
});

// createSlice() returns an object:
// {
//     actions: {
//         addItem,..
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
