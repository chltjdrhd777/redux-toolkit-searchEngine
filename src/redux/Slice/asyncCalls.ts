import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios, DataTypes } from "redux/testData";

///# searchSlice////////////////////////////////
export const fetchCars = createAsyncThunk("cars", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.GET("ok");
    return response;
  } catch (err) {
    return rejectWithValue("hi it is err");
  }
});

export const afterFetchCars = (builder: ActionReducerMapBuilder<DataTypes>) => {
  builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<any>) => {
    state.push(...action.payload);
  });
  builder.addCase(fetchCars.rejected, (state, action: any) => {
    console.log(action.payload);
    state.push({ carName: "error", carCode: "en", carPrice: 11111 });
  });
};

///# ///////////////////////////////////////////
