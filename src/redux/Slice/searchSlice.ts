import { DataTypes, axios } from "./../testData";
import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "redux/store";

const initialState: DataTypes = [];

const reducers: { [key: string]: (state: DataTypes, payload: any) => void } = {};

//! async ///
export const fetchCars = createAsyncThunk("cars", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.GET("err");
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const afterFetchCars = (builder: ActionReducerMapBuilder<DataTypes>) => {
  builder.addCase(fetchCars.fulfilled, (state, action: PayloadAction<any>) => {
    state.push(...action.payload);
  });
  builder.addCase(fetchCars.rejected, (state, action: any) => {
    state.push({ carName: "error", carCode: "en", carPrice: 11111 });
  });
};

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
