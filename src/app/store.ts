import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./services/weekdaySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
