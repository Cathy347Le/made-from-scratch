import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './Reducers/productReducers';

//object that will have all your reducers
const myReducer = combineReducers({ productList: productListReducer });

const initialState = {};

//middleware variable setup for scalability (ability to add more in the future)
const middleware = [thunk];
const store = createStore(
  myReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
