import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const now = new Date();
const today = now.getDay();

export interface CounterState {
  value: number;
  weekday: string;
}

const initialState: CounterState = {
  value: today,
  weekday: "월",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    changeWeekday: (state, action: PayloadAction<string>) => {
      state.weekday = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount, changeWeekday } = counterSlice.actions;

export default counterSlice.reducer;
