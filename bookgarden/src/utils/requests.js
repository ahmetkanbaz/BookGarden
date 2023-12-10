import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${baseUrl}/books`);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
