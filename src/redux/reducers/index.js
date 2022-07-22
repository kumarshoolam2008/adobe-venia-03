import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  // cartProduct: selectedCartReduer 
});
export default reducers;
