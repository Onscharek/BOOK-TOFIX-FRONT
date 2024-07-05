// import {createStore , applyMiddleware, compose }from "redux";
// import  rootReducer from "../Reducers";
// import {thunk }  from "redux-thunk";
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose 

// const store = createStore (rootReducer, composeEnhancer(applyMiddleware(thunk)))
// export default store;


import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import {thunk} from "redux-thunk";
import userReducer from "../Reducers/User";

const rootReducer = combineReducers({
  userReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;