import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

export const addNewBook = async (values) => {
  try {
    const response = await axios.post(`${baseUrl}/books`, values)
    if (response.status == 200 || response.status == 201) {
      return 'The book has been added successfully.'
    }
    else {
      return 'Adding book failed. Please try again later.'
    }
  }
  catch (error) {
    return error.message
  }
}