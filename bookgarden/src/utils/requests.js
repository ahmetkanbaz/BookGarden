import axios from "axios";

import {
  setLoading,
  setBooks,
  setError,
} from "../redux/slices/books/booksSlice";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllBooks = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await axios.get(`${baseUrl}/books`);
    dispatch(setBooks(response.data))
  } catch (error) {
    dispatch(setError(error.message))
  }
};


export const getSingleBook = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/books/${id}`)
    return response.data
  }
  catch (error) {
    return error
  }
}