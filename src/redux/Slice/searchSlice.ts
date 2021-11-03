import { DataTypes, axios } from "./../testData";
import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { afterFetchCars } from "./asyncCalls";

//! initial state//
const initialState: DataTypes = [];

//@ reducers//
const reducers: { [key: string]: (state: DataTypes, payload: any) => void } = {};

//% export
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers,
  extraReducers: (builder) => {
    afterFetchCars(builder);
  },
});

export const {} = searchSlice.actions;
export const selectSearch = (state: RootState) => state.searchCarsReducer;
export default searchSlice.reducer;
