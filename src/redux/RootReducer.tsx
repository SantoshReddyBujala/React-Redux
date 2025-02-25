import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./icecream/IceCreamReducer";
import userReducer from "./users/UserReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
