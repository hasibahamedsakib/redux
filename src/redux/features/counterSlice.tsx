import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementX5: (state, action) => {
      state.count += action.payload;
    },
    decrementX5: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementX5, decrementX5 } =
  counterSlice.actions;

export default counterSlice.reducer;
