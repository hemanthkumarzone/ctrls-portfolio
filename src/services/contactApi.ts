import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api"; // change if needed

export const submitContactForm = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/contact/`, data);
    return response.data;
  } catch (error: any) {
    console.error("Contact API Error:", error);
    throw error;
  }
};