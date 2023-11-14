import { createSlice } from "@reduxjs/toolkit";

export const residentSlice = createSlice({
  name: "resident",
  initialState: {
    data: [],
  },
  reducers: {
    addResident: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addResident } = residentSlice.actions;
export default residentSlice.reducer;
