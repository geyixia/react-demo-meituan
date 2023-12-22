import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const takeStore = createSlice({
  name: "takeaway",
  initialState: {
    foodsList: [],
    activeIndex: "0",
    price: 0,
    num: 0,
    cart: [],
  },
  reducers: {
    setFoodList(store, actions) {
      store.foodsList = actions.payload;
    },
    setActiveIndex(store, actions) {
      store.activeIndex = actions.payload;
    },
    setAddPrice(store, actions) {
      store.price = store.price + actions.payload;
    },
    setDecPrice(store, actions) {
      store.price = store.price - actions.payload;
    },
    setAddnum(store, actions) {
      store.num = store.num + actions.payload;
    },
    setDecnum(store, actions) {
      store.num = store.num - actions.payload;
    },
    setCart(store, actions) {
      let list = store.cart.map((item) => {
        if (!item.count) {
          item.count = 1;
        }
        return item;
      });
      let index = list.findIndex((item) => item.id === actions.payload.id);
      // 如果找到了当前项，则增加 count 属性
      if (index !== -1) {
        list[index].count++;
      } else {
        // 如果未找到当前项，则将当前项添加到数组
        list.push(actions.payload);
      }
      store.cart = list;
    },
  },
});

const {
  setFoodList,
  setActiveIndex,
  setAddPrice,
  setDecPrice,
  setAddnum,
  setDecnum,
  setCart,
} = takeStore.actions;
// 异步函数
const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodList(res.data));
  };
};

export {
  fetchFoodList,
  setActiveIndex,
  setAddPrice,
  setDecPrice,
  setAddnum,
  setDecnum,
  setCart,
};

const takeReducer = takeStore.reducer;

export default takeReducer;
