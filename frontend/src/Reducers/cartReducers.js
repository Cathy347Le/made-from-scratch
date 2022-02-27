import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    //Tricky because what happens if you add an item that already exists in the cart
    case CART_ADD_ITEM:
      const item = action.payload;
      //Check if the item exists
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        //Honestly I don't understand this
        //If item exists, replace it with current item (quanity will be from current item)
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //Go ahead and add the item to the cart
        //Remember we don't want to make changes direct to the state using push.
        //We create a new array, make a copy of the state and add the new item in
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
