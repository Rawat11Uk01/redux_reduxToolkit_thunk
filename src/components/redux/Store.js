import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import { ProductReducer } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(ProductReducer,composeEnhancers(applyMiddleware(thunk)));
export default Store;