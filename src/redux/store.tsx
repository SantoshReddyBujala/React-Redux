import { configureStore } from "@reduxjs/toolkit"; // Import configureStore
import rootReducer from "./RootReducer";

const store = configureStore({ reducer: rootReducer }); // Create the store

export default store;
