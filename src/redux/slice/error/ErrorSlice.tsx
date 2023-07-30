import { createSlice } from "@reduxjs/toolkit";
import { populateError } from "src/redux/slice/error/ErrorReducer";
import { InitialErrorState } from "src/redux/slice/error/ErrorState";

const errorSlice = createSlice({
  name: "error",
  initialState: InitialErrorState,
  reducers: {
    populateError,
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
