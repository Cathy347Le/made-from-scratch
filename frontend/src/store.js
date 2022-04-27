import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productListReducer,
	productDetailsReducer,
} from './Reducers/productReducers';
import { cartReducer } from './Reducers/cartReducers';
import {
	userLoginReducer,
	// userRegisterReducer,
	// userDetailsReducer,
	// userUpdateProfileReducer,
	// userListReducer,
	// userDeleteReducer,
	// userUpdateReducer,
} from './Reducers/userReducers';

//object that will have all your reducers
const myReducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
	userLogin: { userInfo: userInfoFromStorage },
};

//middleware variable setup for scalability (ability to add more in the future)
const middleware = [thunk];
const store = createStore(
	myReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
