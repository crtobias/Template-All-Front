
import { configureStore } from "@reduxjs/toolkit"
import defaultReducer from "./restoSlice"

export const store = configureStore({
  reducer: defaultReducer
})