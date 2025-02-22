import { configureStore } from "@reduxjs/toolkit"; // Import configureStore
import CakeReducer from "../redux/cake/CakeReducer"; // Import your root reducer

const store = configureStore({ reducer: CakeReducer }); // Create the store

export default store;
