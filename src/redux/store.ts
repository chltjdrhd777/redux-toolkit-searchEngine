import { configureStore } from "@reduxjs/toolkit";
import searchCarsReducer from "redux/Slice/searchSlice";

export const store = configureStore({
  reducer: {
    searchCarsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
