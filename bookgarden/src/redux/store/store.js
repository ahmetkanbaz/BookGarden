import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/theme/themeSlice";
import booksReducer from "../slices/books/booksSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    books: booksReducer
  }
})

export default store