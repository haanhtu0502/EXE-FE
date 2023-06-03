import { createSlice } from "@reduxjs/toolkit";

const innetary = createSlice({
  name: "innetary",
  initialState: {
    info: {},
    // location: "",
    // dates: [
    //   {
    //     startDate: null,
    //     endDate: null,
    //     key: "selection",
    //   },
    // ],
    // name: "",
    // number: "",
    // budget: "",
  },
  reducers: {
    addInnetary: (state, action) => {
      return { ...state, info: action.payload };
    },
  },
});

export const { addInnetary } = innetary.actions;
export default innetary.reducer;
