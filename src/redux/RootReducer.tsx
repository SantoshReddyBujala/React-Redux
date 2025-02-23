import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./icecream/IceCreamReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer,
});

export default rootReducer;
