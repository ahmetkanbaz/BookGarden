import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  books: [],
  loading: false,
  error: null
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setBooks: (state, action) => {
      state.loading = false
      state.books = action.payload
    },
    setError: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {setLoading, setBooks, setError} = booksSlice.actions

export default booksSlice.reducer