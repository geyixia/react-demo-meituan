import { configureStore } from "@reduxjs/toolkit";
import takeReducer from "./modules/takeaway";

const store = configureStore({
  reducer: {
    take: takeReducer,
  },
});

export default store;
