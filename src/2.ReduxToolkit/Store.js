import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./Slice.js";

export const store = configureStore({
    reducer: {
        clickToShow: notesReducer,
    },
})