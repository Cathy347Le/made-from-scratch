import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Constants/cartConstants';

//Need getState for localStorage. getState lets you get the entire state tree
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      priceString: data.priceString,
      countInStock: data.countInStock,
      //Comes from above
      qty,
    },
  });

  //We want to save the entire cart, which you do with getState
  //It returns a JSON object and needs to be converted to a string. LocalStorage stores data as a string.
  //If order for us to it, will need to convert it back to JSON, using JSON.parse()
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  //Know that your have localStorage, how do you access it? You do that in store.js
};
