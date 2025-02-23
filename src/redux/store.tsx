import { configureStore } from "@reduxjs/toolkit"; // Import configureStore
import rootReducer from "./RootReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
