import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const updateBook = async (id, book) => {
  try {
    const response = await axios.put(`${baseUrl}/books/${id}`, book)
    return response
  }
  catch (error) {
    return error
  }
}