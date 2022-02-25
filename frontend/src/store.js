import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//object that will have all your reducers
const myReducer = combineReducers({});

const initialState = {};

//middleware variable setup for scalability (ability to add more in the future)
const middleware = [thunk];
const store = createStore(
  myReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
