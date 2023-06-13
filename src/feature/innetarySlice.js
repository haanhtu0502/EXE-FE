import { createSlice } from "@reduxjs/toolkit";
import { fetchItenary } from "../utils/fetchLocalStorage";

const itenaryInfo = fetchItenary();

const innetary = createSlice({
  name: "innetary",
  initialState: {
    itenary: itenaryInfo,
  },
  reducers: {
    addInnetary: (state, action) => {
      state.itenary = action.payload;
    },
  },
});

export const { addInnetary } = innetary.actions;
export default innetary.reducer;
