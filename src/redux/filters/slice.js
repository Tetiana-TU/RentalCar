import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    price: "",
    from: "",
    to: "",
  },
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => ({
      brand: "",
      price: "",
      from: "",
      to: "",
    }),
  },
});

export const { setFilters, resetFilters } = slice.actions;
export default slice.reducer;
