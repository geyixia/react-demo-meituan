import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const takeStore = createSlice({
  name: "takeaway",
  initialState: {
    foodsList: [],
    activeIndex: "0",
  },
  reducers: {
    setFoodList(store, actions) {
      store.foodsList = actions.payload;
    },
    setActiveIndex(store, actions) {
      store.activeIndex = actions.payload;
    },
  },
});

const { setFoodList, setActiveIndex } = takeStore.actions;
// 异步函数
const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodList(res.data));
  };
};

export { fetchFoodList, setActiveIndex };

const takeReducer = takeStore.reducer;

export default takeReducer;
