import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    //Tricky because what happens if you add an item that already exists in the cart
    case CART_ADD_ITEM:
      //For readability, set your payload to a variable (due to existItem edge case)
      const item = action.payload;
      //Check if the item exists. x.product, where product is the id
      //I changed x.product to x.productID instead - you can change the property names in cardActions
      const existItem = state.cartItems.find(
        (x) => x.productId === item.productId
      );

      if (existItem) {
        // Go through current state of cart items, check if your current item already exists,
        // and replace the old item with your new current item (quantity data will be from current new item)
        // Otherwise leave the rest of the products as they were
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId === existItem.productId ? item : x
          ),
        };
      } else {
        // Go ahead and add the item to the cart
        // Remember we don't want to make changes direct to the state using push.
        // Copy the entire state with the spread operator (productList, productDetails, cart),
        // and adjust the cartItems by creating a new array, make a copy of the state using the spread operator and add the new item in
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.productId !== action.payload
        ),
      };
    default:
      return state;
  }
};
