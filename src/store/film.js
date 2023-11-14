import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    data: [],
  },
  reducers: {
    addFilm: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addFilm } = filmSlice.actions;
export default filmSlice.reducer;
