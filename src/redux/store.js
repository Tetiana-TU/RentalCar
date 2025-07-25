import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../redux/cars/slice";
import filtersReducer from "../redux/filters/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
  },
});
