import { configureStore } from "@reduxjs/toolkit";
import innetaryReducer from "../feature/innetarySlice";

const rootReducer = {
  innetary: innetaryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
